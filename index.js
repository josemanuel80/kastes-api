import bodyParser from 'body-parser';
import routers from './routes/app.js';
import express from 'express';
const port=5000;






const server=express();
server.use(bodyParser.json());
server.use(routers);
server.listen(port,()=>console.log('listening at port', port));