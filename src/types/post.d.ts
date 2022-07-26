export type TitleType = {
  rendered: string;
};

export type ContentType = {
  rendered: string;
  protected: boolean;
};

export type PostType = {
  id: number;
  date: string;
  author: number;
  author_name: string;
  title: TitleType;
  content: ContentType;
};

export type PostsType = Array<PostType>;
