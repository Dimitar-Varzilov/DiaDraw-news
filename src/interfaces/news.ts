export interface INews {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  type: NewsType;
  author: string;
}

export enum NewsType {
  Sport = "SPORT",
  Weather = "WEATHER",
  Politics = "POLITICS",
  Funny = "FUNNY",
  Sad = "SAD",
}
