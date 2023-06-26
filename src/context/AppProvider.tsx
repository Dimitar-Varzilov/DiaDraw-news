import { createContext, useContext, useState } from "react";
import { INews, NewsType } from "../interfaces/news";
import { boilerplateNews } from "./boilerplateNews";
import { createNews } from "./contextUtils";

export interface AppProviderProps {
  children: React.ReactNode;
}

export interface IAppState {
  news: INews[];
  createNews: (
    title: string,
    content: string,
    author: string,
    type: NewsType
  ) => INews;
  addNews: (news: INews) => void;
}
const AppContext = createContext<IAppState | null>(null);

const initialState: IAppState = {
  news: [] as INews[],
  addNews: () => {},
  createNews,
};
export const useAppContext = (): IAppState =>
  AppContext === null ? useContext(AppContext) : initialState;

const AppContextProvider = ({ children }: AppProviderProps) => {
  const [news, setNews] = useState<INews[]>(boilerplateNews);
  const addNews = (newNews: INews) => {
    setNews((prev) => [...prev, newNews]);
  };
  return (
    <AppContext.Provider value={{ news, addNews, createNews }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
