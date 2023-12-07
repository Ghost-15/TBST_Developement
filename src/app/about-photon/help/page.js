import Formulaire from '/src/app/compoments/Formulaire'

export const metadata = {
    title: 'Contact Us',
    description: 'Photon',
}

const banner={
    backgroundImage:
        "url('https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">

            <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
                <div style={banner} className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'>
                    <div className='absolute top-40 left-20 p-5 text-white'>
                        <h2 className='text-5xl font-bold'>Conctact Us</h2>
                        <p className='py-5 text-xl'> Kindly call any of contact service numbers or fill the form below. All enquiries,<br/>
                            complaints and feedbacks will be treated by our efficient executives.</p>
                    </div>
                </div>
            </div>

            <Formulaire/>
        </main>
    )
}