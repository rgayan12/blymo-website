import Image from "next/image";
import Link from 'next/link';

export default function ContactUs() {
  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900 font-poppins">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 my-8 md:my-16">
              <div className="md:mt-16 px-5 text-center md:text-left">
                <h1 className="mb-4 text-3xl md:text-5xl font-semibold">
                  Oops!
                </h1>
                <p className="text-gray-800 text-3xl font-medium mt-7">
                  We can't seem to find the page you're looking for
                </p>
                <Link href="/">
                  <button className="bg-[#31afa9] hover:bg-green-900 text-xl text-white py-2 px-7 mt-16 rounded-full">
                    Reload Page
                  </button>
                </Link>
              </div>
              <div>
                <Image
                  src="/404.svg"
                  width={100}
                  height={100}
                  alt="404"
                  className="w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
