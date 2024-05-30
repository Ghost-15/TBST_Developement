import React from 'react';
export const metadata = {
    title: 'Service',
    description: 'TBST Development is a software company' +
        'which makes software',
}

function Page() {
    return (
        <main>
           <div className="h-screen bg-gradient-to-r from-[#E684AE] from-10% via-sky-500 via-30% to-[#79CBCA] to-90% ...">
               <div className='grid items-center justify-center text-white'>
                   {/*<h1 className="text-6xl font-bold mt-20 underline">Nos Services</h1>*/}
                   <div className='w-full py-16 px-4'>
                       <div className='backdrop-blur rounded-lg px-10 py-10 text-white mt-40'>
                           <h2 className='md:text-5xl sm:text-3xl font-bold text-center'>
                               Bâtissons ensemble votre avenir numérique
                           </h2>
                           <p className='py-5 md:text-4xl sm:text-2xl text-center'>
                               Pour tous vos projets, TBST Development vous propose des solutions sur mesure,
                               dans le respect de votre vision stratégique et de vos enjeux d'optimisation des coûts.</p>

                           {/*<a href="/contact">*/}
                           {/*    <button type="button" className="p-2.5 px-5 me-2 rounded-lg bg-white text-black 4 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-black">*/}
                           {/*        Contactez nous</button>*/}
                           {/*</a>*/}
                       </div>
                   </div>
               </div>
           </div>

            <div className="grid justify-items-center mt-8">
                <h2 className="md:text-4xl sm:text-3xl text-[#3399FF] underline">Project IT</h2>

                <h1 className="md:text-4xl sm:text-3xl text-black font-bold mt-2">Nous vous superviserons
                    dans toutes les étapes de votre projet</h1>
            </div>

            <div className="flex justify-center mt-8">
                <div className="grid gap-8 grid-cols-3">
                    <div className="block max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                            Conseil en transformation Digitale</h5>
                        <p className="font-normal text-gray-400">Nous conseillons à nos clients sur leur transformation digitale,
                            depuis la vision stratégique jusqu'à la mise en œuvre opérationnelle
                            du project.</p>
                    </div>

                    <div className="block max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                            Développement <br/>informatique</h5>
                        <p className="font-normal text-gray-400">Nous développons tous types de solutions informatiques
                            et garantissant un niveau de qualité toujours plus exigeant.</p>
                    </div>

                    <div className="block max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                            Marketing & <br/>Communication</h5>
                        <p className="font-normal text-gray-400">Vous souhaitez concevoir et déployer une campagne de
                            communication? Nous vous accompagnerons dans toutes vos stratégies.</p>
                    </div>
                </div>
            </div>

            <div className="mt-20"></div>
        </main>
    );
}

export default Page;