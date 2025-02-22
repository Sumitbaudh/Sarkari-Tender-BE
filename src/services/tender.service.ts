import { getAllTenders } from "../repositories/tender.repository";

export const fetchTenders = async () => {
    return await getAllTenders();
};
