'use client'
import React, {ReactNode, useEffect} from 'react';
import DotaSidebar from "@/app/main-menu/dota/ui/dota_sidebar";
import MainMenuNavbar from "@/app/main-menu/ui/main-menu_navbar";
import MainMenuFooter from "@/app/main-menu/ui/main-menu_footer";
import clsx from "clsx";
import Image from "next/image";
import MainMenuBackgroundCarousel from "@/app/main-menu/ui/main-menu_background-carousel";
import {mediaCenter} from "@/models/MediaCenter/MediaCenter";
import {Loop} from "@/models/Loop/Loop";
import {AppConfig} from "@/../app.config";

export type LayoutProps = {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  useEffect(() => {
    mediaCenter.addLoop(
      new Loop('bg', AppConfig.mainMenuMusic)
    )
  }, [])

  return (
    <div>
      <MainMenuBackgroundCarousel />

      <div className={'flex flex-col grow w-full overflow-hidden absolute inset-0'}>
        <MainMenuNavbar />
        <div className={'flex flex-col grow overflow-hidden'}>
          {props.children}
        </div>
        <MainMenuFooter />
      </div>
    </div>
  );
};

export default Layout;