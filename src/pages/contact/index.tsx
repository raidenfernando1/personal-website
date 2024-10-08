import styles from "./contact.module.css";
import { contactLinks } from "../../data/skills/contact";
import React, { useState } from "react";

const ContactPage = () => {
  const [submittedForm, setSubmittedForm] = useState({
    name: "",
    email: "",
    contents: "",
  });
  const [buttonMessage, setButtonMessage] = useState("Submit");
  const [buttonAnim, setButtonAnim] = useState(true);

  const isSubmitToggle = () => {
    setButtonAnim((prev) => !prev);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSubmittedForm({
      ...submittedForm,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data: ", submittedForm);
    setButtonMessage("Thank you! 😁");
    isSubmitToggle();
    setTimeout(() => {
      setButtonMessage("Send a message");
      isSubmitToggle();
    }, 2000);
  };

  return (
    <>
      <div className={styles.contactLayout}>
        <h1 className={styles.pageTitle}>Get in touch?</h1>
        <div className={styles.contactWrapper}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <p>
              Get in touch or send me an email directly on
              <a href="mailto: fernandoraiden6@gmail.com">
                fernandoraiden6@gmail.com
              </a>
            </p>
            <div className={styles.senderDetails}>
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                value={submittedForm.name}
                onChange={handleInputChange}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={submittedForm.email}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              required
              name="contents"
              placeholder="Your message"
              value={submittedForm.contents}
              onChange={handleInputChange}
            ></textarea>
            <div className={styles.buttonWrapper}>
              <button
                type="submit"
                className={` ${buttonAnim ? styles.active : ""}`}
              >
                {buttonMessage}
              </button>
            </div>
          </form>
          <div className={styles.imgContainer}>
            <ul>
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <a target="_blank" href={link.path}>
                    <img src={link.icon} alt={link.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
