import React from "react";
import AnimatedSection from "../AnimatedSection";

export default function Skills() {
  interface FabProps {
    data: string[];
  }

  interface SectionFab {
    title: string;
    data: string[];
  }

  const generalData: string[] = [
    "Conception",
    "Recherche utilisateur",
    "Prototyping",
    "Wireframing",
    "Design",
    "Tests d'utilisabilité",
    "Frontend",
    "Génie logiciel",
  ];

  const designData: string[] = ["Figma", "Photoshop", "blender"];

  const engineeringData: string[] = [
    "HTML/CSS",
    "React JS/Native",
    "NextJS",
    "TypeScript",
    "PHP",
    "SQL",
    "Python",
    "Java",
    "C/C++",
    ".NET",
    "Git",
  ];

  const Fab: React.FC<FabProps> = ({ data }) => {
    return (
      <div className="flex flex-wrap">
        {data.map((title: string, index: number) => (
          <AnimatedSection delay={index * 0.1} scale={0.95}>
            <div
              key={index}
              className="flex flex-row bg-gray-800 text-white text-sm font-extralight rounded-full inline-block px-3 py-1 mr-1 my-1"
            >
              {title}
            </div>
          </AnimatedSection>
        ))}
      </div>
    );
  };

  const SectionFab: React.FC<SectionFab> = ({ title, data }) => {
    return (
      <div>
        <AnimatedSection scale={1}>
          <h2 className="text-2xl font-semibold mb-1">{title}</h2>
        </AnimatedSection>
        <Fab data={data} />
      </div>
    );
  };

  return (
    <div>
      <AnimatedSection scale={1}>
        <h1 className="text-6xl font-semibold mb-9">Compétences</h1>
      </AnimatedSection>
      <div className="space-y-4">
        <SectionFab title={"Design"} data={designData} />
        <SectionFab title={"Ingénierie"} data={engineeringData} />
        <SectionFab title={"Général"} data={generalData} />
      </div>
    </div>
  );
}
