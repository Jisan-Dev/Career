import React from "react";
import { Button } from "../ui/button";

interface props {
  company: string;
  role: string;
  salary: string;
  description: string;
  tags: string[];
  logo: React.ReactNode;
}

const JobCard = ({ company, role, salary, description, tags, logo }: props) => (
  <div className="bg-white p-6 rounded-lg shadow-sm  transition-all duration-300 flex flex-col gap-4 cursor-pointer hover:bg-slate-100 border shadow-violet-100">
    <div className="flex items-start gap-4">
      <div className="w-16 h-16 rounded-lg bg-[#070828] overflow-hidden flex items-center justify-center">{logo}</div>
      <div className="flex-1">
        <div className="flex flex-col">
          <h3 className="text-lg text-[#070828] font-bold">{company}</h3>
          <div className="text-sm text-gray-500 mt-2">Full-time Worker</div>
        </div>
      </div>
    </div>

    <div>
      <div className="text-primary font-semibold text-xl">{role}</div>
      <div className="text-sm font-medium text-[#070828]">{salary}</div>
    </div>

    <p className="text-sm text-gray-500">{description}</p>

    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="px-3 py-1 text-xs rounded-lg bg-gray-100 border text-gray-600">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const JobListings = () => {
  const jobs: props[] = [
    {
      company: "TechSolutions Inc.",
      role: "Software Engineer",
      salary: "Salary: $80,000 per year",
      description: "Nunc sed libero sollicitudin faucibus. Aliquam viverra maecenas amet ut porta aliquam nunc morbi. ",
      tags: ["PHP", "Django", "Database"],
      logo: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Logo">
            <path
              id="Vector"
              d="M0 31.7142C5.68067 31.7142 10.2857 26.9172 10.2857 21C10.2857 15.0826 5.68067 10.2856 0 10.2856V17.7856C1.70419 17.7856 3.0857 19.2247 3.0857 21C3.0857 22.7751 1.70419 24.2142 0 24.2142V31.7142Z"
              fill="#D4FF5B"
            />
            <path
              id="Vector_2"
              d="M35.9999 14.6059C34.1167 14.0268 32.1113 13.7144 30.0305 13.7144C19.1257 13.7144 10.2856 22.2952 10.2856 32.88C10.2856 33.9425 10.3747 34.9847 10.5459 36.0001H22.8141C22.3762 35.047 22.1327 33.9912 22.1327 32.88C22.1327 28.6461 25.6686 25.2138 30.0305 25.2138C32.4146 25.2138 34.5518 26.2391 35.9999 27.8602V14.6059Z"
              fill="#F6FFDE"
            />
            <path
              id="Vector_3"
              d="M1.71436 0C2.59618 8.19631 9.3593 14.5714 17.5716 14.5714C25.7837 14.5714 32.5469 8.19631 33.4286 0H22.0188C21.3144 1.81434 19.5886 3.09641 17.5716 3.09641C15.5543 3.09641 13.8287 1.81434 13.1242 0H1.71436Z"
              fill="#D4FF5B"
            />
          </g>
        </svg>
      ),
    },
    {
      company: "HealthCare Ltd.",
      role: "Registered Nurse",
      salary: "Salary: $60,000 - $80,000 per year",
      description: "Nunc sed libero sollicitudin faucibus. Aliquam viverra maecenas amet ut porta aliquam nunc morbi. ",
      tags: ["Nursing", "CPN Certification"],
      logo: (
        <svg width="45" height="34" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Logo">
            <path
              id="Vector"
              d="M15.1229 0H24.1217L20.5096 10.0943C14.152 11.2115 9.28944 17.3625 9.28944 24.783C9.28944 28.1305 10.279 31.2197 11.9489 33.7049H0L10.9236 3.17808C11.6104 1.25863 13.2735 0 15.1229 0Z"
              fill="#8C8AFF"
            />
            <path
              id="Vector_2"
              d="M29.8167 0H20.8179L24.4148 10.0517C30.8989 11.0452 35.894 17.262 35.894 24.783C35.894 28.1305 34.9044 31.2197 33.2345 33.7049H44.9396L34.016 3.17809C33.3292 1.25863 31.6661 0 29.8167 0Z"
              fill="#8C8AFF"
            />
            <path
              id="Vector_3"
              d="M13.5183 32.7334C11.9805 30.5434 11.0635 27.7829 11.0635 24.7829C11.0635 17.6655 16.2251 11.8958 22.5922 11.8958C28.9594 11.8958 34.121 17.6655 34.121 24.7829C34.121 27.7829 33.204 30.5434 31.6662 32.7334C29.1417 30.854 25.9989 29.7395 22.5922 29.7395C19.1856 29.7395 16.0428 30.854 13.5183 32.7334Z"
              fill="#D9D8FF"
            />
          </g>
        </svg>
      ),
    },
    {
      company: "EducationFirst Corp",
      role: "English Teacher",
      salary: "Salary: $45,000 - $50,000 per year",
      description: "Nunc sed libero sollicitudin faucibus. Aliquam viverra maecenas amet ut porta aliquam nunc morbi. ",
      tags: ["TEFL Certification", "Education"],
      logo: (
        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Logo">
            <path
              id="Vector"
              d="M0 19C0 10.0433 0 5.56497 2.81555 2.78248C5.6311 0 10.1627 0 19.2258 0C28.2889 0 32.8205 0 35.6361 2.78248C38.4516 5.56497 38.4516 10.0433 38.4516 19C38.4516 27.9567 38.4516 32.435 35.6361 35.2175C32.8205 38 28.2889 38 19.2258 38C10.1627 38 5.6311 38 2.81555 35.2175C0 32.435 0 27.9567 0 19Z"
              fill="#D4FF5B"
            />
            <path
              id="Vector_2"
              d="M23.071 24.7C23.602 24.7 24.042 25.1294 23.9366 25.6437C23.7502 26.5519 23.2974 27.3937 22.6245 28.0587C21.7232 28.9495 20.5006 29.45 19.2259 29.45C17.9511 29.45 16.7286 28.9495 15.8272 28.0587C15.1543 27.3937 14.7016 26.5519 14.5153 25.6437C14.4097 25.1294 14.8498 24.7 15.3807 24.7H23.071Z"
              fill="#070828"
            />
            <path
              id="Vector_3"
              d="M25.0918 16.8878C24.5789 17.0235 24.2649 17.5537 24.5249 18.0111C24.7986 18.4926 25.1771 18.9128 25.6377 19.2389C26.3608 19.751 27.2411 19.9995 28.1289 19.9419C29.0165 19.8845 29.8566 19.5246 30.5059 18.9236C31.1552 18.3227 31.5735 17.5177 31.6896 16.6461C31.8057 15.7745 31.6125 14.89 31.1427 14.1434C30.6729 13.3969 29.9557 12.8344 29.1133 12.5518C28.271 12.2692 27.3555 12.284 26.5229 12.5937C25.9927 12.7909 25.5171 13.0999 25.1266 13.4949C24.7556 13.8703 24.9201 14.4628 25.3799 14.7251L25.8675 15.0034C26.6092 15.4266 26.463 16.5247 25.6357 16.7438L25.0918 16.8878Z"
              fill="#070828"
            />
            <path
              id="Vector_4"
              d="M13.3597 16.8878C13.8726 17.0235 14.1866 17.5537 13.9266 18.0111C13.6529 18.4926 13.2744 18.9128 12.8139 19.2389C12.0908 19.751 11.2104 19.9995 10.3227 19.9419C9.435 19.8845 8.59493 19.5246 7.94565 18.9236C7.29637 18.3227 6.87802 17.5177 6.76191 16.6461C6.64579 15.7745 6.83908 14.89 7.30885 14.1434C7.77862 13.3969 8.4958 12.8344 9.33818 12.5518C10.1806 12.2692 11.0961 12.284 11.9287 12.5937C12.4588 12.7909 12.9346 13.0999 13.325 13.4949C13.696 13.8703 13.5314 14.4628 13.0716 14.7251L12.584 15.0034C11.8423 15.4266 11.9886 16.5247 12.8158 16.7438L13.3597 16.8878Z"
              fill="#070828"
            />
          </g>
        </svg>
      ),
    },
    {
      company: "EducationFirst Corp",
      role: "English Teacher",
      salary: "Salary: $45,000 - $50,000 per year",
      description: "Nunc sed libero sollicitudin faucibus. Aliquam viverra maecenas amet ut porta aliquam nunc morbi. ",
      tags: ["TEFL Certification", "Education"],
      logo: (
        <svg width="45" height="34" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Logo">
            <path
              id="Vector"
              d="M15.1229 0H24.1217L20.5096 10.0943C14.152 11.2115 9.28944 17.3625 9.28944 24.783C9.28944 28.1305 10.279 31.2197 11.9489 33.7049H0L10.9236 3.17808C11.6104 1.25863 13.2735 0 15.1229 0Z"
              fill="#8C8AFF"
            />
            <path
              id="Vector_2"
              d="M29.8167 0H20.8179L24.4148 10.0517C30.8989 11.0452 35.894 17.262 35.894 24.783C35.894 28.1305 34.9044 31.2197 33.2345 33.7049H44.9396L34.016 3.17809C33.3292 1.25863 31.6661 0 29.8167 0Z"
              fill="#8C8AFF"
            />
            <path
              id="Vector_3"
              d="M13.5183 32.7334C11.9805 30.5434 11.0635 27.7829 11.0635 24.7829C11.0635 17.6655 16.2251 11.8958 22.5922 11.8958C28.9594 11.8958 34.121 17.6655 34.121 24.7829C34.121 27.7829 33.204 30.5434 31.6662 32.7334C29.1417 30.854 25.9989 29.7395 22.5922 29.7395C19.1856 29.7395 16.0428 30.854 13.5183 32.7334Z"
              fill="#D9D8FF"
            />
          </g>
        </svg>
      ),
    },
    {
      company: "HealthCare Ltd.",
      role: "Registered Nurse",
      salary: "Salary: $60,000 - $80,000 per year",
      description: "Nunc sed libero sollicitudin faucibus. Aliquam viverra maecenas amet ut porta aliquam nunc morbi. ",
      tags: ["Nursing", "CPN Certification"],
      logo: (
        <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Logo">
            <path
              id="Vector"
              d="M0 19C0 10.0433 0 5.56497 2.81555 2.78248C5.6311 0 10.1627 0 19.2258 0C28.2889 0 32.8205 0 35.6361 2.78248C38.4516 5.56497 38.4516 10.0433 38.4516 19C38.4516 27.9567 38.4516 32.435 35.6361 35.2175C32.8205 38 28.2889 38 19.2258 38C10.1627 38 5.6311 38 2.81555 35.2175C0 32.435 0 27.9567 0 19Z"
              fill="#D4FF5B"
            />
            <path
              id="Vector_2"
              d="M23.071 24.7C23.602 24.7 24.042 25.1294 23.9366 25.6437C23.7502 26.5519 23.2974 27.3937 22.6245 28.0587C21.7232 28.9495 20.5006 29.45 19.2259 29.45C17.9511 29.45 16.7286 28.9495 15.8272 28.0587C15.1543 27.3937 14.7016 26.5519 14.5153 25.6437C14.4097 25.1294 14.8498 24.7 15.3807 24.7H23.071Z"
              fill="#070828"
            />
            <path
              id="Vector_3"
              d="M25.0918 16.8878C24.5789 17.0235 24.2649 17.5537 24.5249 18.0111C24.7986 18.4926 25.1771 18.9128 25.6377 19.2389C26.3608 19.751 27.2411 19.9995 28.1289 19.9419C29.0165 19.8845 29.8566 19.5246 30.5059 18.9236C31.1552 18.3227 31.5735 17.5177 31.6896 16.6461C31.8057 15.7745 31.6125 14.89 31.1427 14.1434C30.6729 13.3969 29.9557 12.8344 29.1133 12.5518C28.271 12.2692 27.3555 12.284 26.5229 12.5937C25.9927 12.7909 25.5171 13.0999 25.1266 13.4949C24.7556 13.8703 24.9201 14.4628 25.3799 14.7251L25.8675 15.0034C26.6092 15.4266 26.463 16.5247 25.6357 16.7438L25.0918 16.8878Z"
              fill="#070828"
            />
            <path
              id="Vector_4"
              d="M13.3597 16.8878C13.8726 17.0235 14.1866 17.5537 13.9266 18.0111C13.6529 18.4926 13.2744 18.9128 12.8139 19.2389C12.0908 19.751 11.2104 19.9995 10.3227 19.9419C9.435 19.8845 8.59493 19.5246 7.94565 18.9236C7.29637 18.3227 6.87802 17.5177 6.76191 16.6461C6.64579 15.7745 6.83908 14.89 7.30885 14.1434C7.77862 13.3969 8.4958 12.8344 9.33818 12.5518C10.1806 12.2692 11.0961 12.284 11.9287 12.5937C12.4588 12.7909 12.9346 13.0999 13.325 13.4949C13.696 13.8703 13.5314 14.4628 13.0716 14.7251L12.584 15.0034C11.8423 15.4266 11.9886 16.5247 12.8158 16.7438L13.3597 16.8878Z"
              fill="#070828"
            />
          </g>
        </svg>
      ),
    },
    {
      company: "TechSolutions Inc.",
      role: "Software Engineer",
      salary: "Salary: $80,000 per year",
      description: "Nunc sed libero sollicitudin faucibus. Aliquam viverra maecenas amet ut porta aliquam nunc morbi. ",
      tags: ["PHP", "Django", "Database"],
      logo: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Logo">
            <path
              id="Vector"
              d="M0 31.7142C5.68067 31.7142 10.2857 26.9172 10.2857 21C10.2857 15.0826 5.68067 10.2856 0 10.2856V17.7856C1.70419 17.7856 3.0857 19.2247 3.0857 21C3.0857 22.7751 1.70419 24.2142 0 24.2142V31.7142Z"
              fill="#D4FF5B"
            />
            <path
              id="Vector_2"
              d="M35.9999 14.6059C34.1167 14.0268 32.1113 13.7144 30.0305 13.7144C19.1257 13.7144 10.2856 22.2952 10.2856 32.88C10.2856 33.9425 10.3747 34.9847 10.5459 36.0001H22.8141C22.3762 35.047 22.1327 33.9912 22.1327 32.88C22.1327 28.6461 25.6686 25.2138 30.0305 25.2138C32.4146 25.2138 34.5518 26.2391 35.9999 27.8602V14.6059Z"
              fill="#F6FFDE"
            />
            <path
              id="Vector_3"
              d="M1.71436 0C2.59618 8.19631 9.3593 14.5714 17.5716 14.5714C25.7837 14.5714 32.5469 8.19631 33.4286 0H22.0188C21.3144 1.81434 19.5886 3.09641 17.5716 3.09641C15.5543 3.09641 13.8287 1.81434 13.1242 0H1.71436Z"
              fill="#D4FF5B"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="md:px-10 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {jobs.map<React.ReactElement>((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <Button size={"lg"} className="tracking-wider">
          BROWSE MORE
        </Button>
      </div>
    </div>
  );
};

export default JobListings;
