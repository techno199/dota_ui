import classes from './main-menu_logo.module.scss';
import React from 'react';
import Logo from "public/dota.svg";
import clsx from "clsx";

export type MainManuLogoProps = {}

const MainManuLogo = (props: MainManuLogoProps) => {
  return (
    <div className={'relative'}>
      <Logo
        className={'w-20 text-dota'}
      />
      <div className={'absolute top-1/2 left-1/2 rounded-full shadow-[-1px_0px_77px_90px_rgba(219,117,21,0.2)]'} />

      {/* Bubbles */}
      <div className={clsx(classes.bubble, classes.anim1)} />
      <div className={clsx(classes.bubble, classes.anim2)} />
      <div className={clsx(classes.bubble, classes.anim3)} />
      <div className={clsx(classes.bubble, classes.anim4)} />
      <div className={clsx(classes.bubble, classes.anim5)} />
      <div className={clsx(classes.bubble, classes.anim6)} />
      <div className={clsx(classes.bubble, classes.anim7)} />
      <div className={clsx(classes.bubble, classes.anim8)} />
      <div className={clsx(classes.bubble, classes.anim9)} />
      <div className={clsx(classes.bubble, classes.anim10)} />
    </div>
  );
};

export default MainManuLogo;