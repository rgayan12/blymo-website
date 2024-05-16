export default function Testimonial() {
    return (
        <section className=" bg-white px-6 py-14 sm:py-24 lg:px-1">
            <div className="py-5 lg:py-1 mx-auto max-w-screen-xl">
                <h2 className="mb-8 lg:mb-8 md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Dont just take our word for it</h2>
            </div>
            <div className="py-5 lg:py-1 mx-auto max-w-screen-xl">
                <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                <figure className="mt-10">
                    <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                            molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-5">
                        <div className="mt-4 flex space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of Workcation</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
