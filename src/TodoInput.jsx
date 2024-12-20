import React from 'react'


const TodoInput = ({handleChange, input, onAdd}) =>{
    
    const handleClick = (event) => {
      onAdd(input)

     
           event.preventDefault();
          
         }


return(
<div className="inputs"> 
    <form onSubmit={handleClick}>
    <input name='title' onChange={handleChange} value={input.title} placeholder="Title" className="titleInput"></input>
    <textarea name='content' onChange={handleChange} value={input.content} placeholder="Take a note..." className='note'></textarea>
    <button type='submit' className='btn'>add</button>
    </form>
    
</div>
    )
}

export default TodoInput