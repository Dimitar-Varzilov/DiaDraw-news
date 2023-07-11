import React from "react";
import {
  Card as MaterialCard,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { NewsType } from "../../interfaces/news";
import LastSeen from "../LastSeen";
import { CardType } from "./CardType";

type Props = {
  title: string;
  small?: boolean;
  content?: string;
  newsAdded?: Date | number;
  type?: NewsType;
  onClick: () => void;
};
const Card: React.FC<Props> = ({
  title,
  content,
  newsAdded,
  type,
  small,
  onClick,
}: Props) => {
  return (
    <MaterialCard
      className="relative flex w-full flex-row border-2 border-black"
      onClick={() => small && onClick()}
    >
      <CardHeader
        shadow={false}
        floated={false}
        className={`mb-4 ${small ? "w-32" : "w-64"} flex-none`}
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="flex grow-[2] flex-col justify-between">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        {!small && content && (
          <>
            <Typography color="gray" className="mb-8 font-normal">
              {content}
            </Typography>
            {type && <CardType type={type} />}
          </>
        )}
      </CardBody>
      {!small && (
        <CardFooter className="flex flex-none items-center justify-between lg:flex-col">
          {newsAdded && <LastSeen date={newsAdded} color="red" />}
          <Button
            variant="text"
            color="red"
            className="w-max border-2 border-primary"
            onClick={onClick}
          >
            Read more
          </Button>
        </CardFooter>
      )}
    </MaterialCard>
  );
};
export default Card;
