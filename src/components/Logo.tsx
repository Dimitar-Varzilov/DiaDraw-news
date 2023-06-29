import Typography from "@material-tailwind/react/components/Typography";
import { Link } from "react-router-dom";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Typography
      variant="h6"
      color="black"
      className="mr-4 cursor-pointer py-1.5"
    >
      <Link to="/" className="flex items-center">
        DiaDraw <span className="text-red-500">News</span>
      </Link>
    </Typography>
  );
};

export default Logo;
