import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "../context/AppProvider";
import { NewsType } from "../interfaces/news";
import { useNavigate } from "react-router";
import LastSeen from "./LastSeen";

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
    <Card className="flex max-h-64 w-[70%] flex-row border-2 border-black">
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
      <CardBody className="flex flex-col justify-between">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {content}
        </Typography>
        <Button disabled className="max-w-min">
          {type}
        </Button>
      </CardBody>
      <CardFooter className="flex flex-col justify-between">
        <Typography color="red">
          <LastSeen date={dateOfCreate} />
        </Typography>
        <Button
          variant="text"
          color="red"
          className="flex max-w-max items-center gap-2 border-2 border-primary"
          onClick={onButtonClick}
        >
          Read more
          <ArrowLongRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
