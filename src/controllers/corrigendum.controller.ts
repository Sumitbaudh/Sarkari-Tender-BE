import { Request, Response } from "express";
import { fetchCorrigendum } from "../services/corrigendum.service";

export const getCorrigendum = async (req: Request, res: Response) => {
    try{
        const corrigendum = await fetchCorrigendum();
        res.json(corrigendum);
    } catch(err){
        res.json(err)
    }
    
};
