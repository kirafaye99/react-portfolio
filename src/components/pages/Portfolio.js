import React from "react";
import FYFF from "./assets/fyff.PNG";
import jsQuiz from "./assets/javascript quiz home.PNG";
import scheduler from "./assets/wd schedule.PNG"
import teamGenerator from "./assets/team-profile-generater.PNG"
import geekEmporium from "./assets/geek-emporium.PNG"

export default function Portfolio() {
  return (
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 overflow-hidden">
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <a href="https://msaideman.github.io/find-your-forever-friend/" target="_blank" rel="noopener noreferrer"><img alt="Find Your Forever Friend homepage" class="object-cover object-center h-full w-full" src={FYFF}/></a>
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Find Your Forever Friend</h2>
              <p class="text-base leading-relaxed mt-2">Pet adoption finder site created using HTML, CSS, Tailwind CSS, Petfinder API, OpenWeather API, Google Maps API, and JavaScript.</p>
              <a href="https://github.com/MSaideman/find-your-forever-friend" target="_blank" rel="noopener noreferrer" class="text-teal-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <a href="https://kirafaye99.github.io/JavaScript-Quiz/" target="_blank" rel="noopener noreferrer"><img alt="JavaScript Quiz homepage" class="object-cover object-center h-full w-full" src={jsQuiz}/></a>
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">JavaScript Quiz</h2>
              <p class="text-base leading-relaxed mt-2">Quiz to test JavaScript knowledge created using HTML, CSS, and JavaScript.</p>
              <a href="https://github.com/kirafaye99/JavaScript-Quiz" target="_blank" rel="noopener noreferrer" class="text-teal-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <a href="https://kirafaye99.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer"><img alt="Work Day Scheduler homepage" class="object-cover object-center h-full w-full" src={scheduler}/></a>
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Work Day Scheduler</h2>
              <p class="text-base leading-relaxed mt-2">Scheduler designed to plan out work day hours created using HTML, CSS, and JavaScript.</p>
              <a href="https://github.com/kirafaye99/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer" class="text-teal-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <a href="https://github.com/kirafaye99/Team-Profile-Generator" target="_blank" rel="noopener noreferrer"><img alt="Team Profile Generator sample homepage" class="object-cover object-center h-full w-full" src={teamGenerator}/></a>
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Team Profile Generator</h2>
              <p class="text-base leading-relaxed mt-2">Node.js application to develop a site to organize inputted team members created using JavaScript, Tailwind CSS, and HTML.</p>
              <a href="https://github.com/kirafaye99/Team-Profile-Generator" target="_blank" rel="noopener noreferrer" class="text-teal-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <a href="https://radiant-plateau-99993.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img alt="Geek Emporium homepage" class="object-cover object-center h-full w-full" src={geekEmporium}/></a>
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Geek Emporium</h2>
              <p class="text-base leading-relaxed mt-2">Website designed to buy and sell collectibles created using Node.js, MySQL, JavaScript, Handlebars, and Tailwind CSS.</p>
              <a href="https://github.com/xBOBOYx/Project-2" target="_blank" rel="noopener noreferrer" class="text-teal-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};