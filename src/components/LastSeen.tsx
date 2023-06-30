import React from "react";
import ReactTimeAgo from "react-time-ago";

type Props = {
  date: Date;
};

const LastSeen = ({ date }: Props) => {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" />
    </div>
  );
};

export default LastSeen;
