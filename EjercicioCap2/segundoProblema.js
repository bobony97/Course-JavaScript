let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

let tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if(presencia == "P" || presencia == "p") {
        alumnosTotales[p][1]++;
    }
}

for (let i = 0; i < 30; i++) {
    for (let alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);

    }
}

for(alumno in alumnosTotales) {
    let resultado  = `${alumnosTotales[alumno][0]}:<br>
    _________Presentes: ${alumnosTotales[alumno][1]}<br>
    _________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;

    if(30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<b style=`color:red` REPROBADO POR INASISTENCIAS <br>";
    } else {
        resultado += "<br><br>"
    }
    document.write(resultado);
}