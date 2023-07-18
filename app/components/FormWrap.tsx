'use client'
import { ReactNode } from "react";
import ContactForm from "./Form"
import {
    GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3';

export default function FormWrap(): ReactNode {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="6LemJCAnAAAAAOLl5WGLCBEJqgRXUPaS5xcvbTPh"
            scriptProps={{
                // async: false,
                // defer: false,
                // appendTo: "head",
                // nonce: undefined,
            }}>
            <ContactForm />
        </GoogleReCaptchaProvider>)
}