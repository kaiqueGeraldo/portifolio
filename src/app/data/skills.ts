import { Assets } from "@/assets";

export const skills = [
  { name: "Java", color: "#E76F00", image: Assets.Skills.Java },
  { name: "Spring Boot", color: "#6DB33F", image: Assets.Skills.Spring },
  { name: "Node.js", color: "#83CD29", image: Assets.Skills.Node },
  {
    name: "SQL Server",
    color: "#E75858",
    image: Assets.Skills.SQL,
    light: true,
  },
  { name: "Angular", color: "#EE4164", image: Assets.Skills.Angular },
  { name: "React", color: "#61DAFB", image: Assets.Skills.React },
  { name: "Next.js", color: "#E2E8F0", image: Assets.Skills.Next },
  { name: "TypeScript", color: "#3178C6", image: Assets.Skills.TS },
  { name: "Kafka", color: "#CAD5E2", image: Assets.Skills.Kafka, light: true },
  { name: "Docker", color: "#2496ED", image: Assets.Skills.Docker },
  {
    name: "AWS Cloud",
    color: "#FF9900",
    image: Assets.Skills.AWS,
    light: true,
  },
  { name: "Git", color: "#F05032", image: Assets.Skills.Git },
  {
    name: "GitHub",
    color: "#CAD5E2",
    image: Assets.Skills.Github,
    light: true,
  },
  { name: "IA & LLMs", color: "#BFCBD8", image: null },
];

export type Skill = (typeof skills)[number];
