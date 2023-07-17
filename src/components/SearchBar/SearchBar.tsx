import React from "react";
import Input from "@material-tailwind/react/components/Input";
import { IconButton } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import List from "../List";
import useSearchBarController from "./useSearchBarController";

const SearchBar = (props: any) => {
  const { getListItems, handleChange, handleSearch, query, searchRef } =
    useSearchBarController(props);
  return (
    <div className="relative flex w-full gap-2 md:w-max" ref={searchRef}>
      <Input
        type="search"
        label="Search news..."
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
