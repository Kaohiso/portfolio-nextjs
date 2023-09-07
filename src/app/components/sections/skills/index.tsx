import React, { useState } from "react";
import Skills from "./skills";
import Study from "./Study";

export default function Formation() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 text-gray-800 pt-20 space-y-20 lg:space-y-0">
      <Study />
      <Skills />
    </section>
  );
}
