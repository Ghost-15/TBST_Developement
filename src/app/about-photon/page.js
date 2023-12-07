import photo from '../style/photo.css'

export const metadata = {
    title: 'About Photon',
    description: 'Photon',
}
const banner={
    backgroundImage:
        "url('https://images.unsplash.com/photo-1626695436755-3e288720849c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}
export default function About(){
    return(
    <main className="flex min-h-screen flex-col items-center">

    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        <div style={banner} className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'>
            <div className='absolute top-40 left-20 p-5 text-white '>
                <h2 className='text-5xl font-bold'>About Photon</h2>
                <p className='py-5 text-xl'>With us, you’ve got options from the main oil service companies.</p>
            </div>
        </div>
    </div>

        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Photon SARL</h1>
                    <p>
                        The first and unique Wireline & Slickline Congolese company,
                        Photon is made of Engineers and Technicians with big local and international oilfield service experience for onshore,
                        offshore, and deepwater operations.
                    </p>
                </div>

                <img src="/Wireline_Cable.jpg" className='w-[500px] mx-auto my-4' alt='/'/>
            </div>
        </div>

        {/*<div className="md:flex lg:w-1/2 p-2">*/}
        {/*    <div className="md:flex-1 rounded-sm shadow-lg text-gray-600 bg-white rounded-sm shadow-lg">*/}
        {/*        <div className="overflow-hidden w-full flex leading-normal lg:h-full">*/}
        {/*            <div className="sm:w-1/3 lg:w-1/4 bg-teal-600 flex items-center justify-center">*/}
        {/*                <div className="text-gray-600  sm:w-2/3 lg:w-3/4 p-4">*/}
        {/*                    <h1 className='md:text-4xl sm:text-3xl text-[#3399FF] text-2xl font-bold py-2'>*/}
        {/*                        Our Mission*/}
        {/*                    </h1>*/}
        {/*                    <p>...</p>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <p className="text-gray-600  sm:w-2/3 lg:w-3/4 p-4">*/}
        {/*                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor*/}
        {/*                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam*/}
        {/*                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata*/}
        {/*                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing*/}
        {/*                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed*/}
        {/*                diam voluptua. At vero eos et accusam et justo duo dolores et*/}
        {/*                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.*/}
        {/*            </p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className='w-full bg-[#E0E0E0] py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-[#3399FF] text-2xl font-bold py-2'>
                        Our Mission</h1>
                    <p>
                        Intervening over the Life Cycle of a Well, we provide, with the support of our partners,
                        effective technology solutions to the needs of our customers
                        and ensure the services delivered meet customer objectives and performance metrics.
                    </p>
                </div>

                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-[#3399FF] text-2xl font-bold py-2'>
                        Our Vision</h1>
                    <p>
                        Developing ourselves to be recognized as a service company and partner of a choice in Congo
                        and in the Sub-region oil & gas industry for delivering wireline & slickline services
                        and bringing value to our industry and our community.
                    </p>
                </div>
            </div>
        </div>

        {/*<div className='w-full bg-white py-16 px-4'>*/}
        {/*    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>*/}
        {/*        <div className='flex flex-col justify-center'>*/}
        {/*            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>*/}
        {/*                Message from the CEO</h1>*/}
        {/*            <p>*/}
        {/*                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum*/}
        {/*                molestiae delectus culpa hic assumenda, voluptate reprehenderit*/}
        {/*                dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,*/}
        {/*                eveniet ex deserunt fuga?*/}
        {/*            </p>*/}
        {/*        </div>*/}

        {/*        <img className='w-[500px] mx-auto my-4' alt='/'/>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src="/ourValues.jpg" className='w-[500px] mx-auto my-4' alt='/'/>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Our Values</h1>
                    <p>
                        People<br/>
                        Technology<br/>
                        Process
                    </p>
                </div>
            </div>
        </div>
    </main>
    )
}