import style from "./navBar.module.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const navLinks = [
    { title: "HOME", route: "/" },
    { title: "SKILLS", route: "/skills" },
    { title: "CONTACTS", route: "/contact" },
  ];
  return (
    <div className={style.navWrapper}>
      <div className={style.navContents}>
        <Link to="/">RAIDEN FERNANDO</Link>
        <nav>
          <ul>
            {navLinks.map((nav) => (
              <li key={nav.route}>
                <Link to={nav.route}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
