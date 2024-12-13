import React, { useCallback, useState } from "preact/compat";
import styled from "styled-components";
import { supabase } from "../../supabase";

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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: inherit;
  width: 100%;
  > input {
    width: 100%;
    outline: none;
    padding: 5px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  > button {
    width: 100%;
    padding: 5px 10px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    cursor: pointer;
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
    min-height: 300px;
    resize: vertical;
  }
`;

const ErrorMessage = styled.p`
  border-bottom: 1px solid white;
  animation: blur 300ms ease forwards;

  @keyframes blur {
    from {
      filter: blur(20px);
    }
    to {
      filter: blur(0px);
    }
  }
`;

const ContactForm = () => {
  const handleChange = useCallback(
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setter((e.target as HTMLInputElement).value);
      },
    []
  );

  const [messengerName, setMessengerName] = useState("");
  const [messengerEmail, setMessengerEmail] = useState("");
  const [messageContents, setMessageContents] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const [debounce, setDebounce] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (debounce) {
      setMessageStatus("Wait for 5 seconds to send another message");
      return;
    }

    const message = {
      sender_name: messengerName,
      message_contents: messageContents,
      sender_email: messengerEmail,
    };

    try {
      const { error } = await supabase
        .from("messages")
        .insert([message])
        .select();
      error
        ? setMessageStatus("Error sending message..")
        : setMessageStatus("Message sent thanks :)");

      setDebounce(true);
      setTimeout(() => {
        setMessageStatus("");
        setDebounce(false);
      }, 5000);
    } catch (err) {
      setMessageStatus("Error sending message..");
      setTimeout(() => {
        setDebounce(true);
      }, 5000);
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <ErrorMessage key={messageStatus}>{messageStatus}</ErrorMessage>
        <label for="Name">Name</label>
        <input
          placeholder="Name"
          name="Name"
          id="Name"
          value={messengerName}
          onChange={handleChange(setMessengerName)}
        />
        <label for="Gmail">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="Gmail"
          id="Gmail"
          value={messengerEmail}
          onChange={handleChange(setMessengerEmail)}
        />
        <TextareaWrapper>
          <label for="Message">Message Contents</label>
          <textarea
            placeholder="Message Contents"
            name="Message"
            id="Message"
            value={messageContents}
            onChange={handleChange(setMessageContents)}
          ></textarea>
        </TextareaWrapper>
        <ButtonContainer>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </ButtonContainer>
      </FormContainer>
    </>
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
