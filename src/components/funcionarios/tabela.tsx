import Funcionario from "@/core/Funcionario";
import { IconeDelete, IconeEdicao } from "../icones/tabela";

interface TabelaProps {
    funcionarios: Funcionario[]
    funcionarioSelecionado?: (funcionario: Funcionario) => void
    funcionarioExcluido?: (funcionario: Funcionario) => void
}

export default function Tabela(props: TabelaProps) {

    function renderHeader() {
        return (
            <tr>
                <th className="text-center p-3">ID</th>
                <th className="text-center p-3">NOME</th>
                <th className="text-center p-3">CARGO</th>
                <th className="text-center p-3">STATUS</th>
                <th className="p-3">AÇÕES</th>
            </tr>)
    }


    function renderDados() {
        return props.funcionarios?.map((funcionario, i) => {
            return (<tr key={funcionario.id}
                className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-300'} `}>
                <td className="text-center p-3">{funcionario.id}</td>
                <td className="text-center p-3">{funcionario.nome}</td>
                <td className="text-center p-3">{funcionario.cargo}</td>
                <td className="text-center p-3">{funcionario.status}</td>
                {renderizarAcoes(funcionario)}
            </tr>)
        })
    }

    function renderizarAcoes(funcionario: Funcionario) {
        return (
            <td className="flex justify-center">
                {props.funcionarioSelecionado
                    ? (<button onClick={() => props.funcionarioSelecionado?.(funcionario)}
                        className={`flex justify-center items text-gray-600
                            rounded-full p-2 m-1 hover:bg-blue-700`}>{IconeEdicao}</button>) : false}
                {props.funcionarioExcluido
                    ? (<button onClick={() => props.funcionarioExcluido?.(funcionario)}
                        className={`flex justify-center items text-gray-800
                            rounded-full p-2 m-1 hover:bg-blue-700`}>{IconeDelete}</button>)
                    : false}
            </td>
        )
    }




    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100 bg-gradient-to-r from-blue-500 to-black`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>)
}