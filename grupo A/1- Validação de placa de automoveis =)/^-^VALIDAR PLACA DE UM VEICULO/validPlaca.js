

function validarPlaca() {

    //var = é variavel; PLACA é o nome dela; document.getElementById= indica que estamos pegando o intem com o ID "Placa"
    var PLACA = document.getElementById("Placa")
    
    var RESPOSTA = "PLACA INVALIDA"


        //cont = variável que não muda e o nome dessa é modelo1
        const modelo1 = /^[a-zA-Z]{3}[0-9]{4}$/;


        const modelo2 = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/

        //TEST = BOLEAN
    if( modelo1.test(PLACA.value)){ 
        RESPOSTA="PLACA VALIDA"



    }   if( modelo2.test(PLACA.value)){
        RESPOSTA="PLACA VALIDA"

    }

        // nãoprecisa do else
    console.log(RESPOSTA)

    //text area recebeu o nome de PLACARES
    var PLACARES = document.querySelector("#placaRes")
          PLACARES.value=RESPOSTA



        var LIMPAR = document.querySelector("#Limpar")
            LIMPAR.addEventListener("click", () => {PLACARES.value=null; PLACA.value=null})

}