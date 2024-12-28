import BG from "../../../public/BG.png";
import Vector from "../../../public/Vector.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="container max-sm:px-2 mx-auto my-10 md:my-32">
      <div className="h-[422px] w-full bg-[#8C8AFF] rounded-2xl flex flex-col items-center justify-center relative">
        <Image src={BG} alt="image" className="absolute bottom-0 right-0 max-sm:w-32 md:z-50" />
        <Image src={Vector} alt="image" className="absolute top-10 left-10 z-50" />
        <h2 className="max-sm:px-5 md:w-[770px] text-center text-4xl lg:text-5xl font-bold md:leading-[62px]">Subscribe to get info about the world of job</h2>
        <div className="flex gap-1 items-center justify-center mt-10">
          <Input placeholder="Enter your email address" className="md:w-[470px]" />
          <Button className="bg-slate-950">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
