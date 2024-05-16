'use server';
import "@animxyz/core";

import { teamMembers } from "../data/team-members";

import Link from "next/link";
import ContactUsForm from "../partials/contactus-form";

export default async function ContactUs() {

    const teamMemberss = teamMembers;

    return (
        <div>
            <section className=" bg-gray-100 px-6 py-10 sm:py-32 lg:px-1">
                <div className="py-5 lg:py-1 mx-auto max-w-screen-xl">
                    <h2 className="mb-8 lg:mb-8 md:text-5xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">Get in Touch</h2>
                </div>
                <div className="py-5 lg:py-1 mx-auto max-w-screen-xl">

                    <p className="text-xl font-light leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        If you&apos;ve got a question for us, want to discuss business opportunities, or discover how BLYMO can assist you&apos; don&apos;t hesitate to get in touch.
                    </p>

                    <h2 className="my-10 lg:mb-8 md:text-3xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">Not a fan of emails? Schedule a meeting with us instead.
                    </h2>

                    <div className="mt-4 pt-5">
                        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3P0OJv3HVyoqUOt4wxx7wrpNtCz-Mn8jWfvPB7WbOsnWsGMTzNDG3vkCQwxx0yLC1B9JHsihCx" target="_blank" className="bg-teal-500 hover:bg-teal-700 text-white font-normal text-2xl py-3 px-7 rounded-full">
                            Start a new project
                        </Link>
                    </div>

                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <div className="grid grid-cols-3 flex-row justify-center">
                        <div className="col-span-2">
                            <h2 className="my-10 lg:mb-8 md:text-4xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">Fill in your details and we&apos;ll be in touch</h2>
                            <ContactUsForm />

                        </div>
                        {/*  <div className="col-span-1 lg:ml-9">
                            <h3 className="my-10 lg:mb-8 md:text-2xl font-light tracking-tight leading-tight text-gray-900 dark:text-white">Connect with us on social media</h3>

                            <a href="#" className="text-teal-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">LinkedIn page</span>
                        </a>
                        <a href="#" className="text-teal-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>

                            <span className="sr-only">Twitter page</span>
                        </a>
                        </div> */}
                    </div>
                </div>
            </section>


        </div>
    )
}
