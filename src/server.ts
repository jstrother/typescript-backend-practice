import express, { NextFunction, Request, Response } from 'express';
import employeesRouter from './api/employees/Employee.route';

const PORT = 3000;

export class Server {
  private app = express();

  startServer() {
    this.app.use('/employees', employeesRouter);

    // this prints any errors to the console instead of in the response
    this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(error.stack);
      res.send(error.message);
      next();
    });

    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
}

new Server().startServer();
