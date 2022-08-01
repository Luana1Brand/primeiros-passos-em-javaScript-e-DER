
function validCPF(){

var CPF = document.getElementById("cpfA")

var CPFSTRING = new String(CPF.value)



console.log("APRESENTAR:  " + CPF.value  )


//SITE DA RECEITA FEDERAL QUE VALIDA CPF: https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp?Error=5
//SITE COM REGRAS DE VALIDAÇÃO DE CPF https://www.calculadorafacil.com.br/computacao/validar-cpf

//REGRA 1 -> TODO CPF DEVE  TER 11 NÚMEROS
const REG1 = /^[[0-9]{11}$/;

// REGRA 2 => OS NÚMEROS VERIFICAROES DEVEM ESTAR CORRETOS
            // REGRS 2.a  1*PRIMEIRO DIGITO + 2* O SEGUNDO + 3 * O TERCEIRO NUMERO (E ASSIM POR DIANTE) DARA UM VALOR X, QUE AO SER DIVIDIDO POR 11 VAI TER UM RESTO QUE SER[A O PRIMEIRO NUMERO VERIFICADOR., OU SEJA, DARÁ O DECIMO NUMERO DO CPF


            //const modelo1 = /^[a-zA-Z]{3}[0-9]{4}$/;
           
//separar os numeros do cpf um a um: 
//https://blog.betrybe.com/javascript/javascript-split/
var INDIVID = CPFSTRING.split("",11)
    console.log(INDIVID)


if( REG1.test(CPF.value)){ 
    alert("QUANTIDADE DE NUMEROS CORRETA")
    console.log("QUANTIDADE DE NUMEROS CORRETA")

        
        










}else{
    alert("VOCÊ ESQUECEU ALGUM(UNS) NÚMERO(S)")
    console.log("QUANTIDADE DE NUMEROS INCORRETA")


}


}