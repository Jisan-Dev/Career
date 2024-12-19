import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import bannerImg from "../../public/banner.png";
import arrow from "../../public/arrow.png";
import apple from "../../public/apple.png";
import webflow from "../../public/webflow.png";
import google from "../../public/google.png";
import unknown from "../../public/unknown.png";
import behance from "../../public/behance.png";
import slack from "../../public/slack.png";
import m1 from "../../public/m1.png";
import m2 from "../../public/m2.png";
import m3 from "../../public/m3.png";
import m4 from "../../public/m4.png";
import m5 from "../../public/m5.png";
import m6 from "../../public/m6.png";
import m7 from "../../public/m7.png";
import m8 from "../../public/m8.png";
import StatsSection from "@/components/home/StatsSection";
import Category from "@/components/home/Category";

export default function Home() {
  return (
    <div className="w-full pt-12 relative">
      <div className=" text-center max-w-[870px] mx-auto flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold leading-[82px]">Your new job, vacancies all over the world</h1>
        <p className="text-[18px] mt-4 max-w-[670px] text-slate-700 leading-[30px]">
          The best place to discover & apply to the coolest start up jobs. More than 672800 current vacancies from 17750 sites available to you.
        </p>
        <div className="flex w-full max-w-lg items-center space-x-2 my-9">
          {/* <Input type="text" placeholder="Search by Job Title or Company" /> */}
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
          <Button type="submit">Explore Now</Button>
        </div>
        <Image src={bannerImg} alt="banner image" />
      </div>
      <Image src={arrow} className="absolute top-28 right-20" alt="banner arrow image" />
      <Image src={apple} className="absolute top-20 right-14" alt="banner icons image" />
      <Image src={webflow} className="absolute top-64 right-36" alt="banner icons image" />
      <Image src={google} className="absolute top-[450px] right-14" alt="banner icons image" />
      <Image src={arrow} className="absolute top-28 left-20 rotate-180" alt="banner arrow image" />
      <Image src={unknown} className="absolute top-64 left-36" alt="banner icons image" />
      <Image src={behance} className="absolute top-20 left-14" alt="banner icons image" />
      <Image src={slack} className="absolute top-[450px] left-14" alt="banner icons image" />

      {/* Marquee */}
      <div className="bg-[#8C8AFF] py-6">
        <Marquee>
          <Image src={m1} width={140} height={140} alt="company image 1" className="mr-16" />
          <Image src={m2} width={140} height={140} alt="company image 2" className="mr-16" />
          <Image src={m3} width={140} height={140} alt="company image 3" className="mr-16" />
          <Image src={m4} width={140} height={140} alt="company image 4" className="mr-16" />
          <Image src={m5} width={140} height={140} alt="company image 5" className="mr-16" />
          <Image src={m6} width={140} height={140} alt="company image 6" className="mr-16" />
          <Image src={m7} width={140} height={140} alt="company image 7" className="mr-16" />
          <Image src={m8} width={140} height={140} alt="company image 8" className="mr-16" />
        </Marquee>
      </div>

      <StatsSection />
      <Category />
    </div>
  );
}
