import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
const PORT = 4000;

mongoose.set('debug', true);
//connecting database
const main = async () => {
 await mongoose.connect(config.LOCAL_URL as string);
 try {
  app.listen(PORT, () => {
   console.log('The server is running on port', PORT);
  });
 } catch (error) {
  console.log(error);
 }
};

main();
