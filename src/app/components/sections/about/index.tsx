import React from "react";
import Image from "next/image";
import "./About.css";

export default function About() {
  return (
    <section className="h-auto py-20 mx-4">
      <div className="max-w-4xl mx-4 md:mx-16 lg:mx-auto flex flex-col">
        <div className="space-y-4">
          <div className="space-y-4">
            <h2 className="text-5xl font-semibold">
              Hello, je suis <span className="bg-amber-100">Antoine</span>
            </h2>
            <h2 className="text-3xl">
              Je <span className="hover:bg-blue-200" style={{ fontFamily: 'Rampart One' }}>design</span>,{" "}
              <span className="hover:bg-fuchsia-200" style={{ fontFamily: 'Rampart One' }}>dessine</span> &{" "}
              <span className="hover:bg-emerald-200" style={{ fontFamily: 'Rampart One' }}>développe</span>
            </h2>
          </div>
          <div className="text-md space-y-3">
            <p>
              UX & UI designer avec deux ans d'expérience au Luxembourg. Formé en
              Sciences Cognitives, j'innove dans la conception d'interfaces
              centrées sur l'utilisateur.
            </p>
            <p>
              Basé en France, diplômé en Sciences Cognitives. Je mets en avant
              la créativité et l'innovation pour des interfaces exceptionnelles.
            </p>
          </div>
        </div>
        <Image
          className=""
          src={"/img/abstract.png"}
          width={"400"}
          height={"400"}
          alt=""
        />
      </div>
    </section>
  );
}
