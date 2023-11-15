import React from 'react';
import {Button as MuiButton} from '@mui/material';
import clsx from "clsx";

export type ButtonProps = {
  color: 'green'
}

const Button = (props: ButtonProps) => {
  const { color, className, ...rest } = props;

  return (
    <MuiButton
      className={clsx(className, {
        ['bg-col-green hover:bg-col-green-light']: color === 'green'
      })}
      {...rest}
    />
  );
};

export default Button;