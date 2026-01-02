import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../api/api";

const fetchUserById = async (id:string) => {
    try {
        const response = await getUserById(id);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export default function useGetUserById(id?:string) {
    return useQuery({
        queryKey: ['users', id],
        queryFn: ()=>fetchUserById(id!)
    })
}