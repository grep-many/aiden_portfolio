import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import React from "react";

const BallCanvas = React.lazy(()=>import ("../canvas/Ball"))

const Tech = () => {
  return (
    <React.Suspense fallback={<div className="text-white">Loading...</div> }>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
      </React.Suspense>
  );
};

export default SectionWrapper(Tech, "tech");
