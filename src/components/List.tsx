import React from "react";
import { Card, ListItem } from "@material-tailwind/react";

export interface ListItem {
  title: string;
  onClick(): void;
}

export type ListProps = {
  items: ListItem[];
  className?: string;
};

const List: React.FC<ListProps> = ({ items, className }: ListProps) => {
  return (
    <Card className={className}>
      {items.map(({ title, onClick }) => (
        <ListItem key={title} onClick={onClick}>
          {title}
        </ListItem>
      ))}
    </Card>
  );
};

export default List;
