import React from "react";
import { Button } from "../ui/button";
import postJobImg from "../../../public/postJobImg.png";
import Image from "next/image";
import { TextEffect } from "../ui/text-effect";
import { InView } from "../ui/in-view";

const PostJob = () => {
  return (
    <div className="container mx-auto my-32 flex items-center justify-between">
      <div>
        {/* <h2 className="w-[570px] text-[52px] font-bold leading-[62px]">Find your dream jobs in best companies</h2> */}
        <TextEffect as="h2" className="w-[570px] text-[52px] font-bold leading-[62px]" per="char" preset="fade">
          Find your dream jobs in best companies
        </TextEffect>
        <TextEffect
          as="p"
          per="line"
          segmentWrapperClassName="overflow-hidden block"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.4 },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                },
              },
            },
          }}
          className="text-lg font-normal text-slate-600 leading-[30px] mt-4 mb-8">
          {`We don’t believe that we’ve found the holy grail of tech
combinations. Instead, we believe that you should
always explore better and new tech. We challenge you
to bring new ideas to the board.`}
        </TextEffect>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -50px 0px", once: true }}>
          <Button size={"lg"}>Sign Up Now</Button>
        </InView>
      </div>
      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: -60,
            scale: 0.35,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -50px 0px", once: true }}>
        <div>
          <Image src={postJobImg} width={600} alt="image" />
        </div>
      </InView>
    </div>
  );
};

export default PostJob;
