"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import ScrollToTopButton from "@/app/partials/moveToTopBtn";

export default function ContactUs() {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordionChange = (value: any) => {
    setOpenItem(value === openItem ? null : value);
  };

  return (
    <>
      <div>
        <section className="relative bg-gray-100 px-6 py-10 sm:py-52 lg:px-0 bg-[url('/contact-us/header-image.jpeg')] bg-cover bg-center min-h-[100vh]">
          <div className="absolute inset-0 bg-[#1D1D1D] opacity-35"></div>
          <div className="relative py-5 lg:py-1 text-center mx-auto max-w-screen-xl">
            <h2 className="mb-8 lg:mb-8 md:text-5xl font-medium font-poppins tracking-tight leading-tight text-white dark:text-white">
              Connect with Us
            </h2>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <Card className="w-full bg-[#FBFBFB] min-w-screen-lg rounded-3xl mx-auto border-0 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-5">
                <div className="col-span-5">
                  <Card className="w-full min-h-full bg-[#31AFA9] rounded-3xl p-6">
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-4xl font-medium font-poppins text-white">
                        Get in touch
                      </CardTitle>
                      <CardDescription className="text-lg md:text-xl font-normal font-poppins py-8 text-white">
                        If you've got a question for us, want to discuss
                        business opportunities, or want to discover how BLYMO
                        can assist you, don't hesitate to get in touch.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="grid w-full items-center gap-8">
                          <div className="flex items-center gap-8">
                            <Image
                              src="/footer/phone-call.svg"
                              width={20}
                              height={20}
                              alt="Logo"
                              className="ms-2 icon-white"
                            />
                            <p className="w-[90%] font-normal font-poppins text-lg text-white">
                              +44 749 332 5738
                            </p>
                          </div>
                          <div className="flex items-center gap-8">
                            <Image
                              src="/footer/envelope.svg"
                              width={20}
                              height={20}
                              alt="Logo"
                              className="ms-2 icon-white"
                            />
                            <p className="w-[90%] font-normal font-poppins text-lg text-white">
                              info@blymo.co.uk
                            </p>
                          </div>
                          <div className="flex items-center gap-8">
                            <Image
                              src="/footer/marker.svg"
                              width={20}
                              height={20}
                              alt="Logo"
                              className="ms-2 icon-white"
                            />
                            <p className="w-[90%] font-normal font-poppins text-lg text-white">
                              BLYMO Ltd, International House, 142 Cromwell Road,
                              London, SW7 4EF
                            </p>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
                <div className="col-span-7">
                  <form>
                    <div className="grid w-full items-center gap-1 md:p-8">
                      <h2 className="my-6 lg:mb-8 text-lg md:text-xl font-normal font-poppins text-black dark:text-white">
                        Fill in your details and we'll be in touch
                      </h2>
                      <div className="flex flex-col mb-3">
                        <Input
                          id="name"
                          name="name"
                          placeholder="Name"
                          className="text-xl text-[#98999A]"
                        />
                      </div>
                      <div className="flex flex-col mb-3">
                        <Input
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="text-xl text-[#98999A]"
                        />
                      </div>
                      <div className="flex flex-col mb-3">
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          className="text-xl text-[#98999A]"
                        />
                      </div>
                      <div className="flex flex-col mb-3">
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Tell us more about your project"
                          className="text-xl text-[#98999A]"
                          rows={6}
                        />
                      </div>
                      <div className="flex items-center justify-end">
                        <button
                          className="mt-9 w-[150px] bg-[#31afa9] hover:bg-[#31afa9]/90 text-white font-semibold py-2 px-4 border rounded-full"
                          type="button"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 border border-t border-b">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
              <div className="relative">
                <Image
                  src="/members/luchie-bg-white.jpg"
                  width={500}
                  height={500}
                  alt="luchie"
                  className="mt-3 object-cover h-full"
                />
                <div className="absolute w-[60%] bottom-24 right-0 bg-[#494D4A] bg-opacity-70 text-white p-4 rounded-md">
                  <div className="text-2xl font-bold">Lucie-Laure Mukendi</div>
                  <div className="text-md font-semibold">
                    COMMERCIAL DIRECTOR
                  </div>
                </div>
              </div>
              <div>
                <div className="grid w-full gap-4 px-8 md:px-16 mt-10">
                  <h2 className="my-7 lg:mb-8 text-xl md:text-2xl font-semibold font-poppins text-black dark:text-white">
                    Not a fan of emails?
                  </h2>
                  <p className="font-normal font-poppins text-xl text-black dark:text-white">
                    Would you rather have a call to explain your needs than
                    email us?
                  </p>
                  <p className="font-normal font-poppins text-xl text-black dark:text-white">
                    Schedule a one-on-one call with Lucie to discuss your needs
                    in detail.
                  </p>
                  <div className="flex items-center justify-start space-y-2">
                    <button
                      className="mt-9 w-[200px] bg-[#31afa9] hover:bg-[#31afa9]/90 text-white font-semibold py-2 px-4 border rounded-full"
                      type="button"
                    >
                      Start New Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <h2 className="max-w-2xl lg:mb-8 mb-4 font-medium font-poppins text-xl md:text-3xl text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full bg-[#FFF]"
                onValueChange={handleAccordionChange}
              >
                <AccordionItem
                  value="item-1"
                  className={`${
                    openItem === "item-1" ? "bg-[#F2FFFE]" : "bg-white"
                  } transition-colors duration-300`}
                >
                  <AccordionTrigger className="font-poppins font-normal px-4 py-8 hover:no-underline">
                    <div className="flex items-center gap-8">
                      <span
                        className={`${
                          openItem === "item-1"
                            ? "text-[#31AFA9]"
                            : "text-[#000]"
                        } font-poppins font-normal text-lg`}
                      >
                        01
                      </span>
                      <p className="font-poppins font-normal text-lg text-black dark:text-white">
                        What types of services does your company offer to
                        support software development and project management?
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-poppins font-normal px-16">
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white mb-4">
                      We provide services in three ways:
                    </p>
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white  mb-4 ps-4">
                      1.{" "}
                      <span className="font-medium">Set-up Product Teams:</span>{" "}
                      We assemble dedicated product teams customized to your
                      project requirements. Our experts collaborate seamlessly
                      with your in-house team to ensure the successful
                      development and deployment of your software solutions.
                    </p>
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white  mb-4 ps-4">
                      2.{" "}
                      <span className="font-medium">Staff Augmentation:</span>{" "}
                      Need an extra hand? Our staff augmentation services
                      provide you with experienced professionals to supplement
                      your existing team. Whether it's for a short-term project
                      or long-term engagement, our talent pool is ready to
                      assist you in achieving your goals.
                    </p>
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white  mb-4 ps-4">
                      3.{" "}
                      <span className="font-medium">
                        Project-by-Project Basis:
                      </span>{" "}
                      For businesses looking for project-specific expertise, we
                      offer comprehensive project management services. From
                      initial planning to final delivery, we handle every aspect
                      of your project to ensure it's completed on time and
                      within budget.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className={`${
                    openItem === "item-2" ? "bg-[#F2FFFE]" : "bg-white"
                  } transition-colors duration-300`}
                >
                  <AccordionTrigger className="font-poppins font-normal px-4 py-8 hover:no-underline">
                    <div className="flex items-center gap-8">
                      <span
                        className={`${
                          openItem === "item-2"
                            ? "text-[#31AFA9]"
                            : "text-[#000]"
                        } font-poppins font-normal text-lg`}
                      >
                        02
                      </span>
                      <p className="font-poppins font-normal text-lg text-black dark:text-white">
                        How much do your services cost?
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-poppins font-normal px-16">
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white">
                      Our pricing varies based on the scope and complexity of
                      the project. Please contact our commercial director for a
                      detailed quote.
                    </p>
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white mt-4">
                      Lucie -{" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:lucielaure.mukendi@blymo.co.uk"
                      >
                        lucielaure.mukendi@blymo.co.uk
                      </a>
                    </p>
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white">
                      Bastiyan -{" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:lucielaure.mukendi@blymo.co.uk"
                      >
                        bastiyan@blymo.co.uk
                      </a>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className={`${
                    openItem === "item-3" ? "bg-[#F2FFFE]" : "bg-white"
                  } transition-colors duration-300`}
                >
                  <AccordionTrigger className="font-poppins font-normal px-4 py-8 hover:no-underline">
                    <div className="flex items-center gap-8">
                      <span
                        className={`${
                          openItem === "item-3"
                            ? "text-[#31AFA9]"
                            : "text-[#000]"
                        } font-poppins font-normal text-lg`}
                      >
                        03
                      </span>
                      <p className="font-poppins font-normal text-lg text-black dark:text-white">
                        Who should I contact for partnership opportunities?
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-poppins font-normal px-16">
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white">
                      For partnership inquiries, please contact our commercial
                      director Lucie at{" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:lucielaure.mukendi@blymo.co.uk"
                      >
                        lucielaure.mukendi@blymo.co.uk
                      </a>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className={`${
                    openItem === "item-4" ? "bg-[#F2FFFE]" : "bg-white"
                  } transition-colors duration-300`}
                >
                  <AccordionTrigger className="font-poppins font-normal px-4 py-8 hover:no-underline">
                    <div className="flex items-center gap-8">
                      <span
                        className={`${
                          openItem === "item-4"
                            ? "text-[#31AFA9]"
                            : "text-[#000]"
                        } font-poppins font-normal text-lg`}
                      >
                        04
                      </span>
                      <p className="font-poppins font-normal text-lg text-black dark:text-white">
                        How can I get support?
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-poppins font-normal px-16">
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white">
                      The easiest way to get support is to send us an email at {" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:lucielaure.mukendi@blymo.co.uk"
                      >
                        info@blymo.co.uk
                      </a>{" "}
                      or{" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:lucielaure.mukendi@blymo.co.uk"
                      >
                        bastiyan@blymo.co.uk
                      </a>
                      . Alternatively, you can give us a call at +44 7493 325738
                      if you prefer speaking directly with us. You can also
                      schedule a call with Lucie using our Contact Us page,
                      where you will have the option to choose a date and time
                      in her calendar.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <ScrollToTopButton />
      </div>
    </>
  );
}
