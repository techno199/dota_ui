import React from 'react';
import Dialog, {DialogProps} from "@/ui/Dialog/Dialog";

export type SettingsDialogProps = DialogProps;

const SettingsDialog = (props: SettingsDialogProps) => {
  const { classes, ...rest } = props;

  return (
    <Dialog
      classes={{
        paper: 'w-[1200px]'
      }}
      {...rest}
    >
      123123
    </Dialog>
  );
};

export default SettingsDialog;