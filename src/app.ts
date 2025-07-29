import express, { Request, Response } from "express"
import { router } from "./app/routes";
import { notFound } from "./app/middlewares/notFound";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({

}))

app.use("/api/v1", router);

app.get('/', (req: Request, res: Response) =>{
  res.status(200).json({
    message: "🚚 Welcome to Parcel Delivery System Backend"
  })
});

app.use(notFound);

export default app;