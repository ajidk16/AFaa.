import { Chip, Code } from "@heroui/react";
import React from "react";

const Title = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div>
      <h2 className="text-xl sm:text-3xl font-extrabold text-inherit text-center">
        {title}
        {/* <Code className="text-xl md:text-3xl" color="default">
          {title}
        </Code> */}
      </h2>
      <h4 className="text-xs sm:text-lg text-inherit text-center mb-6 sm:mb-8 mt-4">
        {desc}
        {/* <Chip>{desc}</Chip> */}
      </h4>
    </div>
  );
};

export default Title;
