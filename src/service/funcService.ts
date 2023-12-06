import Funcionario from "@/core/Funcionario";

let funcionariosList: Funcionario[] = [
    new Funcionario(9, "Augusto Müller",
        "Dev",
        "Efetivo",
    ),
    new Funcionario(10, "Gustavo Müller",
        "Dev",
        "Efetivo",
    )
]
let proximoId = funcionariosList.length + 1;

export const fetchFuncionarios = async (): Promise<Funcionario[]> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return funcionariosList;
    } catch (error) {
        throw new Error('Erro ao buscar funcionarios');
    }
};

export const cadastrarFuncionario = async (novoFuncionario: Funcionario): Promise<Funcionario> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        novoFuncionario.id = proximoId++;
        funcionariosList.push(novoFuncionario);
        return novoFuncionario;
    } catch (error) {
        console.error("Erro ao cadastrar funcionario.", error);
        throw error;
    }
};

export const AtualizarFuncionario = async (funcionarioAtualizado: Funcionario): Promise<Funcionario> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const index = funcionariosList.findIndex((funcionario) => funcionario.id === funcionarioAtualizado.id);

        if (index !== -1) {
            funcionariosList[index] = funcionarioAtualizado;
            return funcionarioAtualizado;
        } else {
            throw new Error('Funcionario não encontrado');
        }
    } catch (error) {
        console.error("Erro ao atualizar registro", error);
        throw error;
    }
};

export const ExcluirFuncionario = async (id: number): Promise<void> => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        funcionariosList = funcionariosList.filter((funcionario) => funcionario.id !== id);
    } catch (error) {
        console.error("Erro ao excluir registro", error);
        throw error;
    }
};