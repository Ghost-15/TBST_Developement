import React from 'react';
export const metadata = {
    title: 'Service',
    description: 'TBST Development',
}
function Page() {
    return (
        <main className="h-screen bg-gradient-to-r from-[#E684AE] from-10% via-sky-500 via-30% to-[#79CBCA] to-90% ...">
            <div className='grid items-center justify-center text-white'>
                <h1 className="text-6xl font-bold mt-20 underline">Nos Services</h1>
                <div className='w-full py-16 px-4'>
                    <div className='backdrop-blur rounded-lg px-10 py-10 text-white mt-40'>
                        <h2 className='text-5xl font-bold text-center'>
                            Nous créons des logiciels android et des site web
                        </h2>
                        <p className='py-5 text-3xl text-center'>
                            Quelle que soit la taille de votre entreprise, notre équipe
                            <br/>veillera à ce que nos logiciels répondent à tous vos besoins.</p>

                        <a href="/TBST_Developement/contact">
                            <button type="button" className="p-2.5 px-5 me-2 rounded-lg bg-white text-black 4 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-black">
                                Contactez nous</button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;
