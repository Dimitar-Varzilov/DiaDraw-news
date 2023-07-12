import React from "react";
import { Typography } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/typography";
import ReactTimeAgo from "react-time-ago";

type Props = {
  date: number;
  color?: color;
};

const LastSeen: React.FC<Props> = ({ date, color }: Props) => {
  return (
    <Typography color={color}>
      <ReactTimeAgo date={date} />
    </Typography>
  );
};

export default LastSeen;
