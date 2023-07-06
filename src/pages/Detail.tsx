import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Card as MaterialCard,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../context/AppProvider";
import { INews } from "../interfaces/news";
import { getSummary } from "../utils/newsUtils";
import Card from "../components/Card";

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
    <div className="flex">
      <article className="w-2/3 p-10 py-24">
        {newsToShow ? (
          <MaterialCard>
            <CardHeader>
              <Typography variant="h4" className="text-center">
                {newsToShow.title}
              </Typography>
            </CardHeader>
            <CardBody>{newsToShow.content}</CardBody>
          </MaterialCard>
        ) : (
          <Typography variant="h3">News not found</Typography>
        )}
      </article>
      <aside className="flex w-1/3 flex-col gap-4 border-2 border-black px-2 py-4">
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

export default Detail;
