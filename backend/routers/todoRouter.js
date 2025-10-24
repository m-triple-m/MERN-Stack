import express from 'express';
import Model from '../models/todoModel.js';

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(201).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.get('/update', (req, res) => {
    res.send('response from todo update');
});

router.get('/delete', (req, res) => {
    res.send('response from todo delete');
});

export default router;