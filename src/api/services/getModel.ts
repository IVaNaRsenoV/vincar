import { apiClient } from "..";

export async function getModel (vin: string) {
    const { data } = await apiClient.get(`${vin}?format=json`);
    return data.Results;
}