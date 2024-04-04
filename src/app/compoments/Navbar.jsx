import Image1 from '../public/picture.png'
import Image from "next/image";

const Navbar = () => {

    return (
        <nav className="bg-white border-gray-200">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                <a href="/TBST_Developement/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <Image src={Image1} width='300px' height='200px' alt='this is my image'/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                        TBST Development</span>
                </a>

                <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">

                        <li>
                            <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#99CCFF] md:p-0 md:w-auto">
                                Nos technologies <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                            </button>
                            <div id="mega-menu-dropdown"
                                 className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm border rounded-lg shadow-md border-gray-700 md:grid-cols-2 bg-gray-700">
                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                        <li>
                                            <a className="text-white font-bold">
                                                Application
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-gray-400 hover:text-[#99CCFF]">
                                                TEX
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 pb-0 md:pb-4 text-white">
                                    <ul className="space-y-4">
                                        <li>
                                            <a className="text-white font-bold">
                                                Service
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/nos-technologies/service" className="text-gray-400 hover:text-[#99CCFF]">
                                                Développement de logiciels
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>


                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#99CCFF] md:p-0 md:w-auto">
                                Qui sommes-nous ?<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                            </button>

                            <div id="dropdownNavbar"
                                 className="absolute z-10 grid hidden w-auto grid-cols-1 text-sm border rounded-lg shadow-md border-gray-700 md:grid-cols-1 bg-gray-700">
                                <ul className="py-2 text-base text-gray-400"
                                    aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/a-propos" className="block px-4 py-2 hover:text-[#99CCFF]">
                                            A propos</a>
                                    </li>

                                    <li>
                                        <a href="/contact" className="block px-4 py-2 hover:text-[#99CCFF]">
                                            Contact</a>
                                    </li>
                                </ul>
                                {/*<div className="py-1">*/}
                                {/*    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign*/}
                                {/*        out</a>*/}
                                {/*</div>*/}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
