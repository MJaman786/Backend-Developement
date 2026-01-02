import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/api";
import type { StudentData } from "../types/studentData.types";

const fetchData = async () => {
    try {
        const response = await getData();
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export default function useGetAllUsers() {
    return useQuery<StudentData[], Error>({
        queryKey: ['users'],
        queryFn: fetchData
    })
}
