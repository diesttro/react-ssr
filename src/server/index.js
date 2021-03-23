import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/components/App';

const app = express();
const PORT = 3000;

app.use('/assets', express.static(path.join(__dirname, '/assets')));

app.get('/', (request, response) => {
  const root = (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">
          <App />
        </div>
        <script src="/assets/bundle.js" />
      </body>
    </html>
  );
  const html = ReactDOMServer.renderToString(root);

  response.send(`<!doctype html>${html}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
