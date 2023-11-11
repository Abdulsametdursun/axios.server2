import { useEffect, useState } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import axios from "axios";
import Loading from "./components/Loading";

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState();
  const [maxPage, setMaxPage] = useState();

  const params = {
    _limit: 5,
    _page: page,
  };

  useEffect(() => {
    // loads during page transitions
    setTodos(null);
    // get request with fetch
    // fetch("http://localhost:3000/todos")
    //   .then((res) => res.json())
    //   .then((data) => console.log("fetch", data));

    // get request with axios
    axios.get("http://localhost:3000/todos", { params }).then((res) => {
      // total page counting
      const count = Number(res.headers["x-total-count"]);
      setMaxPage(Math.ceil(count / params._limit));
      setTotalCount(count);

      setTodos(res.data);
    });
  }, [page]);

  return (
    <div className="container p-5">
      <h2 className="text-center">
        Server <span className="text-warning">CRUD</span>
      </h2>

      <Form
        params={params}
        totalCount={totalCount}
        maxPage={maxPage}
        setPage={setPage}
        todos={todos}
        setTodos={setTodos}
      />

      <ul className="list-group">
        {/* if the data did not come yet */}
        {!todos && <Loading />}

        {/* ve operator */}
        {/* {todos && todos.map((todo) => <ListItem key={todo.id} />)} */}

        {/* optional chaining */}
        {todos?.map((todo) => (
          <ListItem setTodos={setTodos} key={todo.id} todo={todo} />
        ))}
      </ul>
      <div className="d-flex justify-content-between my-5">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="btn btn-primary"
        >
          Previous
        </button>

        <span className="lead fw-bold">{page}</span>

        <button
          disabled={page == maxPage}
          onClick={() => setPage((prev) => prev + 1)}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
