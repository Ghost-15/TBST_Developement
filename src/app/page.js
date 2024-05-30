import Formulaire from "@/app/compoments/Formulaire";
export const metadata = {
    title: 'TBST Development',
    description: 'TBST Development is a software company' +
        'which makes software',
}

const banner={
    backgroundImage:
        "url('home.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
export default function Home() {
  return (
    <main>
        <div style={banner} className='flex items-center justify-center bg-fixed bg-center h-screen bg-cover'>

            <div className='backdrop-blur rounded-lg px-10 py-10 text-white mt-20'>
                <h2 className='md:text-5xl sm:text-3xl font-bold text-center'>Createur de logiciel informatique</h2>
                <p className='py-5 md:text-3xl sm:text-2xl text-center'>Quelle que soit la taille de votre business, notre trouverons
                    <br/>des solutions pour tous vos projects</p>
            </div>
        </div>

        <div className="w-full h-36 text-center text-4xl text-white font-bold items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <p className='py-14 md:text-3xl sm:text-2xl text-center'>
                Nous vous accompagnerons dans votre transformation digitale</p>
        </div>

        <div className="flex w-full flex-col items-center bg-[#E0E0E0]">
            <div className='w-full py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 transition ease-in-out delay-0 hover:text-white rounded-lg px-10 py-10 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                            Pourquoi nous choisir
                        </h1>
                        <p className="text-xl">
                            Nous sommes innovants et passionnés par le travail que nous faisons.
                            Nous ne vous aidons pas seulement à franchir des étapes, nous établissons des relations durables.
                        </p>
                    </div>

                    <div></div>
                </div>
            </div>

            <div className='w-full py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 transition ease-in-out delay-0 hover:text-white rounded-lg px-10 py-10 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 ...'>
                    <div></div>

                    <div className='flex flex-col justify-center'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                            Fiabilite</h1>
                        <p className="text-xl">
                            TBST Development conçoivent des logiciels de qualité
                            avec des conditions opérationnelles.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full h-36 text-center text-4xl text-white font-bold items-center justify-center bg-gray-500">
            <p className='py-14 md:text-3xl sm:text-2xl text-center'>Comment Nous Contacter</p>
        </div>

        <div className="flex flex-col items-center p-10">
            <Formulaire/>
        </div>
    </main>
  );
}
