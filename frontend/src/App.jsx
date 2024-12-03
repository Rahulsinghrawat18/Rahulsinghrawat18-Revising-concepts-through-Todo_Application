import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  
  // wrong way to do(using fetch) because it will create infinete loop
  // when setTodos with json.todos is called then control
  // goes back to line 9 and agin fetch is called ..
  // this creates an infinite loop.
  // to resolve this use useEffectHook
  // fetch("http://localhost:3000/todos").then(async function(res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // })

  return (
    <>
      <div>
      <CreateTodo></CreateTodo>
      {/* for rendering the todos */}
      <Todos todos={todos}></Todos>
       </div>
    </>
  )
}

export default App
