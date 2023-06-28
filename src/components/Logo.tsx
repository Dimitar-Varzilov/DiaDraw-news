import Typography from "@material-tailwind/react/components/Typography";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Typography
      as="a"
      href="/"
      variant="h6"
      color="black"
      className="mr-4 cursor-pointer py-1.5"
    >
      DiaDraw <span className="text-red-500">News</span>
    </Typography>
  );
};

export default Logo;
