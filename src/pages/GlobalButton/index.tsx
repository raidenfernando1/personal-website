import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

const ButtonLayout = styled.section`
  padding-block: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 0px;
  }

  div > button {
    padding: 5px 30px;
    color: white;
    background-color: transparent;
    border-radius: 15px;
    border: 4px solid white;
    cursor: pointer;
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
  }
`;

const GlobalButton = () => {
  const submitClick = async () => {
    // update the select the current count and adds 1
  };

  return (
    <ButtonLayout>
      <h1>Hello visitor! click this button please.</h1>
      <div>
        <img src={arrow} />
        <button onClick={() => submitClick()}>Button</button>
      </div>
    </ButtonLayout>
  );
};

export default GlobalButton;
