import React from "react";
import ContactPNG from "../assets/contact.png"
import Contact from "./pages/Contact";


function ContactCard(props) {
    return (
    <div className="contact-card">

    <div className="card">
        <h1 className="text-center">Contact Me</h1>
        <div className="card-content">
            <a href="tel:+7043077417" className="ml-4 mt-4 font-weight-bold">Phone</a>

            <a href="mailto: toleto2013@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

            <a href="https://www.linkedin.com/in/jonathan-de-los-santos-abb7081a6/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

            <a href="https://github.com/jdelossantos47" className="ml-4 mt-4 font-weight-bold">GitHub</a>

            <img src={Contact.png} alt="" className="profile float-left"></img>
        </div>
     </div>
    </div>

);

}

export default ContactCard;
