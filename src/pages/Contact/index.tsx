import styled from "styled-components";

const ContactForm = () => {
  const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-family: inherit;
    width: 100%;

    > button {
      padding: 5px 10px;
      border: 1px solid white;
      background-color: transparent;
      color: white;
    }
  `;

  const Input = styled.div`
    > input {
      width: 100%;
      outline: none;
      padding: 5px;
      border: 1px solid white;
      background-color: transparent;
      color: white;
    }
  `;

  const TextareaWrapper = styled.div`
    > textarea {
      width: 100%;
      outline: none;
      height: 30vh;
      font-family: inherit;
      padding: 5px;
      border: 1px solid white;
      background-color: transparent;
      color: white;
    }
  `;

  return (
    <FormContainer>
      <Input>
        <label for="Name">Name</label>
        <input placeholder="Name" name="Name" id="Name" />
      </Input>
      <Input>
        <label for="Gmail">Gmail</label>
        <input type="email" placeholder="Email" name="Gmail" id="Gmail" />
      </Input>
      <TextareaWrapper>
        <label for="Message">Message Contents</label>
        <textarea
          placeholder="Message Contents"
          name="Message"
          id="Message"
        ></textarea>
      </TextareaWrapper>
      <button>Submit</button>
    </FormContainer>
  );
};

interface ContactLinkProps {
  type: string;
  platform: string;
  href: string;
  children: React.ReactNode;
}

const ContactLink = ({ type, platform, href, children }: ContactLinkProps) => {
  const ContactLinkContainer = styled.div`
    display: flex;
    gap: 5px;
  `;

  if (type === "gmail") {
    return (
      <ContactLinkContainer>
        <p>{platform}:</p>
        <a href={`mailto:${href}`}>{children}</a>
      </ContactLinkContainer>
    );
  } else {
    return (
      <ContactLinkContainer>
        <p>{platform}:</p>
        <a href={href}>{children}</a>
      </ContactLinkContainer>
    );
  }
};

const ContactPage = () => {
  const ContactLinks = [
    {
      type: "gmail",
      title: "Gmail",
      link: "fernandoraiden6@gmail.com",
      contents: "fernandoraiden6@gmail.com",
    },
    {
      type: "standard",
      title: "Instagram",
      link: "https://www.instagram.com/zillakamimicrowave/",
      contents: "@zillakamimicrowave",
    },
    {
      type: "standard",
      title: "Facebook",
      link: "https://www.facebook.com/raidenfernando9",
      contents: "raidenfernando9",
    },
    {
      type: "standard",
      title: "Github",
      link: "https://github.com/raidenfernando1",
      contents: "raidenfernando1",
    },
  ];

  const ContactPageContainer = styled.footer`
    display: flex;
    padding-block: 30px;
    gap: 10px;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  `;

  const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    width: 100%;

    > p {
      margin-right: 40px;
    }

    > ul {
      margin-top: 30px;
      padding: 15px;
      border-top: 1px dashed white;
    }
  `;

  return (
    <>
      <h1>Get in touch?</h1>
      <ContactPageContainer>
        <ContactsContainer>
          <p>
            I am always open to new opportunities and collaborations. If you
            have something in mind, feel free to contact me. We can discuss how
            we can work together to make your project a success.
          </p>
          <ul>
            {ContactLinks.map((links) => (
              <li>
                <ContactLink
                  type={links.type}
                  platform={links.title}
                  href={links.link}
                >
                  {links.contents}
                </ContactLink>
              </li>
            ))}
          </ul>
        </ContactsContainer>
        <ContactForm />
      </ContactPageContainer>
    </>
  );
};

export default ContactPage;
