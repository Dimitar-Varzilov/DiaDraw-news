import { useNavigate, useParams } from "react-router-dom";
import { INews } from "../../interfaces/news";
import {
  selectNewsById,
  selectRelatedNews,
} from "../../store/features/news/newsSlice";
import { useAppSelector } from "../../store/hooks";

export default function detailController() {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsToShow = useAppSelector((state) => selectNewsById(state, id));
  const relatedNews: INews[] = useAppSelector((state) => {
    if (id) return selectRelatedNews(state, id);
    return [];
  });

  return { newsToShow, relatedNews, navigate };
}
