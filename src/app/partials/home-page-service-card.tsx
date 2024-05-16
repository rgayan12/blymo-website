interface HomePageServiceCardProps {
    title: string;
    description: string;
    image: string;
}

import Image from "next/image";

export default function HomePageServiceCard({ title, description, image }: HomePageServiceCardProps) {
    return (
        <div className="relative border border-gray-80 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 h-[580px] p-4" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
        <div className="relative">
            <div className="py-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-light tracking-tight text-white dark:text-white uppercase">{title}</h5>
                </a>
            </div>

            <div>
                <p className="font-normal text-white dark:text-gray-400 align-text-bottom">{description}</p>
            </div>
        </div>
    </div>)
}