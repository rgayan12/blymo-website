interface StaffMember {
  title: string;
  name: string;
  image: string;
}
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function StaffMember({ title, name, image }: StaffMember) {
  return (
    <>
      <Card className="w-full flex flex-col items-center justify-center gap-4 rounded-3xl shadow-md my-8 p-8">
        <div>
          <Image
            src={image}
            width={200}
            height={200}
            alt="our values - integrity"
            className="text-center rounded-full shadow-xl"
          />
        </div>
        <div className="pt-1">
          <p className="text-lg text-center md:text-xl font-semibold font-poppins text-gray-900 uppercase pt-5">
            {title}
          </p>
          <p className="text-lg text-center md:text-xl font-medium font-poppins text-gray-700 uppercase pt-1">
            {name}
          </p>
          <div className="pt-4">
            <Image
              src="/about-us/linkedin.svg"
              width={20}
              height={20}
              alt="our values - integrity"
              className="text-center mx-auto"
            />
          </div>
        </div>
      </Card>
      {/* <div className="h-[326px]">
        <div
          className="rounded-md flex items-center justify-center"
          style={{
            background: "#FBFBFB 0% 0% no-repeat padding-box",
            boxShadow: "0px 3px 6px #00000029",
            minHeight: "106px",
            opacity: 1,
          }}
        >
          <Image
            src={image}
            width={265}
            height={100}
            alt={title}
            className="text-center"
          />
        </div>
        <div className="pt-1">
          <p className="text-lg font-bold text-gray-500 uppercase lg:text-1.5xl sm:px-16 xl:px-1 lg:pt-5 dark:text-gray-400">
            {title}
          </p>
          <p className="text-lg font-normal text-gray-500 uppercase lg:text-1xl sm:px-16 xl:px-1 lg:pt-1 dark:text-gray-400">
            {name}
          </p>
        </div>
      </div> */}
    </>
  );
}
