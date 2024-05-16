'use server';
import Image from "next/image";
import 'keen-slider/keen-slider.min.css'
import "@animxyz/core";
import LetsTalk from "../partials/lets-talk";

export default async function Community() {
    return (
        <div>
            {/* Hero Area */}

            <section background-color="white" className="bg-white dark:bg-gray-900">
                <div className="relative border border-gray-80 shadow dark:bg-gray-800 dark:border-gray-700 h-[680px] p-4" style={{ backgroundImage: `url(/community.jpeg)`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: 'top' }}>
                    <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
                    <div className="relative">
                        <div>
                            <p className="font-normal text-white dark:text-gray-400 align-text-bottom"></p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <div className="justify-center grid grid-cols-1">
                        <div> <h2 className="mb-8 lg:mb-8 md:text-5xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">Tech Solutions for Good Causes</h2></div>
                        <div>
                            <p className="mb-8 text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                                It is at the hear of what we do. We help solo philanthropists and community projects with limited budgets to spread their message
                            </p>
                            <p className="mb-8 text-lg  font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">At BLYMO,
                                we believe in the power of changemakers - individuals and organisations dedicated to making a positive impact in our world. We are here to support outstanding nonprofit organisations,
                                philanthropists, with pro-bono technological solutions provided by our exceptional teams. </p>

                            <p className="mb-8 text-lg  font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">Take a look at how we supported Arachchi Foundation Arachchi Foundation, a bold initiative, driven by the vision of Leo Arachchi,
                                a philanthropist and businessman with ties to both Sri Lanka and the UK, is a non-governmental organisation committed to tackling inequality and conflict in Sri Lanka, as well as in the UK and Dubai.
                                Our Services Social media branding Website Design and development Data visualisation</p>

                            <div> <h2 className="mb-8 lg:mb-8 lg:pt-10  md:text-4xl font-light tracking-tight leading-tight text-gray-900 dark:text-white">We can help you with</h2></div>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mb-8 py-2">

                                <li className="flex items-center text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                                    <Image src="/check.svg" width={40} height={80} alt="our values - integrity" className="mr-4" />
                                    <span>Social media management</span>
                                </li>
                                <li className="flex items-center text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                                    <Image src="/check.svg" width={40} height={80} alt="our values - integrity" className="mr-4" />
                                    <span>Content writing</span>
                                </li>
                                <li className="flex items-center mb-8 text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                                    <Image src="/check.svg" width={40} height={80} alt="our values - integrity" className="mr-4" />
                                    <span>Website Design and Development</span>
                                </li>
                                <li className="flex items-center mb-8 text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                                    <Image src="/check.svg" width={40} height={80} alt="our values - integrity" className="mr-4" />
                                    <span>Data visualisation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Image src="/community-page2.png" width={1000} height={500} alt="our values - integrity" className="text-center" />

                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900 dark:text-white">&apos;We&apos;re incredibly grateful for the transformative work you&apos;ve done on our brand. The new branding has exceeded our expectations, propelling our foundation into a fresh, modern direction that we absolutely adore.&apos;</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <Image className="w-20 h-20 rounded-full" width={500} height={400} src="/leo-arachchi.jpg" alt="leo arachchi picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">Leo Arachchi</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Founder Arachchi Corporation</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>


            <LetsTalk title="Reach out" description="Talk to us about your community project, whether existing or new, and we'll connect you with our experts to amplify its impact." />

        </div>
    )
}
