export function Card({children}){
    // console.log(children.props)
    return (
        <div className="card">
             {children}
        </div>
    )
}

function Avatar({person,size}){
    return (
        <div> 
        <p>{person.name}</p>     
        <img
          src="https://i.imgur.com/MK3eW3Am.jpg"
          alt="Katherine Johnson"
          width={size}
          height={size}
        /> 
        <p>{person.title}</p>
        </div>
    )
}

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
]

export function Button({onClicked,children}){
    // function handleClick(){
    //     alert('I have been clicked')
    // }
    return (
        <button
        onClick={onClicked} 
        style={{
            margin: "1.5rem auto",
            display: "block",
            padding: "0.5rem 2rem"
        }}>
            {children}
        </button>
    )
}

export function SubmitButton({message}){
    function handleSubmit(){
        alert('Data has been submittted')
    }

    return (
        <Button onClicked={handleSubmit}>
            {message}
        </Button>
    )
}

export function List(){
  const items = people.map( (person , index) => <li key={index}>{person}</li> )
  return (
    <Card><ul>{items}</ul></Card>
    )
}

export function Profile(){
    return (
        <Card>
            < Avatar
                person={{name:'Katherine Johnson',title:'Katherine Johnson was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights.'}}
                size={200}
            />
        </Card>
    )
}