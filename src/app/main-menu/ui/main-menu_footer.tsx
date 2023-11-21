'use client'
import React from 'react';
import {motion} from "framer-motion";
import MainMenuMotion from "@/app/main-menu/ui/main-menu_motion";

export type MainMenuFooterProps = {}

const MainMenuFooter = (props: MainMenuFooterProps) => {
  return (
    <MainMenuMotion
      initial={{y: 15, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      className={'px-16 py-6'}
    >
      Footer
    </MainMenuMotion>
  );
};

export default MainMenuFooter;