import axios from "axios";
import { types } from "../constants";
import { formatDate } from "../helpers";
import { useState, useRef } from "react";

const ListItem = ({ setTodos, todo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  // To access elements whose reference is defined
  const titleRef = useRef();
  const selectRef = useRef();

  // Deleting
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      .then(() => setTodos((todos) => todos.filter((i) => i.id !== todo.id)));
  };

  // updating
  const handleEdit = () => {
    // Access to input values
    const newValues = {
      title: titleRef.current.value,
      status: selectRef.current.value,
    };
    // Update API
    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, newValues)
      .then(() => {
        const updated = { ...todo, ...newValues };
        setTodos((todos) =>
          todos.map((i) => (i.id === updated.id ? updated : i))
        );
      });

    setIsEditMode(false);
  };

  return (
    <li className="relative px-3 py-3 list-group-item d-flex justify-content-between align-items-center">
      {/* status side */}
      <div>
        {isEditMode ? (
          <select ref={selectRef} defaultValue={todo.status}>
            <option value="important">Important</option>
            <option value="daily">Daily</option>
            <option value="job">Work</option>
          </select>
        ) : (
          <span className={`badge ${types[todo.status]?.color}`}>
            {types[todo.status].text}
          </span>
        )}
      </div>

      {/* Text index */}
      {isEditMode ? (
        <input ref={titleRef} defaultValue={todo.title} type="text" />
      ) : (
        <span>{todo.title}</span>
      )}

      {/* Buttons side */}
      <div className="btn-group">
        {isEditMode ? (
          <>
            <button onClick={handleEdit} className="btn btn-sm btn-success">
              Save
            </button>
            <button
              onClick={() => setIsEditMode(false)}
              className="btn btn-sm btn-secondary"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditMode(true)}
              className="btn btn-sm btn-primary"
            >
              Edit
            </button>
            <button onClick={handleDelete} className="btn btn-sm btn-danger">
              Delete
            </button>
          </>
        )}
      </div>

      {/* date */}
      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
