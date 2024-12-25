"use client";
import React from "react";
import { MotionConfig, motion } from "motion/react";

// export const Example = () => {
//   const [active, setActive] = useState<boolean>(false);
//   return (
//     <div className="grid h-screen place-content-center bg-gradient-to-br from-violet-500 to-indigo-500">
//       <AnimatedHamburgerButton active={active} setActive={setActive} />
//     </div>
//   );
// };

export const AnimatedHamburgerButton = ({ active, setActive }: { active: boolean; setActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
  // const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}>
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-16 w-16 rounded-full bg-primary/0 transition-colors hover:bg-primary/20">
        <motion.span variants={VARIANTS.top} className="absolute h-1 w-8 bg-primary" style={{ y: "-50%", left: "53%", x: "-50%", top: "35%" }} />
        <motion.span variants={VARIANTS.middle} className="absolute h-1 w-8 bg-primary" style={{ left: "53%", x: "-50%", top: "50%", y: "-50%" }} />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-primary"
          style={{
            x: "-60%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "55%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
