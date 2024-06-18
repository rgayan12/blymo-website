interface HomePageServiceCardProps {
    title: string;
    description: string;
    image: string;
    customStyle: string;
}

import Image from "next/image";

export default function HomePageServiceCard({ title, description, image, customStyle }: HomePageServiceCardProps) {
    return (
      <div
        className="relative border border-gray-80 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 h-[580px] p-4"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-0"></div>
        <div className="relative">
          <div className="py-5">
            <a href="#">
              <h5 className={`mb-2 text-2xl tracking-tight font-poppins ${customStyle}`}>
                {title}
              </h5>
            </a>
          </div>

          <div>
            <p className={`font-normal font-poppins-light ${customStyle} align-text-bottom`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    );
}