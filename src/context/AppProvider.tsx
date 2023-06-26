import { createContext, useContext, useState } from "react";
import { IBaseNews, INews, NewsType } from "../interfaces/news";
import { boilerplateNews } from "./boilerplateNews";
import { createNews } from "./contextUtils";

export interface AppProviderProps {
  children: React.ReactNode;
}

export interface IAppState {
  news: INews[];
  createNews: (baseNews: IBaseNews) => INews;
  addNews: (news: INews) => void;
}
const initialState: IAppState = {
  news: [] as INews[],
  addNews: () => {},
  createNews,
};

const AppContext = createContext<IAppState>(initialState);

export const useAppContext = (): IAppState => useContext(AppContext);

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
