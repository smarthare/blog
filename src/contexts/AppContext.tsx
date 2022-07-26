import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from "react";

import { getPages, getPosts, getUsers } from "apis";
import { AuthorsType, AuthorType } from "types/author";
import { PostsType, PostType } from "types/post";
import { PagesType } from "types/page";

const AppContext = createContext({
  posts: [],
  pages: [],
} as {
  posts: PostsType;
  pages: PagesType;
});

function AppProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<PostsType>([]);
  const [pages, setPages] = useState<PagesType>([]);

  const findAuthorName = (_authors: AuthorsType, id: number) => {
    const author = _authors.find((author: AuthorType) => author.id === id);
    return author ? author.name : "";
  };

  const getHomePageData = useCallback(async () => {
    getUsers()
      .then((authors) => {
        return authors as AuthorsType;
      })
      .then(async (authors) => {
        const newPosts = await getPosts();
        if (newPosts) {
          const postsWithAuthorName = newPosts.map((post: PostType) => ({
            ...post,
            author_name: findAuthorName(authors, post.author),
          }));
          setPosts(postsWithAuthorName);
        }
      });
  }, [posts]);

  const getAboutPageData = useCallback(async () => {
    const newPages = await getPages();
    setPages(newPages as PagesType);
  }, [pages]);

  useEffect(() => {
    getHomePageData();
    getAboutPageData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        posts,
        pages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
