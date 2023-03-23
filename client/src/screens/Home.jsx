//basic homepage
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="primary">Primary</Button>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
export default Home;