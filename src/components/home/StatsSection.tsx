"use client";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";

const StatsSection = () => {
  const [recruiterMessages, setRecruiterMessages] = useState<number>(0);
  const [jobOpportunities, setJobOpportunities] = useState<number>(0);
  const [offersMade, setOffersMade] = useState<number>(0);
  const [successRate, setSuccessRate] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && jobOpportunities === 0 && recruiterMessages === 0 && offersMade === 0 && successRate === 0) {
    setRecruiterMessages(500);
    setJobOpportunities(40);
    setOffersMade(17);
    setSuccessRate(97);
  }

  return (
    <section className="py-36 container mx-auto px-10">
      <div>
        <div className="flex justify-between items-center mb-16">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="w-[570px] text-[52px] font-bold leading-[62px]">
            The fast track to your next job
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="w-[470px] text-[#574f4a] text-lg font-normal leading-[30px]">
            We ensure your next step is a step forward. That’s why we built a jobs marketplace that serves all kinds of professionals first.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {/* Card 1 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="bg-[#e6e6ff] p-6 py-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-12 w-12 bg-indigo-100 rounded-full mb-4">
              <svg width="50" height="52" viewBox="0 0 50 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 18573">
                  <path id="layer2" d="M21 7H1V61H49V7H29" stroke="#1313b4" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="layer1" d="M21 1H29V11H21V1Z" stroke="#1313b4" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="layer2_2" d="M37 47H13M29 55H13" stroke="#1313b4" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    id="layer1_2"
                    d="M25 30C28.3137 30 31 27.3137 31 24C31 20.6863 28.3137 18 25 18C21.6863 18 19 20.6863 19 24C19 27.3137 21.6863 30 25 30Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="layer1_3"
                    d="M35 40C35 37.3478 33.9464 34.8043 32.0711 32.9289C30.1957 31.0536 27.6522 30 25 30C22.3478 30 19.8043 31.0536 17.9289 32.9289C16.0536 34.8043 15 37.3478 15 40H35Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Create one profile</h3>
            <p className="text-gray-600 mb-4">Build your reputation with a universal profile that works across hundreds of different kinds of employers.</p>
            <button className="group text-indigo-600 font-medium flex items-center gap-2">
              Get Started <MoveRight className="-ms-1 me-2 mt-[2px] transition-transform group-hover:translate-x-0.5" size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="bg-[#e6e6ff] p-6 py-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-12 w-12 bg-indigo-100 rounded-full mb-4">
              <svg width="72" height="62" viewBox="0 0 72 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 18572">
                  <path
                    id="layer2"
                    d="M7.92338 9.07698C8.56063 9.07698 9.07723 8.56039 9.07723 7.92313C9.07723 7.28588 8.56063 6.76929 7.92338 6.76929C7.28613 6.76929 6.76953 7.28588 6.76953 7.92313C6.76953 8.56039 7.28613 9.07698 7.92338 9.07698Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="layer2_2"
                    d="M15.9996 9.07698C16.6368 9.07698 17.1534 8.56039 17.1534 7.92313C17.1534 7.28588 16.6368 6.76929 15.9996 6.76929C15.3623 6.76929 14.8457 7.28588 14.8457 7.92313C14.8457 8.56039 15.3623 9.07698 15.9996 9.07698Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="layer2_3"
                    d="M24.0767 9.07698C24.714 9.07698 25.2305 8.56039 25.2305 7.92313C25.2305 7.28588 24.714 6.76929 24.0767 6.76929C23.4394 6.76929 22.9229 7.28588 22.9229 7.92313C22.9229 8.56039 23.4394 9.07698 24.0767 9.07698Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="layer2_4"
                    d="M61.0001 14.8462V1H1V14.8462M61.0001 14.8462H1M61.0001 14.8462V35.6154M1 14.8462V51.7693H44.8462"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="layer1"
                    d="M51.7689 54.0769C58.1415 54.0769 63.3074 48.911 63.3074 42.5385C63.3074 36.1659 58.1415 31 51.7689 31C45.3964 31 40.2305 36.1659 40.2305 42.5385C40.2305 48.911 45.3964 54.0769 51.7689 54.0769Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path id="layer1_2" d="M60.0771 50.8462L70.231 61" stroke="#1313b4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Explore your options</h3>
            <p className="text-gray-600 mb-4">Select your preferences (shift details, salary, location, etc.) and discover jobs most relevant to you.</p>
            <button className="group text-indigo-600 font-medium flex items-center gap-2">
              Get Started <MoveRight className="-ms-1 me-2 mt-[2px] transition-transform group-hover:translate-x-0.5" size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="bg-[#e6e6ff] p-6 py-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-12 w-12 bg-indigo-100 rounded-full mb-4">
              <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 18574">
                  <path id="layer2" d="M32.8 27H41V34L48.6 27H61V1H23V19" stroke="#1313b4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    id="layer2_2"
                    d="M42 14C42.5523 14 43 13.5523 43 13C43 12.4477 42.5523 12 42 12C41.4477 12 41 12.4477 41 13C41 13.5523 41.4477 14 42 14Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="layer2_3"
                    d="M34 14C34.5523 14 35 13.5523 35 13C35 12.4477 34.5523 12 34 12C33.4477 12 33 12.4477 33 13C33 13.5523 33.4477 14 34 14Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="layer2_4"
                    d="M50 14C50.5523 14 51 13.5523 51 13C51 12.4477 50.5523 12 50 12C49.4477 12 49 12.4477 49 13C49 13.5523 49.4477 14 50 14Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="layer1"
                    d="M36.4 53.3C28.2 51.9 29 49.8 29 48.4V45.9C30.3107 44.5713 31.3403 42.9922 32.0275 41.2569C32.7148 39.5217 33.0455 37.6658 33 35.8V29.1C33 21.8 27.7 19 23 19C18.3 19 13 21.8 13 29.1V35.8C12.9618 37.6737 13.3056 39.5355 14.0105 41.272C14.7154 43.0084 15.7666 44.5831 17.1 45.9V48.4C17.1 49.8 17.8 51.9 9.7 53.3C1.6 54.7 1 59 1 61H45C45 59 43.7 54.6 36.4 53.3Z"
                    stroke="#1313b4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Talk on your terms</h3>
            <p className="text-gray-600 mb-4">Message multiple employers while keeping all communication in one, convenient place. It’s so much easy.</p>
            <button className="group text-indigo-600 font-medium flex items-center gap-2">
              Get Started <MoveRight className="-ms-1 me-2 mt-[2px] transition-transform group-hover:translate-x-0.5" size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div ref={ref} className="flex items-center justify-center bg-[#070828] px-[104px] py-12 rounded-xl mt-6">
          <div className="flex-1 border-r">
            <AnimatedNumber
              className="inline-flex items-center text-[52px] font-bold text-gray-50"
              springOptions={{
                bounce: 0,
                duration: 6000,
              }}
              value={recruiterMessages}
              suffix="k+"
            />
            <p className="text-gray-50">Messages from recruiters</p>
          </div>
          <div className="flex-1 border-r flex flex-col items-center">
            <div>
              <AnimatedNumber
                className="inline-flex items-center text-[52px] font-bold text-gray-50"
                springOptions={{
                  bounce: 0,
                  duration: 6000,
                }}
                value={jobOpportunities}
                suffix="k"
              />
              <p className="text-gray-50">Job opportunities</p>
            </div>
          </div>
          <div className="flex-1 border-r flex flex-col items-center">
            <div>
              <AnimatedNumber
                className="inline-flex items-center text-[52px] font-bold text-gray-50"
                springOptions={{
                  bounce: 0,
                  duration: 6000,
                }}
                value={offersMade}
                suffix="k"
              />
              <p className="text-gray-50">Offers made</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div>
              <AnimatedNumber
                className="inline-flex items-center text-[52px] font-bold text-gray-50"
                springOptions={{
                  bounce: 0,
                  duration: 6000,
                }}
                value={successRate}
                suffix="%"
              />
              <p className="text-gray-50">Hire Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
