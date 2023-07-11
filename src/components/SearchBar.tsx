import React, { useEffect, useRef } from "react";
import { ChangeEvent, useState } from "react";
import Input from "@material-tailwind/react/components/Input";
import { IconButton } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import List from "./List";
import { INews } from "../interfaces/news";

type Props = {
  results: INews[];
  searchCallback(query: string): void;
  clearResults(): void;
  resultItemProps: {
    onListClick(news: INews): void;
  };
};

const SearchBar = ({
  results,
  searchCallback,
  resultItemProps,
  clearResults,
}: Props) => {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setQuery(() => ev.target.value);

  const handleSearch = () => {
    if (query.length === 0) return;
    searchCallback(query);
  };

  useEffect(() => {
    const listener = (event: Event) => {
      const element = searchRef?.current;
      if (!element || element.contains((event?.target as Node) || null)) {
        return;
      }

      if (results.length < 1) return;

      clearResults();
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [results.length]);

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

  return (
    <div className="relative flex w-full gap-2 md:w-max" ref={searchRef}>
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

      <div className="absolute top-10">
        <List items={getListItems()} />
      </div>
    </div>
  );
};

export default SearchBar;
