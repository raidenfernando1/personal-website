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
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

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
            <button className={style.hiddenNav} onClick={toggleNav}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" fill="currentColor" />
                <rect y="11" width="24" height="2" fill="currentColor" />
                <rect y="18" width="24" height="2" fill="currentColor" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
      <div className={` ${openNav ? style.navOpen : style.navNotOpen}`}>
        <nav>
          <ul className={style.hiddenNavLinks}>
            {navLinks.map((nav) => (
              <li key={nav.route}>
                <Link to={nav.route} onClick={() => setOpenNav(!openNav)}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
