'use client';
import React from 'react';
import Dialog, {DialogProps} from "@/ui/Dialog/Dialog";
import {appState} from "@/app/root.store";
import {observer} from "mobx-react";

export type SettingsDialogProps = DialogProps;

const SettingsDialog = observer((props: SettingsDialogProps) => {
  const { classes, ...rest } = props;

  return (
    <Dialog
      open={appState.settingsOpened}
      classes={{
        paper: 'w-[1200px]'
      }}
      onClose={() => appState.settingsOpened = false}
      {...rest}
    >
      123123
    </Dialog>
  );
});

export default SettingsDialog;