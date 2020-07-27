import { Router } from 'express';

const router = Router();

import {connect} from '../database';

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(`Array: ${result}`);
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    const { title, description } = req.body;
    console.log(`Values: ${title}, ${description}`);
    res.json('Task created');
});

export default router;