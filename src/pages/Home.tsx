import { useState } from "react";
import CardComponent from "../components/CardCardComponent";
import { useAppContext } from "../context/AppProvider";

type Props = {};
const Home = (props: Props) => {
  const news = useAppContext().news;
  return (
    <div className="pb-2 pt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        {news.map((item) => (
          <CardComponent
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            dateOfCreate={item.created_at}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
