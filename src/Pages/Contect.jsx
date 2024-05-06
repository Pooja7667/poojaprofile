import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Style/Contect.css";
const Contect = () => {
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="flax-right">
          <div>
            <article>
              <MarkEmailReadIcon />
              <h4>Email</h4>
              <h5>kpk79046@gmail.com</h5>
              <a
                href="mailto:kpk79046@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Send an email
              </a>
            </article>
            <article>
              <LinkedInIcon />
              <h4>Linkedin</h4>
              <h5>Link in</h5>
              <a
                href="https://www.linkedin.com/in/pooja-gupta-gupta-4245491b8/"
                rel=""
                target="_blank"
              >
                Send a massage
              </a>
            </article>
            <article>
              <WhatsAppIcon />
              <h4>Whatsapp</h4>
              <h5>766750648.</h5>
              <a
                href="https://api.Whatsapp.com/send?phone+917667506485"
                rel=""
                target="_blank"
              >
                Contect by whatsapp
              </a>
            </article>
          </div>
          <form>
            <div class="container">
              <h2>Contact Us</h2>
              <form
                action="mailto:kpk79046@example.com"
                method="post"
                enctype="text/plain"
                className="from-in left"
                target="_blank"
              >
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="message">Message:</label>
                <textarea id="message" name="message" required />

                <input type="submit" value="Submit" />
              </form>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contect;
