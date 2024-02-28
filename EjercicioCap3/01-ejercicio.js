class Celular {
    constructor(color, peso, tamaño, resolucionDeCamara, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = resolucionDeCamara;
        this.ram = ram;
        this.encendido = false;
    }

    presionarBotonEncendido() {
        if(this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando celular");
        } else {
            alert("El celular ya esta apagado");
        }
    }

    tomarFoto() {
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }

    grabarVideo() {
        alert(`Grabando video en: ${this.resolucionDeCamara}`);
    }

    mostrarInfo() {
        return `
        Color:  <b>${this.color}</b> <br>
        Peso:  <b>${this.peso}</b> <br>
        Tamaño:  <b>${this.tamaño}</b> <br>
        Resolucion De Camara:  <b>${this.resolucionDeCamara}</b> <br>
        Memoria Ram: <b>${this.ram}</b> <br>
        `
    }
}

const celular1 = new Celular("blanco", "150g", "5 pulgadas", "full hd", 2);
// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();

const celular2 = new Celular("negro", "100", "4.9 pulgadas", "hd", 1);
// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();

const celular3 = new Celular("blanco", "150g", "5 pulgadas", "full hd", 4);
// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();

document.write(`
    ${celular1.mostrarInfo()} <br>
    ${celular2.mostrarInfo()} <br>
    ${celular3.mostrarInfo()} <br>
`)