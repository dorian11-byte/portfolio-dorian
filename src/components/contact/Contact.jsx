import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './contact.css'

const Contact = () => {

    const validateForm = (formData) => {
        const errors = {};
        const requiredFields = ["name", "email", "project"];

        requiredFields.forEach((field) => {
            if (!formData[field]) {
                errors[field] = "This field is required";
            }
        });

        return errors;
    };


    const MySwal = withReactContent(Swal)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        //make a validation of the form to avoid sending empty fields
        const formData = new FormData(form.current);
        const errors = validateForm(Object.fromEntries(formData.entries()));

        if (Object.keys(errors).length > 0) {
            // Display errors to user
            MySwal.fire({
                icon: 'error',
                title: <p>You have to complete all the fields</p>
            })
            console.log(errors);
            return;
        }

        //if no errors, send the email

        emailjs.sendForm('service_al4l8t9', 'template_jymt0bn', form.current, 's4aWOgHbkPCi1dygh')
        .then((result) => {
            MySwal.fire({
                title: <p>Email sent successfully</p>,
                html: <p>I will respond as soon as posible</p>,
                icon: 'success',
                confirmButtonText: 'Ok',
                timer: 2000
            })
        }, (error) => {
            MySwal.fire({
                title: <p>Message not sent</p>,
                html: <p>Please try again later</p>,
                icon: 'error',
                confirmButtonText: 'Ok',
                timer: 2000
            })
        });
        e.target.reset()
    };


    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Start talking with me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">trabajo@gmail.com</span>
                            
                            <a href="mailto:exmaple@gmail.com" className="contact__button">
                                Write Me {""}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+52 314 197 23 59</span>
                            
                            <a href="https://api.whatsapp.com/send?phone=3141972359&text=Hello, I want more information about your services" 
                                className="contact__button">
                                Write Me {""}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-linkedin-square contact__card-icon"></i>
                            
                            <h3 className="contact__card-title">LinkedIn</h3>
                            <span className="contact__card-data">@Dorian Raygoza</span>
                            
                            <a href="https://www.linkedin.com/in/dorian-raygoza/" className="contact__button">
                                Write Me {""}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your name"/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea 
                                name="project" 
                                cols="30" 
                                rows="10"
                                className="contact__form-input" 
                                placeholder="Write your Project">
                                
                            </textarea>
                        </div>

                        <button className="button button--flex">
                            Send Message 
                            <i className="uil uil-message button__icon"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact