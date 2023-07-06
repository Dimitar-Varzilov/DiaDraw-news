import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppProvider";
import { useParams } from "react-router";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { getSummary } from "../utils/newsUtils";
import { INews } from "../interfaces/news";

const Detail: React.FC = () => {
  const { getNewsById, getRelatedNews } = useAppContext();
  const [newsToShow, setNewsToShow] = useState<INews | undefined>(undefined);
  const [relatedNews, setRelatedNews] = useState<INews[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setNewsToShow(() => getNewsById(id));
      const foundRelatedNews = getRelatedNews(id, { resultsCount: 5 });
      setRelatedNews(() => foundRelatedNews);
    }
  }, [id]);

  return (
    <div className="flex h-screen">
      <article className="w-2/3 grow-[2] p-10 py-24">
        {newsToShow ? (
          <Card>
            <CardHeader>
              <Typography variant="h4" className="text-center">
                {newsToShow.title}
              </Typography>
            </CardHeader>
            <CardBody>{newsToShow.content}</CardBody>
          </Card>
        ) : (
          <Typography variant="h3">News not found</Typography>
        )}
      </article>
      <aside className="flex w-1/3 flex-col gap-4 border-2 border-black px-2 py-4">
        <Typography variant="h3" className="text-center">
          Related News
        </Typography>
        {relatedNews.map(({ id, title }) => (
          <div
            key={id}
            className="flex gap-2"
            onClick={() => navigate(`/newsDetail/${id}`, { replace: true })}
          >
            <div className="w-1/4 flex-none">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="image"
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <Typography className="3/4">{getSummary(title, 80)}</Typography>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Detail;
