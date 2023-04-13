import PropTypes from "prop-types";
import React, { Component } from "react";
import { FacebookShareButton , TwitterShareButton, EmailShareButton, FacebookIcon,TwitterIcon,EmailIcon} from 'react-share';


const Project = () => {
  return (
    <section id="collect" class="steun halfheight">
        <article class="container container--steun">
            <h2>Steun Dit Project!</h2>
            <h3>Zie hier de updates van wat we al hebben opgehaald.</h3>
            <p>Deel dit project</p>
            
            <div class="steun--share">
                <TwitterShareButton url="https://twitter.com/share?url=https://projectp.chiropopov.be/&text=Steun de nieuwe lokalen van Chiro Popov" class="share-btn child"><TwitterIcon size={64} className="child"></TwitterIcon></TwitterShareButton>
                
                <FacebookShareButton url="https://projectp.chiropopov.be/" class="share-btn child"><FacebookIcon size={64} className="child"></FacebookIcon></FacebookShareButton>
                
                <EmailShareButton href="mailto:?subject:Project P" class="share-btn child"><EmailIcon size={64} className="child"></EmailIcon></EmailShareButton>
            </div>

        </article>
    </section>
  );
};

export default Project;
