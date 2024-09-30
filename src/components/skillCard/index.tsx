import style from "./skillCard.module.css";

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
          backgroundImage: `url(${`../public/skills/${icon}`})`,
        }}
      >
        {name}
      </button>
    </>
  );
};

export default SkillCard;
