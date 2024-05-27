"use client"
import "./globals.css";
import {useEffect} from "react";
import {initFlowbite} from "flowbite"
import Navbar from "@/app/compoments/Navbar";
import Endbar from "@/app/compoments/Endbar";

export default function RootLayout({ children }) {
    useEffect(()=>{
        initFlowbite();
    }, []);
  return (
      <html lang="en">
      <head>
          <meta charSet="UTF-8"/>
          <link rel="icon" href="/picture.jpg"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>

      <header>
          <Navbar/>
      </header>

      {children}

        <Endbar/>

      </body>
      </html>
  );
}
