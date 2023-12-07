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
import { useState } from "react";
import formulaire from '../style/formulaire.css';
import {sendContactForm} from "../api/api";

const initValues = {
    name: "",
    email:"",
    subject:"",
    message:""
}
// const initState = {values:initValues}
const initState = { isLoading: false, error: "", values: initValues };
export default function Formulaire () {
    const toast = useToast();
    const [state, setState] = useState(initState)
    // const [touched, setTouched] = useState({});
    const {values, isLoading, error} = state;

    // const onBlur = ({ target }) =>
    //     setTouched((prev) => ({ ...prev, [target.name]: true }));
    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        }
    }));
    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            // setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };

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
                            <div className="topic">Phone</div>
                            <div className="text-one">+242 06 405 0548</div>
                            <div className="text-two">+242 05 381 8178</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope"/>
                            <div className="topic">Email</div>
                            <div className="text-one">contact@photon-cg.com</div>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>Can't find what you're searching for?<br/>
                            Fill in the details below</p>
                        {error && (
                            <Text className="text-red-500 text-xl">
                                {error}
                            </Text>
                        )}
                            <div className="input-box">
                                {/*<FormControl isRequired isInvalid={touched.name && !values.name} mb={8}>*/}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={values.name}
                                    onChange={handleChange}
                                    // onBlur={onBlur}
                                />
                                {/*    <FormErrorMessage>Required</FormErrorMessage>*/}
                                {/*</FormControl>*/}
                            </div>
                            <div className="input-box">
                                {/*<FormControl isRequired isInvalid={touched.email && !values.email} mb={8}>*/}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={values.email}
                                    onChange={handleChange}
                                    // onBlur={onBlur}
                                />
                                {/*    <FormErrorMessage>Required</FormErrorMessage>*/}
                                {/*</FormControl>*/}
                            </div>
                            <div className="input-box">
                                {/*<FormControl mb={8} isRequired isInvalid={touched.subject && !values.subject}>*/}
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Enter your subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    // onBlur={onBlur}
                                />
                                {/*    <FormErrorMessage>Required</FormErrorMessage>*/}
                                {/*</FormControl>*/}
                            </div>
                            <div className="input-box message-box">
                                {/*<FormControl isRequired isInvalid={touched.message && !values.message} mb={8}>*/}
                                <input
                                    type="text"
                                    name="message"
                                    placeholder="Enter your message"
                                    value={values.message}
                                    onChange={handleChange}
                                    // onBlur={onBlur}
                                />
                                {/*    <FormErrorMessage>Required</FormErrorMessage>*/}
                                {/*</FormControl>*/}
                            </div>
                            <Button
                                variant="outline"
                                isLoading={isLoading}
                                disabled={
                                    !values.name || !values.email || !values.subject || !values.message
                                }
                                className="bg-blue-500 text-white p-3.5 rounded-xl hover:bg-blue-300"
                                onClick={onSubmit}>
                                Submit
                            </Button>
                            {/*<div className="button">*/}
                            {/*    <input*/}
                            {/*        type="button"*/}
                            {/*        value="Submit"*/}
                            {/*        // isLoading={isLoading}*/}
                            {/*        // disabled={*/}
                            {/*        //     !values.name || !values.email || !values.subject || !values.message*/}
                            {/*        // }*/}
                            {/*        // onClick={onSubmit}*/}
                            {/*    />*/}
                            {/*</div>*/}
                    </div>
                </div>
            </div>
    );
}