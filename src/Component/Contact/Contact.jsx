import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1767b7f6-6894-45f4-a683-920f76590b63");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through our contact form or find our contact
          information below. Your feedback and inquiries are important to us,
          and we're here to assist you.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Contact@educity.edu
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +1 2343 5676 8900
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge <br />
            MA 123109, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />
          <label>Message</label>
          <textarea
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Send Message
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
