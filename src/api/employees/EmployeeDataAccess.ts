import { AwesomeDB } from "../../data/AwesomeDB";
import { Employee } from "./Employee.model";

export class EmployeeDatAccess {
  private employeesDataBase = new AwesomeDB<Employee>();

  public async addEmployee(employee: Employee) {
    employee.employedAt = new Date();
    const id = await this.employeesDataBase.insert(employee);
    return id;
  }

  public async getEmployeeId(id: string) {
    const employee = await this.employeesDataBase.getBy('id', id);
    return employee;
  }

  public async getAllEmployees() {
    return this.employeesDataBase.getAllElements();
  }
}