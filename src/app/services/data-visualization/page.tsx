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
                Data Visualization
              </h1>
              <p className="mb-8 text-2xl md:text-4xl text-center text-gray-500 dark:text-gray-400 font-poppins font-medium">
                Gain insights from your data.
              </p>

              <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-xl h-full max-h-[50vh] rounded-2xl overflow-hidden">
                <Image
                  src="/services_cards/data-visualization/data-visualization.jpeg"
                  alt="data visualization hero image"
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
                  At Blymo, we're in the business of{" "}
                  <span className="text-[#31AFA9]">transforming data</span> into
                  captivating tales of{" "}
                  <span className="text-[#31AFA9]">insight</span> and{" "}
                  <span className="text-[#31AFA9]">opportunity.</span>
                </p>
                <Separator className="my-8" />
                <p className="text-left font-normal font-poppins mt-4 lg:mt-8 text-xl md:text-3xl">
                  Imagine a world where complex data tells a story, where every
                  chart and graph opens doors to understanding, and
                  sophisticated datasets are easily illustrated
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
              <div className="relative cursor-pointer w-full max-w-screen-sm md:max-w-screen-lg h-full overflow-hidden">
                <Image
                  src="/services_cards/data-visualization/how_it_work.png"
                  alt="hero image"
                  height={1000}
                  width={1000}
                  className="rounded-2xl py-8 my-8"
                />
              </div>
              <div className="text-left font-normal font-poppins mt-4 lg:mt-8 text-xl md:text-3xl">
                We start engagements by identifying critical questions and
                decisions that data should support across our business areas,
                including tech, sales, supply chains, procurement, and research
                data analytics. This involves determining the available data and
                identifying the additional data needed to inform the who, what,
                when, where, and how of the decision-making process.
              </div>
              <div className="text-left font-normal font-poppins mt-4 lg:mt-8 text-xl md:text-3xl">
                The output turns raw data into useful information by creating
                automated reports, interactive dashboards, and predictive tools.
                These are built into the workflow to help make better decisions
                throughout organizations.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 flex items-center py-8 md:py-16">
          <div className="mx-auto max-w-screen-sm md:max-w-screen-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 pb-6">
              <div className="flex flex-col relative overflow-hidden mx-auto">
                <Image
                  src="/services_cards/data-visualization/dashboard.jpeg"
                  alt="computer"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover h-full"
                />
              </div>
              <div className="flex flex-col mx-auto px-4 md:px-0">
                <p className="text-2xl font-medium font-poppins md:text-4xl text-left mb-4 md:mb-8">
                  Interactive Dashboards
                </p>
                <p className="text-xl font-normal font-poppins md:text-2xl text-left text-wrap mb-4 md:mb-8">
                  We design and develop interactive dashboards that enable users
                  to filter data, drill down into details, and explore
                  information in real-time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 md:mt-16 gap-8 md:gap-16">
              <div className="flex flex-col mx-auto px-4 md:px-0 order-2 md:order-1">
                <p className="text-2xl font-medium font-poppins md:text-4xl text-left mb-4 md:mb-8">
                  Custom Reporting
                </p>
                <p className="text-xl font-normal font-poppins md:text-2xl text-left text-wrap mb-4 md:mb-8">
                  We develop customized reports to fit your business needs,
                  including various metrics and key performance indicators
                  (KPIs).
                </p>
              </div>
              <div className="flex flex-col relative overflow-hidden mx-auto my-auto order-1 md:order-2">
                <Image
                  src="/services_cards/data-visualization/reporting.png"
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
                  src="/services_cards/data-visualization/tools.png"
                  alt="computer"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover h-full -mt-7 -ml-2"
                />
              </div>
              <div className="flex flex-col mx-auto px-4 md:px-0">
                <p className="text-2xl font-medium font-poppins md:text-4xl text-left mb-4 md:mb-8">
                  Utilizing Industry-Standard Tools and Technologies
                </p>
                <p className="text-xl font-normal font-poppins md:text-2xl text-left text-wrap mb-4 md:mb-8">
                  We utilize industry-standard tools and technologies for data
                  analysis and reporting, from generalized and widely used tools
                  like R and Python for data analysis to business-specific tools
                  such as Microsoft Power BI for business intelligence, ArcGIS
                  or QGIS for geospatial data analysis, and Apache Spark for
                  efficient big data processing.
                </p>
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
                    Creative Thinkers with Spatial Expertise:{" "}
                  </span>
                  We excel not just in data analysis and creating visually
                  appealing charts, but also in thinking creatively. Our team
                  possesses the spatial knowledge to understand your unique
                  requirements and tailor our visualizations to uncover hidden
                  stories within your data.
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    {" "}
                    Customized Solutions for Maximum Impact:{" "}
                  </span>
                  We offer bespoke solutions that cater specifically to your
                  business needs. By combining innovative visualization
                  techniques with deep market insights, we ensure that our
                  analyses are not only accurate but also actionable, driving
                  tangible results for your business.
                </p>
                <p className="text-left font-light font-poppins mt-4 lg:mt-8 text-xl md:text-2xl">
                  <span className="font-normal font-poppins">
                    Global Team of Experts:
                  </span>{" "}
                  Our international team of experts brings extensive experience
                  across various industries. This global perspective allows us
                  to anticipate market trends and customer behaviors
                  effectively, providing strategic guidance to help you stay
                  ahead of the competition and achieve long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
