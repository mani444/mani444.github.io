import backend from "../assets/images/backend1.png";
import general from "../assets/images/general.png";
import frontend from "../assets/images/react.png";

export type SkillType = {
  label: string;
  src: string;
  alt: string;
  skills: string[];
};

export const skillsData: SkillType[] = [
  {
    label: "Frontend",
    src: frontend,
    alt: "Frontend skills React icon",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "GraphQL (Apollo)",
      "Tailwind CSS",
      "ShadCN UI",
      "Radix UI",
      "Material-UI",
      "Styled Components",
      "SASS/SCSS",
      "Storybook",
      "Figma",
    ],
  },
  {
    label: "Backend & APIs",
    src: backend,
    alt: "Backend skills server icon",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Python",
      "GraphQL",
      "RESTful APIs",
      "Axios",
      "API Integration",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    label: "DevOps & Tools",
    src: general,
    alt: "DevOps and development tools icon",
    skills: [
      "Git & GitHub",
      "Docker",
      "AWS (S3, Lambda, EC2)",
      "Vercel",
      "Netlify",
      "GitHub Actions",
      "Jest",
      "Cypress",
      "ESLint",
      "Prettier",
      "Lighthouse CI",
      "GitHub Copilot",
      "Performance Optimization",
    ],
  },
];
