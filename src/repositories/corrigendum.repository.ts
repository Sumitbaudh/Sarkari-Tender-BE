import { Corrigendum } from "../models/corrigendum.model";
import { Tender } from "../models/tender.model";


export const getAllCorrigendum = async () => {
    return await Corrigendum.find();
};
