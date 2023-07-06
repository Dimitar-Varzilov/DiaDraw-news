import React from "react";
import { NewsType } from "../../interfaces/news";

export type CardTypesProps = {
  type: NewsType;
  className?: string;
};

export const CardType: React.FC<CardTypesProps> = ({
  className,
  type,
}: CardTypesProps) => {
  return (
    <div
      className={`max-w-min select-none rounded-lg bg-secondary px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all ${className}`}
    >
      {type}
    </div>
  );
};
