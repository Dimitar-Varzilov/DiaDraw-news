import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Card from "../../components/Card";
import SpeedDial from "../../components/SpeedDial";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { getSummary } from "../../utils/newsUtils";
import useHomeController from "./useHomeController";

const Home = () => {
  const { news, navigate } = useHomeController();
  return (
    <div className="pb-2 pt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        {news.map(({ id, title, content, created_at, type }) => (
          <div key={id} className="w-[70%]">
            <Card
              title={title}
              content={getSummary(content)}
              newsAdded={created_at}
              type={type}
              onClick={() => navigate(`/newsDetail/${id}`)}
            />
          </div>
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

export { Home };
