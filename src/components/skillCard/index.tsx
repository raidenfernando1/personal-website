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
          backgroundImage: `url(${`src/assets/Skills/${icon}`})`,
        }}
      ></button>
    </>
  );
};

export default SkillCard;
