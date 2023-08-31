import React, { useState } from "react";
import { RiUserSearchLine } from "react-icons/ri";
import { IoIosColorPalette } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";
import { GiMeshNetwork } from "react-icons/gi";
import { PiLayoutDuotone } from "react-icons/pi";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Masonry from "@mui/lab/Masonry";
import { motion } from "framer-motion";

const WhoIAm: React.FC = () => {
  return (
    <section className="h-screen flex justify-center">
      <div className="flex justify-center items-center flex-col">
        <div className="text-gray-800 text-lg lg:text-3xl ">Je suis</div>
        <div className="text-gray-800 text-4xl lg:text-7xl">UX UI Designer</div>
        <div className="text-gray-800 text-4xl lg:text-7xl">&</div>
        <div className="text-gray-800 text-4xl lg:text-7xl">Développeur</div>
        <div className="text-gray-800 text-4xl lg:text-7xl">Front-end</div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <section className="h-auto flex flex-col justify-center py-20">
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

const Skills: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-semibold text-gray-800 mb-9">
          Compétences
        </h1>
        <div className="grid grid-cols-2 gap-12">
          {/* Column 1: Front-end Skills */}
          <div>
            <h3 className="text-3xl font-semibold text-indigo-500 mb-6">
              Front-end
            </h3>
            <div className="mb-8">
              <h4 className="text-lg font-medium text-slate-900 mb-2">
                HTML/CSS
              </h4>
              <div className="relative h-2 bg-slate-300 rounded-full">
                <div
                  className="absolute h-full bg-indigo-500 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-medium text-slate-900 mb-2">
                JS (React Native/JS, NextJS)
              </h4>
              <div className="relative h-2 bg-slate-300 rounded-full">
                <div
                  className="absolute h-full bg-indigo-500 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-slate-900 mb-2">Git</h4>
              <div className="relative h-2 bg-slate-300 rounded-full">
                <div
                  className="absolute h-full bg-indigo-500 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Column 2: UX/UI Skills */}
          <div>
            <h3 className="text-3xl font-semibold text-indigo-500 mb-6">
              UX/UI
            </h3>
            <div className="mb-8">
              <h4 className="text-lg font-medium text-slate-900 mb-2">
                Ergonomie
              </h4>
              <div className="relative h-2 bg-slate-300 rounded-full">
                <div
                  className="absolute h-full bg-indigo-500 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-medium text-slate-900 mb-2">
                Wireframe/Prototype
              </h4>
              <div className="relative h-2 bg-slate-300 rounded-full">
                <div
                  className="absolute h-full bg-indigo-500 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-slate-900 mb-2">Figma</h4>
              <div className="relative h-2 bg-slate-300 rounded-full">
                <div
                  className="absolute h-full bg-indigo-500 rounded-full"
                  style={{ width: "83%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="flex flex-col justify-center py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl text-gray-800 font-semibold mb-9">
          Expériences
        </h1>
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            Stage développement mobile
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">
              Août 2017
            </time>
            <div className="text-xl font-bold text-slate-900">
              Luxembourg Institute of Health, Luxembourg
            </div>
          </div>
          <div className="text-gray-500">
            <ul>
              <li>
                Création d'une application de scan mobile pour le contrôle et
                l'inventaire des équipements institutionnels
              </li>
              <li>Compétences en développement : Java, PHP, HTML, CSS, SQL</li>
              <li>
                Utilisation d'Android Studio pour le développement ciblé sous
                Android
              </li>
              <li>Tests approfondis à l'aide d'une émulation précise</li>
              <li>
                Élaboration et rédaction rigoureuse d'un cahier des charges
                exhaustif
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            Stage développement mobile
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">
              Août 2020
            </time>
            <div className="text-xl font-bold text-slate-900">
              Luxembourg Institute of Health, Luxembourg
            </div>
          </div>
          <div className="text-gray-500">
            <ul>
              <li>
                Création d'un tableau de bord mobile dédié à la visualisation
                des budgets des équipes institutaires
              </li>
              <li>
                Conduction de tests utilisateurs pour assurer une convivialité
                optimale
              </li>
              <li>
                Mise en place d'un backend robuste avec Node.js et une API Rest
                pour la gestion des données
              </li>
              <li>
                Utilisation de React Native avec des React Hooks et intégration
                de Redux pour le développement front-end
              </li>
              <li>
                Élaboration et rédaction minutieuse d'un cahier des charges
                complet
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            Alternance UX/UI Designer
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">
              Sep. 2022
            </time>
            <div className="text-xl font-bold text-slate-900">
              Luxembourg Institute of Health, Luxembourg
            </div>
          </div>
          <div className="text-gray-500">
            <ul>
              <li>
                Partenariat étroit avec des équipes de développement pour une
                synergie optimale
              </li>
              <li>
                Engagement dans des dialogues approfondis avec les clients afin
                de saisir pleinement l'essence des projets
              </li>
              <li>
                Mise en œuvre des 5 phases essentielles de l'UX : exploration,
                clarification, génération d'idées, création et conception
                d'interfaces
              </li>
              <li>
                Excellence en développement avec JS (React Hook) sous React
                Native, .Net, et une maîtrise affirmée de CSS/HTML
              </li>
              <li>
                Composition harmonieuse d'une équipe fusionnant un développeur
                expérimenté et un analyste d'affaires perspicace
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            Portfolio
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">
              En cours
            </time>
            <div className="text-xl font-bold text-slate-900">Home, France</div>
          </div>
          <div className="text-gray-500">
            <ul>
              <li>NextJS</li>
              <li>TailwindCSS</li>
              <li>ReactJS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="h-full py-16">
        {/**LOCALISATION */}
        <div className="max-w-4xl mx-auto text-gray-800 p-4">
          <h1 className="text-6xl font-semibold mb-9">Contact</h1>
          <p className="mb-8">
            Mon portfolio vous a plu ou vous souhaitez collaborer ? N'hésitez
            pas à me contacter !
          </p>
        </div>
        {/**MESSAGE */}
        <div className="max-w-4xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl text-gray-600 font-semibold mb-4">
                Localisation
              </h2>
              <div className="flex-grow flex flex-col justify-center">
                <div className="mb-2">
                  <iframe
                    className="map"
                    title="Thionville Map"
                    width="100%"
                    height="200"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.151599884033205%2C49.34162388857872%2C6.215896606445314%2C49.37417066369996&amp;layer=mapnik&amp;marker=49.357896464154984%2C6.183748245239258"
                  />
                </div>
                <div className="flex mb-2">
                  <MapPinIcon className="h-5 w-5 mr-2 text-gray-600" />
                  <p className="text-gray-600">Thionville, France</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-xl text-gray-600 font-semibold mb-4 ">
                Envoyer un message
              </h2>
              <div className="message-form">
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4 flex-grow">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const widthImg = 900;
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
    <section className="py-20">
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

export { WhoIAm, Services, Skills, Experience, Portfolio, Contact };

{
  /**

                  <div className="p-4 rounded-lg bg-opacity-60 font-semibold bg-gray-900 text-white absolute bottom-0 left-0 right-0">
                    {image.title}
                  </div> */
}
