import React, { useState } from 'react'
import '../css/SearchLocation.css'
export const SearchLocation = ({hanledLocation}) => {
  const [inputvalue, setInputvalue] = useState("")
  
  const SearchLocation = ({target}) =>{
    setInputvalue(target.value)
      
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    let termino = inputvalue.trim();
    hanledLocation(termino)
    setInputvalue("")
  }
  return (
    
      <form onSubmit={onSubmit} className="container_input">
        <input 
          type="text" 
          placeholder='Type a location id...'
          value={inputvalue}
          onChange={SearchLocation}

         />
         <button onClick={onSubmit}>
          Search
          <i className="fa-solid fa-magnifying-glass"></i>
         </button>
    </form>
    
  )
}
