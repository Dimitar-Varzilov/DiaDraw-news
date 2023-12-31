import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const navigation = [{ name: "News", href: "/", current: true }];

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
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center transition-colors hover:text-blue-500 
            ${
              item.current
                ? "text-red-600 underline decoration-red-600"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}
export default NavList;
