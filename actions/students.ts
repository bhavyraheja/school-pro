"use server"
import axios from "axios";
import { api } from "./schools";
import { StudentProps } from "@/components/dashboard/forms/students/student-form";
import { Student } from "@/types/types";

export async function createStudent(data: StudentProps){
    try{
        const response = await api.post('/students', data);
        return response.data;
    } catch (error){
        if(axios.isAxiosError(error)){
            const message = error.response?.data?.message || 'Failed to create student';
            throw new Error(message);
        }
        throw error;
    }
}
export async function deleteStudent(id:string){
    console.log("deleted",id);
    return{
        ok:true
    }
}

export async function getAllStudents(){
    try{
        const response = await api.get("/students");
        const students =  response.data;
        return students as Student[];
    } catch(error){
        console.log(error)
    }
}
export async function getStudentNextSequence(){
    try{
        const response = await api.get("/students");
        const students = response.data;
        return students as Student[];
    } catch(error){
        console.log(error);
    }
}