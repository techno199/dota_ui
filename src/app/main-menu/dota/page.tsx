'use client'
import React, {useEffect} from 'react';
import DotaSidebar from "@/app/main-menu/dota/_ui/dota_sidebar";
import MainMenuMotion from "@/app/main-menu/_ui/main-menu_motion";
import {mediaCenter} from "@/./models/MediaCenter/MediaCenter";
import {Loop} from "@/./models/Loop/Loop";
import {AppConfig} from "@/../app.config";

export type PageProps = {}

const Page = (props: PageProps) => {


  return (
    <div className={'flex '}>
      <MainMenuMotion
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className={'grow'}
      >

      </MainMenuMotion>

      <MainMenuMotion
        initial={{x: 15, opacity: 0}}
        animate={{x: 0, opacity: 1}}
      >
        <DotaSidebar />
      </MainMenuMotion>
    </div>
  );
};

export default Page;