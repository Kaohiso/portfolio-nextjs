import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="pb-20 mx-4">
      <div className="h-full py-16">
        {/**LOCALISATION */}
        <div className="max-w-4xl mx-auto text-gray-800 p-4">
          <h1 className="text-6xl font-semibold mb-9">
            Prenez contact avec moi
          </h1>
        </div>
        {/**MESSAGE */}
        <div className="max-w-4xl mx-auto p-4">
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
  );
}
