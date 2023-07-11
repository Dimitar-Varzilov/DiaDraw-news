import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { exampleNews } from "../../../context/exampleNews";
import { INews } from "../../../interfaces/news";

export interface NewsState {
  newsList: INews[];
}

const initialState: NewsState = {
  newsList: exampleNews,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action: PayloadAction<INews>) => {
      state.newsList = [...state.newsList, action.payload].sort(
        (a: INews, b: INews) => b.created_at - a.created_at
      );
    },
    selectNews: (state) => state,
  },
});

export default newsSlice.reducer;

export const { addNews } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news;
export const selectNewslistFromRoot = (state: RootState) => state.news.newsList;
export const selectNewsId = (newsList: RootState, itemId: string | undefined) =>
  itemId;

export const selectNewsById = createSelector(
  [selectNewslistFromRoot, selectNewsId],
  (newsArray, newsId) => newsArray.find(({ id }) => newsId === id)
);

export const selectRelatedNews = createSelector(
  (state: RootState) => state,
  selectNewsId,
  (rootState, newsId) => filterNewsById(rootState, newsId)
);

export const filterNewsById = (
  news: RootState,
  id: string | undefined,
  options?: {
    resultsCount?: number;
    includeSelf?: boolean;
  }
) => {
  const newsFound = selectNewsById(news, id);
  let results: INews[] = [];
  if (!newsFound) return results;
  const { resultsCount = null, includeSelf = false } = options || {};

  results = news.news.newsList.filter(({ id, type }) => {
    if (includeSelf) {
      return type === newsFound.type || id === newsFound.id;
    }
    return type === newsFound.type && id !== newsFound.id;
  });

  if (resultsCount) return results.slice(0, resultsCount);

  return results;
};
