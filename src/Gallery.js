import { Profile , List , SubmitButton } from './Profile.js'

export default function Gallery(){
    return (
            <div>
                <SubmitButton message="sent from gallery" />
                <h1 style={{
                    textAlign: "center"
                }}>Amazing Scientist</h1>
                    <div style={{
                        display: 'flex',
                        margin: "2em",
                        justifyContent: "center"
                    }}> 
            
                        <Profile />
                        <Profile />
            
                    </div>
                <List />
                
            </div>
        
    )
}