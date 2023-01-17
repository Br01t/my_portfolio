import React from "react";
import call from "../img/call.png";
import mail from "../img/mail.png";

function Contact() {
  return (
    <div className="contact">
      <a id="anchor-contact">
        <h1>CONTACT</h1>
      </a>
      <ul class="contact-list">
        <span>
          <li>
            <a href="tel:+393454104654">
              <img src={call} alt="call" width={30} />
              +39 345 410 4654
            </a>
          </li>
        </span>
        <li>
          <a href="mailto:giacomo.piccinini1@gmail.com">
            <img src={mail} alt="mail" width={30} />
            giacomo.piccinini1@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
