"use client";
import { useState } from "react";
import { teamMembers } from "@/app/data/team-members";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import StaffMember from "@/app/partials/staffMember";
import TeamPopUp from "@/app/partials/teamPopUp";
import ScrollToTopButton from "@/app/partials/moveToTopBtn";
import "/public/css/home-page.css";

export default function About() {
  const teamMembersData = teamMembers;
  const [isModalOpen, changeModelStatus] = useState(false);
  const [selectedUserId, setUserId] = useState(null);

  const selectMember = (id: any) => {
    setUserId(id);
    changeModelStatus(true);
  };

  const props = {
    changeModelStatus,
    isModalOpen,
    selectedUserId,
  };

  return (
    <>
      <div>
        <section className="relative bg-gray-100 px-6 py-10 sm:py-52 lg:px-0 bg-[url('/about-us/our-vision.jpeg')] bg-cover bg-center min-h-[60vh]">
          <div className="absolute inset-0 bg-[#1D1D1D] opacity-35"></div>
          <div className="relative py-5 lg:py-1 text-center mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-5xl font-medium font-poppins tracking-tight leading-tight text-white dark:text-white">
              Our Story
            </h2>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="px-4 mx-auto max-w-screen-xl py-8 lg:py-16">
            <Card className="w-full rounded-xl my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="px-6 pt-0">
                  <h2 className="px-4 py-4 md:px-8 mt-8 text-3xl md:text-4xl  font-semibold font-poppins tracking-tight leading-tight text-[#252525] dark:text-white">
                    About Us
                  </h2>
                  <p className="px-4 py-4 md:px-8 mb-8 text-lg md:text-xl font-normal font-poppins text-[#252525]">
                    Welcome to BLYMO, a thriving London-based software company
                    dedicated to delivering top-notch software solutions
                    tailored to meet your unique needs. Founded in 2021 by
                    Bastiyan Rodrigo, BLYMO was envisioned to provide software
                    services that are jargon-free and hassle-free, making
                    technology accessible and effective for all businesses.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/about-us/about-us.jpeg"
                    layout="fill"
                    objectFit="cover"
                    alt="about-us"
                    className="rounded-r-xl"
                  />
                </div>
              </div>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <Card className="w-full">
                <CardContent>
                  <div>
                    <h2 className="px-4 py-4 md:px-8 mt-8 text-3xl md:text-4xl  font-semibold font-poppins tracking-tight leading-tight text-[#252525] dark:text-white">
                      Our Vision
                    </h2>
                    <p className="px-4 py-4 md:px-8 mb-8 text-lg md:text-xl font-normal font-poppins text-[#252525]">
                      Man kind has one ability that separates it from all other
                      species: our ability to create. Our vision is to be a
                      guiding post for those who seek to create and leave the
                      world a better place than they found it.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div>
                    <h2 className="px-4 py-4 md:px-8 mt-8 text-3xl md:text-4xl  font-semibold font-poppins tracking-tight leading-tight text-[#252525] dark:text-white">
                      Our Mission
                    </h2>
                    <p className="px-4 py-4 md:px-8 mb-8 text-lg md:text-xl font-normal font-poppins text-[#252525]">
                      To help 300 founders and entrepreneurs to bring their
                      ideas to life by 2027.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#F7FFFF] dark:bg-gray-900">
          <div className="px-4 mx-auto max-w-screen-xl py-8 lg:py-16">
            <h2 className="mb-4 lg:mb-8 font-medium font-poppins text-center md:text-left text-2xl md:text-3xl text-[#252525] dark:text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Card className="relative w-full flex flex-col items-center justify-center gap-4 rounded-xl my-8 p-8 group cursor-pointer">
                <div>
                  <Image
                    src="/about-us/thumbs-up-trust.svg"
                    width={30}
                    height={30}
                    alt="our values - integrity"
                    className="text-center group-hover:opacity-10"
                  />
                </div>
                <p className="font-medium text-[#31AFA9] text-lg md:text-xl dark:text-gray-400 group-hover:opacity-10">
                  Integrity
                </p>
                <div className="absolute cursor-pointer font-medium px-4 top-5 right-0 text-xs text-center text-[#252525] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Your success is our success. We are committed to delivering
                  high-quality results that exceed your expectations fostering
                  trust and transparency in all our partnerships.
                </div>
              </Card>
              <Card className="relative w-full flex flex-col items-center justify-center gap-4 rounded-xl my-8 p-8 group cursor-pointer">
                <div>
                  <Image
                    src="/about-us/customer-care.svg"
                    width={30}
                    height={30}
                    alt="our values - inclusivity"
                    className="text-center group-hover:opacity-10"
                  />
                </div>
                <p className="font-medium text-[#31AFA9] text-lg md:text-xl dark:text-gray-400 group-hover:opacity-10">
                  Inclusivity/Diversity
                </p>
                <div className="absolute cursor-pointer font-medium px-4 top-5 right-0 text-xs text-center text-[#252525] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  We embrace a culture of inclusivity and diversity, valuing the
                  unique perspectives and experiences that each team member and
                  client brings.
                </div>
              </Card>

              <Card className="relative w-full flex flex-col items-center justify-center gap-4 rounded-xl my-8 p-8 group cursor-pointer">
                <div>
                  <Image
                    src="/about-us/users-gear.svg"
                    width={30}
                    height={30}
                    alt="our values - resourcefulness"
                    className="text-center group-hover:opacity-10"
                  />
                </div>
                <p className="font-medium text-[#31AFA9] text-lg md:text-xl dark:text-gray-400 group-hover:opacity-10">
                  Resourcefulness
                </p>
                <div className="absolute cursor-pointer font-medium px-4 top-5 right-0 text-xs text-center text-[#252525] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  We leverage our knowledge and skills to overcome challenges
                  and deliver exceptional outcomes.
                </div>
              </Card>
              <Card className="relative w-full flex flex-col items-center justify-center gap-4 rounded-xl my-8 p-8 group cursor-pointer">
                <div>
                  <Image
                    src="/about-us/hand-sparkles.svg"
                    width={30}
                    height={30}
                    alt="our values - transparency"
                    className="text-center group-hover:opacity-10"
                  />
                </div>
                <p className="font-medium text-[#31AFA9] text-lg md:text-xl dark:text-gray-400 group-hover:opacity-10">
                  Transparency
                </p>
                <div className="absolute cursor-pointer font-medium px-4 top-5 right-0 text-xs text-center text-[#252525] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  We are constantly exploring new ideas and approaches to drive
                  progress and deliver future-ready solutions.
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="px-4 mx-auto max-w-screen-xl py-8 lg:py-16">
            <h2 className="mb-4 lg:mb-8 font-medium font-poppins text-center md:text-left text-2xl md:text-3xl text-[#252525] dark:text-white">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-4 gap-10 items-center justify-center cursor-pointer mb-7">
              {teamMembersData.map((team) => (
                <div
                  className="w-full md:max-w-80 h-full"
                  key={team.id}
                  onClick={() => selectMember(team.id)}
                >
                  <StaffMember
                    title={team.title}
                    name={team.name}
                    image={team.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7FFFF] dark:bg-gray-900">
          <div className="px-4 mx-auto max-w-screen-xl py-8 lg:py-16">
            <h2 className="mb-4 lg:mb-8 font-medium font-poppins text-center md:text-left text-2xl md:text-3xl text-[#252525] dark:text-white">
              Our Process for Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 my-8 md:my-16">
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/document.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Plan
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    We begin by understanding your needs and defining clear
                    objectives. This phase involves thorough research,
                    brainstorming, and outlining a strategic roadmap to ensure a
                    successful project.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/magic-wand.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Design
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    Our creative team conceptualizes and crafts visually
                    appealing and user-friendly designs. We focus on aesthetics
                    and functionality to deliver an engaging and intuitive user
                    experience.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/display-code.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Develop
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    In this phase, our developers bring the designs to life
                    using the latest technologies and best practices. We ensure
                    that the product is robust, scalable, and meets all
                    specified requirements.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/bug.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Test
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    We rigorously test the product to identify and fix any
                    issues. Our quality assurance process ensures that the final
                    product is reliable, performs well, and provides a seamless
                    user experience.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/rocket-lunch.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Deploy
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    Once testing is complete, we deploy the product to the live
                    environment. We handle all aspects of the launch, ensuring a
                    smooth transition and minimal disruption.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/feedback-review.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Review
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    After deployment, we review the project to gather feedback
                    and measure success. This phase includes evaluating
                    performance, identifying improvements, and planning for
                    future updates to ensure continuous enhancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="px-4 mx-auto max-w-screen-xl py-8 lg:py-16">
            <h2 className="mb-4 lg:mb-8 font-medium font-poppins text-center md:text-left text-2xl md:text-3xl text-[#252525] dark:text-white">
              Don't Just Take Our Word for it
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-4 md:py-8">
              <Card className="w-full">
                <CardContent>
                  <div className="w-full py-8">
                    <p className="px-4 py-4 md:px-8 text-lg md:text-xl font-normal font-poppins text-[#252525]">
                      "We needed a simple website for our maintenance company,
                      and I couldn’t be more excited about the result. The
                      website’s clean, simple, and easy-to-use design perfectly
                      fits our needs. BLYMO’s customer support is top-notch;
                      they instantly act on my update requests and make changes
                      swiftly, thanks to our long-term partnership."
                    </p>
                    <div className="flex items-center gap-5 px-4 md:px-8 pt-8">
                      <Image
                        src="/logo/s5-logo-new.png"
                        width={80}
                        height={80}
                        alt="s5-logo"
                      />
                      <div className="flex flex-col">
                        <p className="text-[#252525] font-normal font-poppins md:text-lg dark:text-gray-400">
                          Anton Shaw
                        </p>
                        <p className="text-[#252525] font-normal font-poppins md:text-lg dark:text-gray-400">
                          (CEO) - S5 Maintenance
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="w-full py-8">
                    <p className="px-4 py-4 md:px-8 text-lg md:text-xl font-normal font-poppins text-[#252525]">
                      "Thank you so much for the incredible work you've done on
                      our brand. The new branding has not just met but surpassed
                      our expectations, taking our foundation in a fresh, modern
                      direction that fits perfectly with our vision. Your
                      attention to detail and creativity shine through, and we
                      couldn't be happier with the results."
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
                        <p className="text-[#252525] font-normal font-poppins md:text-lg dark:text-gray-400">
                          (The Founder)- Arachchi Foundation
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#F7FFFF] dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
            <div className="text-4xl font-medium font-poppins mb-8">
              Get to know us
            </div>
            <div className="text-lg font-medium font-poppins">
              Discover how we can help bring your project to life.
            </div>
            <Link href="contact-us">
              <button
                className="mt-12 font-poppins head-button btn-small"
                type="button"
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
      <TeamPopUp props={props} />
      {/* <TeamPopUp changeModelStatus={changeModelStatus} isModalOpen={isModalOpen} selectedUserId={selectedUserId} teamMembersData={teamMembersData}/> */}
    </>
  );
}
