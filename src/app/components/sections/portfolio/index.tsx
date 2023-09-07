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

  return (
    <section className="pt-20 text-gray-800">
      <h1 className="text-6xl font-semibold mb-9">Portfolio</h1>
      <Masonry columns={3} spacing={2}>
        {images.map((image) => (
          <motion.div key={image.id} whileHover={{ scale: 1.1 }}>
            <img src={image.src} alt={image.title} />
          </motion.div>
        ))}
      </Masonry>
    </section>
  );
}
