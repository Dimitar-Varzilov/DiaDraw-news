import { INews, IBaseNews } from "../interfaces/news";
import { v4 as uuidv4 } from "uuid";

export const createNews = (baseNews: IBaseNews): INews => {
  return {
    ...baseNews,
    id: uuidv4(),
    created_at: new Date(),
  };
};
