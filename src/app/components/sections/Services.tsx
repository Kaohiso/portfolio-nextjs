import React from "react";
import { RiUserSearchLine } from "react-icons/ri";
import { IoIosColorPalette } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";
import { GiMeshNetwork } from "react-icons/gi";
import { PiLayoutDuotone } from "react-icons/pi";

export default function Services() {
  return (
    <section className="h-auto flex flex-col justify-center pb-20 mx-4">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-6xl text-gray-800 font-semibold mb-9">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {/** Service 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="flex items-center justify-center rounded-full h-9 w-9 bg-sky-500 mr-2 my-2">
                <RiUserSearchLine color={"white"} />
              </div>
              <h3 className="text-xl text-gray-700 font-semibold">Design UX</h3>
            </div>
            <p className="text-gray-600">
              En tant qu'UX designer, mon rôle est de plonger dans les besoins
              des utilisateurs, de cartographier leurs parcours et d'identifier
              les points de douleur. Je crée des wireframes et des prototypes
              interactifs pour valider les concepts et itérer rapidement en
              fonction des retours. Mon objectif est de garantir que chaque
              interaction soit intuitive, agréable et pertinente pour les
              utilisateurs cibles.
            </p>
          </div>
          {/** Service 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="flex items-center justify-center rounded-full h-9 w-9 bg-violet-500 mr-2 my-2">
                <IoIosColorPalette color={"white"} />
              </div>
              <h3 className="text-xl text-gray-700 font-semibold">Design UI</h3>
            </div>
            <p className="text-gray-600">
              Mon expertise en UI design se traduit par la création d'interfaces
              visuellement attrayantes et cohérentes. Je choisis avec soin les
              palettes de couleurs, les typographies et les éléments visuels
              pour refléter l'identité de la marque tout en maximisant la
              lisibilité et l'accessibilité. Chaque pixel est pensé pour évoquer
              des émotions positives tout en facilitant la compréhension des
              utilisateurs.
            </p>
          </div>
          {/** Service 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="flex items-center justify-center rounded-full h-9 w-9 bg-emerald-500 mr-2 my-2">
                <AiFillCode color={"white"} />
              </div>
              <h3 className="text-xl text-gray-700 font-semibold">
                Développement front-end
              </h3>
            </div>
            <p className="text-gray-600">
              En tant que développeur front-end spécialisé en React, je prends
              vie aux conceptions en les transformant en code fonctionnel. Mon
              expertise dans la construction d'interfaces réactives et
              dynamiques me permet de créer des expériences interactives et
              rapides. Je m'assure également de l'optimisation pour différents
              navigateurs et appareils, garantissant une performance fluide et
              uniforme.
            </p>
          </div>
          {/** Service 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="flex items-center justify-center rounded-full h-9 w-9 bg-red-500 mr-2 my-2">
                <GiMeshNetwork color={"white"} />
              </div>
              <h3 className="text-xl text-gray-700 font-semibold">
                Collaboration entre équipe
              </h3>
            </div>
            <p className="text-gray-600">
              La collaboration étroite avec les équipes multidisciplinaires est
              au cœur de mon approche. Je travaille en étroite coordination avec
              les UX designers, les concepteurs visuels, les développeurs
              back-end et les responsables de projet. Cette synergie permet de
              garantir que les conceptions soient fidèlement mises en œuvre tout
              en maintenant des lignes de communication ouvertes pour des
              ajustements en temps réel.
            </p>
          </div>
          {/** Service 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="flex items-center justify-center rounded-full h-9 w-9 bg-neutral-500 mr-2 my-2">
                <PiLayoutDuotone color={"white"} />
              </div>
              <h3 className="text-xl text-gray-700 font-semibold">
                Maquettage
              </h3>
            </div>
            <p className="text-gray-600">
              Mon processus de maquettage débute par la transformation des idées
              et des exigences en prototypes visuels détaillés. Ces maquettes
              interactives offrent un aperçu concret de l'expérience
              utilisateur, aidant à valider les concepts auprès des parties
              prenantes. Cette étape cruciale permet d'itérer rapidement sur les
              fonctionnalités et les interactions avant d'entrer dans la phase
              de développement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
