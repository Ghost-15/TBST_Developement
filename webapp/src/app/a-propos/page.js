import React from 'react';
export const metadata = {
    title: 'A propos de Nous',
    description: 'TBST Development',
}

function Page() {
    return (
        <main className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
                <div className='grid items-center justify-center text-white'>
                    <div className='w-full py-16 px-4'>
                        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                            <div className='flex flex-col justify-center'>
                                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                                    A propos de Nous
                                </h1>
                                <p className="text-xl">
                                    Chez TBST Development, Nous sommes Talentueux et dévoué, le code est notre passion.
                                    Nous aimons écrire du code propre et de qualité afin de fournir d'excellents logiciels.
                                </p>
                            </div>

                            <div></div>
                        </div>
                    </div>

                    <div className='w-full bg-gray-500 rounded-lg py-16 px-4'>
                        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                            <div className='flex flex-col justify-center'>
                                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                                    Notre mission</h1>
                                <p className="text-xl">
                                    Nous faisons du développement de logiciels professionnels pour votre entreprise pour vous ajoute
                                    plus de productivite et vous faire gagner du temps. Nous nous efforcons a créer des logiciels
                                    les plus puissants et les plus efficaces au monde.
                                </p>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </div>
        </main>
    );
}

export default Page;