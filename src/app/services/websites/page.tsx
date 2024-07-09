import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProductDesign() {
  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 px-4 mx-auto max-w-screen-xl">
            <BreadcrumbComponent pageName="Data Visualization" />
          </div>
          <div className="px-4 mx-auto max-w-screen-lg py-8 md:py-16">
            <div>
              <h1 className="mb-4 text-3xl md:text-5xl text-center font-poppins font-semibold">
                Websites
              </h1>
              <p className="mb-8 text-2xl md:text-4xl text-center text-gray-500 dark:text-gray-400 font-poppins font-medium">
                Websites that are fast, secure and easy to manage.
              </p>

              <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl h-full max-h-[50vh] rounded-2xl overflow-hidden">
                <Image
                  src="/services_cards/websites/website.jpeg"
                  alt="websites hero image"
                  height={1000}
                  width={1000}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="px-4 mx-auto max-w-screen-lg py-2 lg:py-4 text-center">
            <Card className="max-w-screen-sm md:max-w-screen-lg h-fit p-10">
              <CardContent>
                <p className="text-left text-xl font-light font-poppins md:text-3xl mr-8 md:mr-24">
                  In need of a <span className="text-[#31AFA9]">website</span>to{" "}
                  <span className="text-[#31AFA9]">showcase</span> your{" "}
                  <span className="text-[#31AFA9]">product</span> or{" "}
                  <span className="text-[#31AFA9]">service</span>?
                </p>
                <Separator className="my-8" />
                <p className="text-left font-normal font-poppins mt-4 lg:mt-8 text-xl md:text-3xl">
                  Look no further. At Blymo, we specialize in crafting
                  compelling websites that not only promote your offerings but
                  also engage your audience effectively. With our content-first
                  approach and attention to detail, we bring your vision to
                  life, helping you reach wider audiences and make a lasting
                  impression.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-[#F7FFFF] dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="py-2 px-4 mx-auto max-w-screen-lg lg:py-4 w-full">
            <div>
              <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-medium font-poppins md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
                How it Works?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-4 md:pt-8">
                <div className="max-w-sm bg-white border border-gray-200 rounded-2xl max-h-[90%] shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl max-h-[70%] overflow-hidden">
                    <Image
                      src="/services_cards/websites/content.jpeg"
                      alt="hero image"
                      height={500}
                      width={500}
                      className="rounded-t-2xl"
                    />
                  </div>
                  <div className="p-5 font-medium font-poppins">
                    Content First
                  </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-2xl max-h-[90%] shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl max-h-[70%] overflow-hidden">
                    <Image
                      src="/services_cards/websites/creative.jpeg"
                      alt="hero image"
                      height={500}
                      width={500}
                      className="rounded-t-2xl"
                    />
                  </div>
                  <div className="p-5 font-medium font-poppins">
                    Creative Designs
                  </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-2xl max-h-[90%] shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl max-h-[70%] overflow-hidden">
                    <Image
                      src="/services_cards/websites/responsive.jpeg"
                      alt="hero image"
                      height={500}
                      width={500}
                      className="rounded-t-2xl"
                    />
                  </div>
                  <div className="p-5 font-medium font-poppins">
                    Responsive Development
                  </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-2xl max-h-[90%] shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl max-h-[70%] overflow-hidden">
                    <Image
                      src="/services_cards/websites/seo.jpeg"
                      alt="hero image"
                      height={500}
                      width={500}
                      className="rounded-t-2xl"
                    />
                  </div>
                  <div className="p-5 font-medium font-poppins">
                    SEO-Friendly
                  </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-2xl max-h-[90%] shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl max-h-[70%] overflow-hidden">
                    <Image
                      src="/services_cards/websites/google.jpeg"
                      alt="hero image"
                      height={500}
                      width={500}
                      className="rounded-t-2xl"
                    />
                  </div>
                  <div className="p-5 font-medium font-poppins">
                    Google Page Speed Optimization
                  </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-2xl max-h-[90%] shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl max-h-[70%] overflow-hidden">
                    <Image
                      src="/services_cards/websites/maintenance.jpeg"
                      alt="hero image"
                      height={500}
                      width={500}
                      className="rounded-t-2xl"
                    />
                  </div>
                  <div className="p-5 font-medium font-poppins">
                    Maintenance Included
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="py-2 px-4 mx-auto max-w-screen-lg lg:py-4 text-center">
            <Card className="max-w-screen-sm md:max-w-screen-lg h-fit p-10">
              <CardContent>
                <p className="text-left font-medium font-poppins mt-4 lg:mt-8 text-2xl md:text-3xl">
                  Why choose BLYMO?
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    {" "}
                    Custom Solutions:{" "}
                  </span>
                  We tailor our approach to meet your specific needs and
                  objectives, delivering a website that reflects your unique
                  identity and resonates with your audience.
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    {" "}
                    Proven Expertise:{" "}
                  </span>
                  With years of experience in website development, our team has
                  the skills and know-how to bring your vision to life
                  effectively.
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    Long-Term Partnership:
                  </span>{" "}
                  Our commitment to long-term partnerships means that we're here
                  for you every step of the way, providing ongoing support and
                  guidance to help your website thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
