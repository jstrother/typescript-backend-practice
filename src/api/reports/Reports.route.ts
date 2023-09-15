import { Router, Request, Response, json } from 'express';
import { resolveInjected } from '../../shared/Container';
import { EmployeeDataAccess } from '../employees/EmployeeDataAccess';
import { Employee } from '../employees/Employee.model';

const reportsRouter = Router();
reportsRouter.use(json());
const employeeDataAccess = resolveInjected<EmployeeDataAccess>('EmployeeDataAccess');

reportsRouter.get('/salaries', async (req: Request, res: Response) => {
  const allEmployees: Employee[] = await employeeDataAccess.getAllEmployees();

  const allSalaries = allEmployees.map((employee) => ({
    [employee.name]: employee.salary,
  }));
  res.json(allSalaries);
});

export default reportsRouter;