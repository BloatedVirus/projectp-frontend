//basic homepage
import React from 'react';
import OnsVerhaal from '../components/OnsVerhaal';
import Project from '../components/Project';
import Steen from '../components/Steen';
import Acties from '../components/Acties';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <OnsVerhaal />
      <Project />
      <Steen />
      <Acties />
      <Footer />
    </div>
  );
}
export default Home;