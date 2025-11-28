"use client"
import React from 'react'

type ControllerButtonProps = {
  label?: string
  color: string
  size?: number
  className?: string
  style?: React.CSSProperties
}

const ControllerButton: React.FC<ControllerButtonProps> = ({
  label,
  color,
  size = 44,
  className = '',
  style = {},
}) => {
  return (
    <button
      type="button"
      aria-label={label ? `${label} button` : 'Controller button'}
      className={`rounded-full text-xs font-semibold uppercase text-black/40 transition-transform duration-100 active:scale-95 ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        ...style,
      }}
    >
      {label}
    </button>
  )
}

type JoystickProps = {
  size?: number
  accent?: string
  trackColor?: string
  knobColor?: string
  className?: string
}

type DPadProps = {
  size?: number
  color?: string
  centerColor?: string
  className?: string
}

const DPad: React.FC<DPadProps> = ({
  size = 48,
  color = '#d6d9f1',
  centerColor = '#f4f5ff',
  className = '',
}) => {
  const thickness = size * 0.35
  const center = size * 0.32

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        className="absolute rounded-sm"
        style={{ width: thickness, height: size, background: color }}
      />
      <div
        className="absolute rounded-sm"
        style={{ width: size, height: thickness, background: color }}
      />
      <div
        className="absolute rounded-sm"
        style={{ width: center, height: center, background: centerColor }}
      />
    </div>
  )
}

const Joystick: React.FC<JoystickProps> = ({
  size = 88,
  accent = '#a5b4fc',
  trackColor = 'rgba(255,255,255,0.08)',
  knobColor = '#f8fafc',
  className = '',
}) => {
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const pointerRef = React.useRef<number | null>(null)
  const knobSize = Math.round(size * 0.55)
  const maxOffset = (size - knobSize) / 2
  const [, forceRerender] = React.useReducer((x) => x + 1, 0)
  const offsetRef = React.useRef({ x: 0, y: 0 })

  const updatePosition = React.useCallback(
    (clientX: number, clientY: number) => {
      const track = trackRef.current
      if (!track) return
      const rect = track.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = clientX - centerX
      const dy = clientY - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > maxOffset) {
        const angle = Math.atan2(dy, dx)
        offsetRef.current = {
          x: Math.cos(angle) * maxOffset,
          y: Math.sin(angle) * maxOffset,
        }
      } else {
        offsetRef.current = { x: dx, y: dy }
      }
      forceRerender()
    },
    [maxOffset]
  )

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerRef.current = event.pointerId
    trackRef.current?.setPointerCapture?.(event.pointerId)
    updatePosition(event.clientX, event.clientY)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerRef.current === null) return
    updatePosition(event.clientX, event.clientY)
  }

  const resetStick = () => {
    if (pointerRef.current !== null) {
      trackRef.current?.releasePointerCapture?.(pointerRef.current)
      pointerRef.current = null
    }
    offsetRef.current = { x: 0, y: 0 }
    forceRerender()
  }

  return (
    <div
      ref={trackRef}
      className={`relative rounded-full border border-white/15 bg-black/40 touch-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ width: size, height: size, background: trackColor }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={resetStick}
      onPointerCancel={resetStick}
      onPointerLeave={(event) => {
        if (event.buttons === 0) resetStick()
      }}
    >
      <div
        className="absolute inset-1 rounded-full opacity-40"
        style={{
          background: accent,
        }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div
          className="rounded-full border border-white/30 transition-transform duration-75"
          style={{
            width: knobSize,
            height: knobSize,
            background: knobColor,
            transform: `translate(${offsetRef.current.x}px, ${offsetRef.current.y}px)`,
          }}
        />
      </div>
    </div>
  )
}

const GameCubeController = () => {
  return (
    <div className="w-[200px] rounded-3xl border border-white/10 bg-[#2f2a63] p-3 text-[0.6rem] text-white/80">
      <div className="flex items-center justify-between">
        <p className="text-white/50">GameCube</p>
      </div>
      <div className="flex justify-around w-full">
            <button
              type="button"
              aria-label="Start button"
              className="h-3 w-3 rounded-full bg-[#c7c9d1] relative top-4"
            />
      </div>
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col items-center gap-1.5">
          <Joystick
            size={56}
            accent="#79c8ff"
            knobColor="#f8fafc"
            trackColor="rgba(121,200,255,0.2)"
          />
          <DPad
            className="mt-3 ml-5"
            size={44}
            color="#d5d9ff"
            centerColor="#eef0ff"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="relative h-20 w-20">
            <ControllerButton
              label="A"
              color="#2fc194"
              size={40}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <ControllerButton
              label="B"
              color="#e15454"
              size={24}
              className="absolute left-2.5 bottom-3"
            />
            <ControllerButton
              label="X"
              color="#c7ccff"
              size={22}
              className="absolute right-5 top-1"
            />
            <ControllerButton
              label="Y"
              color="#c7ccff"
              size={24}
              className="absolute right-1 top-1/2 -translate-y-1/2"
            />
          </div>
          <Joystick
            size={42}
            accent="#f1c232"
            knobColor="#fff1bf"
            trackColor="rgba(241,194,50,0.25)"
            className='mr-1'
          />
        </div>
      </div>
    </div>
  )
}

const FightStickController = () => {
  const buttonColors = [
    '#f97070',
    '#f25e74',
    '#f78ca4',
    '#f6a45f',
    '#f4c04c',
    '#ecc72a',
  ]

  const labels = ['LP', 'MP', 'HP', 'LK', 'MK', 'HK']

  return (
    <div className="max-w-[240px] rounded-3xl border border-white/10 bg-[#0d1527] p-3 text-[0.6rem] text-white/80">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-white/50">FightStick</p>
      </div>
        <div className="flex gap-1.5 w-full justify-center pb-3">
          <button
            type="button"
            className="rounded-full bg-white/10 w-3 h-3 transition active:scale-95"
          >
          </button>
          <button
            type="button"
            className="rounded-full bg-white/10 w-3 h-3 transition active:scale-95"
          >
          </button>
        </div>
      <div className="flex gap-3">
        <div className="flex justify-center items-center md:w-1/3">
          <Joystick
            size={58}
            accent="#f97070"
            knobColor="#fde0e0"
            trackColor="rgba(249,112,112,0.2)"
          />
        </div>
        <div className="grid grow grid-cols-3 gap-1.5">
          {labels.map((label, index) => (
            <ControllerButton
              key={label}
              color={buttonColors[index]}
              size={34}
              className="text-[0.5rem]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Controllers = () => {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-4 text-white">
      <h2 className='text-3xl font-semibold text-center'>I love fighting games</h2>
      <div className="flex sm:flex-row flex-col items-center justify-around gap-3">
        <GameCubeController />
        <FightStickController />
      </div>
    </div>
  )
}

export default Controllers
