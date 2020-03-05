//server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // користувальницький маршрут, щоб відповідати нашим URL-адресам у блозі.
    // server.get('/p/:id', (req, res) => {
    //   const actualPage = '/post';
    //   // const queryParams = { title: req.params.id };
    //   const queryParams = { id: req.params.id }; //Для детальної інфюсторінки "/ post"
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
