"use client";
import { useState } from "react";
import { Modal } from "flowbite-react";
import { teamMembers } from "../data/team-members";
import { useEffect } from 'react';

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
      >
        <div>
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="modal w-full">
                <img
                  className="object-cover h-full w-full rounded-l-lg"
                  src={userImage}
                  alt="profile image"
                />
              </div>
            </div>
            <div className="modal col-span-6">
              <div className="flex items-center">
                <div className="ml-2 p-5">
                  <div className="text-lg font-medium text-gray-900 flex items-center justify-between">
                    <div className="text-3xl font-medium text-gray-900">
                      {name}
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-7 cursor-pointer"
                        onClick={() => changeModelStatus(false)}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="text-lg font-medium text-gray-500 mt-2">
                    {title}
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
        .modal{
          height: 600px;
          overflow: auto;
        }
      `}</style>
      </Modal>
    </>
  );
}
