import React from "react";
import NewsForm, { NewsFormProps } from "../components/NewsForm";
import { useNavigate } from "react-router-dom";
import { IBaseNews, INews } from "../interfaces/news";
import { useDispatch } from "react-redux";
import { createNews } from "../store/features/news/utils";
import { addNews } from "../store/features/news/newsSlice";

const AddNews = () => {
  const dispatch = useDispatch();
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
  return (
    <div className="flex h-screen justify-center">
      <NewsForm {...formProps} />
    </div>
  );
};

export default AddNews;
