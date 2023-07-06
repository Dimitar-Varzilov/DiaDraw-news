import React from "react";
import { ChangeEvent, useState } from "react";
import Input from "@material-tailwind/react/components/Input";
import { IconButton } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {
  searchCallback(query: string): void;
};

const SearchBar = ({ searchCallback }: Props) => {
  const [query, setQuery] = useState("");
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setQuery(() => ev.target && ev.target.value);
  const handleSearch = () => {
    searchCallback(query);
  };

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
    </div>
  );
};

export default SearchBar;
