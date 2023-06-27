import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppContext } from "../context/AppProvider";
import { INews } from "../interfaces/news";
import Button from "@material-tailwind/react/components/Button";
import Input from "@material-tailwind/react/components/Input";
import { IconButton } from "@material-tailwind/react";

type Props = {};

const SearchBar = (props: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<INews[]>([]);
  const { news } = useAppContext();
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setQuery(() => ev.target && ev.target.value);
  const handleSubmit = (): void =>
    setResults(() =>
      news.filter((news) =>
        news.title.toLowerCase().includes(query.toLowerCase())
      )
    );

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
        onClick={handleSubmit}
      >
        <i className="fas fa-search text-white" />
      </IconButton>
    </div>
  );
};

export default SearchBar;
