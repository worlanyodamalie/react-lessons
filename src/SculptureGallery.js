import { sculptureList } from './data.js'
import { useState } from 'react'

export default function SculptureGallery(){
   //let index = 0;
   const [index,setIndex] = useState(0); 

   function handleClick(){
       setIndex(index + 1)
   }  
   
   let sculpture = sculptureList[index];

   return (
       <div className="sculpCard">
          <button onClick={handleClick}> Next</button>
          <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
       </div >
   )
   }
