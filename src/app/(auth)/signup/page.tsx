import { SignupForm } from "@/components/signup-form";
import Image from "next/image";
import signupImg from "../../../../public/signup.png";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 container mx-auto">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image src={signupImg} className="w-full object-cover" alt="signup page image" />
      </div>
    </div>
  );
}
