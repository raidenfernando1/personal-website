import styled from "styled-components";
import SkillsCard from "../../components/SkillsCard";
import SkillsPageAssets from "../../assets/SkillsPageAssets";
import PageLayout from "../../components/PageLayout";

const SkillsContainer = styled.div`
  padding-block: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillsPage = () => {
  const skills = [
    {
      name: "Typescript",
      image: SkillsPageAssets.typescript,
    },
    {
      name: "Javascript",
      image: SkillsPageAssets.javascript,
    },
    {
      name: "BunJS",
      image: SkillsPageAssets.bun,
    },
    {
      name: "NodeJS",
      image: SkillsPageAssets.node,
    },
    {
      name: "React",
      image: SkillsPageAssets.react,
    },
    {
      name: "Remix",
      image: SkillsPageAssets.remix,
    },
    {
      name: "Jest",
      image: SkillsPageAssets.jest,
    },
    {
      name: "Redux",
      image: SkillsPageAssets.redux,
    },
    {
      name: "Supabase",
      image: SkillsPageAssets.supabase,
    },
  ];

  return (
    <PageLayout paddingBlock="50px">
      <h1>My tech stack</h1>
      <SkillsContainer>
        {skills.map((skills) => (
          <SkillsCard imagePath={skills.image}>{skills.name}</SkillsCard>
        ))}
      </SkillsContainer>
    </PageLayout>
  );
};

export default SkillsPage;
