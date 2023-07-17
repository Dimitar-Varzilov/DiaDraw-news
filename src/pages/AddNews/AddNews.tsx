import React from "react";
import NewsForm from "../../components/NewsForm/NewsForm";
import addNewsController from "./addNewsController";

const AddNews = () => {
  const { formProps } = addNewsController();
  return (
    <div className="flex h-screen justify-center">
      <NewsForm {...formProps} />
    </div>
  );
};

export default AddNews;
