/**
 * Creamos una array de objetos,questions
 */
//Array de objetos:
const questions = [

    {
        questio: "Quin país té més població?",
        respostaCorrecta : "La Xina",
        respostaIncorrecta : "L'India",

    },
    //Siguiente objeto:
    {
        questio: "El primer astronauta a trepitjar la lluna va ser?",
        respostaCorrecta : "Neil Amstrong",
        respostaIncorrecta : "Louis Amstrong",
    },

];

//Llevará el control del índice de la pregunta que manejamos:
let indexQuestioActual = 0;
let rspostesCorrectes = 0;
let respostesIncorrectes = 0;

//Capturamos elementos del documento HTML:
const questioProposada = document.getElementById('questioProposada');
const btnEsquerre = document.getElementById('btnEsquerre');
const btnDret = document.getElementById('btnDret');
const missatge = document.getElementById('missatge');
const btnReiniciar = document.getElementById('btnReiniciar');

//Función que coloca las preguntas en los botones aleatoriamente:
//Mezcla aleatoriamente en un array las respuestas, devuelve el array:
function barrejaRespostes(correcta, incorrecta){

    const respostes = [correcta, incorrecta];

    //Devolverá en posicion aleatoria las respuestas:
    respostes.sort( () => Math.random() - 0.5);

    return respostes;

}

//Comprueba si ya hemos hecho todas las preguntas:
function mostraQuestio(){

    //Si es menor continuamos, 
    if(indexQuestioActual < questions.length){
        //Esto será un objeto lo que hay aqui dentro:
            const questioActual = questions[indexQuestioActual];

            //Colocamos como texto la pregunta:
            questioProposada.textContent = questioActual.questio;

            //Declaracion de array anonimo que contendrá variables,
            //las variables que devuelve la funcion barrejaRespostes:
            const [barrejatCorrecte, barrejatIncorrecte] = barrejaRespostes(
                questioActual.respostaCorrecta, 
                questioActual.respostaIncorrecta
            );

            

            //Actualizacion de los botones:
            //Los nombres de las variables no reflejan su contenido
            //en este caso:

            btnEsquerre.textContent = barrejatCorrecte;
            btnDret.textContent = barrejatIncorrecte;
    }else{

        //El juego ha terminado, porque las habria adivinado todaas:
        if(rspostesCorrectes === questions.length){

                missatge.textContent = "Has guanyat! Has respost totes les\n" 
                    "qüestions correctament";

        }else{

            missatge.textContent = `Joc acabat. Respotes correctes: ${rspostesCorrectes}, 
            Respostes incorrectes: ${respostesIncorrectes}`;
        }

        btnEsquerre.style.display = "none";
        btnDret.style.display = "none";
        btnReiniciar.style.display = "block";
        
    }

}

//Verificará las respuestas:
function comprovaResposta(respostaSeleccionada){

    //Coge la pregunta que toca en ese momento:
    const questioActual = questions[indexQuestioActual];

    //questioActual es un objeto:
    if(respostaSeleccionada === questioActual.respostaCorrecta){

        rspostesCorrectes++;

    }else{

        respostesIncorrectes++;

    }

    indexQuestioActual++;

    mostraQuestio();
}

//Eventos:
btnEsquerre.addEventListener('click', () => comprovaResposta(btnEsquerre.textContent));

btnDret.addEventListener('click', () => comprovaResposta(btnDret.textContent));

btnReiniciar.addEventListener('click', () => {

    indexQuestioActual = 0;
    rspostesCorrectes = 0;
    respostesIncorrectes = 0;
    missatge.textContent = "";
    btnEsquerre.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostraQuestio();
});

//Començar el joc
mostraQuestio();



