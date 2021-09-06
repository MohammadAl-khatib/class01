import React, { Component } from 'react'

class HornedBeast extends Component {

constructor (props){
 super (props);

 this.state = {
     likesCounter :0
 }

}

likes = () => {
    this.setState({
       likesCounter: this.state.likesCounter+1
    })
}

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img onClick ={this.likes} src={this.props.url} alt ='description' title ={this.props.title} />
                <img  src={'https://icon-library.com/images/small-heart-icon/small-heart-icon-0.jpg'} alt ='heart'/>
                <p>Likes: {this.state.likesCounter}</p>
                <p>{this.props.description}</p>     
            </>
        )
    }
}

export default HornedBeast