import styles from "./contact.module.css";
import { contactLinks } from "../../data/skills/contact";

const ContactPage = () => {
  return (
    <div className={styles.contactLayout}>
      <h1 className={styles.pageTitle}>Get in touch?</h1>
      <div className={styles.formContainer}>
        <p>
          Get in touch or send me an email directly on
          <a href="mailto: fernandoraiden6@gmail.com">
            fernandoraiden6@gmail.com
          </a>
        </p>
        <div className={styles.senderDetails}>
          <input required type="text" placeholder="Name" />
          <input required type="text" placeholder="Email" />
        </div>
        <textarea className={styles.message} name="" id=""></textarea>
        <button>Submit</button>
      </div>
      <div className={styles.contactFooter}>
        <p>I built this website using: React + Supabase</p>
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
  );
};

export default ContactPage;
