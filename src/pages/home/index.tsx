import style from "./home.module.css";

const homePage = () => {
  return (
    <>
      <div className={style.homePage}>
        <div className="leftContainer">
          <div className="introduction">
            <h1>Raiden Fernando</h1>
            <p>
              Welcome to my personal website. Here, you will find a
              comprehensive overview of my skills and ways to get in touch with
              me. I invite you to explore and feel free to reach out with any
              inquiries or for further information. Your interest is greatly
              appreciated.
            </p>
          </div>
          <div className={style.contactBtns}>
            <button>Resume / CV</button>
            <button>Get in touch</button>
          </div>
        </div>
        <div className={style.rightContainer}>
          <img src="src/assets/me.png" alt="me" />
        </div>
      </div>
    </>
  );
};

export default homePage;
