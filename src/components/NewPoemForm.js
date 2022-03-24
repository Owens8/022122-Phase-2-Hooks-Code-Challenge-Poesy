import React from "react";
import { useState } from 'react';

function NewPoemForm({poems}) {
  const [textArea, setTextArea] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  function textAreaChange(e){
   setTextArea(e.target.value) 
  }
  
  function authorChange(e){
    setAuthor(e.target.value) 
   }
   
   function titleChange(e){
    setTitle(e.target.value) 
   }
  function submitPoem(e){
    e.preventDefault()
    
    const p = {id: poems.length+1, title: title, content: textArea, author: author}
    poems.push(p)
  }
  return (
    <form className="new-poem-form" onSubmit={(e) => submitPoem(e)}>
      <input placeholder="Title" onChange={titleChange}/>
      <input placeholder="Author" onChange={authorChange}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} onChange={textAreaChange}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
