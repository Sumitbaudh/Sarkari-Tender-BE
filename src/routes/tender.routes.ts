import express from "express";
import { getTenders } from "../controllers/tender.controller";

const router = express.Router();

router.get("/", getTenders);

export default router;
