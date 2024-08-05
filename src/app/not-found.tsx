import Link from 'next/link'
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="text-center font-poppins">
      <Image
        src="/404.svg"
        width={100}
        height={100}
        alt="404"
        className="w-2/5 mx-auto"
      />
      <Link
        href="/"
        className="button"
        style={{ position: "relative", top: "-100px" }}
      >
        <button className="bg-[#31AFA9] hover:bg-green-900 text-white  py-2 px-7 rounded-full">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}