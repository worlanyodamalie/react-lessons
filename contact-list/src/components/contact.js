import React from 'react'
import PropTypes from 'prop-types'

export const Contact = ({contact}) => {
    const [showAge,setShowAge] = React.useState(false) 

    return (
        <div className="contact-card">
            <img src={contact.picture} alt="profile" />
            <div className="user-details">
               <p>Name: {contact.name}</p>
               <p>Email: {contact.email}</p>
               { showAge && <p>Age: {contact.age}</p> }
               <button onClick={() => setShowAge(!showAge)}>Toggle</button>
           </div>
        </div>
    )
} 

Contact.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
      })
}