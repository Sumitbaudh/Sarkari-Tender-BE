import express from "express";
import { getCorrigendum } from "../controllers/corrigendum.controller"

const router = express.Router();

router.get("/" , getCorrigendum);

export default router;
