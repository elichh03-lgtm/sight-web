"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { reveal, revealSmall, revealDisplay, revealHero, stagger } from "@/lib/motion";

type Kind = "small" | "default" | "display" | "hero" | "stagger";

const map: Record<Kind, Variants> = {
  small: revealSmall,
  default: reveal,
  display: revealDisplay,
  hero: revealHero,
  stagger,
};

type Props = {
  kind?: Kind;
  as?: any;
  amount?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
  /** If true, do not trigger on own viewport — inherit from a parent variants scope. */
  child?: boolean;
};

export function Reveal({
  kind = "default",
  as: As = "div",
  amount = 0.2,
  once = true,
  className,
  children,
  child = false,
}: Props) {
  const reduced = useReducedMotion();
  if (reduced) {
    const Plain: any = As;
    return <Plain className={className}>{children}</Plain>;
  }
  const MotionAs = motion(As);

  if (child) {
    return (
      <MotionAs className={className} variants={map[kind]}>
        {children}
      </MotionAs>
    );
  }

  return (
    <MotionAs
      className={className}
      variants={map[kind]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </MotionAs>
  );
}
