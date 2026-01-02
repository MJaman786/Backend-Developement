import axios from "axios";
import type { StudentFormData } from "../types/studentFormData.type";

const api = axios.create({
    baseURL: import.meta.env.SERVER_URL || 'http://localhost:3000',  
})


// create new user
export const createUser = (payload:StudentFormData)=>{
    return api.post('/students/add-user',payload)
}

// get the students data.
export const getData = ()=>{
    return api.get('/students')
}

// get the students data.
export const getUserById = (id:string)=>{
    return api.get(`/students/edit-user/${id}`);
}

// get the students data.
export const updateUserById = (id:string, payload:StudentFormData)=>{
    return api.put(`/students/edit-user/${id}`,payload);
}

export const deleteUser = (id:string)=>{
    return api.delete(`/students/${id}`)
}

