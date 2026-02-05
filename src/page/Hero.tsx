import "../style/pages.style.css";

import PhilippinesRegionIcon from "../assets/RegionIcon";

import { HERO_NAME_ASCII } from "../data/ascii";

const Hero = () => {
  const socials = [
    {
      link: "https://mail.google.com",
      name: "fernandoraiden6@gmail.com",
      provider: "Gmail",
    },
    {
      link: "https://www.facebook.com/raidenfernando9",
      name: "https://www.facebook.com/raidenfernando9",
      provider: "Facebook",
    },
    {
      link: "https://www.instagram.com/raiden.n3t/",
      name: "https://www.instagram.com/raiden.n3t/",
      provider: "Instagram",
    },
    {
      link: "https://github.com/raidenfernando1",
      name: "https://github.com/raidenfernando1",
      provider: "Github",
    },
  ];

  return (
    <main class="hero-container">
      <div class="hero-wrapper">
        <div class="hero-content-1">
          <div class="hero-region-wrapper">
            <div class="subtitle-text hero-region">
              <p>Philippines</p>
              <PhilippinesRegionIcon />
            </div>
          </div>
          <pre class="hero-name-ascii">{HERO_NAME_ASCII}</pre>
        </div>
        <div class="hero-content-socials-container">
          <ul class="hero-content-socials-wrapper">
            {socials.map((social) => {
              return (
                <li>
                  <div>
                    <a
                      target="_blank"
                      class="hero-content-socials-btn"
                      href={social.link}
                    >
                      <p>{social.provider}</p>
                      {window.innerHeight <= 768 ? "" : <p>|</p>}
                      {window.innerHeight <= 768 ? "" : social.name}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Hero;
