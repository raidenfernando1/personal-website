import style from "./navBar.module.css";

const NavigationBar = () => {
  const navLinks = [
    { title: "HOME", route: "/" },
    { title: "SKILLS", route: "/skills" },
    { title: "CONTACT ME", route: "/contact" },
  ];
  return (
    <div className={style.navWrapper}>
      <div className={style.navContents}>
        <a href="/">RAIDEN FERNANDO</a>
        <nav>
          <ul>
            {navLinks.map((nav) => (
              <a href={nav.route} key={nav.route}>
                {nav.title}
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
