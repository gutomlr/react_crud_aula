import Funcionario from "@/core/Funcionario";
import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";

interface FormularioProps {
    funcionario: Funcionario
    funcionarioMudou?: (funcionario: Funcionario) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.funcionario?.id
    const [nome, setNome] = useState(props.funcionario?.nome)
    const [cargo, setCargo] = useState(props.funcionario?.cargo)
    const [status, setStatus] = useState(props.funcionario?.status)
    return (
        <div>
            {id ? (<Entrada texto="ID" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="NOME" valor={nome} onChange={setNome}></Entrada>
            <Entrada texto="CARGO" valor={cargo} onChange={setCargo}></Entrada>
            <Entrada texto="STATUS" valor={status} onChange={setStatus}></Entrada>
            <div className="flex justify-end mt-5">
                <Botao className="mr-3" cor="bg-gradient-to-r from-blue-400 to-blue-600"
                onClick={() => props.funcionarioMudou?.(new Funcionario(id, nome, cargo, status))}>
                    {id ? 'ALTERAR' : 'SALVAR'}
                </Botao>
                <Botao cor="bg-gradient-to-r from-blue-600 to-blue-400"
                onClick={props.cancelado}>
                    CANCELAR
                </Botao>
            </div>
        </div>
    )
}