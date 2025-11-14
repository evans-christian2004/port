"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SideNav from "./SideNav";

const TopNav = () => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
      setOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showFullNav = !scrolled && screenWidth > 640;
  

  // Close the side nav when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          paddingTop: scrolled ? 12 : 12,
          paddingBottom: scrolled ? 12 : 12, 
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="container mx-auto flex items-center justify-between sticky top-0 z-20 px-4"
      >
        <Link href="/">
          <Image
            priority
            className="logo-shake"
            src="/icons/Logo.svg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>

        <motion.div
          initial={false}
          animate={{
            paddingLeft: showFullNav ? 16 : 20,
            paddingRight: showFullNav ? 40 : 20,
            paddingTop: showFullNav ? 16 : 16,
            paddingBottom: showFullNav ? 16 : 16,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-20 flex items-center rounded-full bg-secondary-500"
        >
          <AnimatePresence mode="wait" initial={false}>
            {showFullNav ? (
              <motion.div
                key="full-nav"
                initial={{ opacity: 0,}}
                animate={{ opacity: 1,}}
                exit={{ opacity: 0,}}
                transition={{ duration: 0.15, ease: "easeIn" }}
                className="flex items-center gap-5"
              >
                <div className="flex gap-2">
                  <Link
                    className="bg-primary-500 hover:bg-white transition-all ease-in-out duration-300 rounded-full p-2"
                    href="https://github.com/evans-christian2004"
                  >
                    <Image
                      src="/icons/github-dark.svg"
                      width={25}
                      height={25}
                      alt="github"
                    />
                  </Link>
                  <Link
                    className="bg-primary-500 hover:bg-white transition-all ease-in-out duration-300 rounded-full p-2"
                    href="https://www.linkedin.com/in/evanschristian/"
                  >
                    <Image
                      src="/icons/linkedin-dark.svg"
                      width={25}
                      height={25}
                      alt="linkedin"
                    />
                  </Link>
                  <Link
                    className="bg-primary-500 hover:bg-white transition-all ease-in-out duration-300 rounded-full p-2"
                    href="/CSResume.pdf"
                  >
                    <Image
                      src="/icons/resume-dark.svg"
                      width={25}
                      height={35}
                      alt="resume"
                    />
                  </Link>
                </div>
                <Link
                  href="/experience"
                  className={`hover:bg-foreground hover:text-background hover:px-3.5 py-1 rounded-full transition-all duration-300 ${
                    pathname === "/experience"
                      ? "bg-foreground text-background hover:px-3 px-2"
                      : ""
                  }`}
                >
                  Experience
                </Link>
                <Link
                  href="/projects"
                  className={`hover:bg-foreground hover:text-background hover:px-3.5 py-1 rounded-full transition-all duration-300 ${
                    pathname === "/projects"
                      ? "bg-foreground text-background hover:px-3 px-2"
                      : ""
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="/skills"
                  className={`hover:bg-foreground hover:text-background hover:px-3.5 py-1 rounded-full transition-all duration-300 ${
                    pathname === "/skills"
                      ? "bg-foreground text-background hover:px-3 px-2"
                      : ""
                  }`}
                >
                  Skills
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="hamburger"
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0,}}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="flex sm:h-10 h-6 items-center justify-end"
              >
                <motion.button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  whileTap={{ scale: 0.92 }}
                  className="relative flex sm:h-10 h-8 sm:w-10 w-8 flex-col items-center justify-center rounded-full gap-1.5"
                  aria-label={open ? "Close navigation" : "Open navigation"}
                  aria-expanded={open}
                >
                  <span
                    className={`block h-1 w-full origin-center rounded-full bg-foreground transition-transform duration-200 ease-in-out ${
                      open ? "translate-y-[12px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-1 w-full origin-center rounded-full bg-foreground transition-all duration-200 ease-in-out ${
                      open ? "scale-x-0 opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-1 w-full origin-center rounded-full bg-foreground transition-transform duration-200 ease-in-out ${
                      open ? "-translate-y-[8px] -rotate-45" : ""
                    }`}
                  />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
      <SideNav isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default TopNav;
