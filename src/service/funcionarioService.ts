//import axios from "axios";
//import Funcionario from "@/core/Funcionario";

//interface ApiResponse {
    //content: Funcionario[];
//}
//const BASE_URL = 'http://localhost:8080';

//export const fetchFuncionarios = async (): Promise<Funcionario[]> => {
    //try {
        //const response = await axios.get<ApiResponse>(`${BASE_URL}/funcionarios`);
        //return response.data.content;
    //} catch (error) {
        //throw new Error('Erro ao buscar funcionarios');
    //}
//};

//export const cadastrarFuncionario = async (Funcionario: Funcionario): Promise<Funcionario> => {
    //try {
        //const response = await axios.post<Funcionario>(`${BASE_URL}/cadastro`, Funcionario);
        //return response.data;
    //} catch (error) {
        //console.error("Erro ao cadastrar funcionario:", error);
    //}
//};

//export const excluirFuncionario = async (id: number): Promise<void> => {
    //try {
        //await axios.delete(`${BASE_URL}/funcionarios/${id}`);
    //} catch (error) {
        //console.error("Erro ao excluir evento:", error);
        //throw error;
    //}
//};