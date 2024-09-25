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
              comprehensive overview of my projects and skills. I invite you to
              explore my work and feel free to reach out with any inquiries or
              for further information. Your interest is greatly appreciated.
            </p>
          </div>
        </div>
        <div className={style.rightContainer}>
          <div className={style.imgPlaceholder}></div>
        </div>
      </div>
    </>
  );
};

export default homePage;
