import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WavyText from "./WavyText";
import "./About.css";

export default function About() {
  const [replay, setReplay] = useState(true);
  const verbs = ["design", "dessine", "développe", "recherche"];
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);

  return (
    <section className="py-20 grid grid-cols-2">
      <div className="flex flex-col">
        <div className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-5xl font-semibold">
              Hello, je suis <span className="bg-amber-100">Antoine</span>
            </h2>
            <div className="flex space-x-1 text-2xl">
              <span>Je</span>
              <WavyText verbs={verbs} />
            </div>
          </div>
          <div className="text-md space-y-3 max-w-lg">
            UX & UI designer avec deux ans d'expérience au Luxembourg. Je mets
            en avant la créativité et l'innovation pour des interfaces
            exceptionnelles.
          </div>
          <button className="border-b-2 border-gray-800 px-2 py-2 hover:border-b-4">
            Mon CV
          </button>
        </div>
      </div>
      <div className="self-end">
        <Image
          className=""
          src={"/img/pngwing.png"}
          width={9000}
          height={9000}
          alt="avatar"
        />
      </div>
    </section>
  );
}
