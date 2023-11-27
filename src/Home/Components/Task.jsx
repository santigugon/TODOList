import React,{useState} from "react";
import {GlobalState} from "../../GlobalState/GlobalState.jsx";
import {Task} from "../../Classes/Goal.js";
const useGlobalState = () => React.useContext(GlobalState);

export function TaskCard({ task }) {
  const { categories: CATEGORIES, failedTasks, uncompletedTasks, completedTasks,difficultyOptions,priorityOptions, filter } = useGlobalState();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.getTitle(),
    description: task.getDescription(),
    priority: task.getPriority(),
    date: task.getDate(),
    difficulty: task.getDifficulty(),
    category: task.getCategory(),
  });

  const saveChanges = () => {
    const updatedUncompletedTasks = uncompletedTasks.map((t) =>
      t.getTitle() === task.getTitle()
        ? new Task(
            editedTask.title,
            editedTask.description,
            editedTask.priority,
            editedTask.date,
            editedTask.difficulty,
            editedTask.category
          )
        : t
    );

    GlobalState.set({
      uncompletedTasks: updatedUncompletedTasks,
    });

    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    // Reset the editedTask state to the original task details
    setEditedTask({
      title: task.getTitle(),
      description: task.getDescription(),
      priority: task.getPriority(),
      date: task.getDate(),
      difficulty: task.getDifficulty(),
      category: task.getCategory(),
    });
  };

  const eraseTask = () => {
    const updatedFailedTasks = [...failedTasks, new Task(task.getTitle(), task.getDescription(), task.getPriority(), task.getDate(), task.getDifficulty(), task.getCategory())];

    GlobalState.set({
      failedTasks: updatedFailedTasks,
      uncompletedTasks: uncompletedTasks.filter((t) => t.getTitle() !== task.getTitle()),
    });
  };

  const completeTask = () => {
    const updatedCompletedTasks = [...completedTasks, new Task(task.getTitle(), task.getDescription(), task.getPriority(), task.getDate(), task.getDifficulty(), task.getCategory())];

    GlobalState.set({
      completedTasks: updatedCompletedTasks,
      uncompletedTasks: uncompletedTasks.filter((t) => t.getTitle() !== task.getTitle()),
    });
  };

  return (
    <li className='task' style={{ border: `2px solid ${CATEGORIES.find((cat) => cat.name === task.getCategory()).color}` }}>
      <div className={'task-card-grid'}>
        {isEditing ? (
          // Render the edit form when isEditing is true
            <form className='task-form edit-form'>
            <div>
              <label htmlFor='editedTitle'>Title:</label>
              <input
                type='text'
                id='editedTitle'
                value={editedTask.title}
                onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor='editedDescription'>Description:</label>
              <textarea
                id='editedDescription'
                value={editedTask.description}
                onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor='editedPriority'>Priority:</label>
              <select
                id='editedPriority'
                value={editedTask.priority}
                onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
              >
                <option value=''>Select Priority &#x2193;</option>
                 {priorityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
              </select>
            </div>

            <div>
              <label htmlFor='editedDate'>Date:</label>
              <input
                type='date'
                id='editedDate'
                value={editedTask.date}
                onChange={(e) => setEditedTask({ ...editedTask, date: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor='editedDifficulty'>Difficulty :</label>
              <select
                id='editedDifficulty'
                value={editedTask.difficulty}
                onChange={(e) => setEditedTask({ ...editedTask, difficulty: e.target.value })}
              >
                <option value=''>Select Difficulty &#x2193;</option>
               {difficultyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
              </select>
            </div>

            <div>
              <label htmlFor='editedCategory'>Category :</label>
              <select
                id='editedCategory'
                value={editedTask.category}
                onChange={(e) => setEditedTask({ ...editedTask, category: e.target.value })}
              >
                <option value=''>Select Category &#x2193;</option>
                {CATEGORIES.map((option) => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            <button className='btn accept' type='button' onClick={saveChanges}>
              Save
            </button>
            <button className='btn cancel' type='button' onClick={cancelEdit}>
              Cancel
            </button>
          </form>
        ) : (
          // Render task details when not editing
          <>
            <div>
              <h3>{task.getTitle()}</h3>
              <p>{task.getDescription()}</p>
              <span className='tag'>Category: {task.getCategory()}</span>
              <div className={`vote-buttons ${filter=="completed"||filter=="failed"?"hidden":null}`}>
                <button onClick={completeTask}>✅</button>
                <button onClick={eraseTask}>❌</button>
                <button onClick={() => setIsEditing(true)}>Edit</button>
              </div>
              {filter=="completed"?"✅":null}
              {filter=="failed"?"❌":null}
            </div>
            <div className={'task-characteristics'}>
              <p>
                Difficulty: {task.getDifficulty()}{' '}
                {task.getDifficulty() === 'Hard' ? '🚨' : (task.getDifficulty() === 'Important' ? '🔔' : '🟢')}
              </p>
              <p>
                Priority: {task.getPriority()}{' '}
                {task.getPriority() === 'Urgent' ? '🚨' : (task.getPriority() === 'Medium' ? '🔔' : '🟢')}
              </p>
              <p>Date: {task.getDate()} 🗓️</p>
            </div>
          </>
        )}
      </div>
    </li>
  );
}
