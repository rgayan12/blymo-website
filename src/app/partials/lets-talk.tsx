import Link from "next/link";
import NavLinks from "../nav-links";

interface LetsTalkProps {
    title?: string;
    description: string;
}

export default function LetsTalk({ title, description }: LetsTalkProps) {
    return (
        <section className=" bg-gray-100 px-6 py-10 sm:py-32 lg:px-1">
            <div className="py-5 lg:py-1 mx-auto max-w-screen-xl">
                <h2 className="mb-8 lg:mb-8 text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">{title}</h2>
            </div>
            <div className="py-5 lg:py-1 mx-auto max-w-screen-xl">

                <p className="text-xl font-normal leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    {description}
                </p>

                <div className="mt-7 pt-8">
                    <Link href="/contact-us" className="bg-teal-500 hover:bg-teal-700 text-white font-normal text-2xl py-3 px-7 rounded-full">
                        Lets Talk
                        </Link>
                </div>

            </div>
        </section>
    )
}
