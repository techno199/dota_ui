'use client'
import React from 'react';
import {motion} from "framer-motion";

export type MainMenuSidebarProps = {}

const DotaSidebar = (props: MainMenuSidebarProps) => {
  return (
    <motion.div
      initial={{x: 10, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{type: 'tween', duration: .5}}
      className={'px-16 py-4'}
    >
      Sidebar
    </motion.div>
  );
};

export default DotaSidebar;