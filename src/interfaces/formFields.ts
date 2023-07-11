import { INews } from "./news";

export interface FormInput {
  name: keyof INews;
  label: string;
  type: string;
  required?: boolean;
}
