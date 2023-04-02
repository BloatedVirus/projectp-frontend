import PropTypes from "prop-types";
import React, { Component } from "react";

const Project = () => {
  return (
    <section id="collect" class="steun halfheight">
        <article class="container container--steun">
            <h2>Steun Dit Project!</h2>
            <h3>Zie hier de updates van wat we al hebben opgehaald.</h3>
            <p>Deel dit project</p>
            
            <div class="steun--share">
                <a href="https://twitter.com/share?url=https://projectp.chiropopov.be/&text=Steun de nieuwe lokalen van Chiro Popov" class="share-btn twitter">Twitter</a>
                
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://projectp.chiropopov.be/" class="share-btn facebook">Facebook</a>
                
                <a href="mailto:?subject=Project P" class="share-btn email">Email</a>
            </div>

        </article>
    </section>
  );
};

export default Project;
