interface StaffMember {
  title: string;
  name: string;
  image: string;
}
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function StaffMember({ title, name, image }: StaffMember) {
  const handleClick = (event: any) => {
    event.stopPropagation(); // Stops the event from bubbling up
  };

  return (
    <>
      <Card className="w-full h-full flex flex-col items-center justify-center gap-4 rounded-3xl shadow-md my-8 p-4">
        <div className="flex justify-center items-center w-full">
          <Image
            src={image}
            width={200}
            height={200}
            alt="our values - integrity"
            className="text-center rounded-full shadow-xl"
          />
        </div>
        <div className="relative pt-1 w-full text-center">
          <p className="text-lg md:text-xl font-semibold font-poppins text-[#252525] pt-1">
            {name}
          </p>
          <p className="text-md md:text-lg font-medium font-poppins text-[#252525] uppercase pt-2 mb-4">
            {title}
          </p>
          {title === "Commercial Director" ? (
            <div className="absolute w-full text-center -bottom-4">
              <Link
                href="https://www.linkedin.com/in/lucie-laure-mukendi-167576119"
                onClick={handleClick}
              >
                <Image
                  src="/about-us/linkedin.svg"
                  width={20}
                  height={20}
                  alt="our team"
                  className="mx-auto"
                />
              </Link>
            </div>
          ) : null}
        </div>
      </Card>
    </>
  );
}
