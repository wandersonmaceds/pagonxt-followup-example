import express from 'express';

import { router } from './routes.js';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, function () {
    console.log('accounts server is running');
});