import {
  Card,
  Typography,
  Checkbox,
  Button,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { FormInput } from "../interfaces/formFields";
import { useNavigate } from "react-router-dom";
import { IBaseNews, INews, NewsType } from "../interfaces/news";

type FormState = {
  [key: string]: string | NewsType | null;
};

export type NewsFormProps = {
  onCancel(): void;
  onSubmit(formData: IBaseNews | INews): void;
};

// interface FormState extends IBaseNews {
//   type: NewsType | null;
// }

const inputs: FormInput[] = [
  {
    label: "Title",
    type: "text",
    name: "title",
    required: true,
  },
  {
    label: "Author",
    type: "text",
    name: "author",
    required: true,
  },
];
const initialState: IBaseNews = {
  title: "",
  author: "",
  type: NewsType.Funny,
  content: "",
};

type NewsOptions = {
  label: string;
  value: NewsType;
};

const newsTypeOptions: NewsOptions[] = Object.entries(NewsType).map(
  ([key, value]) => {
    return {
      label: key,
      value,
    };
  }
);
const NewsForm: React.FC<NewsFormProps> = ({ onCancel, onSubmit }) => {
  const [formData, setFormData] = useState<IBaseNews | INews>(initialState);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formTouched, setFormTouched] = useState(false);
  const hasError = (name: string) =>
    formTouched && formData[name as keyof IBaseNews].length === 0;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    ev: React.FormEvent<HTMLFormElement>
  ) => {
    ev.preventDefault();
    ev.stopPropagation();
    console.clear();
    console.log(formData);
    onSubmit(formData);
  };
  return (
    <Card color="transparent" shadow={false}>
      <form
        ref={formRef}
        className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col gap-6">
          {inputs.map(({ label, name, type, required }, index) => (
            <div key={index}>
              <Input
                onBlur={() => setFormTouched(() => true)}
                id={name}
                size="lg"
                label={label}
                required={required}
                name={name}
                type={type}
                onChange={(ev) => {
                  setFormData({ ...formData, [name]: ev.target.value });
                }}
                error={formTouched && hasError(name)}
                success={formData[name as keyof IBaseNews]!.length > 0}
                value={formData[name as keyof IBaseNews]!}
              />
              <p
                className={`font-light text-red-700 ${
                  hasError(name) ? "visible" : "invisible"
                }`}
              >
                The field should not be empty
              </p>
            </div>
          ))}

          <Select
            // selected={(el, index) =>
            //   setFormData({
            //     ...formData,
            //     type: newsTypeValues[index!],
            //   })
            // }
            value={formData.type}
            onChange={(value) => {
              console.log(value);
              setFormData((curr) => {
                return {
                  ...curr,
                  type: value as NewsType,
                };
              });
            }}
          >
            {newsTypeOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
          <div>
            <Textarea
              onBlur={() => setFormTouched(() => true)}
              label="Content*"
              name="content"
              required
              resize
              error={hasError("content")}
              success={formData.content!.length > 0}
              onChange={(ev) => {
                setFormData({ ...formData, content: ev.target.value });
              }}
            />
            <p
              className={`font-light text-red-700 ${
                hasError("content") ? "visible" : "invisible"
              }`}
            >
              The field should not be empty
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button className="mt-6" color="red" type="reset" onClick={onCancel}>
            Cancel
          </Button>
          <Button className="mt-6" type="submit" color="green">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default NewsForm;
