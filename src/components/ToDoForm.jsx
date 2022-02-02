import React from 'react';
import { useState } from 'react';

function ToDoForm  ({addTask,addProj}) {
    const [userInput, setUserInput]= useState('')
    const [userProj, setProj]= useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        
    }
    
    const handleChang =(e) => {
        setProj(e.currentTarget.value)
     }
    const handleSubmit = (e) => {
        e.preventDefault()
        addProj(userProj)
        addTask(userInput)
        setUserInput("")
        setProj("")
    }
 

   const handleKeyPress = (e) => {
if(e.key === "Enter") {
    handleSubmit(e)
}
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
<input className='proj'
value={userProj}
type="text" 
onChange={handleChang}
onKeyDown={handleKeyPress}
placeholder='Project'
/>


   <input type="date" />
   
   <select placeholder="Priority"> 
<option >Hard</option>
<option >Medium</option>
<option >Easy</option>
</select>




<button>Сохранить</button>
      </form>
  )
};

export default ToDoForm;
