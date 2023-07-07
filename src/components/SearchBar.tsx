import React, { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import Input from "@material-tailwind/react/components/Input";
import { IconButton } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import List, { IListItem } from "./List";
import { INews } from "../interfaces/news";

type Props = {
  news: INews[];
  searchCallback(query: string): void;
  resultItemProps: {
    onListClick(news: INews): void;
  };
};

const SearchBar = ({ news, searchCallback, resultItemProps }: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<IListItem[]>([]);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setQuery(() => ev.target.value);

  const handleSearch = () => {
    searchCallback(query);
  };

  useEffect(() => {
    setResults(() =>
      news.map((news) => {
        return {
          value: news.title,
          onClick: () => {
            resultItemProps.onListClick(news);
            setResults(() => []);
            setQuery(() => "");
          },
        };
      })
    );
  }, [news]);

  return (
    <div className="relative flex w-full gap-2 md:w-max">
      <Input
        type="search"
        label="Seacrh news..."
        className="pr-20"
        containerProps={{
          className: "min-w-[288px]",
        }}
        value={query}
        onChange={handleChange}
      />
      <IconButton
        size="sm"
        type="button"
        className="!absolute right-1 top-1 rounded bg-black"
        onClick={handleSearch}
      >
        <MagnifyingGlassIcon className="h-6 w-6 text-white" strokeWidth={2} />
      </IconButton>
      {news.length > 0 && (
        <div className="absolute top-14">
          <List listItems={results} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
