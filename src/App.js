import { render } from '@testing-library/react';
import {useState, useEffect} from 'react'
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";


function App() {
  const LocalKey = "Task"
  const Local = "Project"
  const[todos, setTodos]= useState([])
  const[projects, setProjects]= useState([])


  const addTask = (userInput) => {
     if(userInput) {
       const newItem = {
         id: Date.now(),
         name: userInput,
         time: Date(),
         complete: false
       } 
       
       setTodos([...todos, newItem])
     }
    
  }
  const addProj =(userProj) => {
    if(userProj) {
      const newProj= {
        id: Date.now(),
        name: userProj,
      } 
      setProjects([...projects, newProj])
    }
  } 

  useEffect(() => {
let getLocalstorage = JSON.parse(localStorage.getItem(LocalKey))
if(getLocalstorage){
  setTodos(getLocalstorage)
}
  },[]);


  useEffect(() => {
    localStorage.setItem(LocalKey,JSON.stringify(todos))
  },[todos])

  



  useEffect(() => {
    let getLocalstorage = JSON.parse(localStorage.getItem(Local))
    if(getLocalstorage){
      setProjects(getLocalstorage)
    }
      },[]);
    
    
      useEffect(() => {
        localStorage.setItem(Local,JSON.stringify(projects))
      },[projects])


const removeTask = (id) => {
setTodos([...todos.filter((todo) => todo.id !== id)]);

}

// const removeProj = (id) => {
//   setProjects([...projects.filter((project) => project.id !== id)])
// }

// const handleProj = (id) => {
//   setProjects([...projects.map((project)=> project.id === id ?
//     {...project, complete: !project.complete}: {...project})])
// }



const handleToggle = (id) => {
setTodos([...todos.map((todo)=> todo.id === id ?
   {...todo, complete: !todo.complete}: {...todo})]);

  
}



  return (
    <div className="App">
      <header>
      <h1>Список задач: {todos.length}</h1>
      <h2>Data: {Date("KGZ")}</h2>
      </header> 
    <ToDoForm addTask={addTask} addProj={addProj} />
      {projects.id}   
    {todos.id}
    {projects,todos.map((todo,project) => {

       return(
         <ToDo
         todo={todo}
         project={project}
         key={projects.id}
         key={todos.id}
         toggleTask={handleToggle}
         removeTask={removeTask}
         />
       )
    })}
    </div>
  );
}

export default App;
