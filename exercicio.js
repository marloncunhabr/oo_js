// Classe abstrata
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(`${this.modelo} está acelerando...`);
    }

    frear() {
        console.log(`${this.modelo} está freando...`);
    }
}

// Classes herdeiras
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    abrirPortas() {
        console.log(`${this.modelo} está abrindo as portas...`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    empinar() {
        console.log(`${this.modelo} está empinando a moto!`);
    }
}

// Instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla", 4);
const moto1 = new Moto("Honda", "CBR500R", 500);
const carro2 = new Carro("Ford", "Mustang", 2);

carro1.acelerar();
carro1.abrirPortas();

moto1.acelerar();
moto1.empinar();

carro2.frear();
carro2.abrirPortas();
