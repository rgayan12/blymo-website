interface HomePageServiceCardProps {
    title: string;
    description: string;
    image: string;
    customStyle: string;
    route?: URL | string;
}

import Image from "next/image";
import Link from "next/link";

export default function HomePageServiceCard({ title, description, image, customStyle, route = "product-design" }: HomePageServiceCardProps) {
    return (
      <>
        <Link href={'/services/' + route}>
          <div
            className="relative border border-gray-80 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 h-[580px] p-4"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "740px",
            }}
          >
            <div className="absolute inset-0 bg-gray-800 opacity-0"></div>
            <div className="relative">
              <div>
                <h5
                  className={`mt-4 ml-4 mb-2 text-left text-2xl tracking-tight ${customStyle}`}
                >
                  {title}
                </h5>
              </div>

              <div>
                <p className={`ml-4 text-left font-normal ${customStyle}`}>
                  {description}
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 cursor-pointer">
              <Image
                src="/logo/eye.svg"
                width={30}
                height={30}
                alt="hero image"
                style={{
                  backgroundColor: "#dee0e3",
                  padding: "6px",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </Link>
      </>
    );
}