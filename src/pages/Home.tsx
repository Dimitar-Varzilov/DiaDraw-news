import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import CardComponent from "../components/CardComponent";
import SpeedDial from "../components/SpeedDial";
import { useAppContext } from "../context/AppProvider";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const Home = () => {
  const { news } = useAppContext();

  return (
    <div className="pb-2 pt-10">
      <div className="w-fit-content flex flex-col items-center justify-center gap-4">
        {news.map((item) => (
          <CardComponent
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content.substring(0, 150).concat("...")}
            newsAdded={item.created_at}
            type={item.type}
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
