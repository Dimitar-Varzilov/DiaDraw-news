import { Typography } from "@material-tailwind/react";

export default function Example() {
  return (
    <footer className="via-sky-500  to-emerald-500 bottom-0 left-0 w-full bg-white bg-gradient-to-t from-indigo-500 from-10% via-30% to-90% p-7">
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; {new Date().getFullYear()} DiaDraw. All Rights Reserved.
      </Typography>
    </footer>
  );
}
