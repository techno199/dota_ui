'use client'
import React from 'react';
import MainMenuNavbarButton from "@/app/main-menu/ui/main-menu_navbar-button";
import {motion} from "framer-motion";
import MainMenuMotion from "@/app/main-menu/ui/main-menu_motion";
import Logo from '/public/dota.svg';
import Cog from '/public/icons/cog.svg';
import Arrow from '/public/icons/arrow.svg';

export type MainMenuNavbarProps = {}

const MainMenuNavbar = (props: MainMenuNavbarProps) => {
  return (
    <MainMenuMotion
      initial={{y: -15, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      className={'flex items-center gap-8 px-12 bg-col-grey-dark text-col-grey'}
    >
      {/* Settings & arrows */}
      <div className={'flex gap-6'}>
        <Cog />

        <div className={'w-0.5 grow bg-col-grey'} />

        <div className={'flex'}>
          <Arrow className={'rotate-180'} />
          <Arrow />
        </div>
      </div>

      <div className={'relative'}>
        <Logo
          className={'scale-[1.6] text-dota'}
        />

        <div className={'absolute top-1/2 left-1/2 rounded-full shadow-[-1px_0px_77px_90px_rgba(219,117,21,0.2)]'} />
      </div>

      <div className={'flex font-medium'}>
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
      </div>
    </MainMenuMotion>
  );
};

export default MainMenuNavbar;