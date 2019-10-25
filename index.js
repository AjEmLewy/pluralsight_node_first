import express from 'express';
import path from 'path';

const port = 3000;
const server = express();

server.get('/', (req, res) =>
{
    res.send("sss").status(200);
});

server.listen(port);
