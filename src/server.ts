import express, {Request, Response} from 'express';
import employeesRouter from './api/employees/Employee.route';

const PORT = 3000;

export class Server {
  private app = express();

  startServer() {
    this.app.use('/employees', employeesRouter);

    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
}

new Server().startServer();
