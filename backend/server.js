import express from 'express';
import cors from 'cors';

import meals from './api/meals.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/meals', meals);
app.use('*', (req, res) => res.status(404).json({ error: 'Not found' }));

export default app;
