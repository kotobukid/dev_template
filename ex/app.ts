import express, {Request, Response} from 'express';
import {sum} from "./sum.mjs";

const app: express.Application = express();

app.get('/', (req: Request, res: Response): void => {
    res.send('hello world');
});

app.get('/sum/:a/:b', (req: Request<{ a: string, b: string }>, res: Response): void => {
    const _a: number = Number(req.params.a);
    const _b: number = Number(req.params.b);
    res.send(`sum is ${sum(_a, _b)}`);
});


export {app};
