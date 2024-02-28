class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInformacion() {
        document.write(this.informacion + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = null;
    }

    // static ladrar() {  //Los metodos static son aquellos que no necesitan que el objeto se defina para poder ser utilizados y pueden ser utilizados por toda la clase
    //     alert("¡WAW!");
    // }

    ladrar() {
        alert("¡WAW!");
    }

    set setRaza(raza) {      //Cuando lo definimos al metodo es un metodo pero a la hora de utilizar dicho metodo para modificar, este se transforma en una propiedad
        this.raza = raza;
    }

    get getraza() {
        return this.raza;
    }
}

const perro = new Perro("perro", 5, "marron", "doberman");  
const gato = new Animal("gato", 2, "negro");  
const pato = new Animal("pato", 1, "blanco");  

perro.setRaza = "pedro";    //Metodo "set modificarRaza" como propiedad
document.write(perro.raza);
perro.ladrar();
gato.verInformacion();
pato.verInformacion();