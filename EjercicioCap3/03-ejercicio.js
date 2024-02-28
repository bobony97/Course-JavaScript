class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.appIniciada = false;
        this.appInstalada = false;
    }

    abrir() {
        if(this.appIniciada == false && this.appInstalada == true) {
            this.appIniciada = true;
            alert("App Encendida");
        }
    }

    cerrar() {
        if(this.appIniciada == true && this.appInstalada == true) {
            this.appIniciada = false;
            alert("App Cerrada");
        }
    }

    instalar() {
        if (this.appInstalada == false) {
            this.appInstalada = true;
            alert("App Instalada");
        }
    }

    desinstalar() {
        if (this.appInstalada == true) {
            this.appInstalada = false;
            alert("App Desinstalada");
        }
    }

    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>

        `
    }
}

const app1 = new App("16.000", "5 Estrellas", "900mb");
const app2 = new App("6.000", "2 Estrellas", "90mb");
const app3 = new App("20.000", "4.5 Estrellas", "1.2GB");
const app4 = new App("3.000", "2.1 Estrellas", "400mb");
const app5 = new App("100.000", "5 Estrellas", "850mb");
const app6 = new App("160.500", "5 Estrellas", "1.60gb");
const app7 = new App("52.000", "4.2 Estrellas", "900mb");

document.write(`
    ${app1.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
`)

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();
