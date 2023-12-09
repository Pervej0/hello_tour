import mongoose from 'mongoose';
import app from './app';
const PORT = 4000;

const databaseUrl = 'mongodb://localhost:27017/hello_tour';

//connecting database
const main = async () => {
  await mongoose.connect(databaseUrl);
  try {
    app.listen(PORT, () => {
      console.log('The server is running on port', PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
