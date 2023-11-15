'use client'
import React from 'react';
import {motion} from "framer-motion";

export type MainMenuFooterProps = {}

const MainMenuFooter = (props: MainMenuFooterProps) => {
  return (
    <motion.div
      initial={{y: 10, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{type: 'tween', duration: .5}}
      className={'px-16 py-6'}
    >
      Footer
    </motion.div>
  );
};

export default MainMenuFooter;