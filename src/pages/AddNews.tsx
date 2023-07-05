import React from "react";
import NewsForm, { NewsFormProps } from "../components/NewsForm";
import { useAppContext } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";
import { createNews } from "../context/contextUtils";
import { IBaseNews, INews } from "../interfaces/news";

const AddNews = () => {
  const { addNews } = useAppContext();
  const navigate = useNavigate();
  const onCancel = () => navigate(-1);
  const onSubmit = (formData: IBaseNews | INews) => {
    const newNews = createNews(formData);
    addNews(newNews);
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
