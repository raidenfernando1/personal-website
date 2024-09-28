import SkillCard from "../skillCard";
import style from "./skillSection.module.css";
import { skillsList } from "../../data/skills/skills";

const SkillSection = () => {
  return (
    <div className={style.skillContents}>
      {skillsList.map((language, index) => (
        <div className={style.section} key={index}>
          <p>{language.title}</p>
          <ul>
            {language.skills.map((skill) => (
              <li key={skill.name}>
                <SkillCard name={skill.name} icon={skill.icon} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
