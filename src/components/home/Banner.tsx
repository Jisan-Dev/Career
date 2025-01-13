"use client";
import { TextEffect } from "@/components/ui/text-effect";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";
import bannerImg from "../../../public/banner.png";
import arrow from "../../../public/arrow.png";
import apple from "../../../public/apple.png";
import webflow from "../../../public/webflow.png";
import google from "../../../public/google.png";
import unknown from "../../../public/unknown.png";
import behance from "../../../public/behance.png";
import slack from "../../../public/slack.png";
import { useSession } from "next-auth/react";
import { getSession } from "@/lib/getSession";
import { useEffect } from "react";

const Banner = () => {
  // get session-clientSide
  // const { data: session } = useSession();
  // console.log(session);

  useEffect(() => {
    const serverSession = async () => {
      const session = await getSession();
      console.log(session);
    };
    serverSession();
  }, []);

  return (
    <>
      <div className="max-sm:px-2 text-center max-w-[870px] mx-auto flex flex-col items-center justify-center">
        <TextEffect per="word" preset="blur" as="h1" className="text-7xl max-sm:text-4xl font-bold leading-[82px]">
          Your new job, vacancies all over the world
        </TextEffect>
        <TextEffect
          per="line"
          as="p"
          segmentWrapperClassName="overflow-hidden block"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
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
                  duration: 0.4,
                },
              },
            },
          }}
          className="text-[18px] max-sm:text-base mt-4 max-w-[670px] text-slate-700 leading-[30px]">
          {`The best place to discover & apply to the coolest start up jobs. More than 
          672800 current vacancies from 17750 sites available to you.`}
        </TextEffect>
        <div className="flex max-sm:flex-col max-sm:px-3   w-full max-w-lg items-center space-x-2 my-9">
          <div className="w-full">
            <form className="relative mx-auto flex w-full items-center justify-between rounded-md border shadow-sm">
              <svg
                className="absolute left-2 block h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input
                type="name"
                name="search"
                className="flex h-10 w-full rounded-md border border-input bg-background py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm px-10"
                placeholder="Search by Job Title or Company"
              />
            </form>
          </div>
          <Button type="submit" className="max-sm:w-full max-sm:mt-1">
            Explore Now
          </Button>
        </div>
        <Image src={bannerImg} alt="banner image" />
      </div>
      <motion.div initial={{ x: 200 }} className="max-md:hidden absolute top-28 right-20" animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Image src={arrow} alt="banner arrow image" />
      </motion.div>
      <motion.div initial={{ x: 200 }} className="max-md:hidden absolute top-20 right-14" animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Image src={apple} alt="banner icons image" />
      </motion.div>
      <motion.div initial={{ x: 200 }} className="max-md:hidden absolute top-64 right-36" animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Image src={webflow} alt="banner icons image" />
      </motion.div>
      <motion.div initial={{ x: 200 }} className="max-md:hidden absolute top-[450px] right-14" animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Image src={google} alt="banner icons image" />
      </motion.div>
      <motion.div initial={{ x: -200 }} className="max-md:hidden absolute top-28 left-20 rotate-180" animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Image src={arrow} className="rotate-180" alt="banner arrow image" />
      </motion.div>
      <motion.div initial={{ x: -200 }} className="max-md:hidden absolute top-64 left-36" animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Image src={unknown} alt="banner icons image" />
      </motion.div>
      <motion.div initial={{ x: -200 }} className="max-md:hidden absolute top-20 left-14" animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Image src={behance} alt="banner icons image" />
      </motion.div>
      <motion.div initial={{ x: -200 }} className="max-md:hidden absolute top-[450px] left-14" animate={{ x: 0 }} transition={{ duration: 1 }}>
        <Image src={slack} alt="banner icons image" />
      </motion.div>
    </>
  );
};

export default Banner;
