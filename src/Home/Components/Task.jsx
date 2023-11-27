import React from "react";
import {GlobalState} from "../../GlobalState/GlobalState.jsx";
import {Task} from "../../Classes/Goal.js";
const useGlobalState = () => React.useContext(GlobalState);



export function TaskCard({ task }) {
const {categories:CATEGORIES,failedTasks,uncompletedTasks,completedTasks}= useGlobalState();
const newTask = new Task(task.getTitle(), task.getDescription(), task.getPriority(), task.getDate(), task.getDifficulty(),task.getCategory());
 const updatedUncompletedTasks = uncompletedTasks.filter(
      (t) => t.getTitle() !== newTask.getTitle()
    );

const eraseTask=()=>{



       const updatedFailedTasks = [...failedTasks, newTask];

       GlobalState.set({

      failedTasks: updatedFailedTasks,
           uncompletedTasks: updatedUncompletedTasks
    });

         }

         const completeTask=()=>{



       const updatedCompletedTasks = [...completedTasks, newTask];

       GlobalState.set({

      completedTasks: updatedCompletedTasks,
           uncompletedTasks: updatedUncompletedTasks
    });
    console.log(uncompletedTasks)
         }
  return (
    <li className='task' style={{ border: `2px solid ${CATEGORIES.find(cat => cat.name === task.getCategory()).color}` }}>
        <div className={"task-card-grid"}>
            <div>




      <h3>
          {task.getTitle()}
      </h3>
        <p>
        {task.getDescription()}

      </p>
      <span
        className='tag'
        style={{

        }}
      >
          Category:
         { `    ${task.getCategory()}`}
      </span>
      <div className='vote-buttons'>
        <button onClick={completeTask}


        >
          ✅
        </button>
        <button onClick={eraseTask}>

          ❌
        </button>
      </div>
             </div>
        <div>
            <p>Difficulty: {task.getDifficulty()}</p>
             <p>Priority: {task.getPriority()}</p>
             <p>Date: {task.getDate()}</p>
        </div>
             </div>
    </li>

  );
}