import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/api";
import { toast } from "react-toastify";
// import { type StudentData } from "../types/studentData.types";

const deleteUserFun = async (id: string) => {
    try {
        const response = await deleteUser(id);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

// export default function useDeleteUserById() {
//     const queryClient = useQueryClient();
//     return useMutation({
//         mutationFn: deleteUserFun,
//         onSuccess: (_data, id) => {
//             queryClient.setQueryData<StudentData[]>(['users'],(cacheData)=>{
//                 return cacheData?.filter((user)=>{
//                     return user._id !== id
//                 })
//             })
//         }
//     })
// }

export default function useDeleteUserById() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: deleteUserFun,
        onSuccess: (data) => {
            
            // 1. Show the Success Toast with your Midnight Theme
            toast.success(data?.message || "User deleted successfully", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                closeButton: true,
                pauseOnHover: true,
                draggable: true,
                // Custom styling to match your UI
                style: {
                    backgroundColor: '#18181b', // zinc-900
                    color: '#fff',
                    border: '1px solid #27272a', // zinc-800
                    borderRadius: '12px',
                },
                progressClassName: "bg-indigo-500",
            });
            queryClient.invalidateQueries({
                queryKey: ['users'],
            });
        },
        onError:(data)=>{
            toast.error(data.message)
        }
    });
}
