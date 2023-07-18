import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const useHomeController = () => {
  const news = useAppSelector((state) => state.news.newsList);
  const navigate = useNavigate();

  return { news, navigate };
};

export default useHomeController;
