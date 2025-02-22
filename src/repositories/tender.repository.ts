import { Tender } from "../models/tender.model";


export const getAllTenders = async () => {
    return await Tender.find();
};
