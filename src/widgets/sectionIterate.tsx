import React from "react";
import clsx from "clsx";
import { dataBlock } from "@/shared/constants/data-blocks";
import BlockIterable from "./blockIterable";

const SectionIterate = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        className,
        "flex justify-center flex-wrap items-stretch mb:gap-0 gap-6 my-12"
      )}
    >
      {dataBlock.map((el) => (
        <BlockIterable
          classname={clsx(el.id <= 2 ? "border-t-2 mb:border-t-0" : "")}
          key={el.id}
          {...el}
        />
      ))}
    </section>
  );
};

export default SectionIterate;
