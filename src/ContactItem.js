import React from "react";
import {Link} from 'react-router-dom'
import Axios from "axios";

class ContactItem extends React.Component {

    deleteContact = (value) => {
        Axios.delete(`contacts/${value}`)
    }

    render(){
        const item = this.props.item
        return <div style={{ border: '3px solid grey' }}>
            <h1> Contact name : {item.name}</h1>
            <h2> Contact phone : {item.tel}</h2>
            <h2> Contact email : {item.email}</h2>

            <Link to={'/editcontact/' + item._id}>
            <input type='button' value='modifier'/>
            </Link>

            <input type='button' value='supprimer' onClick={()=>this.deleteContact(item._id)}/>
        </div>
    }
}

export default ContactItem