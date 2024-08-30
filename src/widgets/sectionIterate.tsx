import React from "react";
import clsx from "clsx";
import { dataBlock } from "@/shared/constants/data-blocks";
import BlockIterable from "./blockIterable";

const SectionIterate = ({ className }: { className?: string }) => {
  return (
    <section
      className={clsx(
        className,
        "flex justify-center flex-wrap items-stretch gap-6 my-12"
      )}
    >
      {dataBlock.map((el) => (
        <BlockIterable
          classname={clsx(el.id <= 2 ? "border-t-2" : "")}
          key={el.id}
          {...el}
        />
      ))}
    </section>
  );
};

export default SectionIterate;
