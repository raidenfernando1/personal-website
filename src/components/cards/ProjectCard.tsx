import "../../style/components.style.css";

const ProjectCard = ({
  title,
  description,
  project_type,
  website,
  github,
}: {
  title: string;
  description: string;
  project_type: string;
  website: string | null;
  github: string | null;
}) => {
  return (
    <div class="project-card-component-container">
      <div class="project-card-component-wrapper">
        <div class="project-card-component-title-container">
          <p class="title-text-bold">{title}</p>
          <p class="subtitle-text">{project_type}</p>
        </div>
        <p class="project-card-component-description">{description}</p>
        <div class="project-card-component-cte">
          <a href={website ? "#" : undefined}>
            Website: {website ? `${website}` : "Not available"}
          </a>
          <a href={github ? "#" : undefined}>
            Github: {github ? `${github}` : "Not available"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
