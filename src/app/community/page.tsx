"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ScrollToTopButton from "@/app/partials/moveToTopBtn";

export default function Community() {
  return (
    <>
      <div>
        <section className="bg-gray-100 px-6 py-10 sm:py-64 lg:px-0 bg-[url('/community/community.jpeg')] bg-center bg-cover min-h-[100vh]">
          <div className="py-5 lg:py-1 text-center mx-auto max-w-screen-xl">
            <h2 className="mb-8 lg:mb-8 md:text-5xl font-medium font-poppins tracking-tight leading-tight text-white dark:text-white">
              Explore Our Community
            </h2>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-lg px-4">
            <Card className="w-full rounded-xl my-8 shadow-md">
              <div>
                <div>
                  <h2 className="px-4 py-4 md:px-8 mt-8 text-xl md:text-3xl font-semibold font-poppins tracking-tight leading-tight text-[#252525] dark:text-white">
                    Tech Solutions for Good Causes
                  </h2>
                  <div className="p-8">
                    <div className="flex items-center p-8">
                      <div>
                        <Image
                          src="/community/bulb.svg"
                          width={250}
                          height={250}
                          alt="bulb-image"
                          className="text-center"
                          style={{
                            transform: "rotate(-30deg)",
                          }}
                        />
                      </div>
                      <p className="px-4 md:px-8 text-lg md:text-xl font-normal font-poppins text-[#252525]">
                        Tech Solutions for Good Causes It is at the heart of
                        what we do. We help solo philanthropists and community
                        projects with limited budgets to spread their value.
                      </p>
                    </div>
                    <div className="relative flex items-center p-8 mb-8 md:mb-16">
                      <p className="px-4 md:px-8 text-lg md:text-xl font-normal font-poppins text-[#252525]">
                        At BLYMO, we believe in the power of change-makers -
                        individuals and organizations dedicated to making a
                        positive impact in our world. We are here to support
                        outstanding nonprofit organizations, and
                        philanthropists, with pro-bono technological solutions
                        provided by our exceptional teams.
                      </p>
                      <div className="absolute -right-4 -bottom-16">
                        <Image
                          src="/community/spinner.svg"
                          width={200}
                          height={200}
                          alt="our values - integrity"
                          className="text-center"
                          style={{
                            transform: "rotate(180deg)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-[#F7FFFF] dark:bg-gray-900">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-lg px-4">
            <h2 className="max-w-2xl lg:mb-8 mb-4 font-medium font-poppins text-xl md:text-3xl text-[#252525] dark:text-white">
              A Case Study
            </h2>
            <p className="w-full mb-8 font-normal font-poppins text-[#252525] text-lg md:text-xl dark:text-gray-400">
              The Arachchi Foundation, a bold initiative inspired by the vision
              of philanthropist and real estate investor Leo Arachchi, operates
              as a non-governmental organization committed to addressing
              inequality and conflict. With strong connections to Sri Lanka, the
              UK, and Dubai, the Foundation is dedicated to creating positive
              change in these regions. Our services to the Arachchi foundation
              were,
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-8 md:my-16">
              <div>
                <div className="flex flex-col items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/community/hastag.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-normal font-poppins text-center text-[#252525] text-lg md:text-xl">
                    Social media branding
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/community/journal-alt.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-normal font-poppins text-center text-[#252525] text-lg md:text-xl">
                    Content writing
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/display-code.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-normal font-poppins text-center text-[#252525] text-lg md:text-xl">
                    Website Design and development
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/community/chart-histogram.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-normal font-poppins text-center text-[#252525] text-lg md:text-xl">
                    Data visualisation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-lg px-4">
            <div>
              <video
                src="/community/community_video.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-lg px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-4 md:py-8">
              <div>
                <h2 className="max-w-2xl mt-4 mb-2 font-medium font-poppins text-xl md:text-3xl text-[#252525] dark:text-white">
                  From Our
                </h2>
                <h2 className="max-w-2xl font-semibold font-poppins text-xl md:text-3xl text-[#252525] dark:text-white">
                  Community
                </h2>
                <p className="mt-16 text-lg md:text-xl font-normal font-poppins text-[#252525]">
                  Here's what other subscribers had to say about production
                  online
                </p>
              </div>
              <div className="w-full">
                <div className="px-4 md:px-7">
                  <Image
                    src="/community/quotes.svg"
                    width={100}
                    height={100}
                    alt="our values - integrity"
                    className="text-center"
                    style={{ 
                      position: "relative",
                      left: "-7px"
                     }}
                  />
                </div>
                <p className="px-4 md:px-8 text-lg md:text-xl font-normal font-poppins text-[#252525">
                  We are very grateful for the incredible work you've done on
                  our brand. The new branding has surpassed our expectations and
                  has taken our foundation in a modern direction that fits our
                  vision perfectly. Thank you for your exceptional efforts and
                  dedication."
                </p>
                <div className="flex items-center gap-5 px-4 md:px-8 pt-8">
                  <Image
                    src="/logo/leo-logo.png"
                    width={80}
                    height={80}
                    alt="s5-logo"
                  />
                  <div className="flex flex-col">
                    <p className="text-[#252525] font-normal font-poppins md:text-lg dark:text-gray-400">
                      Leo Arachchi
                    </p>
                    <p className="text-[#252525] font-light font-poppins md:text-md dark:text-gray-400">
                      The founder of Arachchi Foundation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7FFFF] dark:bg-gray-900 relative">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-lg px-4">
            <h2 className="lg:mb-8 mb-4 text-start text-2xl font-medium font-poppins md:text-4xl text-[#252525] dark:text-white">
              Reach Out
            </h2>
            <p className="lg:mb-8 mb-4 text-start text-lg font-normal font-poppins md:text-xl text-[#252525] dark:text-white max-w-xl">
              Talk to us about your community project, whether existing or new,
              and we'll connect you with our experts to amplify its impact.
            </p>
            <div className="flex items-start">
              <button
                className="mt-4 mb-8 w-[150px] bg-[#31afa9] hover:bg-[#31afa9]/90 text-white font-semibold py-2 px-4 border rounded-full"
                type="button"
              >
                Let's Talk
              </button>
            </div>
          </div>
          <div className="absolute hidden md:block bottom-0 right-0">
            <Image
              src="/community/girl.svg"
              width={550}
              height={500}
              alt="our values - integrity"
              className="text-center bg-[#F7FFFF]"
            />
          </div>
          <div className="absolute md:hidden bottom-0 right-0">
            <Image
              src="/community/girl.svg"
              width={200}
              height={200}
              alt="our values - integrity"
              className="text-center bg-[#F7FFFF]"
            />
          </div>
        </section>

        <ScrollToTopButton />
      </div>
    </>
  );
}
