import React from "react";
import CustomLink from "./CustomLink";

const Navigation = () => {
  return (
    <nav>
      <div class="container">
        <ul class="nav">
          <li class="nav__item">
            <a href="#">Popov</a>
          </li>
          <li class="nav__item">
            <a href="#">Ons Verhaal</a>
          </li>
          <li class="nav__item">
            <a href="#">Opgehaald</a>
          </li>
          <li class="nav__item">
            <a href="#">Steun Ons</a>
          </li>
          <li class="nav__item">
            <a href="#">Acties</a>
          </li>
          <li class="nav__item">
            <a href="#">De Muur</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
