import React from "react";

const SectionBlock = ({
  img,
  firstTextBlock,
  secondTextBlock,
}: {
  img: string;
  firstTextBlock: string;
  secondTextBlock: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div>
        <img src={`/${img}`} alt={`/${img}`} />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h3 className="font-bold text-2xl mb:text-base">{firstTextBlock}</h3>
        <p className="text-[#646464]  mb:text-xs">{secondTextBlock}</p>
      </div>
    </div>
  );
};

export default SectionBlock;
