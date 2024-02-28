class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    //No se puede utilizar const ni funciones flecha para los metodos
    verInformacion() {
        document.write(this.informacion + "<br>");
    }
}

const perro = new animal("perro", 5, "marron");  //Al utilizar objetos usar "const"
const gato = new animal("gato", 2, "negro");  
const pato = new animal("pato", 1, "blanco");  

// document.write(perro.informacion);
// document.write(gato.informacion);
// document.write(pato.informacion);

perro.verInformacion();
gato.verInformacion();
pato.verInformacion();