"use client"
import { useForm, ValidationError } from '@formspree/react';
import { Button, TextField } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import EmptyTextarea from './inputs/StyledTextArea';
import { CSSProperties } from 'react';


function ContactForm() {
    const [state, handleSubmit] = useForm("xpzgznpd");

    const prepAndSubmitData = (e: any) => {
        e.preventDefault()

        const formData = {
            name: e.target.name.value,
            message: e.target.message.value,
            email: e.target.email.value,
        }
        handleSubmit(formData)
    }

    const inputStyle: CSSProperties = {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        color: 'black',
        opacity: '95%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)'

    }
    return state.succeeded
        ? <p style={{ textAlign: 'center' }}>Thanks for getting in touch!</p>
        : (
            <div>
                <p style={{ textAlign: 'center', fontWeight: '500', fontSize: '1.5rem' }}>Get in touch</p>
                <form style={{ display: 'flex', flexDirection: 'column' }}
                    onSubmit={prepAndSubmitData}>
                    <meta name="referrer" content="origin" />
                    <TextField
                        color='secondary'
                        InputProps={{ style: inputStyle }}
                        required id="name" label="Name" />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <TextField
                        color='secondary'
                        InputProps={{ style: inputStyle }}
                        required id="email" type="email" label="Email" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <TextField
                        color='secondary'
                        InputProps={{ style: inputStyle }}
                        rows={2}
                        maxRows={5}
                        multiline
                        required
                        id="message"
                        label="Message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <Button type="submit" style={{ color: 'white', backgroundColor: '#0c847e' }} variant="contained" disabled={state.submitting}>Submit</Button>
                </form>
            </div>
        )

}
export default ContactForm