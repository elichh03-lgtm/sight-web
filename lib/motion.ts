export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutQuint = [0.22, 1, 0.36, 1] as const;

export const reveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: easeOutExpo } },
};

export const revealSmall = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: easeOutExpo } },
};

export const revealDisplay = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 2.0, ease: easeOutExpo } },
};

export const revealHero = {
  hidden: { opacity: 0, y: 120 },
  visible: { opacity: 1, y: 0, transition: { duration: 3.0, delay: 0.2, ease: easeOutExpo } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
