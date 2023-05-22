class pessoa {
    private _nome: string;
    private _idade: number;
    private _cpf: number;


    constructor(nome: string, idade: number, cpf: number) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;


    }

    public get nome(): string {
        return this._nome
    }


    public set nome(nome: string) {
        this._nome = nome;
    }


    public get idade(): number {
        return this._idade;
    }


    public set idade(idade: number) {
        this._idade = idade;
    }


    public get cpf(): number {
        return this._cpf
    }

    public set cpf(cpf: number) {
        this._cpf = cpf;
    }

}

class motorista extends pessoa {
    private _cnh: number;
    private _veiculo: carro;


    constructor(nome: string, idade: number, cpf: number, cnh: number, veiculo: carro) {
        super(nome, idade, cpf);
        this.cnh = cnh;
        this.veiculo = veiculo;

    }


    public get cnh(): number {
        return this._cnh
    }


    public set cnh(cnh: number) {
        this._cnh = cnh;
    }


    public get veiculo(): carro {
        return this._veiculo
    }

    public set veiculo(veiculo: carro) {
        this._veiculo = veiculo;
    }



}

class carro {
    private _modelo: string;
    private _ano: number;
    private _velocidade: number;


    constructor(modelo: string, ano: number, velocidade: number) {

        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;

    }


    public get modelo(): string {
        return this._modelo
    }

    public set modelo(modelo: string) {
        this._modelo = modelo;
    }


    public get ano(): number {
        return this._ano;
    }

    public set ano(ano: number) {
        this._ano = ano;
    }


    public get velocidade(): number {
        return this._velocidade
    }

    public set velocidade(velocidade: number) {
        this._velocidade = velocidade;
    }

    acelerar() {
        this.velocidade += 10;
    }

    frear() {
        this.velocidade -= 10;
    }

}

class detran {

    radar(motorista: motorista, velocidadePermitida: number) {
        let max_tolerado: number = velocidadePermitida + (velocidadePermitida * (5 / 100))

        if (motorista.veiculo.velocidade > max_tolerado) {
            console.log("Voce ultrapasssou o limite permitido!!!" );
        }
        else {
            console.log(motorista.veiculo.velocidade + "km/h");
        }

    }




}

let c1 = new carro("fusca", 1980, 100);
c1.acelerar();
console.log(c1.velocidade)


let fiscal = new detran();

let m1 = new motorista("leo", 18, 1080026677, 58565654, c1)

fiscal.radar(m1, 100);

c1.frear();
console.log(c1.velocidade);

fiscal.radar(m1, 100);
