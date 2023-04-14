import React from "react";
import CustomLink from "./CustomLink";


const Navigation = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-dark navbar-bg">
  <div className="container">
  <a class="navbar-brand" href="#">Chiro Popov</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#about">Ons Verhaal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#collect">Al Opgehaald</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#shop">Steun Ons</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#blog">Onze Acties</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

</>
  );
};
export default Navigation;
