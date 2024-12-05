import styled from "styled-components";
import GlobalButtonAssets from "../../assets/GlobalButtonAssets";
import { supabase } from "../../supabase";
import { useState } from "preact/hooks";

const ButtonLayout = styled.section`
  padding-block: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    max-width: 50%;
    font-size: 1rem;
  }

  > div {
    display: flex;
  }

  div > button {
    padding: 5px 30px;
    color: white;
    background-color: transparent;
    border-radius: 15px;
    border: 4px solid white;
    cursor: pointer;

    @media (max-width: 1000px) {
      border: 2px solid white;
    }
  }

  img {
    animation: leftBob 500ms infinite alternate;

    @keyframes leftBob {
      from {
        transform: translateX(-50%);
      }
      to {
        transform: translateX(0%);
      }
    }

    @media (max-width: 1000px) {
      width: 40px;
      heigh: 40px;
    }
  }
`;

const GlobalButton = () => {
  const [buttonText, setButtonText] = useState(
    "Hello visitor! click this button please."
  );

  const submitClick = async () => {
    const hasClicked: boolean | null = JSON.parse(
      localStorage.getItem("hasClicked") as string
    );

    if (hasClicked) {
      const { data, error: fetchError } = await supabase
        .from("button_clicks")
        .select("clicks")
        .eq("id", import.meta.env.VITE_BUTTON_ROW_ID)
        .single(); // expects this request to only return a single row

      if (fetchError) {
        console.error("Error: " + data);
        setButtonText("Error selecting row.");
        return;
      }

      setButtonText(
        `You have already clicked this button. This button has been clicked ${data.clicks} times!`
      );
      return;
    }

    // selects button click row
    const { data, error: fetchError } = await supabase
      .from("button_clicks")
      .select("clicks")
      .eq("id", import.meta.env.VITE_BUTTON_ROW_ID)
      .single(); // expects this request to only return a single row

    if (fetchError) {
      console.error("Error: " + data);
      setButtonText("Error selecting row.");
      return;
    }

    const clicks = data.clicks + 1;

    // updates the button row
    const { error: updateError } = await supabase
      .from("button_clicks")
      .update({ clicks: clicks })
      .eq("id", import.meta.env.VITE_BUTTON_ROW_ID);

    if (updateError) {
      console.error("Error: updating row");
      setButtonText("Error updating row");
    }

    setButtonText(`This button has been clicked ${clicks} times! globally.`);

    localStorage.setItem("hasClicked", JSON.stringify(true));
  };

  return (
    <ButtonLayout>
      <h1>{buttonText}</h1>
      <div>
        <img src={GlobalButtonAssets.arrow} />
        <button onClick={() => submitClick()}>Button</button>
      </div>
    </ButtonLayout>
  );
};

export default GlobalButton;
