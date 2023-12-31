'use client'
import React, {HTMLAttributes} from 'react';
import clsx from "clsx";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {mediaCenter} from "@/models/MediaCenter/MediaCenter";
import {Loop} from "@/models/Loop/Loop";

export type MainMenuNavbarButtonProps = any;

const MainMenuNavbarButton = (props: MainMenuNavbarButtonProps) => {
  const { className, children, href, ...rest } = props;
  const pathname = usePathname();
  const active = pathname?.includes(href);

  return (
    <Link
      href={href}
      className={clsx(
        className,
        'group relative flex justify-center items-center px-12 py-8 text-2xl font-medium uppercase hover:text-white duration-300 user-select-none', {
          ['text-white']: active
        }
      )}
      // onClick={handleClick}
    >
      <div
        className={clsx(
          'absolute left-1/2 right-1/2 -transform-x-1/2 -transform-y-1/2 rounded-full',
          'shadow-[-1px_0px_77px_50px_rgba(88,120,162,0.5)] duration-300 group-hover:!opacity-100', {
            ['opacity-0']: !active,
            ['opacity-100']: active
          }
        )}
      />
      {children}
    </Link>
  );
};

export default MainMenuNavbarButton;