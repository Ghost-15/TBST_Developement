import './globals.css'
import Navbar from './compoments/Navbar';
import campagny from './style/campagny.css';
import endbar from './style/endbar.css';
import Head from "next/head";
import React from "react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <link rel="icon" href="/photon_logo.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
        <header><Navbar/></header>
        {children}
        <section className="contact" id="contact">
            <div className="main-contact">
                <div className="contact-content">
                    <li><h2>Photon</h2></li>
                    <li><a href="/about-photon">About Us</a></li>
                </div>

                <div className="contact-content">
                    <li><h2>Help & Support</h2></li>
                    <li><a href="/about-photon/help">Contact Us</a></li>
                </div>
            </div>
        </section>

        <footer><div className="cpy"/></footer>
        </body>
    < /html>
    )
}