import express from 'express';
import compression from 'compression';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../client/components/App';

const app = express();
const port = process.env.PORT || 3000;
const cacheTimeInMs = 1000 * 60 * 2;

app.use(compression());
app.use(
  '/assets',
  express.static(path.join(__dirname, '/assets'), { maxAge: cacheTimeInMs })
);

app.get('*', (request, response) => {
  const root = (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
        <link href="/assets/styles.css" rel="stylesheet" />
      </head>
      <body>
        <div id="root">
          <StaticRouter location={request.url}>
            <App />
          </StaticRouter>
        </div>
        <script src="/assets/bundle.js" />
      </body>
    </html>
  );
  const html = ReactDOMServer.renderToString(root);

  response.send(`<!doctype html>${html}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
