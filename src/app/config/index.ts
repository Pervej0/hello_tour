import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
 LOCAL_URL: process.env.LOCAL_URL,
 PORT: process.env.PORT,
};
