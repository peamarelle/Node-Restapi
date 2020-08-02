import { Router } from 'express';

const router = Router();

import { connect } from '../database';
import { ObjectID } from 'mongodb';

router.get('/', async(req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(`Array: ${JSON.stringify(result)}`);
    res.json(result);
});

router.post('/', async(req, res) => {
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    try {
        let result = await db.collection('tasks').insertOne(task);
        res.json(result.ops[0]);

    } catch (error) {
        throw error;
    }
});

router.get('/:id', async(req, res) => {
    const db = await connect();
    const { id } = req.params;
    const result = await db.collection('tasks').findOne({ _id: ObjectID(id) });
    res.json(result);
});

router.delete('/:id', async(req, res) => {
    const db = await connect();
    const { id } = req.params;
    const result = await db.collection('tasks').deleteOne({ _id: ObjectID(id) });
    res.json({
        mesagge: `Task ${id} deleted`,
        result
    });
});

router.put('/:id', async(req, res) => {
    const db = await connect();
    const { id } = req.params;
    let updateTask = {
        title: req.body.title,
        description: req.body.description
    };
    await db.collection('tasks').updateOne({ _id: ObjectID(id) }, { $set: updateTask });
    res.json({
        mesagge: `Task ${id} updated`
    });
});

export default router;