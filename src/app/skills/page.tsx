import type { Metadata } from "next";
import React from 'react'
import SkillsSection from '../components/sections/SkillsSection'

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills for Christian Evans including Next.js, TypeScript, Tailwind CSS, cloud tooling, and support technologies used in production work.",
  alternates: { canonical: "/skills" },
  openGraph: {
    url: "/skills",
    title: "Skills | Christian Evans",
    description:
      "The technologies and tools Christian Evans uses across web development, automation, and IT support.",
  },
  twitter: {
    card: "summary",
    title: "Skills | Christian Evans",
    description:
      "The technologies and tools Christian Evans uses across web development, automation, and IT support.",
  },
};

const page = () => {
  return (
    <div>
        <SkillsSection/>
    </div>
  )
}

export default page
