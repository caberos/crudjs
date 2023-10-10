import {
    Router
} from 'express'
import {
    authRequired
} from '../middlewares/validateToken.js'
import {
    getTask,
    getTasks,
    createTasks,
    deleteTasks,
    updateTasks
} from '../controllers/tasks.controller.js'

import {
    validateSchema
} from "../middlewares/validator.middleware.js";

import {
    createTasksSchema,
    updateTasksSchema
} from "../schemas/task.schema.js";

const router = Router()

router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
router.post('/tasks', authRequired, validateSchema(createTasksSchema), createTasks);
router.delete('/tasks/:id', authRequired, deleteTasks);
router.put('/tasks/:id', authRequired, validateSchema(updateTasksSchema), updateTasks);

export default router