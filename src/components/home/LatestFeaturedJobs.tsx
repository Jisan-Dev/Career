import React from "react";
import JobListings from "./JobListings";
import { TextEffect } from "../ui/text-effect";

const LatestFeaturedJobs = () => {
  return (
    <div className="container max-sm:px-2 mx-auto my-12 md:my-36">
      <div className=" flex flex-col items-center justify-center">
        <TextEffect per="char" preset="fade" className="text-center text-4xl lg:text-5xl font-bold leading-[62px]">
          Latest featured jobs
        </TextEffect>
        <p className="md:w-[470px] mx-auto text-center text-slate-600 md:text-lg md:leading-[30px] md:mt-4">
          Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.
        </p>
      </div>
      <JobListings />
    </div>
  );
};

export default LatestFeaturedJobs;
