import React from 'react';

const Home = () => (
  <div className="container">
    <h1>Welcome</h1>
    <p>
      This page was rendered on server, you can look at the source code to
      verify.
    </p>
    <p>
      Go to <a href="/counter">/counter</a> to see an example using hooks.
    </p>
  </div>
);

export default Home;
