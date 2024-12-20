import Image from "next/image";
import chele from "../../../public/chele.png";
import s1 from "../../../public/s1.svg";

const Graduating = () => {
  return (
    <div className="container mx-auto my-32 flex items-center gap-32">
      <div className="bg-[#8C8AFF] w-[470px] h-[520px] rounded-lg flex items-center justify-center relative">
        <Image src={chele} height={578} alt="image" className="-mt-16" />
        <Image src={s1} height={123} alt="image" className="absolute -top-11 -right-10" />
      </div>
      <div>
        <h2 className="w-[570px] text-[52px] font-bold leading-[62px]">Just graduating? We can help.</h2>
        <p className="w-[470px] text-lg font-normal text-slate-600 leading-[30px] mt-4 mb-8">
          We ensure your next step is a step forward. That's why we built a jobs marketplace that serves all kind of professionals first.
        </p>
        <p className="text-[22px] font-bold leading-loose">Visit the new grad hub</p>
        <p className="text-[22px] font-bold leading-loose">Search salaries by major</p>
        <p className="text-[22px] font-bold leading-loose">Get a free resume assessment</p>
        <p className="text-[22px] font-bold leading-loose">Search entry level jobs</p>
      </div>
    </div>
  );
};

export default Graduating;
