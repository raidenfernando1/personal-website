import "../../style/components.style.css";

import type { PROJECT_OBJECT_TYPE } from "../../data/projects";

const ProjectCard = ({
  projectName,
  projectDescription,
  projectType,
  githubLink,
  websiteLink,
}: PROJECT_OBJECT_TYPE) => {
  return (
    <div class="project-card-component-container">
      <div class="project-card-component-wrapper">
        <div class="project-card-component-title-container">
          <p class="title-text-bold">{projectName}</p>
          <p class="subtitle-text">{projectDescription}</p>
        </div>
        <p class="project-card-component-description">{projectType}</p>
        <div class="project-card-component-cte">
          <a href={websiteLink ? "#" : undefined}>
            Website: {websiteLink ? `${websiteLink}` : "Not available"}
          </a>
          <a href={githubLink ? "#" : undefined}>
            Github: {githubLink ? `${githubLink}` : "Not available"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
