import React from 'react'
import contacts from './contacts'
import Contact from './contact'

export default class Field extends React.Component {
    constructor(){
        super();
        this.state = {
            contactList: contacts
        }
    }
    findSomthing(e){
        let inputValue = e.target.value,
            showCont = this.state.contactList.filter(contact=>{
            if(contact.name.toLowerCase().indexOf(inputValue)!== -1){
                return contact;
            }
        })
        if(!inputValue) this.setState({contactList:contacts});
        else this.setState({contactList: showCont});

    }
    render() {
        return (
            <div>
                <input onChange={this.findSomthing.bind(this)}/>
                <ul>
                    {
                        this.state.contactList.map(contact=>{
                           return <Contact
                                    key={contact.id}
                                    name={contact.name}
                                    number={contact.phone}/>
                        })
                    }
                </ul>
            </div>
        )

    }
}