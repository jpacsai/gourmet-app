import mongodb from 'mongodb';
import dotenv from 'dotenv';
import app from './server.js';
import MealsDAO from './dao/mealsDAO.js';

dotenv.config();
const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

MongoClient.connect(process.env.GOURMET_DB_URI, { wtimeoutMS: 2500, useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .then(async (client) => {
    await MealsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`backend listening on port ${port}`);
    });
  });
