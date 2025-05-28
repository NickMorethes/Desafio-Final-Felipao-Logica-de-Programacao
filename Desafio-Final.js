class UserHero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };
    };
    escreva() {
        let ataque = "ataque desconhecido";
        for (let tipo in this.ataque) {
            if (tipo === this.tipo) {
                ataque = this.ataque[tipo];
                break;
            };
        };
        console.log(`${this.nome} é ${this.tipo} e atacou usando ${ataque}`);
    };
};

let usuario = new UserHero("Nicolly", 27, "mago");
usuario.escreva();
