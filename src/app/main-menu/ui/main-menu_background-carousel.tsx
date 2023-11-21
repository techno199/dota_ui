'use client'
import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {AppConfig} from "@/../app.config";

export type MainMenuBackgroundCarouselProps = {}

const MainMenuBackgroundCarousel = (props: MainMenuBackgroundCarouselProps) => {
  const [state, setState] = useState({
    currentSlideIndex: 0
  });

  const {currentSlideIndex} = state;

  useEffect(() => {
    setInterval(() => {
      setState(p => {
        return {...p, currentSlideIndex: (p.currentSlideIndex + 1) % 4}
      });
    }, AppConfig.mainMenuSliderTransitionTimeoutMs);
  }, [])

  return (
    <div className={`absolute inset-0 blur`}>
      <AnimatePresence>
        <SlideMotion key={0} value={0} index={currentSlideIndex}>
          <Image src={'/menu-backgrounds/bg1.jpeg'} alt={''} fill/>
        </SlideMotion>
        <SlideMotion key={1} value={1} index={currentSlideIndex}>
          <Image src={'/menu-backgrounds/bg2.jpeg'} alt={''} fill/>
        </SlideMotion>
        <SlideMotion key={2} value={2} index={currentSlideIndex}>
          <Image src={'/menu-backgrounds/bg3.jpeg'} alt={''} fill/>
        </SlideMotion>
        <SlideMotion key={3} value={3} index={currentSlideIndex}>
          <Image src={'/menu-backgrounds/bg4.jpeg'} alt={''} fill />
        </SlideMotion>
      </AnimatePresence>
    </div>
  );
};

export default MainMenuBackgroundCarousel;

const SlideMotion = ({value, index, ...props}: any) => value === index && (
  <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className={'absolute inset-0'}
    {...props}
  />
)