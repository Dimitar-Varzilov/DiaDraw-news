export interface INews {
  id: number;
  title: string;
  content: string;
  created_at: string;
  type: NewsType;
  author: string;
}

export enum NewsType {
  sport = "Sport",
  weather = "Weather",
  politics = "Politics",
  funny = "Funny",
  sad = "Sad",
}
