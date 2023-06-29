import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "../context/AppProvider";
import { NewsType } from "../interfaces/news";
import { useNavigate } from "react-router";

type Props = {
  id: string;
  title: string;
  content: string;
  dateOfCreate: Date;
  type: NewsType;
};
export default function CardComponent({
  id,
  title,
  content,
  dateOfCreate,
  type,
}: Props): React.ReactElement {
  const navigate = useNavigate();
  const onButtonClick = () => navigate(`/newsDetail/${id}`);
  return (
    <Card className="w-full max-w-[48rem] flex-row border-2 border-black">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {content}
        </Typography>
        <a href="#" className="inline-block">
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={onButtonClick}
          >
            Read more
            <ArrowLongRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
