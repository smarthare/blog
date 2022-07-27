export interface IAppContext {
  posts: PostsType;
  pages: PagesType;
  user: UserType | undefined;
  signUser: Function;
  signOut: VoidFunction;
}
