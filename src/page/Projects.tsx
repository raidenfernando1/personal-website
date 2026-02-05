import Masonry from "react-masonry-css";
import ProjectCard from "../components/cards/ProjectCard";
import projectList from "../data/projects";

const Projects = () => {
  const columnBreakpoints = {
    default: 3,
    1100: 2,
    500: 1,
  };

  return (
    <main class="projects-container">
      <p>Random Featured Projects</p>
      <Masonry
        breakpointCols={columnBreakpoints}
        className="projects-list-masonry-row"
        columnClassName="projects-list-masonry-column"
      >
        {projectList.map((data) => {
          return (
            <ProjectCard
              title={data.projectName}
              description={data.projectDescription}
              project_type={data.projectType}
              github={data.githubLink}
              website={data.websiteLink}
            />
          );
        })}
      </Masonry>
    </main>
  );
};
export default Projects;
