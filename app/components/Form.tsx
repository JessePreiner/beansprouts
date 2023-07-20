"use client"
import { useForm, ValidationError } from '@formspree/react';
import { Button, TextField } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';


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
    return state.succeeded
        ? <p>Thanks for getting in touch!</p>
        : (
            <div>
                <p>Get in touch</p>
                <form onSubmit={prepAndSubmitData}>
                    <meta name="referrer" content="origin" />
                    <div>
                        <div>
                            <TextField required id="name" label="Name" />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <TextField required id="email" type="email" label="Email" />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />


                        </div>

                        <TextareaAutosize
                            required
                            id="message"
                            
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <Button type="submit" variant="outlined" disabled={state.submitting}>Submit</Button>
                </form>
            </div>
        )

}
export default ContactForm