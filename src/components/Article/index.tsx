import React from "react";

import { PostType } from "types/post";

import styles from "@styles/article.module.css";

const Article = ({ post }: { post: PostType }) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/BlogPosting"
      className={styles.post}
    >
      <header>
        <h2 itemProp="headline">{post.title.rendered}</h2>
        <div className={styles.date}>
          <strong>Publish Date</strong>:
          <span itemProp="datePublished">
            <time dateTime={post.date}>{post.date}</time>
          </span>
        </div>
        <div className={styles.author}>
          <strong>Author</strong>:
          <span itemProp="author">{post.author_name}</span>
        </div>
      </header>
      <div itemProp="postBody" className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
      </div>
    </article>
  );
};

export default Article;
