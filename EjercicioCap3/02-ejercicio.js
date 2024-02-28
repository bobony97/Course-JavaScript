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

//************************************************************************************************** */

class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, resolucionDeCamara, ram, resolucionCamaraExtra) {
        super(color, peso, tamaño, resolucionDeCamara, ram);
        this.resolucionCamaraExtra = resolucionCamaraExtra;
    }

    grabarVideoLento() {
        alert(`Estas grabando en camara lenta a una resolucion de: ${this.grabarVideoLento}`);
    }

    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial");
    }

    infoAltaGama() {
        return super.mostrarInfo() + `Resolucion De Camara Extra: <b>${this.resolucionCamaraExtra} </b> <br>`
    }
}

//*************************************************************************************************** */

// const celular1 = new Celular("blanco", "150g", "5 pulgadas", "full hd", "2GB");
// // celular1.presionarBotonEncendido();
// // celular1.tomarFoto();
// // celular1.grabarVideo();
// // celular1.reiniciar();

// const celular2 = new Celular("negro", "100", "4.9 pulgadas", "hd", "1GB");
// // celular1.presionarBotonEncendido();
// // celular1.tomarFoto();
// // celular1.grabarVideo();
// // celular1.reiniciar();

// const celular3 = new Celular("blanco", "150g", "5 pulgadas", "full hd", "4GB");
// // celular1.presionarBotonEncendido();
// // celular1.tomarFoto();
// // celular1.grabarVideo();
// // celular1.reiniciar();

// document.write(`
//     ${celular1.mostrarInfo()} <br>
//     ${celular2.mostrarInfo()} <br>
//     ${celular3.mostrarInfo()} <br>
// `)

const celularAltaGama1 = new CelularAltaGama("blanco", "150g", "5 pulgadas", "full hd", "2GB", "hd");
const celularAltaGama2 = new CelularAltaGama("negro", "100", "4.9 pulgadas", "hd", "1GB", "hd");

document.write(`
    ${celularAltaGama1.infoAltaGama()} <br>
    ${celularAltaGama2.infoAltaGama()} <br>
`)