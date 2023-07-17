import { useState, useRef, ChangeEvent } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { INews } from "../../interfaces/news";

type Props = {
  results: INews[];
  searchCallback(query: string): void;
  clearResults(): void;
  resultItemProps: {
    onListClick(news: INews): void;
  };
};

export default function searchBarController({
  results,
  searchCallback,
  resultItemProps,
  clearResults,
}: Props) {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setQuery(() => ev.target.value);

  const handleSearch = () => {
    if (query.length === 0) return;
    searchCallback(query);
  };

  useClickOutside(
    searchRef,
    () => {
      if (results.length < 1) return;

      clearResults();
    },
    [results.length]
  );

  const getListItems = (): {
    title: string;
    onClick(): void;
  }[] =>
    results.map((news) => {
      return {
        title: news.title,
        onClick: () => {
          resultItemProps.onListClick(news);
          setQuery(() => "");
          clearResults();
        },
      };
    });
  return { searchRef, query, handleChange, handleSearch, getListItems };
}
