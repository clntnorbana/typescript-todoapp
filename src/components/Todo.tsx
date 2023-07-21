import { TodoItem } from "../Interfaces";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";
import { LiaUndoSolid } from "react-icons/lia";

interface TodoProps {
  todo: TodoItem;
  onDelete: (id: number) => void;
  onFinish: (id: number) => void;
}

const Todo = (props: TodoProps) => {
  // delete
  const handleDelete = () => {
    props.onDelete(props.todo.id);
  };

  // finish
  const handleFinish = () => {
    props.onFinish(props.todo.id);
  };

  return (
    <>
      <div className="todo-item">
        <p className={props.todo.isDone ? "todo-done" : ""}>
          {props.todo.title}
        </p>
        <div className="btn-group">
          <RxCross2 className="btn" onClick={handleDelete} />
          <span className="btn" onClick={handleFinish}>
            {props.todo.isDone ? <LiaUndoSolid /> : <AiOutlineCheck />}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Todo;
