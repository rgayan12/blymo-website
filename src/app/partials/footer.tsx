import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-14">
                <div className="md:flex md:justify-between">

                    <div className="grid grid-cols-1 gap-8 sm:gap-2 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-1xl font-semibold text-white dark:text-white">Tel: +44 073 77 134  816</h2>
                            <h2 className="mb-6 text-1xl font-semibold text-white dark:text-white">Email: info@blymo.co.uk</h2>
                        </div>
                        <div>

                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-100 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/profile.php?id=61558966886637" className="hover:underline">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/blymo/" className="hover:underline">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-100 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <a href="https://blymo.co.uk/" className="flex items-center">
                            <Image
                                src="/blymo-logo-invert.png"
                                width={100}
                                height={500}
                                alt="Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">BLYMO</span>
                        </a>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://blymo.co.uk/" className="hover:underline">BLYMO™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/profile.php?id=61558966886637" target='_blank' className="text-gray-100 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">LinkedIn page</span>
                        </a>
                    
                        <a href="https://www.linkedin.com/company/blymo/" target='_blank' className="text-gray-100 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>
                            <span className="sr-only">LinkedIn account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}