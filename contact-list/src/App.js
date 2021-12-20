import React from 'react'
import './App.css';
import { Contact }  from './components/contact'

function App() {
  
  // const contactdata = [
  //   { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
  //   { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
  //   { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 }
  // ];
  //update  array
  let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 11 },
    { id: 1, type: 'square', x: 150, y: 250 },
    { id: 2, type: 'circle', x: 250, y: 35 },
  ];     

  const [contactObj, setContacts ] = React.useState([])
  const [shapes,setShapes] = React.useState(initialShapes)
  
  //transform array
  function handletransformArray(){
    const transformed =  shapes.map(shape => {
      if(shape.type === 'square'){
        return shape;
      }
      else{
        return {
          ...shape,
          y: shape.y + 50,
          
        }
      }
          
      })
    console.log("this is transformed" , transformed)
    setShapes(transformed)  
    
  }


  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response =>  response.json())
      .then( data => {
        let details = []
        const results = data.results
        results.map((result) => {
          details.push({
               email: result.email,
               name: result.name.first + " " +  result.name.last,
               age: result.dob.age,
               picture: result.picture.large
           })
           
           return details
        })
        setContacts(details)
    })
  },[])
  

  // console.log("this is contactObj" , contactObj)
  return (
       <div className="contact-wrapper"> 
         <button onClick={handletransformArray}> Test transform </button>
        { contactObj.map((contact,index) => {
          return  <Contact key={index} contact={contact}/>
        })  }
       </div>
       );
}

export default App;
