import { Request, Response } from "express";
import { fetchTenders } from "../services/tender.service";

export const getTenders = async (req: Request, res: Response) => {
    const tenders = await fetchTenders();
    res.json(tenders);
};
