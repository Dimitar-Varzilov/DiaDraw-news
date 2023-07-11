import { v4 as uuidv4 } from "uuid";
import { IBaseNews, INews } from "../../../interfaces/news";

export const createNews = (baseNews: IBaseNews): INews => {
  return {
    ...baseNews,
    id: uuidv4(),
    created_at: new Date().getTime(),
  };
};
