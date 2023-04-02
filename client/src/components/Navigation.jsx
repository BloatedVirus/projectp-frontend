import React from "react";
import CustomLink from "./CustomLink";


const Navigation = () => {
  return (
    <>
    {/* 
    <nav class="navbar navbar-dark fixed-top sidenav glass">
    <div class="container">
        <a class="navbar-brand" href="#home">Project P</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> 
      </button>
    </div>
  
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="container container-fluid navbar-dark">
        <ul class="">
            <li class="nav__item"><a class="light" href="#about">Ons Verhaal</a></li>
            <li class="nav__item"><a class="light" href="#collect">Al Opgehaald</a></li>
            <li class="nav__item"><a class="light" href="#shop">Steun Ons</a></li>
            <li class="nav__item"><a class="light" href="#blog">Onze Acties</a></li>
        </ul>
    </div>
  </div>
</nav>
 */}
<nav class="horizontal-nav">
    <div class="container container-fluid">
        <ul class="nav">
            <li class="nav__item"><a href="#home">Project P</a></li>
            <li class="nav__item"><a class="light" href="#about">Ons Verhaal</a></li>
            <li class="nav__item"><a class="light" href="#collect">Al Opgehaald</a></li>
            <li class="nav__item"><a class="light" href="#shop">Steun Ons</a></li>
            <li class="nav__item"><a class="light" href="#blog">Onze Acties</a></li>
        </ul>
    </div>
</nav>
</>
  );
};
export default Navigation;
