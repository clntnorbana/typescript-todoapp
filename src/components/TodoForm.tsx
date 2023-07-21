import { useState } from "react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

const TodoForm = (props: TodoFormProps) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim().length === 0) {
      alert("please add some value");
      return;
    }

    props.onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
