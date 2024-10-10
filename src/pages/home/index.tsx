import style from "./home.module.css";
import { Link } from "react-router-dom";
import { homeAssets } from "../../assets/assets";
import { useState } from "react";

const homePage = () => {
  const [resumeClick, setResumeClick] = useState("Resume / CV");
  const handleResumeClick = () => {
    setResumeClick("Not available at the moment :p");
    setTimeout(() => {
      setResumeClick("Resume / CV");
    }, 5000);
  };

  return (
    <>
      <div className={style.homePage}>
        <div className="leftContainer">
          <div className="introduction">
            <h1>Raiden Fernando</h1>
            <p>
              Welcome to my personal website! Here, you’ll find a detailed
              overview of my skills and various ways to get in touch. Feel free
              to explore, and don’t hesitate to reach out for professional
              inquiries, casual conversations, or more information. Thank you
              for your interest!
            </p>
          </div>
          <div className={style.contactBtns}>
            <a>{resumeClick}</a>
            <Link to="/contact">Get in touch</Link>
          </div>
        </div>
        <div className={style.rightContainer}>
          <img src={homeAssets.selfImage} alt="me" />
        </div>
      </div>
    </>
  );
};

export default homePage;
