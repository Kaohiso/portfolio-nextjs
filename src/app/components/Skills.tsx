import React, { useState } from "react";

export default function Skills() {
  return (
    <section className="py-20 mx-4">
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