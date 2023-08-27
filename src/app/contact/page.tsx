import Header from "../components/header";
import Footer from "../components/footer";
import "./page.css";

import React from "react";
import {
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div className="h-screen h-full bg-gray-100">
      <Header />
      <div className="h-full py-16">
        {/**LOCALISATION */}
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Prendre contact
          </h1>
          <p className="text-white mb-8">
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
      <Footer />
    </div>
  );
};

export default Contact;
