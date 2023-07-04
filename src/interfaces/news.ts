export interface IBaseNews {
  title: string;
  content: string;
  author: string;
  type: NewsType;
}

export interface INews extends IBaseNews {
  id: string;
  created_at: Date;
}

export enum NewsType {
  Funny = "FUNNY",
  Politics = "POLITICS",
  Sad = "SAD",
  Sport = "SPORT",
  Weather = "WEATHER",
}
