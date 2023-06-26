import { NewsType, INews } from "../interfaces/news";

export const createNews = (
  title: string,
  content: string,
  author: string,
  type: NewsType
) => {
  const newNews: INews = {
    id: Math.floor(Math.random() * 1000),
    title,
    content,
    author,
    type,
    created_at: new Date(),
  };
  return newNews;
};
