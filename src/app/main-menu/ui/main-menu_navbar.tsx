'use client'
import React from 'react';
import MainMenuNavbarButton from "@/app/main-menu/ui/main-menu_navbar-button";
import {motion} from "framer-motion";

export type MainMenuNavbarProps = {}

const MainMenuNavbar = (props: MainMenuNavbarProps) => {
  return (
    <motion.div
      initial={{y: -10, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{type: 'tween', duration: .5}}
      className={'flex px-12'}
    >
      <MainMenuNavbarButton>
        Heroes
      </MainMenuNavbarButton>
      <MainMenuNavbarButton>
        Armory
      </MainMenuNavbarButton>
      <MainMenuNavbarButton>
        Watch
      </MainMenuNavbarButton>
      <MainMenuNavbarButton>
        Learn
      </MainMenuNavbarButton>
      <MainMenuNavbarButton>
        Arcade
      </MainMenuNavbarButton>
    </motion.div>
  );
};

export default MainMenuNavbar;