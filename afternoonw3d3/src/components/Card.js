import React, { Component } from 'react'
import userData from '../data'

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: userData
        }
    }

    render() {

        console.log(this.props.index)

        let myCard = this.state.users[this.props.index]
        console.log(myCard)
        return (
            <div className='card'>
                <div className='counter'>{this.props.index}/{this.state.users.length}</div>
                <h1>{myCard.name.first} {myCard.name.last}</h1>
                <h2>From: {myCard.city}</h2>

            </div>
        )
    }
}

export default Card