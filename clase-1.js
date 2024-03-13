class Persona {
    static cantidadDePersonas = 0; // static 
    constructor(nombre, edad, ciudad, vida) {
        this.nombre = nombre,
        this.edad = edad,
        this.ciudad = ciudad,
        this.vida = vida || 100 // OR
        Persona.cantidadDePersonas++
    }
    comer(cantidad) {
        this.vida < 150
            ? this.vida = this.vida + cantidad
            : console.log('Limite superado. No podes comer más')
    }
    entrenar(cantidad) {
        this.vida > 50
            ? this.vida = this.vida - cantidad
            : console.log('Tu energia no es suficiente. No podes entrenar más')
    }
    mudarse(ciudad) {
        this.ciudad = ciudad
        this.vida = this.vida-20
    }
}

const persona1 = new Persona('Igna', 33, 'rosario', 120)
const persona2 = new Persona('Marcelo', 20, 'cordoba')
const persona3 = new Persona('Carmen', 20, 'cadiz')
const persona4 = new Persona('Astrid', 20, 'Oslo')

console.log('cantidad de personas: ', Persona.cantidadDePersonas)

console.log('inicio del dia:', persona4)
persona4.mudarse('Idaho')
console.log(persona4)
persona4.comer(70)
console.log(persona4)
persona4.comer(10)
console.log(persona4)
persona4.entrenar(60)
console.log(persona4)
persona4.entrenar(50)
console.log(persona4)
persona4.entrenar(20)
console.log('final del dia:', persona4)




// definimos métodos para modificar dinamicamente los valores

