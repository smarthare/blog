import React from "react";

import { PageType } from "types/page";

const Page = ({ page }: { page: PageType }) => {
  return (
    <>
      <h1>{page.title.rendered}</h1>
      <p dangerouslySetInnerHTML={{ __html: page.content.rendered }}></p>
    </>
  );
};

export default Page;
