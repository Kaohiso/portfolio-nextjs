import React, { useState } from "react";
import Masonry from "@mui/lab/Masonry";

export default function Portfolio() {
  const images = [
    {
      id: 1,
      src: "/auditool.jpg",
      title: "AudiTool",
      tag: "Web",
    },
    {
      id: 2,
      src: "/medi_merge_hub.jpg",
      title: "MediMergeHub",
      tag: "Web",
    },
    {
      id: 3,
      src: "/lih_mobile_app.jpg",
      title: "LIHMobileApp",
      tag: "Mobile",
    },
    {
      id: 4,
      src: "/colive.jpg",
      title: "Colive",
      tag: "Mobile",
    },
  ];

  const tags = ["All", "Mobile", "Web" /*"image"*/]; // Liste des tags possibles

  const [selectedTag, setSelectedTag] = useState("All"); // Tag actuellement sélectionné

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag); // Mettre à jour le tag sélectionné
  };

  const filteredImages =
    selectedTag === "All"
      ? images
      : images.filter((image) => image.tag === selectedTag);

  return (
    <section className="py-20 mx-4">
      <div className="max-w-4xl mx-auto text-gray-800 p-4">
        <h1 className="text-6xl font-semibold mb-9">Portfolio</h1>
        <div className="flex space-x-4 mb-4">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-xs ${
                selectedTag === tag
                  ? "bg-indigo-500 text-white"
                  : "bg-transparent text-indigo-500 border-2 border-indigo-500"
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <Masonry columns={3} spacing={2}>
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="transition-transform transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.title}
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};
