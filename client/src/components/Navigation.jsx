import React from "react";
import CustomLink from "./CustomLink";

const Navigation = () => {
  return (
    <div>
      <CustomLink to="/popov" class="nav__item">
        Popov
      </CustomLink>
      <CustomLink to="/ons-verhaal" class="nav__item">
        Ons Verhaal
      </CustomLink>
      <CustomLink to="/opgehaald" class="nav__item">
        Opgehaald
      </CustomLink>
      <CustomLink to="/steun-ons" class="nav__item">
        Steun Ons
      </CustomLink>
      <CustomLink to="/acties" class="nav__item">
        Acties
      </CustomLink>
      <CustomLink to="/de-muur" class="nav__item">
        De Muur
      </CustomLink>
    </div>
  );
};
export default Navigation;
