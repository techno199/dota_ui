'use client'
import React, {ReactNode, useEffect} from 'react';
import MainMenuNavbar from "@/app/main-menu/_ui/main-menu_navbar";
import MainMenuFooter from "@/app/main-menu/_ui/main-menu_footer";
import MainMenuBackgroundCarousel from "@/app/main-menu/_ui/main-menu_background-carousel";
import {mediaCenter} from "@/models/MediaCenter/MediaCenter";
import {Loop} from "@/models/Loop/Loop";
import {AppConfig} from "@/../app.config";
import SettingsDialog from "@/app/main-menu/_ui/settings-dialog/settings-dialog";
import {appState} from "@/app/root.store";
import {observer} from "mobx-react";

export type LayoutProps = {
  children: ReactNode;
}

const Layout = observer((props: LayoutProps) => {
  useEffect(() => {
    mediaCenter.addLoop(
      new Loop('bg', AppConfig.mainMenuMusic)
    )
  }, [])

  return (
    <div>
      <MainMenuBackgroundCarousel/>

      <div className={'flex flex-col grow w-full overflow-hidden absolute inset-0'}>
        <MainMenuNavbar/>
        <div className={'flex flex-col grow overflow-hidden'}>
          {props.children}
        </div>
        <MainMenuFooter/>
      </div>

      {/* Settings Dialog */}
      <SettingsDialog
        open={appState.settingsOpened}
        onClose={() => appState.settingsOpened = false}
      />
    </div>
  );
});

export default Layout;