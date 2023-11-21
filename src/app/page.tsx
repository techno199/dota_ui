'use client'
import {appState} from "@/app/root.store";
import {observer} from "mobx-react";
import Image from "next/image";
import {useEffect, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Button from "@/ui/Button/Button";
import {redirect} from "next/navigation";

const Page = observer(() => {
  const {gameLaunched, launchSequenceLoaded, launchSequenceFinished} = appState;
  const introVideoRef = useRef(null as any);
  const logoVisible = gameLaunched && !launchSequenceLoaded;
  const introVisible = gameLaunched && launchSequenceLoaded && !launchSequenceFinished;

  // Display logo while fake resources load
  useEffect(() => {
    if (gameLaunched) {
      setTimeout(() => {
        appState.launchSequenceLoaded = true;
      }, 2500)
    }
  }, [gameLaunched]);

  useEffect(() => {
    if (introVisible && introVideoRef.current) {
      introVideoRef.current.volume = 0.1;
    }
  }, [introVisible])

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
            <Image
              alt={''}
              src={'/dota-logo.png'}
              width={600}
              height={600}
            />
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

export default Page;