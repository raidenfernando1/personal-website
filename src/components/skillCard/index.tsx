import style from "./skillCard.module.css";
import { skills } from "../../data/skills/skills";

type SkillCardProps = {
  name: string;
  icon: string;
};

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <>
      <button
        className={style.skillCard}
        style={{
          backgroundImage: `url(${`src/assets/Skill/${icon}`})`,
        }}
      >
        {name}
      </button>
    </>
  );
};

export default SkillCard;
