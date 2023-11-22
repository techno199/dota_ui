'use client'
import React, {useEffect} from 'react';
import {Loop} from "@/models/Loop/Loop";

export type PageProps = {}

const Page = (props: PageProps) => {
  useEffect(() => {
    const loop = new Loop('click', [{sourcePath: '/sounds/dota_large_click.mp3'}]);
  }, []);

  return (
    <div>
      Learn
    </div>
  );
};

export default Page;