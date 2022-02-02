import React from 'react';

function ToDo  ({todo,project, toggleTask, removeTask})  {
  return (
    <div  className='item-todo'>
      
<div className= "item-text"
onClick={()=> toggleTask(project.id)} 
>
  {todo.name}
  {project.name}
</div>
<div className='item-delete' onClick={() => removeTask(todo.id)} >
  X
</div>
    </div>
  )
};

export default ToDo;
