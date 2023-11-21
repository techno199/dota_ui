import React from 'react';
import DotaSidebar from "@/app/main-menu/dota/ui/dota_sidebar";
import MainMenuMotion from "src/app/main-menu/ui/main-menu_motion";

export type PageProps = {}

const Page = (props: PageProps) => {
  return (
    <div className={'flex '}>
      <MainMenuMotion
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className={'grow'}
      >
        Content
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