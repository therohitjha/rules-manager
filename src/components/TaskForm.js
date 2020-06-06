import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext
  );
  const [rules, setRules] = useState({
    rent: "",
    age: "",
    address: "",
    zip: "",
    product: "",
  });

  
  const resetState = () => {
    setRules({ rent: "", age: "", address: "", zip: "",product: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(rules);
      resetState()
    } else {
      editTask(rules, editItem.id);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRules((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  

  useEffect(() => {
    if (editItem) {
      setRules(editItem.rules);
    } else {
      resetState();
    }
  }, [editItem]);



  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter Rent..."
        value={rules.rent}
        name="rent"
        onChange={handleChange}
        required
        className="task-input"
      />
      <input
        type="text"
        placeholder="Enter Age"
        name="age"
        value={rules.age}
        onChange={handleChange}
        required
        className="task-input"
      />
      
      <input
        type="text"
        placeholder="Enter Address..."
        name="address"
        value={rules.address}
        onChange={handleChange}
        required
        className="task-input"
      />
      <input
        type="text"
        placeholder="Enter Zip Code"
        name="zip"
        value={rules.zip}
        onChange={handleChange}
        required
        className="task-input"
      />
      <input
        type="text"
        placeholder="Enter Product..."
        name="product"
        value={rules.product}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Rules" : "Add Rules"}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
