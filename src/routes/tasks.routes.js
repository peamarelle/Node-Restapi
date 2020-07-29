import { Router } from 'express';

const router = Router();

import { connect } from '../database';

router.get('/', async(req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(`Array: ${result}`);
    res.json(result);
});

router.post('/', async(req, res) => {
    let input_title = req.body.title;
    let input_description = req.body.description
    const db = await connect();
    const task = {
        title: input_title,
        description: input_description
    };
    db.tasks.insert(task);
    res.json(task);
});

export default router;