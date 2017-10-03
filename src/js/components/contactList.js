import React from 'react'
import members from './members'
import Contact from './contact'

export default class ContactList extends React.Component {

    constructor () {

        super();

        this.state = {

            contactList: members

        }

    }
    toDoFilter (e) {

        let inputValue = e.target.value,
            showCont = this.state.contactList.filter(contact=>{
            if ( contact.name.toLowerCase().indexOf( inputValue ) !== -1 ) {

                return contact;

            }
        })

        if (!inputValue) this.setState ( {contactList:members} );
        else this.setState( { contactList: showCont } );

        console.log(isNaN(inputValue));

    }
    render() {

        return (

            <div>
                <input onChange={this.toDoFilter.bind(this)}/>
                <ul>
                    {
                        this.state.contactList.map( contact => {

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