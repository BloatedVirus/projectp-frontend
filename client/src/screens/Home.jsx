//basic homepage
import React from 'react';
import OnsVerhaal from '../components/OnsVerhaal';
import Project from '../components/Project';
import Steen from '../components/Steen';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <div>
      <Header />
      <OnsVerhaal />
      <Project />
      <Steen />
      <Blog />
      <Footer />
    </div>
  );
}
export default Home;