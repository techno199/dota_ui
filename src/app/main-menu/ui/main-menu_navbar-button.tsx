import React, {HTMLAttributes} from 'react';
import clsx from "clsx";

export type MainMenuNavbarButtonProps = HTMLAttributes<HTMLDivElement>;

const MainMenuNavbarButton = (props: MainMenuNavbarButtonProps) => {
  const { className, children, ...rest } = props;

  return (
    <div className={clsx(className, 'flex justify-center items-center px-12 py-8 text-2xl font-medium uppercase')}>
      {children}
    </div>
  );
};

export default MainMenuNavbarButton;