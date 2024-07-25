"use client";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import "@animxyz/core";
import LetsTalk from "@/app/partials/lets-talk";
import ScrollToTopButton from "@/app/partials/moveToTopBtn";

export default function Community() {
  return (
    <div>
      {/* Hero Area */}

      <section background-color="white" className="bg-white dark:bg-gray-900">
        <div
          className="relative border border-gray-80 shadow dark:bg-gray-800 dark:border-gray-700 h-[680px] p-4"
          style={{
            backgroundImage: `url(/community.jpeg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
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
            <div>
              {" "}
              <h2 className="mb-8 lg:mb-8 md:text-5xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">
                Tech Solutions for Good Causes
              </h2>
            </div>
            <div>
              <p className="mb-8 text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                It is at the heart of what we do. We help solo philanthropists
                and community projects with limited budgets to spread their
                value.
              </p>
              <p className="mb-8 text-lg  font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                At BLYMO, we believe in the power of change-makers - individuals
                and organisations dedicated to making a positive impact in our
                world. We are here to support outstanding nonprofit
                organisations, and philanthropists, with pro-bono technological
                solutions provided by our exceptional teams.{" "}
              </p>

              <p className="mb-8 text-lg  font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                Take a look at how we supported the Arachchi Foundation The
                Arachchi Foundation, a bold initiative inspired by the vision of
                philanthropist and real estate investor Leo Arachchi, operates
                as a non-governmental organization committed to addressing
                inequality and conflict. With strong connections to Sri Lanka,
                the UK, and Dubai, the Foundation is dedicated to creating
                positive change in these regions.
              </p>

              <div>
                {" "}
                <h2 className="mb-8 lg:mb-8 lg:pt-10  md:text-4xl font-light tracking-tight leading-tight text-gray-900 dark:text-white">
                  Our Services
                </h2>
              </div>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mb-8 py-2">
                <li className="flex items-center text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                  <Image
                    src="/check.svg"
                    width={40}
                    height={80}
                    alt="our values - integrity"
                    className="mr-4"
                  />
                  <span>Social media branding</span>
                </li>
                <li className="flex items-center text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                  <Image
                    src="/check.svg"
                    width={40}
                    height={80}
                    alt="our values - integrity"
                    className="mr-4"
                  />
                  <span>Content writing</span>
                </li>
                <li className="flex items-center mb-8 text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                  <Image
                    src="/check.svg"
                    width={40}
                    height={80}
                    alt="our values - integrity"
                    className="mr-4"
                  />
                  <span>Website Design and development</span>
                </li>
                <li className="flex items-center mb-8 text-lg font-light text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">
                  <Image
                    src="/check.svg"
                    width={40}
                    height={80}
                    alt="our values - integrity"
                    className="mr-4"
                  />
                  <span>Data visualisation</span>
                </li>
              </ul>
            </div>
          </div>
          <Image
            src="/community-page2.png"
            width={1000}
            height={500}
            alt="our values - integrity"
            className="text-center"
          />
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div className="justify-center grid grid-cols-1">
            <div>
              <h2 className="lg:pt-10  md:text-4xl font-light tracking-tight leading-tight text-gray-900 dark:text-white">
                Result
              </h2>
            </div>

            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-gray-900 dark:text-white">
                    We are profoundly appreciative of the transformative work
                    you've done on our brand. The new branding has not only
                    exceeded our expectations but has also propelled our
                    foundation into a fresh, modern direction that aligns
                    perfectly with our vision. The attention to detail and
                    creativity invested in this project are evident, and we are
                    truly delighted with the results. Thank you for your
                    exceptional efforts and dedication.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <Image
                    className="w-20 h-20 rounded-full"
                    width={500}
                    height={400}
                    src="/leo-arachchi.jpg"
                    alt="leo arachchi picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      The founder of Arachchi Foundation,
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      Leo Arachchi
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">
              All you have to do is submit a project, and we will connect you
              with the expertise and resources you need to amplify your impact.
            </p>
          </div>
        </div>
      </section>

      <LetsTalk
        title="Reach out"
        description="Talk to us about your community project, whether existing or new, and we'll connect you with our experts to amplify its impact."
      />
      <ScrollToTopButton />
    </div>
  );
}
