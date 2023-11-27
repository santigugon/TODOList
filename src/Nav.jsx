import React,{useState} from 'react';
import {GlobalState} from "./GlobalState/GlobalState.jsx";
import {Link} from "react-router-dom";
import {NewTask} from "./Home/Components/NewTask.jsx";
const useGlobalState = () => React.useContext(GlobalState);

const SECTIONS = [
  { name: 'home', color: '#3b82f6' },
  { name: 'some-component', color: '#16a34a' },
  { name: 'counter-display', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];




export function Nav(){
    const {mode,formVisibility}=useGlobalState()
    const [showNewTask, setShowNewTask] = useState(false); // State to manage visibility of NewTask

    const modifyVisibility = ()=> {
        const newVisibility=!formVisibility
   GlobalState.set({

      formVisibility: newVisibility,
    });
        console.log(formVisibility)
  };
    return(
        <>
          <header className='header'>
      <div className='logo'>
        <img className={"logo-img"} src='/src/assets/todoLogo2.png'  alt='checklist' />
        <h1>TODO APP DUODEKA!</h1>
      </div>

      <button
        className={`btn btn-large btn-open ${(mode=="home"|| mode=="goal")?null:"hidden"} `}
        onClick={modifyVisibility}
      >ADD A NEW {mode=="home"?"TASK":"GOAL"}
      </button>
    </header>

    {formVisibility && <NewTask />} {/* Render NewTask conditionally based on showNewTask state */}

        {/* Use Link components for navigation */}


        </>
    )
}

export function Aside(){
    return(<>  <aside>
      <ul>

        {SECTIONS.map((section) => (
          <li key={section.name} className='category'>
            <Link to={`/${section.name}`}>
            <button
              className='btn btn-category'
              style={{ backgroundColor: section.color }}
             // onClick={`<Link to="/${section.name}">Home</Link>`}
            >
              {section.name}
            </button>
               </Link>
          </li>
        ))}
      </ul>
    </aside>
          </>
)
}