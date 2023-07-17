import { useNavigate } from "react-router-dom";
import { NewsFormProps } from "../../components/NewsForm/NewsForm";
import { IBaseNews, INews } from "../../interfaces/news";
import { addNews } from "../../store/features/news/newsSlice";
import { createNews } from "../../store/features/news/utils";
import { useAppDispatch } from "../../store/hooks";

export default function useAddNewsController() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onCancel = () => navigate(-1);
  const onSubmit = (formData: IBaseNews | INews) => {
    const newNews = createNews(formData);
    dispatch(addNews(newNews));
  };
  const formProps: NewsFormProps = {
    onCancel,
    onSubmit,
  };
  return { formProps };
}
