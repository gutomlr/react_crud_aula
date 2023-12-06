'use client';
import Botao from "@/components/funcionarios/botao";
import Formulario from "@/components/funcionarios/formulario";
import Layout from "@/components/funcionarios/layout";
import Tabela from "@/components/funcionarios/tabela";
import { IconeAddFunc } from "@/components/icones/tabela";
import Funcionario from "@/core/Funcionario";
import { AtualizarFuncionario, ExcluirFuncionario, cadastrarFuncionario, fetchFuncionarios } from "@/service/funcService";
import { useEffect, useState } from "react";

export default function Funcionarios() {

    const [funcionario, setFuncionario] = useState<Funcionario>(Funcionario.vazio())
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    //const funcionarios = Funcionario.geraFuncionariosMock()
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
    useEffect(() => {
        if (visivel === 'tabela') {
            const loadFuncionarios = async () => {
                try {
                    const dados = await fetchFuncionarios();
                    setFuncionarios(dados);
                } catch (error) {
                    console.error("Erro ao buscar funcionarios:", error);
                }
            }
            loadFuncionarios();
        }
    }, [visivel]);

    function funcionarioSelecionado(funcionario: Funcionario) {
        setFuncionario(funcionario)
        setVisivel('form')
    }

    async function funcionarioExcluido(funcionario: Funcionario) {
        const confirmacao =
            window.confirm("Excluir registro?");
        if (confirmacao) {
            try {
                if (funcionario.id !== null) {
                    await ExcluirFuncionario(funcionario.id);
                } else {
                    console.error("FuncionárioID é nulo");
                }
                setFuncionarios(prevFuncionarios => prevFuncionarios.filter(func => func.id !== funcionario.id));
            } catch (error) {
                console.error("Erro ao excluir registro", error);
            }
        }
    }

    async function salvarFuncionario(funcionario: Funcionario) {
        try {
            const novoFuncionario = await cadastrarFuncionario(funcionario);
            setVisivel("tabela");
        } catch (error) {
            console.error("Erro ao salvar registro", error);
        }
    }

    function novoFuncionario() {
        setFuncionario(Funcionario.vazio())
        setVisivel("form")
    }

    function salvarOuAlterarFuncionario(funcionario: Funcionario) {
        if (funcionario.id) {
            alterarFuncionario(funcionario)
        } else {
            salvarFuncionario(funcionario)
        }
    }

    async function alterarFuncionario(funcionario: Funcionario) {
        try {
            const funcionarioAtualizado = await AtualizarFuncionario(funcionario);
            setVisivel("tabela");
        } catch (error) {
            console.error("Erro ao atualizar registro", error);
        }
    }

    return (
        <div className={`flex justify-center items-center h-screen
        bg-gradient-to-bl from-black via-blue-500 to-white
        text-white`}>
            <Layout titulo="Cadastro de Funcionários">
                {visivel === 'tabela' ? (
                    <> <div className="flex justify-end">
                        <Botao className="mb-4" cor="bg-gradient to-r from-green-500 to green-700"
                            onClick={() => novoFuncionario()}>{IconeAddFunc}</Botao>
                    </div>
                        <Tabela funcionarios={funcionarios}
                            funcionarioExcluido={funcionarioExcluido}
                            funcionarioSelecionado={funcionarioSelecionado}></Tabela>
                    </>
                ) : (<Formulario funcionario={funcionario}
                    funcionarioMudou={salvarOuAlterarFuncionario}
                    cancelado={() => setVisivel('tabela')} />)}
            </Layout>
        </div>
    )
}