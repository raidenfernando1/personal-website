import style from "./skills.module.css";
import SkillSection from "../../components/skillSection";

const SkillsPage = () => {
  return (
    <div className={style.skillsLayout}>
      <h1>Technical Skills</h1>
      <div className={style.skillsContainer}>
        <SkillSection></SkillSection>
      </div>
    </div>
  );
};

export default SkillsPage;
