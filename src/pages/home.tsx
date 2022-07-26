import { useContext } from "react";
import type { NextPage } from "next";

import Layout from "@components/Layout";
import Article from "@components/Article";
import { AppContext } from "@contexts/AppContext";
import { PostType } from "types/post";

const Home: NextPage = () => {
  const { posts } = useContext(AppContext);

  return (
    <Layout>
      <div itemScope itemType="https://schema.org/Blog">
        {posts.map((post: PostType) => (
          <Article post={post} key={`10up-post-${post.id}-${post.date}`} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
