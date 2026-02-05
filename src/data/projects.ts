type PROJECT_OBJECT_TYPE = {
  projectName: string;
  projectDescription: string;
  projectType: string;
  githubLink: string | null;
  websiteLink: string | null;
};

const projectList: PROJECT_OBJECT_TYPE[] = [
  {
    projectName: "Murmur",
    projectDescription:
      "Just a small application to rant into the ethereal nothingness, honestly just made because was not doing anything else",
    projectType: "social app",
    githubLink: null,
    websiteLink: "https://murmur.fernandoraiden6.workers.dev/",
  },
  {
    projectName: "Tarana",
    projectDescription:
      "An AI-Kiosk software i made as a capstone project it uses a multi-llm system to perform its functionality at an acceptable accuracy, i used a very overly sophisticated and overkill algorithim and pipeline to make the data gathering aswell as increasing its knowledge space work",
    projectType: "AI-Kiosk information centre software",
    githubLink: "https://github.com/raidenfernando1/tarana-FE",
    websiteLink: null,
  },
  {
    projectName: "Nerd-necking",
    projectDescription:
      "A NGL Clone i made just for laughs and giggles i wrote the code for it when i was still very beginnerish so its laggy and badly written",
    projectType: "NGL Clone",
    githubLink: "https://github.com/raidenfernando1/nerd-necking",
    websiteLink: null,
  },
  {
    projectName: "Nurserie-POS",
    projectDescription:
      "A small part of a large application internal tooling i made for a company the project itself was closed sourced but i open sourced my code before my turnover, everything here is deprecated",
    projectType: "Warehouse + POS Webapp",
    githubLink: "https://github.com/raidenfernando1/nurserie-pos-deprecated-",
    websiteLink: null,
  },
  {
    projectName: `folder-organizer-js`,
    projectDescription:
      "just a small 60 line program i made to organize my download folder",
    projectType: "CLI-File organizer",
    githubLink: "https://github.com/raidenfernando1/folder-organizer-js",
    websiteLink: null,
  },
  {
    projectName: `Todo-app1235`,
    projectDescription:
      "a SSR Todo-app i made while i was exploring the astro framework and SSR itself its quite slow but ive been using it locally for quite a while",
    projectType: "Todo-app",
    githubLink: "https://github.com/raidenfernando1/todo-app1235",
    websiteLink: null,
  },
];

export default projectList;
