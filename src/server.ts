import express, {Request, Response} from 'express';

const PORT = 3000;

export class Server {
  private app = express();

  startServer() {
    this.app.get('/hello', (req: Request, res: Response) => {
      res.send('Hello from the server!');
    });

    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
}

new Server().startServer();
