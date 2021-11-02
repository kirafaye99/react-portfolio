import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  sticky top-0 z-50">
    <Link to="/"
    onClick={() => handlePageChange("about")}
    class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
      <span class="ml-3 text-xl">Kira DeMarco</span>
    </Link>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link to="/about"
      onClick-={() => handlePageChange("About")}
      class= "mr-5 hover:text-gray-900"
      >About Me</Link>
      <Link to="/portfolio"
      onClick-={() => handlePageChange("Portfolio")}
      class= "mr-5 hover:text-gray-900"
      >Portfolio</Link>
      <Link to="/contact"
      onClick-={() => handlePageChange("Contact")}
      class= "mr-5 hover:text-gray-900"
      >Contact</Link>
      <Link to="/resume"
      onClick-={() => handlePageChange("Resume")}
      class= "mr-5 hover:text-gray-900"
      >Resume</Link>
    </nav>
  </div>
</header>
  )
}