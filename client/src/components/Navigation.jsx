import React from "react";
import CustomLink from "./CustomLink";


const Navigation = () => {
  return (
    <nav>
    <div class="container">
        <ul class="nav">
            <li class="nav__item"><a href="#">Project P</a></li>
            <li class="nav__item"><a href="#"><span class="light">Ons Verhaal</span></a></li>
            <li class="nav__item"><a href="#"><span class="light">Al Opgehaald</span></a></li>
            <li class="nav__item"><a href="#"><span class="light">Steun Ons</span></a></li>
            <li class="nav__item"><a href="#"><span class="light">Onze Acties</span></a></li>
            <li class="nav__item"><a href="#"><span class="light">De Muur</span></a></li>
        </ul>
    </div>
</nav>
  );
};
export default Navigation;
