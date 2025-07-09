import { BriefcaseBusiness } from 'lucide-react';
import Link from "next/link";

export default function Navbar() {
    const user_role = "JOB_SEEKER"; // This should be dynamically set based on the logged-in user
    const navbarConfig = {
        JOB_SEEKER: [
            { title:"All jobs", url:"/jobs" },
            {title: "My applications", url: "/applications" }
        ]
        , EMPLOYER: [
            { title:"Add a job", url:"/add-job" }
        ]
    }

    return <header className="w-full px-10 py-3 flex justify-between border-b">
        <h4 className="font-bold text-lg items-center flex gap-2"><BriefcaseBusiness/>HireMind</h4>
        {user_role ? <div className="space-x-3">
            {
                navbarConfig[user_role].map(each => {
                    return <Link href={each.url} key={each.url}>
                        {each.title}
                    </Link>
                })
            }
        </div> : <Link href={"/sign-in"}>Sign In</Link>
        }
    </header>
}