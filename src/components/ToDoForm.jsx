import React from 'react';
import { useState } from 'react';

function ToDoForm  ({addTask,setStatus}) {
    const [userInput, setUserInput]= useState('')
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)   
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
      
    }
 
   const handleKeyPress = (e) => {
if(e.key === "Enter") {
    handleSubmit(e)
}
   }

   const prioritytHandler = (e) => {
console.log(e);
   }

  return (
      <form onSubmit={handleSubmit}>
<input
value={userInput}
type="text"
onChange={handleChange}
onKeyDown={handleKeyPress}
placeholder="Name"
/>
  
<select
className='Project'
placeholder="Priority"> 
<option >Project</option>
</select>


<input type="date" />
<select className='Priority'
placeholder="Priority"
onChange={prioritytHandler}
> 
<option value="High" >High</option>
<option value="Medium">Medium</option>
<option vakue="Low">Low</option>
</select>

<button 
className='create'
>Сохранить</button>
</form>
  )
};

export default ToDoForm;
