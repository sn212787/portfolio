import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresh</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+</small>
            </article>
            <article className="about__card">
              <GrProjects className="about__icon" />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

          <p>
            Hey! My Name is Shahnawaz, Skilled Front end Developer. I hava a
            skills in Web Development with proficient in HTML, CSS, Javascript
            and React, Also hava a Knowladge of PHP and MySQL. I made projects
            like cloning different Websites. I make currency converter calling
            API and full Functional TODO App using React and tailwind and
            Appwrite. I want to enhance my skills and also commuunication skills
            to join your company.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
