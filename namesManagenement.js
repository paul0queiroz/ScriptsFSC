const names = ["Alice ", "Bob ", "Charlie ", "Diana "];
console.log(`Lista de convidados atualmente: ${names}`);
//Acesse e imprima o segundo nome da lista (que deve ser "Bob") usando o índice correto.
console.log(names[1]);

//Adicione o nome "Eve" ao final da lista
const addLast = names.push("Eve");
console.log("Foi adicionado um nome ao final da lista.");
console.log(`Atualizando a lista: ${names}. Seja bem vinda, Eve`);

//Adicione o nome "Frank" no início da lista
const addFirst = names.unshift("Frank");
console.log("Foi adicionado um nome ao início da lista.");
console.log(`Atualizando a lista: ${names}. Seja bem vindo, ${addFirst}!`);

//Remova o último nome da lista
const removeLast = names.pop();
console.log(names);

//Remova o primeiro nome da lista
names.shift();
console.log(names);

//Checagem de indíce da variável
//Reassinale o nome "Charlie" para "Carlos". Lembre-se de usar o índice correto.
names[2] = "Carlos";
const indexOfNames = names.indexOf("Carlos");
console.log(
  `o novo nome adicionado está no segundo lugar, entre os convidados ${indexOfNames}`
);

//Ordene a lista alfabeticamente usando o método sort e imprima a lista ordenada.
const sortedNames = names.sort();

//Reassinalar e Ordenar
const namesIsArray = Array.isArray(names);
if (namesIsArray === true) {
  console.log(
    `Se você está vendo essa mensagem, é porquê o resultado da verificação de array é true. Checagem de Resultado: ${namesIsArray}`
  );
} else {
  console.log(
    `O resultado da checagem retornou ${namesIsArray}, portanto, o valor inserido não é um array.`
  );
}
console.log(
  ` a lista ${sortedNames} tem um total de ${names.length} convidados. `
);

//#region
//Crie uma função chamada findName que recebe um nome como parâmetro e retorna o índice desse nome na lista.
// Se o nome não estiver na lista, a função deve retornar -1. Teste a função com alguns nomes.
//#endregion
