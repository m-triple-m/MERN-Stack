import express from 'express';

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from todo add');
});

router.get('/getall', (req, res) => {
    res.send('response from todo getall');
});

router.get('/update', (req, res) => {
    res.send('response from todo update');
});

router.get('/delete', (req, res) => {
    res.send('response from todo delete');
});

export default router;