import Image from "next/image";

export default function Testimonial() {
  return (
    <section className=" bg-white px-6 py-14 sm:py-24 lg:px-1">
      <div className="py-5 lg:py-1 mx-auto max-w-screen-xl">
        <h2 className="mb-8 lg:mb-8 text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">
          Don't just take our word for it
        </h2>
      </div>
      <div className="py-5 lg:py-1 mx-auto max-w-screen-xl">
        <Image
          src="/logo3.png"
          width={70}
          height={1200}
          alt="hero image"
          style={{}}
        />
        <figure className="mt-10">
          <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “We needed a simple website for our maintenance company, and I
              couldn’t be more excited about the result. The website’s clean,
              simple, and easy-to-use design perfectly fits our needs. BLYMO’s
              customer support is top-notch; they instantly act on my update
              requests and make changes swiftly, thanks to our long-term
              partnership.”
            </p>
          </blockquote>
          <figcaption className="mt-5">
            <div className="mt-4 flex space-x-1 text-base">
              <div className="font-semibold text-gray-900">Anton Shaw *</div>
              <div className="text-gray-600">S5 Maintenance</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
