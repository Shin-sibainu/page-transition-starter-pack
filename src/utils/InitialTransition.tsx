import React from "react";
import { motion } from "framer-motion";

/* https://jfelix.info/blog/page-transitions-in-react */

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = ({ children }: any) => {
  return (
    <div className="absolute flex items-center justify-center">
      <motion.div
        className="relative w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        // onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        // onAnimationComplete={() =>
        //   document.body.classList.remove("overflow-hidden")
        // }
      />
      {children}
    </div>
  );
};

export default InitialTransition;
