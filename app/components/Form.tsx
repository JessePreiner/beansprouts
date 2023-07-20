"use client"
import { useForm, ValidationError } from '@formspree/react';
import { Button, TextField } from '@mui/material';


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
                            <TextField required id="name" label="Name" variant="filled" />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <TextField required id="email" type="email" label="Email" variant='filled' />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />


                        </div>

                        <TextField required id="message" label="Message" variant='filled' />
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