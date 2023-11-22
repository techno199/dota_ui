'use client'
import React from 'react';
import MainMenuNavbarButton from "@/app/main-menu/_ui/main-menu_navbar-button";
import MainMenuMotion from "@/app/main-menu/_ui/main-menu_motion";
import MainMenuLogo from '@/app/main-menu/_ui/main-manu_logo';
import Cog from '/public/icons/cog.svg';
import Arrow from '/public/icons/arrow.svg';
import {useRouter} from "next/navigation";
import {Loop} from "@/models/Loop/Loop";
import {observer} from "mobx-react";
import {appState} from "@/app/root.store";

export type MainMenuNavbarProps = {}

const MainMenuNavbar = observer((props: MainMenuNavbarProps) => {
  const router = useRouter();

  const handleSettingsClick = () => {
    new Loop('settings', [{sourcePath: '/sounds/dota_medium_click.mp3'}]);
    appState.settingsOpened = true;
  }

  return (
    <MainMenuMotion
      initial={{y: -15, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      className={'flex items-center gap-8 px-12 bg-col-grey-darker text-col-grey'}
    >
      {/* Settings & arrows */}
      <div className={'flex gap-6'}>
        <Cog
          className={'hover:text-col-grey-lighter cursor-pointer'}
          onClick={handleSettingsClick}
        />

        <div className={'w-0.5 grow bg-col-grey'} />

        <div className={'flex'}>
          <Arrow
            className={'w-10 h-10 rotate-180 cursor-pointer hover:text-col-grey-lighter'}
            onClick={() => router.back()}
          />
          <Arrow
            className={'w-10 h-10 cursor-pointer hover:text-col-grey-lighter'}
            onClick={() => router.forward()}
          />
        </div>
      </div>

      <MainMenuLogo />

      <div className={'flex font-medium'}>
        <MainMenuNavbarButton href={'/main-menu/heroes'}>
          Heroes
        </MainMenuNavbarButton>
        <MainMenuNavbarButton href={'/main-menu/armory'}>
          Armory
        </MainMenuNavbarButton>
        <MainMenuNavbarButton href={'/main-menu/watch'}>
          Watch
        </MainMenuNavbarButton>
        <MainMenuNavbarButton href={'/main-menu/learn'}>
          Learn
        </MainMenuNavbarButton>
        <MainMenuNavbarButton href={'/main-menu/arcade'}>
          Arcade
        </MainMenuNavbarButton>
      </div>
    </MainMenuMotion>
  );
});

export default MainMenuNavbar;