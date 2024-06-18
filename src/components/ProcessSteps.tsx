"use client";
import React from "react";

const steps = [
  { number: "01.", title: "Plan", description: "Lorem Ipsum is simply dummy" },
  {
    number: "02.",
    title: "Design",
    description: "Lorem Ipsum is simply dummy",
  },
  {
    number: "03.",
    title: "Develop",
    description: "Lorem Ipsum is simply dummy",
  },
  { number: "04.", title: "Test", description: "Lorem Ipsum is simply dummy" },
  {
    number: "05.",
    title: "Deploy",
    description: "Lorem Ipsum is simply dummy",
  },
  {
    number: "06.",
    title: "Review",
    description: "Lorem Ipsum is simply dummy",
  },
];

const ProcessSteps = () => {
  return (
    <div className="relative flex flex-col items-center mt-10">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-center mb-10 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center">
            {step.number}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="w-full flex justify-center">
              <svg
                className="w-24 h-24 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20l9-9m-9 9l-9-9m9 9V4"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
