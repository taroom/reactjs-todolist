export default function TodoCard(props) {
    const {children,handleUpdateTodos, handleDeleteTodos, index} = props;
  return (
    <li className="todoItem">
        { children }
        <div className="actionsContainer">
            <button onClick={() => {
              handleUpdateTodos(index)
            }}><i className="fa-solid fa-pen-to-square"></i></button>
            <button onClick={() => {
              handleDeleteTodos(index)
            }}><i className="fa-regular fa-trash-can"></i></button>
        </div>
    </li>
  )
}
