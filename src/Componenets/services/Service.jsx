import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create interactive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create Mobile Friendly UI</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create Users Friendly Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create Designs According to User Requairments</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Tested Designs</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Front-end Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create Front end web Apps</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full Stack App</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Businnes Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Friendly Websites</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
