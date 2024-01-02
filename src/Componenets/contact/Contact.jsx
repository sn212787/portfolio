import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6szo18b",
      "template_97lx11o",
      form.current,
      "QoswfxW4S36QaWVdr"
    );
    e.target.reset();
  };
  return (
    <section id="#Contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className=".contact_option-icon" />
            <h4>Email</h4>
            <h5>sn312787@gmail.com</h5>
            <a href="mailto:sn312787@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className=".contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+923400199107</h5>
            <a
              href="https://api.whatsapp.com/send?phone+923400199107"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaGithub className=".contact_option-icon" />
            <h4>Github</h4>
            <h5>Shahnawaz</h5>
            <a href="https://github.com/sn212787" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
