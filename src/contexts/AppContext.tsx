import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { useRouter } from "next/router";

import { getPages, getPosts, getUsers, logout, validate } from "apis";
import { IAppContext } from "types/context";
import { AuthorsType, AuthorType } from "types/author";
import { PostsType, PostType } from "types/post";
import { PagesType } from "types/page";
import { UserType } from "types/user.t";

const AppContext = createContext({
  posts: [],
  pages: [],
  user: undefined,
  signUser: () => {},
  signOut: () => {},
} as IAppContext);

function AppProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const [posts, setPosts] = useState<PostsType>([]);
  const [pages, setPages] = useState<PagesType>([]);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    getHomePageData();
    getAboutPageData();
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

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

  const signUser = (userdata: UserType) => {
    setUser(userdata);
    localStorage.setItem("token", userdata.token);
    localStorage.setItem("user", JSON.stringify(userdata));
    router.push("/");
  };

  const signOut = () => {
    setUser(undefined);
    logout();
    router.push("/");
  };

  return (
    <AppContext.Provider
      value={{
        posts,
        pages,
        user,
        signUser,
        signOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
