"use client";
import { useState } from "react";
import { Modal } from "flowbite-react";
import { teamMembers } from "../data/team-members";
import { useEffect } from 'react';
import Image from "next/image";

export default function TeamPopUp(props : any) {
  const {
    props: { 
      changeModelStatus,
      isModalOpen = false,
      selectedUserId = null
    },
  } = props;
  const teamMembersData = teamMembers;

  const [userImage, setUserImage] = useState('/staff-man.png');
  const [description, setDescription] = useState(null);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    teamMembersData.map((member: any) => {
      if (member.id === selectedUserId) {
        setUserImage(member.image);
        setName(member.name);
        setTitle(member.title);
        setDescription(member.description)
      }
    });
  });
  
  return (
    <>
      <Modal
        show={isModalOpen}
        onClose={() => changeModelStatus(false)}
        className="custom-modal-overlay"
        style={{ minWidth: "40vw", paddingTop: "2rem" }}
      >
        <div className="w-full mt-8">
          <div className="w-full">
            <div className="modal">
              <div className="flex items-center">
                <div className="ml-2 p-5 w-full">
                  <div className="relative flex justify-center items-center w-full">
                    <Image
                      src={userImage}
                      width={200}
                      height={200}
                      alt="our values - integrity"
                      className="text-center rounded-full shadow-xl"
                    />
                    <div className="absolute top-4 right-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7 cursor-pointer"
                        onClick={() => changeModelStatus(false)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-lg font-medium text-[#252525] flex items-center justify-center mt-4">
                    <div className="text-3xl font-medium text-[#252525]">
                      {name}
                    </div>
                  </div>
                  <div className="text-2xl text-center font-medium text-text-[#252525] mt-2">
                    {title}
                  </div>
                  <p className="mt-8 px-8 md:px-16 text-sm font-normal text-[#252525]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .modal {
            height: 80vh;
            overflow: auto;
          }
        `}</style>
      </Modal>
    </>
  );
}
