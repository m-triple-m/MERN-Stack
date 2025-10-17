import express from 'express';

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from user add');
});

export default router;