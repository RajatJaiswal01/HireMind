import { Button } from "@/components/ui/button";
import {Card,CardHeader,CardFooter,CardTitle,CardAction,CardDescription,CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Ghost , Icon, MapPin, Search, ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-2 items-center justify-center h-[70vh] text-center px-4 bg-black">
          <h1 className=" text-2xl sm:text-4xl lg:text-6xl tracking-tighter font-bold text-white">Find Your Dream Job Today</h1>
          <p className="text-gray-200 text-lg">Discover thousands of opportunities on JobPortal and get hired</p>
          <div className="flex items-center gap-2 mt-5">
            <Input className="bg-gray-100" placeholder="Search for Jobs..." />
            <Button className="bg-gray-700" variant="">Search</Button>
        </div>
      </section>

      <section className="flex flex-col w-full gap-2 items-center justify-center py-5  bg-gray-100">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center my-5">Featured Jobs</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">{
          [
            {title: "Product Manager", companyName: "Tech Solutions", location: "New York, NY", salary: "$120,000", url: "/jobs/1"},
            {title: "Software Engineer", companyName: "Innovatech", location: "San Francisco, CA", salary: "$130,000", url: "/jobs/2"},
            {title: "Data Analyst", companyName: "Data Insights", location: "Austin, TX", salary: "$90,000", url: "/jobs/3"},
          ].map((job, idx)=>{
              return <div key={idx} className="flex flex-col gap-1 border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-medium" >{job.title}</h3>
                <h6 className="text-md">{job.companyName}</h6>
                <p className="">{job.salary}</p>
                <p className="flex items-center gap-1 pt-2"><MapPin size="16"/>{job.location}</p>
                <Link href={job.url} className="border border-gray-700 w-full rounded-lg px-4 py-2 text-center bg-gray-200/40">Apply Now</Link>
              </div>
            })
        }</div>
      </section>

      <section className="bg-zinc-900 text-white flex flex-col items-start justify-center text-center px-4 py-10">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center my-5">Join thousands of Job Seekers today!</h2>
        <p>Ready to start your journey with HireMind? Signup for the newsletter to stay updated.</p>
        <div className="flex items-center gap-2 mt-5">
            <Input className="bg-gray-100" placeholder="Enter your Email" />
            <Button className="text-black" variant="outline">Subscribe</Button>
        </div>
      </section>

      <section className="flex flex-col gap-2 items-center justify-center text-center px-4 py-10 ">
        <h4 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center my-5">How it works</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {
          [
            {title: "Search a Job", description: "Browse through thousands of high quality jobs around the world.",Icon: Search}, 
            {title: "Apply with ease", description: "Submit your applications quickly and easily with our user-friendly interface.", Icon: ScrollText },
            {title: "Grow in Career", description: "Find opportunities that match your skills and help you grow in your career.", Icon: MapPin} 
          ].map((each, idx) => {
            return (
              <div key={idx}  >
                <Card>
                  <CardHeader>
                    <each.Icon className="w-8 h-8 text-blue-600 mb-2" /> 
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg font-semibold">{each.title}</CardTitle>
                    <CardDescription className="text-gray-600">{each.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })
        }</div>
      </section>  

      <section className="flex flex-col gap-2 items-center justify-center text-center px-4 bg-gray-300 py-10">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl tracking-tighter font-bold">Join Our Community</h2>
        <p className="text-gray-700 text-lg">Sign up now to get the latest job updates and career advice</p>
        <Link href="/sign-up" className="mt-5">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
        </Link>
      </section>

      <footer className="flex flex-col items-center justify-center text-center px-4 bg-gray-800 py-10 text-white">
        <p className="text-sm">© 2023 JobPortal. All rights reserved.</p>
        <p className="text-sm">Follow us on <Link href="https://twitter.com" className="text-blue-400">Twitter</Link> | <Link href="https://linkedin.com" className="text-blue-400">LinkedIn</Link> | <Link href="https://facebook.com" className="text-blue-400">Facebook</Link></p>
      </footer>
    </>
  );
}
  