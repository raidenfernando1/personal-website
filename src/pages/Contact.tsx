import styled from "styled-components";
import { ContactList } from "../helper/Contact";

const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const CTA = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > li a {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <Container>
      <h1>Get in touch.</h1>
      <p>
        I am always open to new opportunities and collaborations. If you have
        something in mind, feel free to contact me. We can discuss how we can
        work together to make your project a success.
      </p>
      <CTA>
        {ContactList.map((contact, index) => {
          return (
            <li key={index} aria-label={contact.platform}>
              <span>
                {contact.platform}: <a href={contact.link}>{contact.name}</a>
              </span>
            </li>
          );
        })}
      </CTA>
    </Container>
  );
};

export default Contact;
