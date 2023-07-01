import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: <PlusIcon />,
    name: "Add",
    link: "/addNews",
  },
];

export default function Example() {
  return (
    <div className="fixed bottom-5 right-5">
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full">
            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          {actions.map((action) => (
            <Link to={action.link} key={action.name}>
              <SpeedDialAction className="h-16 w-16">
                {action.icon}
                <Typography color="gray">{action.name}</Typography>
              </SpeedDialAction>
            </Link>
          ))}
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
