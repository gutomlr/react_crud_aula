export default class Funcionario {
    id: number | null;
    nome: string;
    cargo: string;
    status: string;

    constructor(id: number | null, nome: string, cargo: string, status: string) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
        this.status = status;
    }

    static vazio(): Funcionario {
        return new Funcionario(null, "", "", "");
    }

    static geraFuncionariosMock() {
        return [new Funcionario(1, "Augusto Müller",
            "Dev Júnior",
            "Experiência",
        ),
        new Funcionario(2, "Guto",
            "Dev Pleno",
            "Efetivo",
        ),
        new Funcionario(3, "José",
            "Dev Pleno",
            "Efetivo",
        ),
        new Funcionario(4, "Ricardo",
            "Dev Pleno",
            "Efetivo",
        ),
        new Funcionario(5, "João",
            "Dev Pleno",
            "Efetivo",
        ),
        ]
    }
}