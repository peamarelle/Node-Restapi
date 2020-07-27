import express from 'express';

const app = express();

//Routes
import routes from './routes/index.routes';
import tasks from './routes/tasks.routes';

//Settings
app.set('port', process.env.PORT || 3000);


//Routes
app.use(routes);
app.use('/tasks', tasks);

export default app;