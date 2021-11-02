import React from "react";
import headshot from "./assets/headshot.jpg"

export default function About() {
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={headshot}></img>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-500">Kira DeMarco</h1>
      <p class="mb-8 leading-relaxed">I am a student currently enrolled in the UCSD extension coding bootcamp. I also attend California State University San Marcos and am majoring in Computer Science. I expect to graduate in Fall 2023. I am currently working on projects using JavaScript, Node.js, MongoDB, and React, and am eager to learn more.</p>
      <div class="flex justify-center">
      </div>
    </div>
  </div>
</section>
)
}