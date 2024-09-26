import SkillCard from "../skillCard";
import style from "./skillSection.module.css";
import { programmingLanguages } from "../../data/skills/skills";

const SkillSection = () => {
  return (
    <>
      <div className={style.skillContents}>
        {programmingLanguages.map((language) => (
          <>
            <p>Programming Languages</p>
            <ul>
              <li key={language.name}>
                <SkillCard name={language.name} icon={language.icon} />
              </li>
            </ul>
          </>
        ))}
      </div>
    </>
  );
};

export default SkillSection;
