import express from "express";
import cors from "cors";
import tenderRoutes from "./routes/tender.routes";
import corrigendumRoutes from "./routes/corrigendum.routes"
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tenders", tenderRoutes);
app.use("/corrigendums", corrigendumRoutes);
app.use(errorHandler);

export default app;
