// import express
import express from 'express';
import TodoRouter from './routers/todoRouter.js';
import UserRouter from './routers/userRouter.js';
import connectDB from './connection.js';

connectDB();

// initialize express
const app = express();
const port = 5500;

// middlewares
app.use(express.json());

app.use('/todo', TodoRouter);
app.use('/user', UserRouter);

// Route or endpoint
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.listen(port, () => {
    console.log('server has started');
});