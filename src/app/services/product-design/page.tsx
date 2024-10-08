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
            <BreadcrumbComponent pageName="Product Design" />
          </div>
          <div className="mx-auto max-w-screen-xl py-8 lg:py-16">
            <div>
              <h1 className="mb-4 text-3xl md:text-5xl text-center font-poppins font-semibold">
                Product Design
              </h1>
              <p className="mb-8 text-2xl md:text-4xl text-center text-gray-500 dark:text-gray-400 font-poppins font-medium">
                Converting brilliant ideas to screens
              </p>

              <div className="w-full max-w-full sm:max-w-screen-sm md:max-w-screen-xl rounded-2xl overflow-hidden">
                <div className="relative pb-[50%]">
                  <Image
                    src="/services_cards/product_design/product-design.png"
                    alt="websites hero image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl px-4 md:px-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl py-8 lg:py-16">
            <Card className="max-w-screen-sm md:max-w-screen-xl h-fit p-10">
              <CardContent>
                <p className="text-center md:text-left text-xl font-light font-poppins md:text-3xl mr-8 md:mr-24">
                  Have you ever envisioned a groundbreaking startup concept but
                  struggled to translate it into a tangible product?{" "}
                  <span className="text-[#31AFA9]">startup concept</span>{" "}
                  <span>but struggled to translate it into a </span>{" "}
                  <span className="text-[#31AFA9]">tangible product?</span>
                </p>
                <Separator className="my-8" />
                <p className="text-center md:text-left mt-4 lg:mt-8 text-xl font-normal font-poppins md:text-3xl">
                  At BLYMO, we specialize in turning your brilliant ideas into
                  reality through innovative product design solutions.
                </p>
                <div
                  className="text-center md:text-right text-xl font-light font-poppins md:text-3xl text-[#31AFA9]"
                  style={{ marginTop: "5rem" }}
                >
                  Our Approach
                </div>
                <Separator className="my-8" />
                <div className="text-right ml-8 md:ml-24 mt-4 md:mt-8 text-xl font-normal font-poppins md:text-3xl">
                  Collaboration is at the heart of our product design process.
                  Our team of UX Engineers partners closely with you to distill
                  complex concepts into intuitive, user-friendly interfaces.
                  Here's how we achieve exceptional results:
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl py-8 lg:py-16 px-4 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 pb-6">
              <div className="flex flex-col relative overflow-hidden mx-auto">
                <Image
                  src="/card/design-card-1.png"
                  alt="computer"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover h-full"
                />
              </div>
              <div className="flex flex-col mx-auto px-4 md:px-0">
                <p className="text-2xl font-medium font-poppins md:text-4xl text-left mb-4 md:mb-8">
                  Wireframing
                </p>
                <p className="text-xl font-normal font-poppins md:text-2xl text-left text-wrap mb-4 md:mb-8">
                  Wireframing lays the groundwork for your product's design,
                  focusing on structure and functionality rather than
                  aesthetics.
                </p>
                <p className="text-xl font-normal font-poppins md:text-2xl text-left text-wrap">
                  We utilize cutting-edge tools to create detailed blueprints,
                  ensuring every aspect of your product is strategically mapped
                  out.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 md:mt-16 gap-8 md:gap-16">
              <div className="flex flex-col mx-auto px-4 md:px-0 order-2 md:order-1">
                <p className="text-2xl font-medium font-poppins md:text-4xl text-left mb-4 md:mb-8">
                  High-Fidelity Prototypes
                </p>
                <p className="text-xl font-normal font-poppins md:text-2xl text-left text-wrap mb-4 md:mb-8">
                  As your vision takes shape, we transition to high-fidelity
                  prototypes that closely resemble the final product.
                </p>
                <p className="text-xl font-normal font-poppins md:text-2xl text-left text-wrap">
                  Detailed visuals and realistic interactions provide a
                  comprehensive preview of the user experience.
                </p>
              </div>
              <div className="flex flex-col relative overflow-hidden mx-auto my-auto order-1 md:order-2">
                <Image
                  src="/card/design-card-2.png"
                  alt="computer"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover h-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 md:mt-16 gap-8 md:gap-16">
              <div className="flex flex-col relative overflow-hidden mx-auto">
                <Image
                  src="/card/design-card-3.jpeg"
                  alt="computer"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover h-full -mt-7 -ml-2"
                />
              </div>
              <div className="flex flex-col mx-auto px-4 md:px-0">
                <p className="text-2xl font-medium font-poppins md:text-4xl text-left mb-4 md:mb-8">
                  Revisioning
                </p>
                <p className="text-xl md:text-2xl text-left text-wrap mb-4 md:mb-8">
                  Iteration is key to success. We continuously refine and
                  reimagine your design based on feedback and testing results.
                </p>
                <p className="text-xl md:text-2xl text-left text-wrap">
                  Our iterative approach ensures your product evolves to meet
                  the ever-changing needs of your target audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl py-8 lg:py-16">
            <Card className="max-w-screen-sm md:max-w-screen-xl h-fit p-10">
              <CardContent>
                <p className="text-left font-medium font-poppins mt-4 lg:mt-8 text-2xl md:text-3xl">
                  Why choose BLYMO?
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    {" "}
                    Comprehensive Testing:{" "}
                  </span>
                  We conduct rigorous usability testing throughout the design
                  process to ensure your product exceeds expectations.
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    {" "}
                    Effective Communication:{" "}
                  </span>
                  Our prototypes serve as powerful communication tools, aligning
                  stakeholders and development teams around a shared vision
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    Reduced Risk:
                  </span>{" "}
                  By mitigating misunderstandings and misinterpretations early
                  on, we minimize risk and maximize the success of your product
                  launch.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
