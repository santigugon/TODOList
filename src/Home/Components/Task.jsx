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
    <li className='task'>
        <div className={"task-card-grid"}>
            <div>




      <h5>
          {task.getTitle()}
      </h5>
        <p>
        {task.getDescription()}

      </p>
      <span
        className='tag'
        style={{

        }}
      >
        {task.getCategory()}
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