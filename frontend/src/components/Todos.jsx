// //import { todo } from "../../../backend/db";

// export function Todos({todos}){

//   return <div>
//   {todos.map(function(todo){
//     return <div>
//       <h1>{todo.title}</h1>
//       <h2>{todo.description}</h2>
//       <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
//     </div>

//   })}

//   </div>
// }
export function Todos({ todos }) {
  // Function to handle updating a specific todo
  const updateTodo = (id, completed) => {
    fetch(`http://localhost:3000/todos`, {
      method: "PUT", // or PATCH if you're partially updating
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed, // Toggle completed status
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to update todo with ID: ${id}`);
        }
        return res.json();
      })
      .then((updatedTodo) => {
        console.log("Todo updated:", updatedTodo);
        // Optionally, refresh the list or update the UI state
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button
            onClick={() => updateTodo(todo.id, todo.completed)}
          >
            {todo.completed === true ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

