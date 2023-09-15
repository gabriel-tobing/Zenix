const ToDoItem = (props) => {
  const { todo, onDelete } = props;

  return (
    <div className="w-full flex flex-col p-3 border my-1">
      <div>
        <p className="break-words leading-4">{todo.text}</p>
      </div>
      <div className="flex justify-end items-center mt-4">
        <button
          type="button"
          className="inline-block py-2 px-4 bg-blue-800 text-white rounded"
          onClick={() => onDelete(todo.id)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
