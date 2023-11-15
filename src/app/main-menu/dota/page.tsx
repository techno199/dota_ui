import React from 'react';
import DotaSidebar from "@/app/main-menu/dota/ui/dota_sidebar";

export type PageProps = {}

const Page = (props: PageProps) => {
  return (
    <div className={'flex '}>
      <div className={'grow'}>
        Content
      </div>

      <DotaSidebar />
    </div>
  );
};

export default Page;