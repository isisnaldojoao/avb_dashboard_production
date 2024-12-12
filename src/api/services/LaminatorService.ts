import axiosInstance from "../axiosConfig";
import { LaminatorItem } from "../../interfaces/laminatorItem";

export const getData = async (): Promise<LaminatorItem[]> => {
    const response = await axiosInstance.get('/api/laminator/search');
    return response.data;
}