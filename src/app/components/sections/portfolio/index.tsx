import React, { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import { motion } from "framer-motion";

export default function Portfolio() {
  const images = [
    {
      id: 1,
      src: "/img/auditool.jpg",
      title: "AudiTool",
      tag: "Web",
    },
    {
      id: 2,
      src: "/img/MediMergeHub.png",
      title: "MediMergeHub",
      tag: "Web",
    },
    {
      id: 3,
      src: "/img/lih_mobile_app.png",
      title: "LIHMobileApp",
      tag: "Mobile",
    },
    {
      id: 4,
      src: "/img/colive.png",
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
            <motion.button
              key={tag}
              className={`px-4 py-2 rounded-full text-xs ${
                selectedTag === tag
                  ? "bg-indigo-500 text-white"
                  : "bg-transparent text-indigo-500 border-2 border-indigo-500"
              }`}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </motion.button>
          ))}
        </div>
        <Masonry columns={3} spacing={2}>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={image.src}
                alt={image.title}
              />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};
