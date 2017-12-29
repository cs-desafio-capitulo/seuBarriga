import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import database from './config/db';
import logger from './services/logger';

const app = express();

const configureServer = () => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/', logger, routes);

  return app;
};

export default () => database.connectToDatabase().then(configureServer);
