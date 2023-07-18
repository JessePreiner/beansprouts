"use client"
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
    const [state, handleSubmit] = useForm("xpzgznpd");

    return state.succeeded
        ? <p>Thanks for getting in touch!</p>
        : (
            <div>
                <p>Get in touch</p>
                <form style={{display: 'flex', justifyContent: 'space-between'}} onSubmit={handleSubmit}>
                    <meta name="referrer" content="origin" />
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input required
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor="name">
                            Full name
                        </label>
                        <input required
                            id="name"
                            type="text"
                            name="name"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea required
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        )

}
export default ContactForm