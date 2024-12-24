import React from "react";
import JobListings from "./JobListings";
import { TextEffect } from "../ui/text-effect";

const LatestFeaturedJobs = () => {
  return (
    <div className="container mx-auto my-36">
      <div className=" flex flex-col items-center justify-center">
        <TextEffect per="char" preset="fade" className="text-center text-[52px] font-bold leading-[62px]">
          Latest featured jobs
        </TextEffect>
        <p className="w-[470px] mx-auto text-center text-slate-600 text-lg leading-[30px] mt-4">
          Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.
        </p>
      </div>
      <JobListings />
    </div>
  );
};

export default LatestFeaturedJobs;
