import React from 'react'
import axios from 'axios'


class EditContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            tel: "",
            email: ""
        }
    }

    componentDidMount() {
        axios.get(`/contact/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ 
                    name: res.data.name,
                    tel : res.data.tel,
                    email : res.data.email
                });
            });
    }

    handleState = (e) => {      
        this.setState({ 
            [e.target.name] : e.target.value
        });
    }

    editContact = (value) => {
         axios.put('/contact/'+this.props.match.params.id, {...value})
    }

    render() {
        console.log(this.props.match.params.id);        
        return <div className='add-contact-container'>
            <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <label> Contact Name</label>
                <input name='name' onChange={this.handleState} value={this.state.name}/>

                <label> Contact Number</label>
                <input name='tel' onChange={this.handleState} value={this.state.tel}/>

                <label> Contact Email</label>
                <input name='email' onChange={this.handleState} value={this.state.email} />

                <input type='button' value='submit' onClick={() => this.editContact(this.state)} />
            </form>
        </div>
    }
}

export default EditContact