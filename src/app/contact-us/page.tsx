"use client";
import { useState, useCallback } from "react";
import { useReCaptcha } from "next-recaptcha-v3";
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
import GoogleCalendarButton from "@/app/partials/googleCalendarButton";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs() {
  const [openItem, setOpenItem] = useState(null);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  const handleAccordionChange = (value: any) => {
    setOpenItem(value === openItem ? null : value);
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();

      setLoading(true);
      setNameError("");
      setEmailError("");
      setMessageError("");

      // Validate form fields
      let hasError = false;

      if (!formData.name) {
        setNameError("Name is required");
        hasError = true;
      }

      if (!formData.email) {
        setEmailError("Email is required");
        hasError = true;
      }

      if (!formData.message) {
        setMessageError("Message is required");
        hasError = true;
      }

      if (hasError) {
        setLoading(false);
        return;
      }

      try {
        // Generate ReCaptcha token
        const token = await executeRecaptcha("form_submit");

        if (!token) {
          toast.error("ReCaptcha token not available. Please try again.");
          setLoading(false);
          return;
        }

        // Submit the form data with the ReCaptcha token
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            text: formData.message,
            token: token,
          }),
        });

        if (response.ok) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          toast.success("Email has been sent successfully!");
        } else {
          toast.error("Something went wrong. Please contact the support team.");
        }
      } catch (error) {
        console.error("Error during form submission:", error);
        toast.error("An unexpected error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    },
    [formData, executeRecaptcha]
  );

  return (
    <>
      <div>
        <section className="relative bg-gray-100 px-6 py-10 sm:py-52 lg:px-0 bg-[url('/contact-us/header-image.jpeg')] bg-cover bg-center min-h-[60vh]">
          <div className="absolute inset-0 bg-[#1D1D1D] opacity-35"></div>
          <div className="relative py-5 lg:py-1 text-center mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-5xl font-medium font-poppins tracking-tight leading-tight text-white dark:text-white">
              Connect with Us
            </h2>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="px-4 mx-auto max-w-screen-xl py-8 lg:py-16">
            <Card className="w-full bg-[#FBFBFB] rounded-3xl mx-auto border-0 shadow-md">
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
                  <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-1 md:p-8">
                      <h2 className="my-6 lg:mb-8 text-lg md:text-xl font-normal font-poppins text-black dark:text-white">
                        Fill in your details and we'll be in touch
                      </h2>
                      <div className="flex flex-col mb-3">
                        <Input
                          id="name"
                          name="name"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={handleChange}
                          className="text-xl text-[#98999A]"
                        />
                        {nameError && (
                          <p className="ms-2 ml-2 text-red-500 text-xs">
                            {nameError}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col mb-3">
                        <Input
                          id="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleChange}
                          className="text-xl text-[#98999A]"
                        />
                        {emailError && (
                          <p className="ms-2 mt-2 text-red-500 text-xs">
                            {emailError}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col mb-3">
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="text-xl text-[#98999A]"
                        />
                      </div>
                      <div className="flex flex-col mb-3">
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your project*"
                          className="text-xl text-[#98999A]"
                          rows={6}
                        />
                        {messageError && (
                          <p className="ms-2 mt-2 text-red-500 text-xs">
                            {messageError}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-end gap-4">
                        {isLoading ? (
                          <div role="status">
                            <ul className="mt-9 max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
                              <li className="flex items-center">
                                <div role="status">
                                  <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                      fill="currentFill"
                                    />
                                  </svg>
                                  <span className="sr-only">Loading...</span>
                                </div>
                                Email sending...
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <button
                            className="mt-9 w-[150px] bg-[#31afa9] hover:bg-[#31afa9]/90 text-white font-semibold py-2 px-4 border rounded-full"
                            type="submit"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 border border-t border-b">
          <div className="px-4 mx-auto max-w-screen-xl py-8 lg:py-16">
            <div className="min-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <Image
                  src="/members/bastiyan-bg-white.png"
                  width={500}
                  height={500}
                  alt="luchie"
                  className="mt-3 object-cover h-full"
                />
                <div className="absolute w-[60%] bottom-24 right-0 bg-[#494D4A] bg-opacity-70 text-white p-4 rounded-md">
                  <div className="text-2xl font-bold">Bastiyan Rodrigo</div>
                  <div className="text-md font-semibold">FOUNDER</div>
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
                    <GoogleCalendarButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="px-4 mx-auto max-w-screen-xl py-8 lg:py-16">
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
                    {/* <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white mt-4">
                      Lucie -{" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:lucielaure.mukendi@blymo.co.uk"
                      >
                        lucielaure.mukendi@blymo.co.uk
                      </a>
                    </p> */}
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
                      director Bastiyan at{" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:bastiyan@blymo.co.uk"
                      >
                        bastiyan@blymo.co.uk
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
                      The easiest way to get support is to send us an email at{" "}
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
      <Toaster
        position="top-right"
        toastOptions={{ success: { duration: 3000 } }}
      />
    </>
  );
}
