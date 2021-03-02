import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo{
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(resp => {
  // console.log(resp.data)
  const todo = resp.data as Todo
  const id = todo.id
  const title = todo.title 
  const completed = todo.completed
  logTodo(id, title, completed )
})


const logTodo = (id: number, title: string, completed:boolean) => {
  console.log(`
  The Todo with the ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `)
}