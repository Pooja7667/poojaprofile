import React from "react";
import "../Style/about.css";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="box-imag-flax">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>
        <div className="two-box">
          <div className="box -inlinleft">
            <div className="box-img">
              <img
                src="https://i.pinimg.com/736x/f5/b0/45/f5b045627b6c125e500fc02f42d79763.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="box-details-right">
            <div className="box3-flax">
              <div className="box1">
                <div> </div>
                <h5 style={{ color: "white" }}>Experience</h5>
                <p>In creating website</p>
              </div>

              <div className="box2">
                <div> </div>
                <h5 style={{ color: "white" }}>Clints</h5>
                <p>With Happy Experience</p>
              </div>

              <div className="box3">
                <div> </div>
                <h5 style={{ color: "white" }}>Projects</h5>
                <p>50+ web project</p>
              </div>
            </div>

            <p className="p">
              As a frontend developer, i am responsible for crafting user
              interfaces on the web. You work with HTML, CSS, and JavaScript to
              create visually appealing and interactive experiences. Your tasks
              include building responsive designs, using frontend frameworks
              like React, optimizing performance, ensuring cross-browser
              compatibility, and staying updated with industry trends.
            </p>
            <button>Let's Talk</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
