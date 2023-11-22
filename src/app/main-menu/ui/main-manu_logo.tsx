import classes from './main-menu_logo.module.scss';
import React from 'react';
import Logo from "public/dota.svg";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";

export type MainManuLogoProps = {}

const MainManuLogo = (props: MainManuLogoProps) => {
  const pathname = usePathname();
  const active = pathname.includes('/main-menu/dota');

  return (
    <Link className={'group relative'} href={'/main-menu/dota'}>
      <Logo
        className={'w-20 text-dota'}
      />
      <div className={clsx(
        'absolute top-1/2 left-1/2 rounded-full duration-300 group-hover:shadow-[-1px_0px_20px_40px_rgba(219,117,21,0.2)]', {
          ['!shadow-[-1px_0px_77px_90px_rgba(219,117,21,0.2)]']: active
        }
      )} />

      <AnimatePresence>
        {active && (
          <>
            {/* Infinite Bubbles */}
            <M key={1}><div className={clsx(classes.bubble, classes.anim1)} /></M>
            <M key={2}><div className={clsx(classes.bubble, classes.anim2)} /></M>
            <M key={3}><div className={clsx(classes.bubble, classes.anim3)} /></M>
            <M key={4}><div className={clsx(classes.bubble, classes.anim4)} /></M>
            <M key={5}><div className={clsx(classes.bubble, classes.anim5)} /></M>
            <M key={6}><div className={clsx(classes.bubble, classes.anim6)} /></M>
            <M key={7}><div className={clsx(classes.bubble, classes.anim7)} /></M>
            <M key={8}><div className={clsx(classes.bubble, classes.anim8)} /></M>
            <M key={9}><div className={clsx(classes.bubble, classes.anim9)} /></M>
            <M key={10}><div className={clsx(classes.bubble, classes.anim10)} /></M>
            {/* Initial Bubbles */}
            <M key={11}><div className={clsx(classes.initial_bubble, classes.anim11)} /></M>
            <M key={12}><div className={clsx(classes.initial_bubble, classes.anim12)} /></M>
            <M key={13}><div className={clsx(classes.initial_bubble, classes.anim13)} /></M>
            <M key={14}><div className={clsx(classes.initial_bubble, classes.anim14)} /></M>
            <M key={15}><div className={clsx(classes.initial_bubble, classes.anim15)} /></M>
            <M key={16}><div className={clsx(classes.initial_bubble, classes.anim16)} /></M>
            <M key={17}><div className={clsx(classes.initial_bubble, classes.anim17)} /></M>
            <M key={18}><div className={clsx(classes.initial_bubble, classes.anim16)} /></M>
            <M key={19}><div className={clsx(classes.initial_bubble, classes.anim19)} /></M>
            <M key={20}><div className={clsx(classes.initial_bubble, classes.anim20)} /></M>
          </>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default MainManuLogo;

const M = (props) => (
  <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: .6}}
    {...props}
  />
)