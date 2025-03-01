import { getAllCorrigendum } from "../repositories/corrigendum.repository";

export const fetchCorrigendum = async () => {
    return await getAllCorrigendum();
};
