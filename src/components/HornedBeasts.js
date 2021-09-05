import React, { Component } from 'react'

class HornedBeast extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.url} alt ='description' title ={this.props.title} />
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast