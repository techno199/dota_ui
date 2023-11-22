'use client'
import React, {useEffect} from 'react';
import {redirect} from "next/navigation";

export type PageProps = {}

const Page = (props: PageProps) => {
  return redirect('/main-menu/dota');
};

export default Page;