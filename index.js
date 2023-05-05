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

window.alert('----- CHURRASCO -----')
window.alert('Quantidade de itens necessários para um churrasco')

var qtdAdulto = Number(window.prompt('Quantidade de Adultos (que não consomem bebidas alcoólicas):'))
var qtdAdultoAlcool = Number(window.prompt('Quantidade de Adultos (que consomem bebidas alcoólicas)'))
var qtdcriancas = Number(window.prompt('Quantidade de Crianças: '))

var resultadoCarne = (qtdAdulto * gramaCarneAdulto + qtdAdultoAlcool * gramaCarneAdulto + qtdcriancas * gramaCarneCrianca) / 1000
var resultadoAcompanhamentos = (qtdAdulto * gramaAcompanhamentosAdulto + qtdAdultoAlcool * gramaAcompanhamentosAdulto + qtdcriancas * gramaAcompanhamentosCrianca) / 1000  
var resultadoCerveja = (qtdAdultoAlcool * cervejaLitroAdulto)
var resultadoRefrigerante = (qtdAdulto * refrigeranteMlAdulto + qtdAdultoAlcool * refrigeranteMlAdulto + qtdcriancas * refrigeranteMlCrianca) / 1000
var resultadoAgua = (qtdAdulto * aguaMlAdulto + qtdAdultoAlcool * aguaMlAdulto + qtdcriancas * aguaMlcrianca) / 1000

document.getElementById("adultos").innerText = `Adultos (que consomem bebidas alcoólicas).......: ${qtdAdultoAlcool}`
document.getElementById("adultosAlcool").innerText = `Adultos (que não consomem bebidas alcoólicas)...: ${qtdAdulto}`
document.getElementById("criancas").innerText = `Crianças........................................: ${qtdcriancas}`
document.getElementById("carne").innerText = `Carne.............: ${resultadoCarne}kg`
document.getElementById("acompanhamento").innerText = `Acompanhamentos...: ${resultadoAcompanhamentos}kg`
document.getElementById("cerveja").innerText = `Cerveja...........:${resultadoCerveja}L`
document.getElementById("refrigerante").innerText = `Refrigerante......: ${resultadoRefrigerante}L`
document.getElementById("agua").innerText = `Água..............: ${resultadoAgua}L`






