import express, { Request, Response, NextFunction } from "express";

const app = express();

type myTypes = {
  name: string;
};
app.use(express.json());
app.get(
  "/",
  (req: Request<{ name: string }>, res: Response, next: NextFunction) => {
    req.params.name = "";
    return res.send("hello world");
  }
);
app.post("/api/data", (req, res, next) => {
  return res.send(req.body + "hello api");
});

app.listen(3000, () => {
  console.log(" connected ");
});


