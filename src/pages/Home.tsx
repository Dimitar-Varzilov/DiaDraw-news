import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Card from "../components/Card";
import SpeedDial from "../components/SpeedDial";
import { useAppContext } from "../context/AppProvider";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const Home = () => {
  const { news } = useAppContext();

  return (
    <div className="pb-2 pt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        {news.map(({ id, title, content, created_at, type }) => (
          <Card
            key={id}
            id={id}
            title={title}
            content={content
              .substring(0, 150)
              .concat(`${content.length <= 150 ? "" : "..."}`)}
            newsAdded={created_at}
            type={type}
          />
        ))}
      </div>
      <SpeedDial>
        <Link to={"addNews"} className="flex flex-col items-center">
          <PlusIcon className="h-5 w-5" />
          <Typography color="gray" className="text-xs font-normal">
            Add News
          </Typography>
        </Link>
      </SpeedDial>
    </div>
  );
};

export default Home;
