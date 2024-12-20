import React from "react";

const Note = ({ note, deleteItems}) =>{

    return(
    <div  className="entries"> 
       { note.map((item, index) => (
                <div key={index} className="entry" >
                 <p>{item.title}</p>
                <p> {item.content}</p>
                <button 
                onClick={()=> (deleteItems(index))}
                id={index} className="btn">del</button>
                </div>  
            ))
        }
        
    
    
</div>
    )
}

export default Note