'use client'
import React, {ComponentProps} from 'react';
import {motion} from "framer-motion";

export type MainMenuMotionProps = ComponentProps<typeof motion.div>;

// motion.div with some defaults for initial menu transitions
const MainMenuMotion = (props: MainMenuMotionProps) => {
  const { transition, ...rest } = props;

  return (
    <motion.div
      transition={{
        type: 'tween',
        duration: .5,
        delay: .5,
        ...transition
    }}
      {...rest}
    />
  );
};

export default MainMenuMotion;