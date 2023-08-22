import React, { useRef } from "react";
import { RiUserSearchLine } from "react-icons/ri";
import { IoIosColorPalette } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";
import { GiMeshNetwork } from "react-icons/gi";
import { PiLayoutDuotone } from "react-icons/pi";
import { motion, useInView } from "framer-motion"; // Importez le composant motion et le hook useInView de framer-motion

function WhoIAm() {
  return (
    <div className="flex justify-center h-[calc(100vh-74px)]">
      <div className="flex justify-center items-center flex-col">
        <div className="text-gray-800 text-xs md:text-lg lg:text-3xl ">
          Je suis
        </div>
        <div className="text-gray-800 text-lg md:text-4xl lg:text-7xl">
          UX UI Designer
        </div>
        <div className="text-gray-800 text-lg md:text-4xl lg:text-7xl">&</div>
        <div className="text-gray-800 text-lg md:text-4xl lg:text-7xl">
          Développeur
        </div>
        <div className="text-gray-800 text-lg md:text-4xl lg:text-7xl">
          Front-end
        </div>
      </div>
    </div>
  );
}

function Services({ controls }: { controls: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const servicesVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Activez l'animation lorsque la section Services est visible
  if (isInView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      id="services"
      className="h-auto flex flex-col justify-center my-12"
      initial="hidden" // Animation initiale lors du chargement de la page
      whileInView="visible"
      //viewport={{ once: true }}
      //animate={controls} // Utilisez le prop animate pour contrôler l'animation
      variants={servicesVariants} // Utilisez les variants définis
    >
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
    </motion.div>
  );
}

function Skills() {
  
}

function Experience() {
  return (
    <div className="flex flex-col justify-center">
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
    </div>
  );
}

export { WhoIAm, Services, Skills, Experience };
