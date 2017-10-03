import React from 'react'

export default class Contact extends React.Component{
    render(){
        return(
            <li>
                <div>{this.props.name}</div>
                <div>{this.props.number}</div>
            </li>
        );
    }
}