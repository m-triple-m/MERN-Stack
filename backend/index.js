// import express
import express from 'express';
import TodoRouter from './routers/todoRouter.js';
import UserRouter from './routers/userRouter.js';
import connectDB from './connection.js';
import cors from 'cors';

connectDB();

// initialize express
const app = express();
const port = 5500;

// middlewares
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
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