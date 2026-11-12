import express from 'express';
import type {Application, Router, Request, Response} from 'express';
const app : Application = express();



app.use(express.json());

app.get("/", (req : Request, res : Response) => {
  res.json({ message: 'Hello from BetterMeteo!' });
});

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});