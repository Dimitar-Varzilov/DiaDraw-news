import {
  IconButton,
  SpeedDial as SpeedDialComponent,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { ReactNode, Children } from "react";

type SpeedDialProps = {
  children: ReactNode;
};

const SpeedDial: React.FC<SpeedDialProps> = ({ children }) => {
  return (
    <div className="fixed bottom-5 right-5">
      <SpeedDialComponent>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full">
            <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          {Children.map(children, (child, index) => (
            <SpeedDialAction className="h-16 w-16" key={index}>
              {child}
            </SpeedDialAction>
          ))}
        </SpeedDialContent>
      </SpeedDialComponent>
    </div>
  );
};

export default SpeedDial;
