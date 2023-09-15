import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const { todos, onDelete } = props;

  return (
    <div className="mt-5">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ToDoList;
