'use client'
import {appState} from "@/app/root.store";
import {observer} from "mobx-react";
import NextImage from "next/image";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Button from "@/ui/Button/Button";
import {redirect} from "next/navigation";
import {AppConfig} from "@/../app.config";
import Lmb from '/public/icons/lmb.svg';
import Logo from '/public/dota.svg';

const Page = observer(() => {
  const [state, setState] = useState({
    // Minimal time of visible logo to prevent content flash
    minLoadingTimePassed: false,
    resourcesLoaded: false
  });
  const {resourcesLoaded, minLoadingTimePassed} = state;
  const {gameLaunched, launchSequenceLoaded, launchSequenceFinished} = appState;
  const introVideoRef = useRef(null as any);
  const logoVisible = gameLaunched && !launchSequenceLoaded;
  const introVisible = gameLaunched && launchSequenceLoaded && !launchSequenceFinished;

  // Display logo while resources load
  useEffect(() => {
    if (gameLaunched) {
      preloadResources(preloadImageSrc)
        .then(() => {
          setState(p => ({...p, resourcesLoaded: true}));
          // appState.launchSequenceLoaded = true;
        });

      setTimeout(() => {
        setState(p => ({...p, minLoadingTimePassed: true}));
      }, AppConfig.logoTimeoutMs);
    }
  }, [gameLaunched]);

  // Check if both resources loaded and min time constraint fulfilled
  useEffect(() => {
    if (minLoadingTimePassed && resourcesLoaded) {
      appState.launchSequenceLoaded = true;
    }
  }, [minLoadingTimePassed, resourcesLoaded])

  // Set video volume when it's available
  useEffect(() => {
    if (introVisible && introVideoRef.current) {
      introVideoRef.current.volume = 0.1;
    }
  }, [introVisible]);

  const handleGameLaunch = () => {
    appState.gameLaunched = true;
  }

  const handleIntroEnded = () => {
    appState.launchSequenceFinished = true;
  }

  if (launchSequenceFinished) {
    return redirect('/main-menu')
  }

  return (
    <div className={'flex grow w-full h-full'}>
      {/* Play */}
      {!gameLaunched && (
        <div className={'grid place-items-center w-full grow'}>
          <Button
            color={'green'}
            variant={'contained'}
            className={'px-[100px] py-6 text-2xl'}
            onClick={handleGameLaunch}
          >
            Play Dota
          </Button>
        </div>
      )}

      <AnimatePresence mode={'popLayout'}>
        {/* Logo */}
        {logoVisible && (
          <motion.div
            key={'logo'}
            initial={{opacity: 0, scale: .98}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: .98}}
            className={'grid place-items-center w-full grow bg-black'}
          >
            <div className={'flex flex-col items-center'}>
              <div className={'w-[400px] h-[400px]'}>
                <Logo className={'w-full text-dota'} />
              </div>
              <span className={'relative left-0 '}>Loading assets...</span>
            </div>
          </motion.div>
        )}
        {/* Intro */}
        {introVisible && (
          <motion.div
            initial={{opacity: 0, scale: 1}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: .98}}
            className={'flex w-full grow'}
          >
            <video
              autoPlay
              key={'intro'}
              ref={introVideoRef}
              className={'w-full grow object-cover'}
              onEnded={handleIntroEnded}
              onClick={handleIntroEnded}
            >
              <source src={'/dota-intro.mp4'} type="video/mp4"/>
            </video>

            {/* Press left mouse button to skip intro */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1, duration: .3}}
              className={'absolute right-20 bottom-20 flex items-center gap-4'}
            >
              <Lmb className={'w-6 h-auto'} />
              SKIP
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

export default Page;

const preloadImageSrc = [
  '/menu-backgrounds/bg1.jpeg',
  '/menu-backgrounds/bg2.jpeg',
  '/menu-backgrounds/bg3.jpeg',
  '/menu-backgrounds/bg4.jpeg',
  '/dota-intro.mp4',
  '/music/1.mp3',
  '/music/2.mp3'
]

const preloadResources = (sources) => {
  return new Promise((resolve, reject) => {
    let loadedCount = 0;

    for (let source of sources) {
      const format = source.split('.')[1];
      let elemName;
      let event;

      if (['jpeg'].includes(format)) {
        elemName = 'img';
        event = 'onload';
      }


      if (['mp4'].includes(format)) {
        elemName = 'video';
        event = 'oncanplay';
      }

      if (['mp3'].includes(format)) {
        elemName = 'audio';
        event = 'oncanplay';
      }

      const elem = document.createElement(elemName);
      elem.src = source;
      elem[event] = () => {
        loadedCount++;
        if (loadedCount === sources.length) {
          return resolve(true);
        }
      }
    }
  });
}