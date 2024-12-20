import React from "react";
import { Button } from "../ui/button";
import postJobImg from "../../../public/postJobImg.png";
import Image from "next/image";

const PostJob = () => {
  return (
    <div className="container mx-auto my-32 flex items-center justify-between">
      <div>
        <h2 className="w-[570px] text-[52px] font-bold leading-[62px]">Find your dream jobs in best companies</h2>
        <p className="w-[470px] text-lg font-normal text-slate-600 leading-[30px] mt-4 mb-8">
          We don’t believe that we’ve found the holy grail of tech combinations. Instead, we believe that you should always explore better and new tech. We challenge you to bring
          new ideas to the board.
        </p>
        <Button size={"lg"}>Sign Up Now</Button>
      </div>
      <div>
        <Image src={postJobImg} width={600} alt="image" />
      </div>
    </div>
  );
};

export default PostJob;
