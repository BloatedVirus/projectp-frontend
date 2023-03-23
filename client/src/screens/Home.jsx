//basic homepage
import React from 'react';
import { Link } from 'react-router-dom';
import OnsVerhaal from '../components/OnsVerhaal';
import Project from '../components/Project';
import Steen from '../components/Steen';
import Acties from '../components/Acties';
import Footer from '../components/Footer';
import './style.css';

const Home = () => {
  return (
    <div>
        <OnsVerhaal/>
        <Project/>
        <Steen/>
        <Acties/>

        <Footer/>
    </div>
  );
}
export default Home;