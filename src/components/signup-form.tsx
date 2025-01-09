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
import { on } from "events";
import { useRouter } from "next/navigation";

const SignupFormSchema = z.object({
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

      const res = await fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, role: selectedValue === "off" ? "candidate" : "recruiter", image: jsonImage.url }),
      });

      const response = await res.json();
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
        <Button variant="outline" className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          Login with GitHub
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
