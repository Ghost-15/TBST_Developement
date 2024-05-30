
function Endbar() {
    return (

        <footer className="items-center justify-center bg-gray-900 p-10">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/TBST_Developement" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/TBST_Developement/picture.jpg" className="h-8" alt="Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            TBST Development</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <a href="/TBST_Developement/a-propos" className="hover:underline me-4 md:me-6">A propos</a>
                        </li>
                        <li>
                            <a href="/TBST_Developement/contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center">
                    TBST Development © 2024.</span>
            </div>
        </footer>
    );
}

export default Endbar;
