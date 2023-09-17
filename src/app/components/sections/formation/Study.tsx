import React from "react";
import AnimatedSection from "../AnimatedSection";

export default function Study() {
  interface EducationItem {
    date: string;
    school: string;
    degree: string;
  }

  interface EducationItems {
    data: EducationItem[];
  }

  const educationData: EducationItem[] = [
    {
      date: "2016 - 2018",
      school: "IUT Informatique Metz",
      degree: "DUT Informatique",
    },
    {
      date: "2018 - 2020",
      school: "Institut des sciences du Digital, Management & Cognition",
      degree: "Licence en sciences cognitives",
    },
    {
      date: "2020 - 2022",
      school: "Institut des sciences du Digital, Management & Cognition",
      degree: "Master en sciences cognitives",
    },
  ];

  function StudySection({ data }: EducationItems) {
    return (
      <div className="space-y-3 pr-5">
        {data.map((educationItem: EducationItem, index: number) => (
          <div key={index}>
            <AnimatedSection delay={index * 0.2}>
              <div className="text-xl font-semibold mb-1">
                {educationItem.degree}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={index * 0.4}>
              <div className="text-sm">
                {educationItem.school} • {educationItem.date}
              </div>
            </AnimatedSection>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <AnimatedSection scale={1}>
        <h1 className="text-6xl font-semibold mb-9">Etudes</h1>
      </AnimatedSection>
      <StudySection data={educationData} />
    </div>
  );
}
