import axios from "axios";
import { v4 } from "uuid";

const Form = ({ setTodos, totalCount, maxPage, setPage, todos, params }) => {
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const status = e.target[1].value;

    if (!title) {
      return alert("Enter a value please!");
    }

    const newTodo = {
      title,
      status,
      id: v4(),
      date: new Date().toLocaleDateString(),
      isDone: false,
    };
    // Add API with fetch
    // fetch("http://localhost:3000/todos", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newTodo),
    // });
    // Add API with axios
    axios
      .post("http://localhost:3000/todos", newTodo)
      // page update
      .then(() => {
        if (todos.length === params._limit) {
          // if last page full, it wlll create new page for new value
          setPage(totalCount % params._limit === 0 ? maxPage + 1 : maxPage);
          return;
        }
        setTodos((todos) => [...todos, newTodo]);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5 "
    >
      <input
        className="form-control shadow"
        placeholder="exp: Create a project"
        type="text"
      />
      <select defaultValue={"daily"} className="form-select w-50">
        <option value="important">Important</option>
        <option value="daily">Daily</option>
        <option value="job">Work</option>
      </select>
      <button className="btn btn-primary shadow">Sent</button>
    </form>
  );
};

export default Form;
