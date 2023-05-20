function calcular(){
var gramaCarneCrianca = 200
var gramaCarneAdulto = 400
var gramaAcompanhamentosAdulto = 200
var gramaAcompanhamentosCrianca = 200
var cervejaLitroAdulto = 2
var cervejaLitroCrianca = 0
var refrigeranteMlAdulto = 500
var refrigeranteMlCrianca = 500
var aguaMlAdulto = 400
var aguaMlcrianca = 400

var AdultoSemAlcool = window.document.getElementById('txtad')
var AdultoAlcool = window.document.getElementById('txtadalc')
var Crianca = window.document.getElementById('txtcrian')

qtdAdulto = Number(AdultoSemAlcool.value)
qtdAdultoAlcool = Number(AdultoAlcool.value)
qtdcriancas = Number(Crianca.value)
if (qtdAdulto < 0 || qtdAdultoAlcool < 0 || qtdcriancas < 0){
    document.getElementById("resposta").innerHTML = `<p>Quantidade de pessoas <strong>INVÁLIDA!</strong></p>`
    document.getElementById("resposta").innerHTML += `<p>Por favor insira um valor maior que <strong>ZERO</strong>.</p>`
    document.getElementById("carne").innerText = "INVÁLIDO"
    document.getElementById("acompanhamento").innerText = "INVÁLIDO"
    document.getElementById("cerveja").innerText = "INVÁLIDO"
    document.getElementById("refrigerante").innerText = "INVÁLIDO"
    document.getElementById("agua").innerText = "INVÁLIDO"
}else{

var resultadoCarne = (qtdAdulto * gramaCarneAdulto + qtdAdultoAlcool * gramaCarneAdulto + qtdcriancas * gramaCarneCrianca) / 1000
var resultadoAcompanhamentos = (qtdAdulto * gramaAcompanhamentosAdulto + qtdAdultoAlcool * gramaAcompanhamentosAdulto + qtdcriancas * gramaAcompanhamentosCrianca) / 1000  
var resultadoCerveja = (qtdAdultoAlcool * cervejaLitroAdulto)
var resultadoRefrigerante = (qtdAdulto * refrigeranteMlAdulto + qtdAdultoAlcool * refrigeranteMlAdulto + qtdcriancas * refrigeranteMlCrianca) / 1000
var resultadoAgua = (qtdAdulto * aguaMlAdulto + qtdAdultoAlcool * aguaMlAdulto + qtdcriancas * aguaMlcrianca) / 1000


document.getElementById("carne").innerHTML = `${resultadoCarne}kg`
document.getElementById("acompanhamento").innerText = `${resultadoAcompanhamentos}kg`
document.getElementById("cerveja").innerText = `${resultadoCerveja}L`
document.getElementById("refrigerante").innerText = `${resultadoRefrigerante}L`
document.getElementById("agua").innerText = `${resultadoAgua}L`
}
}