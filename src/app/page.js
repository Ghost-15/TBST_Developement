import Image from 'next/image';
import box from './style/box.css';
import photo from './style/photo.css';
import Formulaire from "./compoments/Formulaire";
import React from "react";
import Link from 'next/link';

export const metadata = {
  title: 'Home',
  description: 'Photon',
}
const banner={
  backgroundImage:
      "url('https://images.unsplash.com/photo-1518291182257-c3dbbc38d89f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            <div style={banner} className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'>
                <div className='absolute top-40 left-20 p-5 text-white'>
                    <h2 className='text-5xl font-bold'>A Private Congolese<br/> Law Company</h2>
                    <p className='py-5 text-xl'>We have great local and international experiences
                        <br/>in oilfield services, in onshore, offshore and deepwater operations.</p>
                </div>
            </div>
        </div>

        <h2 className="text-xl text-[#3399FF] items-center justify-center">WHAT WE DO</h2>

        <h1 className="text-4xl text-black font-bold items-center justify-center">Our Services</h1>

        <div className="container justify-between p-10">
            <div className="box">
                <h2>Slickline Operations</h2>
            </div>

            <div className="box">
                <h2>GR Correlation</h2>
            </div>

            <div className="box">
                <h2>Memory Gauges</h2>
            </div>

            <div className="box">
                <h2>Tubing mechanical Puncher & Cutter</h2>
            </div>

            <div className="box">
                <h2>Plug & Packer setting</h2>
            </div>

            <div className="box">
                <h2>Cement Bond & Casing Corrosion</h2>
            </div>

            <div className="box">
                <h2>Production Logging Measurement</h2>
            </div>

            <div className="box">
                <h2>Basic Open Hole Logging</h2>
            </div>
        </div>

        <div className="containerphoto p-10">
            <img src="https://images.unsplash.com/photo-1609373235983-bef55d06268d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-96 w-screen" alt="Snow"/>
                <div className='absolute top-20 right-20 p-5 text-white'>
                    <h4 className='text-3xl text-red-600'>Why choose Photon?</h4>
                    <h1 className='text-2xl'>We provide effective technology <br/>solutions to our customers needs and challenges.</h1>
                </div>
        </div>

        {/*<h2 className="text-xl text-[#3399FF] items-center justify-center">PARTERS</h2>*/}

        {/*<h1 className="text-4xl text-black font-bold items-center justify-center">Our Clients</h1>*/}

        <Formulaire/>
    </main>
  )
}