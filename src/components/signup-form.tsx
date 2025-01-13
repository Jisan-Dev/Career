"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ToggleBtn from "./ToggleBtn";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { uploadImage } from "@/lib/uploadImage";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";
import { register } from "@/actions/register";
import { signIn } from "next-auth/react";

export const SignupFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  firstName: z.string().min(2, "First name must be at least 2 characters").optional().or(z.literal("")),
  lastName: z.string().min(2, "Last name must be at least 2 characters").optional().or(z.literal("")),
  companyName: z.string().min(2, "Company name must be at least 2 characters").optional().or(z.literal("")),
  position: z.string().optional().or(z.literal("")),
  image: z.string(),
});

export function SignupForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [selectedValue, setSelectedValue] = useState("off");
  const [selectImg, setSelectImg] = useState<File>();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      companyName: "",
      position: "",
      image: "",
    },
  });

  useEffect(() => {
    form.resetField("firstName");
    form.resetField("lastName");
    form.resetField("companyName");
    form.resetField("position");
  }, [selectedValue]);

  const onSubmit = async (data: z.infer<typeof SignupFormSchema>) => {
    if (data.firstName && data.lastName && selectedValue === "off") {
      delete data.companyName;
      delete data.position;
    } else {
      delete data.firstName;
      delete data.lastName;
    }
    console.log("FormData => ", selectImg, data);

    try {
      const jsonImage = await uploadImage(selectImg!);
      const response = await register({ ...data, role: selectedValue === "off" ? "candidate" : "recruiter", image: jsonImage.url });
      if (!response.success) {
        toast({ title: "Error", description: response.message, variant: "destructive" });
      } else {
        toast({
          title: "Success",
          description: "User registered successfully! Please login to continue",
        });
        router.push("/signin");
      }
    } catch (error) {
      console.error("Error registering user=> ", error);
      toast({
        title: "Error",
        description: "Something went wrong! Please try again",
        variant: "destructive",
        action: (
          <ToastAction onClick={() => onSubmit(data)} altText="Retry">
            Retry
          </ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-balance text-sm text-muted-foreground">Find jobs, events and communities that celebrate your background.</p>
        </div>
        <div>
          <ToggleBtn selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
            {selectedValue === "off" ? (
              <div className="flex gap-2 w-full">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="first name" required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="last name" required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ) : (
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="company name" required className="w-full" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Position</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="your position" required className="w-full" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="m@example.com" required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image/Logo</FormLabel>
                    <FormControl>
                      {/* <FormLabel htmlFor="input-30">File input</FormLabel> */}
                      <Input
                        id="input-30"
                        {...field}
                        className="pe-3 file:me-3 file:border-0 file:border-e"
                        type="file"
                        required
                        onChange={(e) => {
                          field.onChange(e);
                          if (e.target.value) {
                            setSelectImg(e.target.files![0]);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                    <FormControl>
                      <Input {...field} placeholder="*******" type="password" required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          </form>
        </Form>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
        <Button
          onClick={() => {
            const res = signIn("google", { redirectTo: "/" });
            // console.log("Google Sign In => ", res);
            // router.push("/");
          }}
          variant="outline"
          className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          Continue with Google
        </Button>
        <div className="text-center text-sm">
          Have an account?{" "}
          <Link href="#" className="underline underline-offset-4">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
