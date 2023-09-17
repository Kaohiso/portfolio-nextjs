import React from "react";
import AnimatedSection from "../AnimatedSection";

export default function Contact() {
  return (
    <div className="h-full py-20 text-gray-800 ">
      <AnimatedSection scale={1}>
        <h1 className="text-6xl font-semibold mb-9">Prenez contact avec moi</h1>
      </AnimatedSection>
      <AnimatedSection scale={1}>
        <h2 className="text-xl text-gray-600 font-semibold mb-4 ">
          Envoyer un message
        </h2>
      </AnimatedSection>
      <div className="message-form">
        <form>
          <div className="grid grid-cols-2 mb-4 space-x-10">
            <AnimatedSection delay={0.2}>
              <div>
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
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.6}>
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
          </AnimatedSection>
          <AnimatedSection delay={0.8}>
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
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <button
              type="submit"
              className="px-4 py-2 self-end bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Envoyer
            </button>
          </AnimatedSection>
        </form>
      </div>
    </div>
  );
}
