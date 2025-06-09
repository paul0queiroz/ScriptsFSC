const todos = [
  {
    id: 1,
    description: "Estudar JS",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Passear com o Max pela manhã ",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Passear com o max pela noite ",
    isCompleted: false,
  },
  {
    id: 4,
    description: "PG4E no Coursera ",
    isCompleted: false,
  },
];

//usar o método filter() para filtrar os objetos do array com base no valor de isCompleted.
//script para listar as tarefas pendentes
const pendingTodos = todos.filter((todo) => !todo.isCompleted);

//verificar se estão pendentes
if (pendingTodos.length > 0) {
  const pendingDescriptions = pendingTodos.map((todo) => todo.description);
  console.log(
    `Essas tarefas ${pendingDescriptions.join(",")} não foram concluídas ainda. Lembre-se, você deve termina-las até o final do dia.`
  );
} else {
  console.log("Todas as suas tarefas foram concluídas.");
}

console.log("Programa executado.");
