import React, { useState } from 'react';
import Modal from './modal/Modal';
import './ToDo.css'
function ToDo  ({todo, toggleTask, removeTask, todos, setTodos})  {

  const [edit, SetEdit] = useState(null)
  
 const [value, setValue] = useState ('')
 const[modalActive,setModalActive]=useState(true)
  const editTodo = (id,name) => {
    SetEdit(id)
    setValue(name)
    }

function saveTodo (id) {
let newItem = [...todo].map(name => {
if(todo.id == id) {
  todo.name = value
}
return name
})
setTodos(newItem)
SetEdit(null)
}

  return (
    <div  key={todo.id}className="item-todo">
   
<div className= {todo.complete ? "item-text strike" : "item-text"}
onClick={()=> toggleTask(todo.id)} >
 
   <h2 > {todo.name}</h2>
   <li>Project</li>
</div>

<span className='option' >...
<div className='dropdwn'>

  <button className='lidrop'  onClick={() => removeTask(todo.id)}>delete</button>
  <button className='lidrop' onClick={()=> setModalActive(true)} >Edit</button>


<Modal active={modalActive} setActive={setModalActive}>
{
edit ==  todo.id,todo.name  ?
<div><input  value={value} onChange={(e)=> setValue(e.target.value)} /></div> :
 <div>
{todo.name}
</div>  
}{
  edit ==todo.name ,todo.id? <div><button onClick={() => saveTodo(todo.name,todo.id)}>Cохранить</button>
   </div>:
  <button className='lidrop' onClick={() =>  editTodo(todo.id,todo.name) } >Edit</button>
}
</Modal>


</div>
</span>
    </div>
 
  )
 };

export default ToDo;
