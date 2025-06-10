const contacts = [
  {
    firstName: "Paulo",
    lastName: "Queiroz",
    age: 20,
    hobbies: ["Escutar música", "Ver filmes", "Assistir fórmula 1"],
  },
  {
    firstName: "Valentina",
    lastName: "Araujo",
    age: 20,
    hobbies: ["Escutar música", "Ver filmes", "Assistir fórmula 1"],
  },
  {
    firstName: "Victor",
    lastName: "Santos",
    age: 27,
    hobbies: ["Escutar música", "Ver filmes", "Assistir fórmula 1"],
  },
  {
    firstName: "Amanda",
    lastName: "Lacerda",
    age: 28,
    hobbies: ["Escutar música", "Ver filmes", "Assistir fórmula 1"],
  },
];

//Consultar o nome completo de cada contato
const fullNamesContacts = contacts.map(
  (fullName) => `${fullName.firstName} ${fullName.lastName}`
);
//Saída esperada é o nome completo de cada contato
console.log(fullNamesContacts);

//Acessar e exibir a idade do primeiro contato
const ageFirstContact = contacts[0].age;
console.log(
  `A idade do contato ${contacts[0].firstName} é: ${ageFirstContact}`
);

//Consultando o segundo valor da lista hobbies do segundo contato
const readSecondHobby = contacts[1].hobbies[1];
console.log(
  `O Segundo hobby da ${contacts[1].firstName} é: ${readSecondHobby}`
);

//Adicionando um novo contato a lista de contatos
const newContact = {
  firstName: "Levy",
  lastName: "Santos",
  age: 30,
  hobbies: ["Escutar música", "Ver séries", "Treinar"],
  pet: {
    petName: "Max",
    petAge: "10",
  },
};
//Adicionando o novo contato ao array com method push
contacts.push(newContact);

//Checando as informações do ultimo contato adicionado ao array
const InfoOfTheLastContact = contacts[contacts.length - 1];
const fullNameLastContact = `${InfoOfTheLastContact.firstName} ${InfoOfTheLastContact.lastName}`;
const readHobbiesOfLastContact = `${InfoOfTheLastContact.hobbies.join(", ")}`;
console.log(
  `O nome completo do último contato adicionado a lista é ${fullNameLastContact} e seus hobbies são: ${readHobbiesOfLastContact}`
);
