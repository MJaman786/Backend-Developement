import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserById } from "../api/api"
import type { StudentFormData } from "../types/studentFormData.type"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface updateFuncProps {
    id: string,
    payload: StudentFormData
}

const updateUserFunc = async ({ id, payload }: updateFuncProps) => {
    try {
        const response = await updateUserById(id, payload);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default function useUpdateUserById() {
    const navigate = useNavigate();

    const querClient = useQueryClient();
    return useMutation({
        mutationFn: updateUserFunc,
        onSuccess: (data) => {
            toast.success(data.message);
            querClient.invalidateQueries({ queryKey: ['users'] });
            navigate(-1);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message)
        }
    })
}