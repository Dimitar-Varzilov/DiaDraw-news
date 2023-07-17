import { useState } from "react";
import { IBaseNews, INews, NewsType } from "../../interfaces/news";
import { TouchedState } from "./NewsForm";

const initialState: IBaseNews = {
  title: "",
  author: "",
  type: NewsType.Funny,
  content: "",
};

export default function newsFormController(
  onSubmit: (formData: IBaseNews | INews) => void
) {
  const [formData, setFormData] = useState<IBaseNews | INews>(initialState);
  const [formTouched, setFormTouched] = useState<TouchedState>({});
  const hasError = (name: keyof INews) =>
    formTouched[name] && formData[name as keyof IBaseNews].length === 0;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    ev: React.FormEvent<HTMLFormElement>
  ) => {
    ev.preventDefault();
    ev.stopPropagation();
    onSubmit(formData);
    };
    return {handleSubmit,setFormTouched,setFormData,formData,formTouched,hasError}
}
