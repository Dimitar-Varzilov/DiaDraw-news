import React from "react";
import NewsForm from "../../components/NewsForm/NewsForm";
import useAddNewsController from "./useAddNewsController";

const AddNews = () => {
  const { formProps } = useAddNewsController();
  return (
    <div className="flex h-screen justify-center">
      <NewsForm {...formProps} />
    </div>
  );
};

export default AddNews;
