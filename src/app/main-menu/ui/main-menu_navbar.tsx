'use client'
import React from 'react';
import MainMenuNavbarButton from "@/app/main-menu/ui/main-menu_navbar-button";
import {motion} from "framer-motion";
import MainMenuMotion from "@/app/main-menu/ui/main-menu_motion";

export type MainMenuNavbarProps = {}

const MainMenuNavbar = (props: MainMenuNavbarProps) => {
  return (
    <MainMenuMotion
      initial={{y: -15, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      className={'flex px-12 bg-col-grey'}
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
    </MainMenuMotion>
  );
};

export default MainMenuNavbar;