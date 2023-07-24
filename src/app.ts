import express, {Application, Response, Request } from 'express';
import morgan from "morgan";
import index from './routes/index';
import errorHandler from 'errorhandler';
import './database';

export const app: Application = express();

app.use(morgan('short'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(index);

if(process.env.NODE_ENV === 'development'){
  app.use(errorHandler());
}else{
  app.use((err: any, _: Request, res: Response) => {
    const code = err.code || 500;
    res.status(code).json({
        code,
        message: err.message ? null : err.message,
    });
  });
}