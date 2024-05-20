import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    'pergi ke gim',
    'makan buah',
    'ksksksal'
  ])

  const [todoValue, setTodoValue] = useState([])

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleUpdateTodos(index)
  {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  function handleDeleteTodos(index)
  {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleUpdateTodos={handleUpdateTodos} handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </>
  )
}

export default App
