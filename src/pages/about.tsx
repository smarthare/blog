import { useContext } from "react";
import type { NextPage } from "next";

import { AppContext } from "@contexts/AppContext";
import Layout from "@components/Layout";
import Page from "@components/Page";
import { PageType } from "types/page";

const About: NextPage = () => {
  const { pages } = useContext(AppContext);

  return (
    <Layout title="About">
      {pages &&
        pages.map((page: PageType) => (
          <Page page={page} key={`10up-page-${page.title.rendered}`} />
        ))}
    </Layout>
  );
};

export default About;
