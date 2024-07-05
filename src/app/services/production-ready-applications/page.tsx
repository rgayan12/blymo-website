import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProductionReadyApplications() {
  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 px-4 mx-auto max-w-screen-xl">
            <BreadcrumbComponent pageName="Production -Ready Application" />
          </div>
          <div className="px-4 mx-auto max-w-screen-lg py-8 md:py-16">
            <div>
              <h1 className="mb-4 text-2xl md:text-5xl text-center">
                Production -Ready Application
              </h1>
              <p className="mb-8 text-2xl md:text-4xl text-center text-gray-500 dark:text-gray-400">
                Build applications that scale with your business.
              </p>

              <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl h-full max-h-[50vh] rounded-2xl overflow-hidden">
                <Image
                  src="/services_cards/production_ready/production_ready.png"
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
                <p className="text-left text-xl md:text-3xl mr-8 md:mr-24">
                  Are you <span className="text-[#31AFA9]">ready</span> to take
                  your idea to the{" "}
                  <span className="text-[#31AFA9]">next level?</span> Whether
                  you've tested the waters with an MVP or you're prepared to
                  dive headfirst into a new venture,{" "}
                  <span className="text-[#31AFA9]">Blymo</span> is here to{" "}
                  <span className="text-[#31AFA9]">help</span> you{" "}
                  <span className="text-[#31AFA9]">
                    build production-ready applications
                  </span>{" "}
                  that can <span className="text-[#31AFA9]">scale</span> with{" "}
                  <span className="text-[#31AFA9]"> your business.</span>
                </p>
                <Separator className="my-8" />
                <p className="text-left mt-4 lg:mt-8 text-xl md:text-3xl">
                  Enter BLYMO, your partner in swiftly bringing your Minimum
                  Viable Product (MVP) to life. With our streamlined approach
                  and expertise, we empower startups to validate their concepts
                  and iterate quickly, without breaking the bank.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className=" bg-[#F7FFFF] dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="py-2 px-4 mx-auto max-w-screen-lg lg:py-4 w-full">
            <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-normal md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
              Our Process
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="mt-10 lg:mt-0 mx-auto md:mx-0">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-400 rounded-full">
                  <p className="text-white">01</p>
                </div>
                <div className="text-gray-400 mt-3 w-[300px]">
                  <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-500 md:text-4xl my-6">
                    Research
                  </h3>
                  <div>
                    <Image
                      src="/services_cards/production_ready/research.png"
                      alt="hero image"
                      height={300}
                      width={300}
                      className="rounded-2xl py-4"
                    />
                  </div>
                  <p className="my-8 font-medium text-gray-700 dark:text-gray-500 text-xl">
                    We begin by thoroughly understanding your goals, target
                    audience, and market landscape. Our research-driven approach
                    ensures that every decision is rooted in data and insights.
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 mx-auto md:mx-0">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-400 rounded-full">
                  <p className="text-white">02</p>
                </div>
                <div className="text-gray-400 mt-3 w-[300px]">
                  <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-500 md:text-4xl my-6">
                    Design
                  </h3>
                  <div>
                    <Image
                      src="/services_cards/production_ready/design.png"
                      alt="hero image"
                      height={300}
                      width={300}
                      className="rounded-2xl py-4"
                    />
                  </div>
                  <p className="my-8 font-medium text-gray-700 dark:text-gray-500 text-xl">
                    Next, we craft pixel-perfect designs that prioritize user
                    experience and functionality. Our collaborative design
                    process ensures that your vision is brought to life in a way
                    that resonates with your audience.
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 mx-auto md:mx-0">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-400 rounded-full">
                  <p className="text-white">03</p>
                </div>
                <div className="text-gray-400 mt-3 w-[300px]">
                  <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-500 md:text-4xl my-6">
                    Test & Review
                  </h3>
                  <div>
                    <Image
                      src="/services_cards/production_ready/test.png"
                      alt="hero image"
                      height={300}
                      width={300}
                      className="rounded-2xl py-4"
                    />
                  </div>
                  <p className="my-8 font-medium text-gray-700 dark:text-gray-500 text-xl">
                    Rigorous testing ensures that your application meets the
                    highest standards of quality and reliability. We iterate
                    based on feedback, ensuring that your application is finely
                    tuned for success.
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-0 mx-auto md:mx-0">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-400 rounded-full">
                  <p className="text-white">04</p>
                </div>
                <div className="text-gray-400 mt-3 w-[300px]">
                  <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-500 md:text-4xl my-6">
                    Development
                  </h3>
                  <div>
                    <Image
                      src="/services_cards/production_ready/development.png"
                      alt="hero image"
                      height={300}
                      width={300}
                      className="rounded-2xl py-4"
                    />
                  </div>
                  <p className="my-8 font-medium text-gray-700 dark:text-gray-500 text-xl">
                    With a mutually agreed-upon tech stack and a team of skilled
                    developers ready to tackle any challenge, we bring your
                    designs to life with clean, scalable code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="py-2 px-4 mx-auto max-w-screen-lg lg:py-4 text-center">
            <Card className="max-w-screen-sm md:max-w-screen-lg h-fit p-10">
              <CardContent>
                <p className="text-left font-bold mt-4 lg:mt-8 text-2xl md:text-3xl">
                  Why choose BLYMO?
                </p>
                <p className="text-left mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-bold"> Scalable Solutions: </span>
                  Our applications are built to grow with your business,
                  ensuring that you're prepared for whatever the future holds.
                </p>
                <p className="text-left mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-bold"> Agile Development: </span>
                  We prioritize flexibility and adaptability, delivering value
                  to you quickly and continuously.
                </p>
                <p className="text-left mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-bold">
                    Expertise and Collaboration:
                  </span>
                  With a team of experienced developers and designers by your
                  side, you can trust that your project is in good hands. Plus,
                  our commitment to long-term collaboration means that you can
                  rely on us to support you every step of the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
