import clsx from "clsx";
import React from "react";

const BlockIterable = ({
  ico,
  title,
  secondTitle,
  paragraph,
  classname,
}: {
  ico: string;
  title: string;
  secondTitle: string;
  paragraph: string;
  classname?: string;
}) => {
  return (
    <div
      className={clsx(
        classname,
        "text-center w-[45%] flex flex-col justify-center items-center px-12 border-b-2 p-8 border-[#646464] gap-2"
      )}
    >
      <img src={`${ico}`} alt={`${ico}`} />
      <h2 className="text-3xl uppercase font-bold text-[#FF5D17]">{title}</h2>
      <h3 className="text-3xl uppercase font-bold text-[#3177F2]">
        {secondTitle}
      </h3>
      <p className=" font-semibold text-[#646464]">{paragraph}</p>
    </div>
  );
};

export default BlockIterable;
