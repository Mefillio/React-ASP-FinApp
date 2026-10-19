import axios from "axios";
import { CompanySearch } from "./company";

interface SearchCompaniesResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const response = await axios.get<SearchCompaniesResponse>(`https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`);
        return response.data;
    }
    catch (e) {
        if(axios.isAxiosError(e)) {
            console.error("Error message: ", e.message);
            return e.message;
        }
        else{
            console.error("Unexpected error: ", e);
            return "An unexpected error occurred";
        }
    };
}