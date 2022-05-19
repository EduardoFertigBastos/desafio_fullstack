import app from './app';
import * as dotenv from 'dotenv';


const PORT = process.env.PORT || 3333;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);