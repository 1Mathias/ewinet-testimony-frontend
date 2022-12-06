import React from 'react'
import { useState } from 'react'
import './contact-us.css'

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name + email + message);
    }


    return (
        <div className="contain">

            <div className="wrapper">

                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <h4>GET IN TOUCH</h4>
                        <h2 className="form-headline">Send us a message</h2>
                        <div className="submit-form" action="">
                            <p>
                                <input id="name" className="form-input" type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                                <small className="name-error"></small>
                            </p>

                            <p>
                                <input id="email" className="form-input" type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                                <small className="name-error"></small>
                            </p>

                            <p className="full-width">
                                <textarea minlength="20" id="message" cols="30" rows="7" placeholder="Your Message" required onChange={(e) => setMessage(e.target.value)}></textarea>
                                <small></small>
                            </p>

                            <p className="full-width">
                                <button className="submit-btn" type="submit">Submit</button>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="contacts contact-wrapper">
                    <ul>
                        <li>We've driven online revenues of over <span className="highlight-text-grey">$2
                            billion</span> for our clients. Ready to know
                            how we can help you?</li>
                        <span className="hightlight-contact-info">
                            <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> info@ewunet.com</li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+ --- --- ---   </span></li>
                        </span>
                    </ul>
                </div>
            </div>
        </div >
    )
}
