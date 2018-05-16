import React from 'react'
import {Route} from 'react-router-dom'
import Contacts from './Contact'
import AddContact from './AddContact'
import EditContact from './EditContact';

class Routes extends React.Component {
    render(){
        return <div>
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/addcontact" component={AddContact} />
            <Route exact path="/editcontact/:id" render={(props)=> <EditContact {...props}/>} />           
        </div>
    }
}

export default Routes