'use client';
import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import {useEffect, useRef, useState} from "react";
import formulaire from '../style/formulaire.css';

export default function Formulaire () {
    const errRef = useRef();
    const emailRef = useRef(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('')
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');

    const check_email = emailRef;

    const firstChange = () => {
        document.getElementById("Loading").style.display = "block";
        document.getElementById( "Submit").style.display = "none"
    }
    const lastChange = () => {
        document.getElementById("Loading").style.display = "none";
        document.getElementById( "Submit").style.display = "block"
    }
    useEffect(() => {
        document.getElementById("Loading").style.display = "none";
    }, []);

    const sendMail = async (e) => {
        e.preventDefault();
        setErrMsg('')
        setSuccMsg('')

        try {
            if(check_email.current.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

                const response = await fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        subject,
                        message
                    })
                })

                if (response?.status === 200) {
                    setSuccMsg('Votre courrier a ete envoye avec succes')
                    lastChange()
                    setName('')
                    setEmail('')
                    setSubject('')
                    setMessage('')
                }else {
                    setErrMsg('Desole, Nous sommes confrontes a un probleme technique... Veuillez reessayer plus tard')
                    lastChange()
                }
            }else {
                setErrMsg('E-mail non valide')
            }
        } catch (error) {
            if (error.response?.status === 500) {
                setErrMsg('Desole, Nous sommes confrontes a un probleme technique... Veuillez reessayer plus tard')
            }
        }
    }

    return(
        <div className="containerinfo">
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"/>
                        <div className="topic">Address</div>
                        <div className="text-one">74 Avenue Jacques Opangault,<br/>
                            Songolo Pointe-Noire, Republique du Congo</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"/>
                        <div className="topic">Tel</div>
                        <div className="text-one">+242 06 851 9555</div>
                        {/*<div className="text-two">+242 05 381 8178</div>*/}
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"/>
                        <div className="topic">Email</div>
                        <div className="text-one">contact@tbst_development.com</div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="topic-text">Envoye nous un mail</div>
                    <p>Vous avez un projet en tête ?
                        Vous cherchez à développer votre activité ?<br/>
                        N’hésitez plus et contactez-nous pour en discuter.</p>
                    <p ref={errRef} className="text-red-600 text-xl">{errMsg}</p>
                    <p ref={errRef} className="text-green-600 text-xl">{succMsg}</p>

                    <form onSubmit={sendMail}>
                        <div className="input-box">
                            <input
                                type="text"
                                name="name"
                                placeholder="Entre votre nom"
                                required
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                        <div className="input-box">
                            <input
                                id="Email"
                                type="email"
                                name="email"
                                ref={emailRef}
                                placeholder="Entre votre email"
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Entre l'object"
                                required
                                value={subject}
                                onChange={(e) => {
                                    setSubject(e.target.value)
                                }}
                            />
                        </div>
                        <div className="input-box message-box">
                            <input
                                type="text"
                                name="message"
                                placeholder="Entre votre message"
                                required
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                            />
                        </div>

                        <div className="w-40 grid grid-cols-1 gap-4">
                            <Button id="Submit" type="submit" onClick={firstChange} className="bg-blue-500 text-white p-2.5 px-5 me-2 rounded-lg hover:bg-blue-300">
                                Envoie
                            </Button>

                            <button id="Loading" className="py-2.5 px-5 me-2 text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center hidden" disabled>
                                <svg aria-hidden="true" role="status"
                                     className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="#1C64F2"/>
                                </svg>
                                Chargement...
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
