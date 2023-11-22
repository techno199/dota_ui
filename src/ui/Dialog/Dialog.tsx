import React from 'react';
import {Backdrop, Dialog as MuiDialog, BackdropProps as MuiProps, Fade, Grow} from "@mui/material";
import {motion} from "framer-motion";
import clsx from "clsx";
import {Loop} from "@/models/Loop/Loop";

export type DialogProps = Omit<MuiProps, 'classes'> & {
  classes?: MuiProps['classes'] & {
    paper?: string;
  },
  onClose?: () => any;
};

const Dialog = (props: DialogProps) => {
  const { classes, onClose, ...rest } = props;

  const handleClose = () => {
    new Loop('dialog_close', [{sourcePath: '/sounds/dota_close_tab_click.mp3'}]);
    onClose?.();
  }

  return (
    <Backdrop
      unmountOnExit
      onClick={handleClose}
      {...props}
    >
      <motion.div
        initial={{x: -100, y: -100, opacity: 0, scale: 0.95}}
        animate={{x: 0, y: 0, opacity: 1, scale: 1}}
        transition={{type: 'tween', duration: .5}}
      >
        <div className={clsx(classes?.paper, 'bg-col-grey-dark rounded-none border-2 border-col-grey-500')}>
          asdasdasd
        </div>
      </motion.div>
    </Backdrop>
    // <MuiDialog
    //   transitionComponent={<Grow />}
    //   classes={{
    //     paper: 'bg-col-grey-dark rounded-none border-2 border-col-grey-500'
    //   }}
    //   {...props}
    // />
  );
};

export default Dialog;