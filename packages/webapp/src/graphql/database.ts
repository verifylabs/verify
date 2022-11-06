/* eslint-disable no-console */
import mongoose from 'mongoose';

function createConnection(): mongoose.Connection {
  const database = mongoose.createConnection(process.env.DB_URL as string);

  if (process.env.NODE_ENV !== 'test') {
    database.on('error', (_err) => {
      console.error(_err);
      console.error(`[🔴] 💾  Database connection failure`);
      process.exit();
    });

    database.on('connected', () => {
      console.log(`[🟢] 💾  Database connected`);
    });

    database.on('disconnected', () => {
      console.log(`[⚪] 💾  Database disconnected`);
    });
  }

  return database;
}

export const database = createConnection();
