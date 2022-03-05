// import { render } from '@testing-library/react';
import {useState, useEffect} from 'react'
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import Clock from './components/header';
import Modal from './components/modal/Modal';

function App() {
const LocalKey = "Task"
const[todos, setTodos]= useState([])
const[modalActive,setModalActive]= useState(false)
const [value, setValue] = useState('')



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

  // хранение
  useEffect(() => {
let getLocalstorage = JSON.parse(localStorage.getItem(LocalKey))
if(getLocalstorage){
  setTodos(getLocalstorage)
}
  },[]);

  useEffect(() => {
    localStorage.setItem(LocalKey,JSON.stringify(todos))
  },[todos])

  // Удаление
const removeTask = (id) => {
setTodos([...todos.filter((todo) => todo.id !== id)]);
alert('Подтвердить удаление')
}

// добавление
const handleToggle = (id) => {
setTodos([...todos.map((todo)=> todo.id === id ?
   {...todo, complete: !todo.complete}: {...todo})]);  
}

// Поиск
const newArrTodos = todos.filter(todo => {
  return todo.name.toLowerCase().includes(value.toLowerCase())
})

  return (
    <div className="App">
      <h1>Список задач: {todos.length}</h1>
     <Clock/>
     <input
     value={value} onChange={e=> setValue(e.target.value)}
     className='search'
     placeholder='search task'
     type="text"
     />
    {todos.id}
    { newArrTodos.map((todo) => {

       return(
         <ToDo
         todos={todos}
         setTodos={setTodos}
         todo={todo}
         key={todos.id}
         toggleTask={handleToggle}
         removeTask={removeTask}
    
         />
       )
    })}
  < Modal active={modalActive} setActive={setModalActive} >
<ToDoForm 
addTask={addTask} 
/>
  </Modal>
    <button className='open-btn' onClick={()=> setModalActive(true)}>+</button>
    
    </div>
  );
}

export default App;
