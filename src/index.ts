import express, {Application, Request, Response, NextFunction} from "express";

const app: Application = express();
const port: Number = 1000;

app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: "Hello World!" });
});

app.listen(port, () => {
    console.log(`[Server] : Server is running at http://localhost:${port}`);
});

