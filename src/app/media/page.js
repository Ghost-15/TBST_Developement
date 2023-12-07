import React from "react";

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
export default function Home(){
    return(
        <main className="flex min-h-screen flex-col items-center">

            <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
                <div style={banner} className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'>
                    <div className='absolute top-40 left-20 p-5 text-white '>
                        <h2 className='text-5xl font-bold'>Media</h2>
                        <p className='py-5 text-xl'>With us, you’ve got options from the main oil service companies.
                            <br/>We have great local and international experiences on oil fields in onshore, offshore and deepwater operations.</p>
                    </div>
                </div>
            </div>

            <h1 className="text-4xl text-black font-bold items-center justify-center">News</h1>

        </main>
    )
}