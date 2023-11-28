import React, { useState, useEffect } from "react";

import { Task } from "../../Classes/Goal.js";
import { GlobalState } from "../../GlobalState/GlobalState.jsx";
const useGlobalState = () => React.useContext(GlobalState);

export function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [visibility, setVisibility] = useState(true);
  const {
    uncompletedTasks,
    categories,
    formVisibility,
    difficultyOptions,
    priorityOptions,
  } = useGlobalState();

  useEffect(() => {
    setVisibility(formVisibility);
  }, [formVisibility]);

  function closeForm(e) {
    e.preventDefault();
    setVisibility(false);
    GlobalState.set({
      formVisibility: false,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (title && description && priority && date && difficulty) {
      // Create a new task object
      const newTask = new Task(
        title,
        description,
        priority,
        date,
        difficulty,
        category
      );
      const updatedUncompletedTasks = [...uncompletedTasks, newTask];
      GlobalState.set({
        uncompletedTasks: updatedUncompletedTasks,
      });
      // 3. Add logic to handle uploading the new task to your database or state management

      // Clear input fields
      setTitle("");
      setDescription("");
      setPriority("");
      setDate("");
      setDifficulty("");
      setCategory("");

      // Close the form or handle other logic as needed
    }
  }

  return  (
    <>
      <div className={`new-task-container`}>
        <form className="task-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              className={"custom-dropdown"}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Select Priority &#x2193;</option>
              {priorityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="difficulty">Difficulty :</label>
            <select
              id="difficulty"
              value={difficulty}
              className={"custom-dropdown"}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">Select Difficulty &#x2193;</option>
              {difficultyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="category">Category :</label>
            <select
              id="category"
              value={category}
              className={"custom-dropdown"}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category &#x2193;</option>
              {categories.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-large" onClick={handleSubmit}>
            Create Task
          </button>
        </form>

        {/* Close (cross) button */}
        <button className="btn btn-close hidden" onClick={closeForm}>
          &#10006; {/* Unicode character for "X" */}
        </button>
      </div>
    </>
  ) ;
}
