import React from "react";
import { Typography } from "@material-tailwind/react";
import { getSummary } from "../../utils/newsUtils";
import Card from "../../components/Card";
import useDetailController from "./useDetailController";

const Detail: React.FC = () => {
  const { navigate, newsToShow, relatedNews } = useDetailController();
  return (
    <div
      className="flex"
      style={{
        height: "calc(100vh - 150px)",
      }}
    >
      <article className="relative w-2/3">
        {newsToShow ? (
          <div className="p-6 text-center">
            <Typography variant="h3" className="my-6 text-center">
              {newsToShow.title}
            </Typography>
            <p>{newsToShow.content}</p>
          </div>
        ) : (
          <Typography variant="h3">News not found</Typography>
        )}
      </article>
      <aside className="flex h-full w-1/3 flex-col gap-4 border-2 border-black px-2 py-4">
        <Typography variant="h3" className="text-center">
          Related News
        </Typography>
        {relatedNews.map(({ id, title }) => (
          <div key={id} className="flex gap-2">
            <Card
              title={getSummary(title, 80)}
              small
              onClick={() => navigate(`/newsDetail/${id}`, { replace: true })}
            />
          </div>
        ))}
      </aside>
    </div>
  );
};

export { Detail };
