import { ContentType, TitleType } from "types/post";

export type PageType = {
  title: TitleType;
  content: ContentType;
};

export type PagesType = Array<PageType>;
