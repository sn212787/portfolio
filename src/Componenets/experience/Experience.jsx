import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>HTML</h4>

                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>CSS</h4>

                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>JavaScript</h4>

                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>BootStrap</h4>

                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>Tailwind</h4>

                <small className="text-align">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>React JS</h4>

                <small className="text-align">Entry Level</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Learning Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>Node JS</h4>

                <small className="text-align">Learning</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>Express JS</h4>

                <small className="text-align">Learning</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>PHP</h4>

                <small className="text-align">Entry Level</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>MySQL</h4>

                <small className="text-align">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience" />
              <div>
                <h4>MongoDb</h4>

                <small className="text-align">Entry Level</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
