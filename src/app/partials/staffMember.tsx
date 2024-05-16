interface StaffMember {
    title: string;
    name: string;
    image: string;
}
import Image from "next/image";

export default function StaffMember({ title, name, image }: StaffMember) {
    return (
        <div className="h-[326px]">
            <div className="rounded-md flex items-center justify-center" style={{
                background: '#FBFBFB 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000029',
                minHeight: '106px',
                opacity: 1
            }}>
                <Image src={image} width={265} height={100} alt={title} className="text-center" />
            </div>
            <div className="pt-1">
                <p className="text-lg font-bold text-gray-500 uppercase lg:text-1.5xl sm:px-16 xl:px-1 lg:pt-5 dark:text-gray-400">{title}</p>
                <p className="text-lg font-normal text-gray-500 uppercase lg:text-1xl sm:px-16 xl:px-1 lg:pt-1 dark:text-gray-400">{name}</p>
            </div>
        </div>)
}