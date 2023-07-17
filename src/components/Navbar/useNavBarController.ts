import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { INews } from "../../interfaces/news";
import { useAppSelector } from "../../store/hooks";

export default function useNavBarController() {
  const news = useAppSelector((state) => state.news.newsList);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<INews[]>([]);
  const [openNav, setOpenNav] = useState(false);

  const onListClick = (news: INews) => navigate(`/newsDetail/${news.id}`);

  const searchCallback = (query: string) => {
    setSearchResults(() => {
      return news.filter((news) =>
        news.title.toLowerCase().includes(query.toLowerCase())
      );
    });
  };
  return {
    searchCallback,
    searchResults,
    onListClick,
    setSearchResults,
    setOpenNav,
    openNav,
  };
}
