import style from "./navBar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavigationBar = () => {
  const navLinks = [
    { title: "HOME", route: "/" },
    { title: "SKILLS", route: "/skills" },
    { title: "CONTACTS", route: "/contact" },
  ];

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`${style.navWrapper}  ${isScroll ? style.scrolled : ""}`}>
        <div className={style.navContents}>
          <Link to="/">RAIDEN FERNANDO</Link>
          <nav>
            <ul className={style.navBtns}>
              {navLinks.map((nav) => (
                <li key={nav.route}>
                  <Link to={nav.route}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
