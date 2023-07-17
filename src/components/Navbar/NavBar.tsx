import React from "react";
import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import SearchBar from "../SearchBar/SearchBar";
import NavList from "./NavList";
import Logo from "../Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navBarController from "./navbarController";

export function NavBar() {
  const {
    searchCallback,
    searchResults,
    onListClick,
    setSearchResults,
    setOpenNav,
    openNav,
  } = navBarController();

  return (
    <Navbar className="m-0 w-full max-w-full px-20 py-3">
      <div className="flex w-full items-center justify-between">
        <Logo />
        <div className="relative hidden lg:block">
          <SearchBar
            searchCallback={searchCallback}
            results={searchResults}
            resultItemProps={{ onListClick }}
            clearResults={() => setSearchResults([])}
          />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="lg:hidden">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
