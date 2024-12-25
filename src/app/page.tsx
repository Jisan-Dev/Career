import Marquee from "react-fast-marquee";
import Image from "next/image";
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
import PostJob from "@/components/home/PostJob";
import Graduating from "@/components/home/Graduating";
import LatestFeaturedJobs from "@/components/home/LatestFeaturedJobs";
import Newsletter from "@/components/home/Newsletter";
import Banner from "@/components/home/Banner";

export default function Home() {
  return (
    <div className="w-full pt-6 sm:pt-12 relative overflow-x-hidden">
      {/* banner */}
      <Banner />
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
      <PostJob />
      <Graduating />
      <LatestFeaturedJobs />
      <Newsletter />
    </div>
  );
}
