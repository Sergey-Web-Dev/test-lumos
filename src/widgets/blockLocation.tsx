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
    <div className="flex justify-center items-center">
      <div>
        <img src={`/${img}`} alt={`/${img}`} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3>{firstTextBlock}</h3>
        <p>{secondTextBlock}</p>
      </div>
    </div>
  );
};

export default SectionBlock;
