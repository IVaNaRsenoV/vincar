import axios from "axios";

const URL = "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/";

export const apiClient = axios.create({
    baseURL: URL
})