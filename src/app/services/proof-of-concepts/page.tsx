import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProofOfConcepts() {
  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 px-4 mx-auto max-w-screen-xl">
            <BreadcrumbComponent pageName="Proof of Concepts / MVP" />
          </div>
          <div className="px-4 mx-auto max-w-screen-lg py-8 md:py-16">
            <div>
              <h1 className="mb-4 text-2xl md:text-5xl text-center">
                Proof of Concepts / MVP
              </h1>
              <p className="mb-8 text-2xl md:text-4xl text-center text-gray-500 dark:text-gray-400">
                Test the Waters with Speed and Precision.
              </p>

              <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl h-full max-h-[50vh] rounded-2xl overflow-hidden">
                <Image
                  src="/services_cards/proof_of_concept/proof-of-concepts.jpg"
                  alt="websites hero image"
                  height={1000}
                  width={1000}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 flex items-center pb-8 md:pb-16">
          <div className="px-4 mx-auto max-w-screen-lg py-2 lg:py-4 text-center">
            <Card className="max-w-screen-sm md:max-w-screen-lg h-fit p-10">
              <CardContent>
                <p className="text-left text-xl md:text-3xl mr-8 md:mr-24">
                  Are you eager to <span className="text-[#31AFA9]">test</span>{" "}
                  your{" "}
                  <span className="text-[#31AFA9]">groundbreaking idea</span> in
                  the market but daunted by the prospect of assembling a full
                  development team? <span className="text-[#31AFA9]">Have</span>{" "}
                  you <span className="text-[#31AFA9]">exhausted</span> your
                  patience with <span className="text-[#31AFA9]">no-code</span>{" "}
                  and <span className="text-[#31AFA9]">low-code</span>{" "}
                  platforms, only to find them falling short of your
                  expectations?
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

        <section className="bg-white dark:bg-gray-900 flex items-center py-4 md:py-8 px-4 md:px-0">
          <div className="w-full max-w-screen-sm md:max-w-screen-lg mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:border-l-2 before:border-dashed before:border-gray-500">
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-dashed border-2 border-gray-500 bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div
                    className="rounded-full"
                    style={{
                      width: "27px",
                      height: "27px",
                      backgroundColor: "#31AFA9",
                    }}
                  ></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <h1 className="text-xl md:text-2xl text-left mb-4 ml-4">
                    Boil it Down
                  </h1>
                  <div className="text-lg md:text-xl text-left text-[#252525] font-normal p-8 bg-[#E4F5F4] rounded-[30px]">
                    We start by listening intently to your vision and
                    objectives, distilling them into the most essential
                    components. Our goal is to create a lean, focused MVP that
                    addresses your core value proposition.
                  </div>
                </div>
              </div>
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-dashed border-2 border-gray-500 bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div
                    className="rounded-full"
                    style={{
                      width: "27px",
                      height: "27px",
                      backgroundColor: "#31AFA9",
                    }}
                  ></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <h1 className="text-xl md:text-2xl text-left mb-4 ml-4">
                    Tech Stack
                  </h1>
                  <div className="text-lg md:text-xl text-left text-[#252525] font-normal p-8 bg-[#E4F5F4] rounded-[30px]">
                    Choosing the right tech stack is crucial for the success of
                    your project. We eschew one-size-fits-all solutions like
                    WordPress in favors of tailor-made tech stacks that align
                    perfectly with your unique requirements. Whether it's web,
                    mobile, or desktop applications, we carefully select
                    technologies that lay a solid foundation for future
                    scalability and innovation.
                  </div>
                  <div className="my-4 px-4 block md:hidden">
                    <Image
                      src="/services_cards/proof_of_concept/tech-stack.jpg"
                      alt="tech-stack"
                      height={400}
                      width={400}
                      className="rounded-2xl"
                    />
                  </div>
                </div>

                <div className="absolute hidden md:block md:pl-[calc(55%-0.5rem)] md:pt-[5vh]">
                  <Image
                    src="/services_cards/proof_of_concept/tech-stack.jpg"
                    alt="tech-stack"
                    height={400}
                    width={400}
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-dashed border-2 border-gray-500 bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div
                    className="rounded-full"
                    style={{
                      width: "27px",
                      height: "27px",
                      backgroundColor: "#31AFA9",
                    }}
                  ></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <h1 className="text-xl md:text-2xl text-left mb-4 ml-4">
                    Agile Development
                  </h1>
                  <div className="text-lg md:text-xl text-left text-[#252525] font-normal p-8 bg-[#E4F5F4] rounded-[30px]">
                    We embrace the Agile methodology, breaking down development
                    into iterative cycles that prioritize collaboration,
                    adaptability, and rapid delivery. This approach allows us to
                    remain responsive to your evolving needs and market
                    feedback, ensuring we stay on track to meet your goals.
                  </div>
                  <div className="my-4 px-4 block md:hidden">
                    <Image
                      src="/services_cards/proof_of_concept/agile.png"
                      alt="agile"
                      height={400}
                      width={400}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <div className="absolute hidden md:block md:pr-[calc(60%-0.5rem)] md:pt-[3vh]">
                  <Image
                    src="/services_cards/proof_of_concept/agile.png"
                    alt="agile"
                    height={400}
                    width={400}
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-dashed border-2 border-gray-500 bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div
                    className="rounded-full"
                    style={{
                      width: "27px",
                      height: "27px",
                      backgroundColor: "#31AFA9",
                    }}
                  ></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <h1 className="text-xl md:text-2xl text-left mb-4 ml-4">
                    Integration with External Services
                  </h1>
                  <div className="text-lg md:text-xl text-left text-[#252525] font-normal p-8 bg-[#E4F5F4] rounded-[30px]">
                    Time is of the essence when building an MVP. Rather than
                    reinventing the wheel, we leverage existing APIs and
                    external services to accelerate development and enhance
                    functionality. By tapping into a rich ecosystem of tools and
                    resources, we maximize efficiency without compromising
                    quality.
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
                <p className="text-left font-bold mt-4 lg:mt-8 text-2xl md:text-3xl">
                  Why choose BLYMO?
                </p>
                <p className="text-left mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-bold"> Speed to Market: </span>
                  Our streamlined development process enables us to deliver your
                  MVP in record time, giving you a head start in testing the
                  market and gaining valuable insights.
                </p>
                <p className="text-left mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-bold"> Cost-Effective Solutions </span>
                  We understand the budget constraints faced by startups. Our
                  flexible pricing models and efficient use of resources ensure
                  you get the most bang for your buck without sacrificing
                  quality. Moreover, our long-term partnership model means that
                  as your startup grows, we'll be there every step of the way,
                  providing ongoing support and scaling solutions to meet your
                  evolving needs.
                </p>
                <p className="text-left mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-bold">Tailored Tech Solutions:</span>
                  No two startups are alike, and neither are their tech needs.
                  We take a customized approach to tech stack selection,
                  ensuring your MVP is built on a foundation that supports your
                  long-term vision.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
