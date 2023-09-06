"use client";
import { FC } from "react";

type IFilter = {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
};

const Filter: FC<IFilter> = ({
  title,
  icon,
  onClick,
  isSelected,
}) => {
  return (
    <>
      <button
        className={`flex items-center flex-col text-gray-600 mx-3 whitespace-nowrap hover:text-gray-900 hover:border-b-2 ${
          isSelected
            ? "text-gray-900 border-gray-900 border-b-2 "
            : "border-white hover:border-gray-200 border-b-2"
        }`}
        onClick={onClick}>
        <div className="text-3xl mb-1">{icon}</div>
        <div className="text-[0.8rem] pb-2.5">{title}</div>
      </button>
    </>
  );
};

export default Filter;
