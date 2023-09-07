import React from "react";
import Image from "next/image";
import "./About.css";

export default function About() {
  return (
    <section className="py-20 grid grid-cols-2">
      <div className="flex flex-col">
        <div className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-5xl font-semibold">
              Hello, je suis <span className="bg-amber-100">Antoine</span>
            </h2>
            <h2 className="text-3xl">
              Je{" "}
              <span
                className="hover:bg-blue-200"
                style={{ fontFamily: "Rampart One" }}
              >
                design
              </span>
              ,{" "}
              <span
                className="hover:bg-fuchsia-200"
                style={{ fontFamily: "Rampart One" }}
              >
                dessine
              </span>{" "}
              &{" "}
              <span
                className="hover:bg-emerald-200"
                style={{ fontFamily: "Rampart One" }}
              >
                développe
              </span>
            </h2>
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
          alt="moi"
        />
      </div>
    </section>
  );
}
