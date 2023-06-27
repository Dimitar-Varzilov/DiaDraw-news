import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

const navigation = [{ name: "News", href: "#", current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navigation.map((item) => (
        <Typography
          key={item.name}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "text-red-600 underline decoration-red-600"
                : "text-gray-300 hover:text-white",
              "flex items-center transition-colors hover:text-blue-500"
            )}
          >
            {item.name}
          </a>
        </Typography>
      ))}
    </ul>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="m-0 w-full px-20 py-3">
      <div className="flex w-full items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          DiaDraw <span className="text-red-500">News</span>
        </Typography>
        <div className="hidden lg:block">
          <SearchBar />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </nav>
  );
}
