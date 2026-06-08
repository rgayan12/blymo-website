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
        <section className="relative overflow-hidden px-6 py-24 sm:py-36 lg:px-0 bg-[url('/contact-us/header-image.jpeg')] bg-cover bg-center min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(20,184,166,0.35),transparent_34%),linear-gradient(115deg,rgba(2,6,23,0.96),rgba(15,23,42,0.84)_48%,rgba(4,47,46,0.62))]"></div>
          <div className="relative mx-auto w-full max-w-screen-xl">
            <span className="inline-block px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-200 rounded-full border border-teal-300/20 mb-6">
              Start a Conversation
            </span>
            <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold font-poppins tracking-tight leading-tight text-white">
              Let's build the next useful thing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
              Tell us about your venture, research project, or product challenge.
              We will help you find the clearest route from idea to launch.
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950">
          <div className="px-4 mx-auto max-w-screen-xl py-12 lg:py-20">
            <Card className="w-full bg-white rounded-2xl mx-auto border border-slate-100 shadow-2xl shadow-teal-950/5 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="col-span-5">
                  <Card className="w-full min-h-full bg-slate-950 rounded-none p-6 md:p-8 border-0 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,0.28),transparent_34%),linear-gradient(145deg,rgba(15,23,42,0.98),rgba(4,47,46,0.76))]" />
                    <CardHeader>
                      <CardTitle className="relative text-2xl md:text-4xl font-semibold font-poppins text-white">
                        Get in touch
                      </CardTitle>
                      <CardDescription className="relative text-base md:text-lg font-normal font-poppins py-8 text-slate-300 leading-relaxed">
                        If you've got a question for us, want to discuss
                        business opportunities, or want to discover how BLYMO
                        can assist you, don't hesitate to get in touch.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
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
                            <p className="w-[90%] font-normal font-poppins text-base text-slate-200">
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
                            <p className="w-[90%] font-normal font-poppins text-base text-slate-200">
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
                            <p className="w-[90%] font-normal font-poppins text-base text-slate-200 leading-relaxed">
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
                    <div className="grid w-full items-center gap-1 p-5 md:p-10">
                      <h2 className="my-6 lg:mb-8 text-lg md:text-xl font-normal font-poppins text-slate-900 dark:text-white">
                        Fill in your details and we'll be in touch
                      </h2>
                      <div className="flex flex-col mb-3">
                        <Input
                          id="name"
                          name="name"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={handleChange}
                          className="text-base text-slate-700 h-12 rounded-xl border-slate-200 focus-visible:ring-teal-500"
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
                          className="text-base text-slate-700 h-12 rounded-xl border-slate-200 focus-visible:ring-teal-500"
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
                          className="text-base text-slate-700 h-12 rounded-xl border-slate-200 focus-visible:ring-teal-500"
                        />
                      </div>
                      <div className="flex flex-col mb-3">
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your project*"
                          className="text-base text-slate-700 rounded-xl border-slate-200 focus-visible:ring-teal-500"
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
                            className="mt-9 w-full sm:w-auto min-w-[150px] bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-teal-500/20 transition"
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

        <section className="bg-[#F7FFFF] dark:bg-gray-950 border-y border-teal-100/60 dark:border-slate-800">
          <div className="px-4 mx-auto max-w-screen-xl py-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
                Prefer a call?
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold font-poppins tracking-tight text-slate-900 dark:text-white">
                Not a fan of emails?
              </h2>
              <p className="mt-4 font-normal font-poppins text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Would you rather have a call to explain your needs than email us?
              </p>
              <p className="mt-2 font-normal font-poppins text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Schedule a one-on-one call with our team to discuss your project and needs in detail.
              </p>
              <div className="flex items-center justify-center mt-6">
                <GoogleCalendarButton />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950">
          <div className="px-4 mx-auto max-w-screen-xl py-12 lg:py-20">
            <span className="text-sm font-semibold tracking-wider text-teal-600 uppercase">
              Useful Details
            </span>
            <h2 className="max-w-2xl mt-2 lg:mb-8 mb-4 font-semibold font-poppins text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xl shadow-teal-950/5"
                onValueChange={handleAccordionChange}
              >
                <AccordionItem
                  value="item-1"
                  className={`${
                    openItem === "item-1" ? "bg-[#F2FFFE]" : "bg-white"
                  } transition-colors duration-300`}
                >
                  <AccordionTrigger className="font-poppins font-normal px-5 md:px-6 py-7 hover:no-underline">
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
                  <AccordionContent className="font-poppins font-normal px-6 md:px-20">
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
                  <AccordionTrigger className="font-poppins font-normal px-5 md:px-6 py-7 hover:no-underline">
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
                  <AccordionContent className="font-poppins font-normal px-6 md:px-20">
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white">
                      Our pricing varies based on the scope and complexity of
                      the project. Please contact our commercial director for a
                      detailed quote.
                    </p>
                    {/* <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white mt-4">
                      Lucie -{" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:bastiyan@blymo.co.uk"
                      >
                        lucielaure.mukendi@blymo.co.uk
                      </a>
                    </p> */}
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white">
                      Bastiyan -{" "}
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
                  value="item-3"
                  className={`${
                    openItem === "item-3" ? "bg-[#F2FFFE]" : "bg-white"
                  } transition-colors duration-300`}
                >
                  <AccordionTrigger className="font-poppins font-normal px-5 md:px-6 py-7 hover:no-underline">
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
                  <AccordionContent className="font-poppins font-normal px-6 md:px-20">
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
                  <AccordionTrigger className="font-poppins font-normal px-5 md:px-6 py-7 hover:no-underline">
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
                  <AccordionContent className="font-poppins font-normal px-6 md:px-20">
                    <p className="font-poppins font-normal text-lg text-[#6B6B6B] dark:text-white">
                      The easiest way to get support is to send us an email at{" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:info@blymo.co.uk"
                      >
                        info@blymo.co.uk
                      </a>{" "}
                      or{" "}
                      <a
                        className="text-[#31AFA9] underline"
                        href="mailto:bastiyan@blymo.co.uk"
                      >
                        bastiyan@blymo.co.uk
                      </a>
                      . Alternatively, you can give us a call at +44 749 332 5738
                      if you prefer speaking directly with us. You can also
                      schedule a call using our Contact Us page, where you will
                      have the option to choose a date and time in our calendar.
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
