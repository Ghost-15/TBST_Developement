import Formulaire from "@/app/compoments/Formulaire";
export const metadata = {
    title: 'TBST Development',
    description: 'TBST Development',
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

            <div className='backdrop-blur rounded-lg  px-10 py-10 text-white mt-40'>
                <h2 className='text-5xl font-bold text-center'>Nous créons des logiciels pour votre
                    <br/>entreprise afin que vous puissiez travailler
                    <br/>plus facilement et efficacement</h2>
                <p className='py-5 text-3xl text-center'>Quelle que soit la taille de votre entreprise, notre équipe
                    <br/>veillera à ce que nos logiciels répondent à tous vos besoins.</p>
            </div>
        </div>

        <div className="w-full h-48 text-center text-4xl text-white font-bold items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <p className='py-14 text-3xl text-center'>Nous travaillons sur des applications qui
                <br/>aideront votre entreprise à se développer.
            </p>
        </div>

        <div className="flex w-full flex-col items-center bg-gray-500">
            <div className='w-full bg-gray-500 py-16 px-4'>
                <div className='max-w-[1240px] bg-white mx-auto grid md:grid-cols-2 transition ease-in-out delay-0 bg-gray-500 hover:text-white rounded-lg px-10 py-10 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                            Pourquoi nous choisir
                        </h1>
                        <p className="text-xl">
                            Nous sommes innovants et passionnés par le travail que nous faisons.
                            Nous avons toujours de nouvelles façons d'enrichir vos revenus à des sommets plus élevés.
                        </p>
                    </div>

                    <div></div>
                </div>
            </div>

            <div className='w-full bg-gray-500 py-16 px-4'>
                <div className='max-w-[1240px] bg-white mx-auto grid md:grid-cols-2 transition ease-in-out delay-0 bg-gray-500 hover:text-white rounded-lg px-10 py-10 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-pink-500 hover:to-yellow-500 ...'>
                    <div></div>

                    <div className='flex flex-col justify-center'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                            Fiabilite</h1>
                        <p className="text-xl">
                            De nombreuses entreprises et individus trouvent que les logiciels de
                            TBST Development les rendent plus productives.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center p-10">
            <Formulaire/>
        </div>
    </main>
  );
}
