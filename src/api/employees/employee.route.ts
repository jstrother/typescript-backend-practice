import { Router, Request, Response, json } from 'express';
import * as handlers from './Employee.handler';
import { validateAsEmployee } from './Employee.validator';
import { zodValidateAsEmployee } from './Employee.zodvalidator';

const employeesRouter = Router();

employeesRouter.use(json());

employeesRouter.get('/', handlers.getAll);

employeesRouter.get('/:id', handlers.getById);

employeesRouter.post('/', zodValidateAsEmployee, handlers.addEmployee);

export default employeesRouter;