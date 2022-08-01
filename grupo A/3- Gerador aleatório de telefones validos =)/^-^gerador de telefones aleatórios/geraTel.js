
 
//    var BOTAO = document.querySelector("#bot")
//    BOTAO.addEventListener("click",GerarTel)

function GerarTel() {

    var QUANT = document.getElementById("quant")

    var DDD = document.getElementById("ddd")
   
    var TEXTAREA = document.querySelector("#telefones")
  
   

    for(let i = 0; i< parseInt(QUANT.value); i++){


       // pad= contabilizar quanto caracteres tem
       //padStart preenche se ele tiver menos do que o pré definido, que no caso é 4 com o que será preenchido= 0 

        // Math.floor arrendondar para baixo

        // Math.random = cria numeros randomicos de 0 à 1

        // ()*9999 = obvio,multiplica por 9999
        let  DIG1 = ("" + Math.floor(Math.random()*9999) ).padStart(4,0)

        let  DIG2 = ("" + Math.floor(Math.random()*9999) ).padStart(4,0)



        console.log(TEXTAREA)
        console.log(DIG1)
        console.log(DIG2)

        //+= serve para ser criado um array,. sem ele o valor seria substituido
        TEXTAREA.value +=`(${ DDD.value} ) 9${DIG1} -${DIG2} \n`
    }
    

}