import { Typography } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/typography";
import ReactTimeAgo from "react-time-ago";

type Props = {
  date: Date;
  color?: color;
};

const LastSeen: React.FC<Props> = ({ date, color }: Props) => {
  return (
    <Typography color={color && color}>
      <ReactTimeAgo date={date} locale="en-US" />
    </Typography>
  );
};

export default LastSeen;
