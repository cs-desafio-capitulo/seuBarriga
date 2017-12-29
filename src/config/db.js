import mongoose from 'mongoose';
import env from '../config/env';

mongoose.Promise = global.Promise;

const databaseUrl = env.db.url || 'mongodb://localhost:27017/test';

const connectToDatabase = () => mongoose.connect(databaseUrl, {
  useMongoClient: true,
}, connectionError => connectionError);

export default { connectToDatabase };
