let nome = prompt("Qual é o seu nome?");
let idade = prompt ("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

const msg = `Olá ${nome} você tem ${idade} anos e já está aprendendo ${linguagem}!`;
alert(msg);

while (true) {
gostar = Number(prompt(`Você gosta de estudar ${linguagem} Responda com o número 1 para SIM ou 2 para NÃO.`));
if (gostar === 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
    break
}
else if (gostar === 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
    break
}
else {
    alert("Opção inválida. Digite 1 para SIM ou 2 para NÃO.");
}
};
