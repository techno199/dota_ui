import React, {ReactNode} from 'react';
import DotaSidebar from "@/app/main-menu/dota/ui/dota_sidebar";
import MainMenuNavbar from "@/app/main-menu/ui/main-menu_navbar";
import MainMenuFooter from "@/app/main-menu/ui/main-menu_footer";

export type LayoutProps = {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={'flex flex-col grow w-full overflow-hidden'}>
      <MainMenuNavbar />
      <div className={'flex flex-col grow overflow-hidden'}>
        {props.children}
      </div>
      <MainMenuFooter />
    </div>
  );
};

export default Layout;