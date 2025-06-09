const user = {
  name: "Paulo Queiroz",
  email: "email@gmail.com",
  age: "20",
  hobbies: ["Jogar", "Estudar", "Assistir F1", "Ver filme"],
  pet: {
    age: 10,
    name: "Max",
  },
};

// const firstName = user.name;
// const emailUser = user.email;
// const ageUser = user.age;
// const hobbiesUser = user.hobbies;
//refatorando as const de cima

const {
  name: Nome,
  email,
  age,
  hobbies,
  pet: { name: DogName },
} = user;

//acessando o ultimo elemento da lista
const read = user.hobbies[3];
console.log(user);
console.log(`${Nome} tem como um dos seus hobbies: ${read}.`);
