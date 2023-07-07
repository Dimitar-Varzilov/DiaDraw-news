import { Card, ListItem } from "@material-tailwind/react";
import React from "react";

export interface IListItem {
  value: string;
  onClick: () => void;
}

export type ListProps = {
  listItems: IListItem[];
  className?: string;
  hide?: boolean;
};

const List: React.FC<ListProps> = ({
  listItems: items,
  className,
  hide,
}: ListProps) => {
  return (
    !hide && (
      <Card className={` ${className && className}`}>
        {items.map(({ value, onClick }, index) => (
          <ListItem key={index} onClick={() => onClick()}>
            {value}
          </ListItem>
        ))}
      </Card>
    )
  );
};

// export default React.memo(List);
export default List;
