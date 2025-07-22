import lastOfWarriors from "../assets/projects/last-of-warriors/main.jpg";
import afriMl from "../assets/projects/afri-ml/main.jpg";
import gotobeat from "../assets/projects/gotobeat/main.jpg";
import teamOrganizer from "../assets/projects/team-organizer/main.jpg";
import meritpick from "../assets/projects/meritpick/main.jpg";

export type ProjectType = {
  id: number;
  title: string;
  about: string;
  description: string;
  thumbnail: string;
  tech: string[];
  github: string;
  link: string;
  filter: string[];
  type: string;
};

export const projects: ProjectType[] = [
  {
    id: 0,
    title: "Last of the Warriors",
    about:
      "NFT series of 10,000 unique warriors - digital soldiers adventuring across the Metaverse.",
    description: "",
    thumbnail: lastOfWarriors,
    tech: ["React", "Netlify", "Vite"],
    github: "",
    link: "https://clever-moxie-bfaa6d.netlify.app/",
    filter: ["All", "Web Development"],
    type: "",
  },
  {
    id: 1,
    title: "Afri-ML",
    about:
      "Machine learning program helping African kids train computers to recognize African culture, nature and accents.",
    description: "",
    thumbnail: afriMl,
    tech: ["Vite + React", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/mani444/afri-ml",
    link: "https://afri-ml.vercel.app/",
    filter: ["All", "Web Development"],
    type: "",
  },
  {
    id: 2,
    title: "Gotobeat",
    about:
      "Ultimate platform connecting artists with live performance opportunities and music lovers with concerts.",
    description: "",
    thumbnail: gotobeat,
    tech: ["Remix", "Vite", "Tailwind CSS"],
    github: "",
    link: "https://gotobeat.com/",
    filter: ["All", "Web Development"],
    type: "",
  },
  {
    id: 3,
    title: "Team Organizer",
    about:
      "Interactive system for team organization, delegation, and expert consultation.",
    description: "",
    thumbnail: teamOrganizer,
    tech: ["Next.js (React 19)", "Tailwind CSS", "Node.js + Express"],
    github:
      "https://github.com/mani444?tab=repositories&q=clica+y+delega&type=&language=&sort=",
    link: "https://app.tueresimparable.com/",
    filter: ["All", "Web Development"],
    type: "",
  },
  {
    id: 4,
    title: "MeritPick",
    about:
      "Consulting firm specializing in strategy and technology implementation for Fortune 50 enterprises.",
    description: "",
    thumbnail: meritpick,
    tech: ["Next.js", "Redux Toolkit", "MongoDB + Mongoose"],
    github: "https://github.com/mani444/meritpick",
    link: "https://meritpick.com/",
    filter: ["All", "Web Development"],
    type: "",
  },
];
