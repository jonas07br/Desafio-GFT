class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque='';
        switch(this.tipo){
            case 'guerreiro':
                ataque='espada'
                break;
            case 'mago':
                ataque='magia'
                break;
            case 'monge':
                ataque='artes marciais'
                break;
            case 'ninja':
                ataque='shuriken'
                break;
        }
        console.log(`${this.tipo} atacou usando ${ataque}`)
    }
}

let guerreiro = new Heroi('Conan', 20, 'guerreiro')
let mago = new Heroi('Gandalf', 100, 'mago')
let monge = new Heroi('Bruce Lee', 30, 'monge')
let ninja = new Heroi('Naruto', 17, 'ninja')

let herois = [guerreiro, mago, monge, ninja]

for(let i = 0; i < herois.length; i++){
    herois[i].atacar()
}