import React from "react";
import resumePDF from "./assets/Kira DeMarco Coding Resume.pdf";
import resumeImg from "./assets/coding-resume.PNG";

export default function Resume() {
  return (
  <div>
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
    <section>
      <img class="lg:w-6/6 md:w-6/6 w-6/6 mb-10 object-cover object-center rounded"
      alt="Kira DeMarco Coding Resume"
      src= {resumeImg}
      />
    </section>
  </div>
  <section class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
      <a
        href={resumePDF} download= "Kira DeMarco Coding Resume" target="_blank" rel="noopener noreferrer"
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Green-500"
      >
        Download Resume
      </a>
    </section>
  </div>
  );
};