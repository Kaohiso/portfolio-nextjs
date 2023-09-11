import { FC, useState, useEffect } from "react";
import { motion, Variants, HTMLMotionProps, useCycle } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  verbs: string[];
  delay?: number;
  duration?: number;
}

const WavyText: FC<Props> = ({
  verbs,
  delay = 0,
  duration = 0.05,
  ...props
}: Props) => {
  const [replay, toggleReplay] = useCycle(false, true);
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const letters = Array.from(verbs[currentVerbIndex]);

  useEffect(() => {
    const dakay = setTimeout(() => {
        toggleReplay();
      }, 3000);
    

    const delayVerbIndex = setTimeout(() => {
      setCurrentVerbIndex(
        (prevIndex) => (prevIndex + 1) % verbs.length // Pass to the next verb, and wrap around if necessary
      );
    }, 4000);
    toggleReplay();
    return () => clearTimeout(delayVerbIndex);
  }, [currentVerbIndex]);

  const container: Variants = {
    hidden: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: i * delay,
        staggerDirection: -1,
      },
    }),
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: i * delay,
        staggerDirection: 1,
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 1,
      y: 30,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;

/*
import { FC, useState, useEffect } from "react";
import { motion, Variants, HTMLMotionProps, useCycle } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  ...props
}: Props) => {
  const [replay, toggleReplay] = useCycle(false, true);
  const letters = Array.from(text);

  useEffect(() => {
    toggleReplay(); // Trigger replay when the text changes
    const delayTimeout = setTimeout(() => {
      toggleReplay();
    }, 3000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(delayTimeout);
  }, [text]);

  const container: Variants = {
    hidden: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: i * delay,
        staggerDirection: -1,
      },
    }),
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: i * delay,
        staggerDirection: 1,
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;


*/
