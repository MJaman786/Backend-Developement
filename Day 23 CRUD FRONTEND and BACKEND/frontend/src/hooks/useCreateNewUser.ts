import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../api/api";
import type { StudentFormData } from "../types/studentFormData.type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const createNewUser = async (payload: StudentFormData) => {
    const response = await createUser(payload)
    return response.data
}


export default function useCreateNewUser() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createNewUser,
        onSuccess: (data) => {
            toast.success(data.message);
            navigate(-1);
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error: any) => {
            // Catch backend error message
            const message = error?.response?.data?.message || 'Something went wrong';
            toast.error(message);
        }
    })
}
