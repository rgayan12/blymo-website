import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AiIntegration() {
  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 px-4 mx-auto max-w-screen-xl">
            <BreadcrumbComponent pageName="Production -Ready Application" />
          </div>
          <div className="px-4 mx-auto max-w-screen-lg py-8 md:py-16">
            <div>
              <h1 className="mb-4 text-3xl md:text-5xl text-center font-poppins font-semibold">
                AI Integration
              </h1>
              <p className="mb-8 text-2xl md:text-4xl text-center text-gray-500 dark:text-gray-400 font-poppins font-medium">
                Elevating customer experiences with cutting-edge technology.
              </p>

              <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl h-full max-h-[50vh] rounded-2xl overflow-hidden">
                <Image
                  src="/services_cards/ai/ai.jpeg"
                  alt="ai hero image"
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
                  Do you <span className="text-[#31AFA9]">possess</span> a
                  wealth of <span className="text-[#31AFA9]">data</span> waiting
                  to be <span className="text-[#31AFA9]">unlocked</span> for
                  your{" "}
                  <span className="text-[#31AFA9]">
                    customers or employees?
                  </span>
                </p>
                <Separator className="my-8" />
                <p className="text-left mt-4 lg:mt-8 text-xl font-normal font-poppins md:text-3xl">
                  Do you possess a wealth of data waiting to be unlocked for
                  your customers or employees? At Blymo, we specialize in
                  harnessing the power of advanced AI integrations to extract
                  actionable insights and revolutionize user interactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className=" bg-[#F7FFFF] dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="py-2 px-4 mx-auto max-w-screen-lg lg:py-4 w-full">
            <div>
              <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-medium font-poppins md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
                Unlocking Insights with RAG (Retrieval Augmented Generation)
              </h2>
              <div className="text-left font-normal font-poppins mt-4 lg:mt-8 text-xl md:text-3xl">
                Retrieval-Augmented Generation (RAG) optimizes large language
                models (LLMs) by incorporating external knowledge bases into
                their responses. By seamlessly integrating authoritative
                external sources, RAG ensures responses remain relevant,
                accurate, and tailored to specific domains or internal knowledge
                bases.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="py-2 px-4 mx-auto max-w-screen-lg lg:py-4 w-full">
            <div>
              <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-medium font-poppins md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
                How it Works?
              </h2>
              <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-lg h-full overflow-hidden">
                <Image
                  src="/services_cards/ai/how_it_work.png"
                  alt="hero image"
                  height={1000}
                  width={1000}
                  className="rounded-2xl py-8 my-8"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7FFFF] dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="py-2 px-4 mx-auto max-w-screen-lg lg:py-4 w-full">
            <div className="grid md:grid-cols-3 items-start justify-between gap-5">
              <div className="w-full">
                <h3 className="text-2xl font-medium font-poppins text-[#31AFA9] dark:text-gray-500 md:text-3xl py-4 truncate">
                  Data Extraction
                </h3>
                <p className="font-normal font-poppins text-gray-700 dark:text-gray-500 text-2xl">
                  We extract meaningful data from your existing collections,
                  unlocking valuable insights.
                </p>
              </div>

              <div className="w-full">
                <h3 className="text-2xl font-medium font-poppins text-[#31AFA9] dark:text-gray-500 md:text-3xl py-4 truncate">
                  Generative AI
                </h3>
                <p className="font-normal font-poppins text-gray-700 dark:text-gray-500 text-2xl">
                  Using Generative AI, we transform extracted data into dynamic
                  responses that engage and inform your users.
                </p>
              </div>

              <div className="w-full">
                <h3 className="text-2xl font-medium font-poppins text-[#31AFA9] dark:text-gray-500 md:text-3xl py-4 truncate">
                  RAG Implementation
                </h3>
                <p className="font-normal font-poppins text-gray-700 dark:text-gray-500 text-2xl">
                  Seamlessly integrating external knowledge bases into
                  AI-generated responses for enhanced relevance and accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-white dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="py-2 px-4 mx-auto max-w-screen-lg lg:py-4 w-full">
            <div>
              <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-medium font-poppins md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
                Alexa Skill Development
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left font-normal font-poppins mt-4 lg:mt-8 text-xl md:text-3xl pr-4">
                  Looking to enhance user interactions through Alexa? Our team
                  can develop custom Alexa skills that directly communicate with
                  your business knowledge center or answer customer queries.
                  From scoping to implementation, we ensure your Alexa skill
                  leverages cutting-edge technology to meet your needs.
                </div>
                <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-lg h-full overflow-hidden">
                  <Image
                    src="/services_cards/ai/alexa.png"
                    alt="hero image"
                    height={1000}
                    width={1000}
                    className="rounded-2xl py-8 my-8"
                  />
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
                    Cutting-Edge Technology:{" "}
                  </span>
                  Stay ahead with AI integrations leveraging Generative AI and
                  RAG.
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    {" "}
                    Customized Solutions:{" "}
                  </span>
                  Tailored to your business objectives and user requirements.
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    Expert Guidance:
                  </span>
                  Our AI experts provide support throughout the development
                  process.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
