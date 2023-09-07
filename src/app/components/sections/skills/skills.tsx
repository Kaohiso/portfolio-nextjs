import React from "react";

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
      <div className="space-y-3">
        {data.map((title: string, index: number) => (
          <div
            key={index}
            className="bg-gray-800 text-white text-sm font-extralight rounded-full inline-block px-3 py-1 mr-1"
          >
            {title}
          </div>
        ))}
      </div>
    );
  };

  const SectionFab: React.FC<SectionFab> = ({ title, data }) => {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-1">{title}</h2>
        <Fab data={data} />
      </div>
    );
  };
  
  return (
    <div>
      <h1 className="text-6xl font-semibold mb-9">Compétences</h1>
      <div className="space-y-4">
        <SectionFab title={"Design"} data={designData} />
        <SectionFab title={"Ingénierie"} data={engineeringData} />
        <SectionFab title={"Général"} data={generalData} />
      </div>
    </div>
  );
}
