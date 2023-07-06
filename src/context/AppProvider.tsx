import React from "react";
import { createContext, useContext, useState } from "react";
import { IBaseNews, INews } from "../interfaces/news";
import { exampleNews } from "./exampleNews";
import { createNews } from "./contextUtils";

export interface AppProviderProps {
  children: React.ReactNode;
}

export interface IAppState {
  news: INews[];
  createNews: (baseNews: IBaseNews) => INews;
  addNews: (news: INews) => void;
  getNewsById: (newsId: string) => INews | undefined;
  getRelatedNews: (
    id: string,
    options?: {
      resultsCount?: number;
      includeSelf?: boolean;
    }
  ) => INews[];
}

const initialState: IAppState = {
  news: [],
  addNews: (news: INews) => news,
  createNews,
  getNewsById: () => undefined,
  getRelatedNews: () => [],
};

const AppContext = createContext<IAppState>(initialState);

export const useAppContext = (): IAppState => useContext(AppContext);

const AppContextProvider = ({ children }: AppProviderProps) => {
  const [news, setNews] = useState<INews[]>(exampleNews);

  const addNews = (newNews: INews) => {
    setNews((prev) => {
      return [...prev, newNews].sort(
        (a: INews, b: INews) => b.created_at.getTime() - a.created_at.getTime()
      );
    });
  };

  const getNewsById = (newsId: string) => {
    return news.find(({ id }) => id === newsId);
  };

  const getRelatedNews = (
    id: string,
    options?: {
      resultsCount?: number;
      includeSelf?: boolean;
    }
  ): INews[] => {
    const newsFound = getNewsById(id);
    let results: INews[] = [];
    if (!newsFound) return results;
    const { resultsCount = null, includeSelf = false } = options || {};

    results = news.filter(({ id, type }) => {
      if (includeSelf) {
        return type === newsFound.type || id === newsFound.id;
      }
      return type === newsFound.type && id !== newsFound.id;
    });

    if (resultsCount) return results.slice(0, resultsCount);

    return results;
  };

  return (
    <AppContext.Provider
      value={{
        news,
        addNews,
        createNews,
        getNewsById,
        getRelatedNews,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
