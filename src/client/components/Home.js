import React from 'react';

const Home = () => (
  <div className="container">
    <h1>Welcome</h1>
    <p>This page was rendered on server.</p>
    <p>
      You can go to <a href="/counter">/counter</a> and see an example using
      hooks.
    </p>
  </div>
);

export default Home;
