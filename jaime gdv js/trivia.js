// Simular una trivia de valorant

function examen() {
    // Función que toma cuestionario
    alert("Bienvenido a la trivia de valorant");
    let nota = 0;
    let respuestasCorrectas = [];

    const corrector = (rtaAlumno, respuestaCorrecta, pregunta) => {
        if (rtaAlumno.toUpperCase() === respuestaCorrecta.toUpperCase()) {
            nota += 2;
        }
        respuestasCorrectas.push(`${pregunta.pregunta} - Respuesta correcta: ${respuestaCorrecta}`);
    };
    let preguntas = [
        {
            pregunta: "¿Cuántas armas hay en el juego?",
            respuestas: {
                a: "5",
                b: "9",
                c: "12",
                d: "17"
            },
            respuestaCorrecta: "d"
        },
        {
            pregunta: "¿Cuántos roles hay?",
            respuestas: {
                a: "3",
                b: "4",
                c: "5",
                d: "6"
            },
            respuestaCorrecta: "b"
        },
        {
            pregunta: "¿Cual de los siguientes NO es un agente?",
            respuestas: {
                a: "jett",
                b: "Omen",
                c: "Trace",
                d: "kayo"
            },
            respuestaCorrecta: "c"
        },
        {
            pregunta: "¿cuantas habilidades tiene cada agente?",
            respuestas: {
                a: "2",
                b: "3",
                c: "4",
                d: "5"
            },
            respuestaCorrecta: "c"
        },
        {
            pregunta: "¿Que rol sirve para entrar y despejar site?",
            respuestas: {
                a: "Iniciador",
                b: "Duelista",
                c: "Controlador",
                d: "Sentinela"
            },
            respuestaCorrecta: "b"
        }
    ];
    preguntas.forEach((pregunta, valor) => {
        let respuestaUsuario = "";
        let respuestaValida = false;

        // Mientras la respuesta del usuario no sea válida (no esté en A, B, C, D), repetir la pregunta
        while (!respuestaValida) {
            respuestaUsuario = prompt(`${valor + 1}. ${pregunta.pregunta} \n A - ${pregunta.respuestas.a} \n B - ${pregunta.respuestas.b} \n C - ${pregunta.respuestas.c} \n D - ${pregunta.respuestas.d}`).toUpperCase();

            // Verificar si la respuesta es válida (A, B, C o D)
            if (respuestaUsuario === "A" || respuestaUsuario === "B" || respuestaUsuario === "C" || respuestaUsuario === "D") {
                respuestaValida = true;
            } else {
                alert("Respuesta inválida. Por favor, ingrese A, B, C o D.");
            }
        }

        corrector(respuestaUsuario, pregunta.respuestaCorrecta, pregunta);
    });

    // Mostrar las respuestas correctas al usuario
    respuestasCorrectas.forEach(respuesta => {
        alert(respuesta);
    });
    alert(`Su nota es: ${nota}/10`)
    return nota
}



function preguntaSeleccion() {
    // Funcion con lista de opciones y devuelve la selección elegida
    let eleccion = prompt("Bienvenid@ \nQue desea hacer: \n 1 - Tomar cuestionario \n Por favor ingrese el número del proceso seleccionado.");
    return parseInt(eleccion);
}

const selector=(eleccion)=>{
    switch(eleccion){
        case 1:
            // Mostrar alumnos
            examen()
            break
        default:
            alert("ingreso un valor inválido")
    }
}
const inicializar = ()=>{
    do{
        selector(preguntaSeleccion())
        loop = confirm("¿Desea continuar?")
        } while(loop)

}


inicializar()