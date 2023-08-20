import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAllBranch } from "../services/Api/authApi";
export const useGetTest = () => {
    return useQuery("useGetTest", getAllBranch);
};