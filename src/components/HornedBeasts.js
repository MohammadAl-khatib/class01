import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

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
getHandleOpen=()=>{
    let url=this.props.url;
    let description=this.props.description;
    this.props.handleOpen(url,description);
}

    render() {
        return (
            
            <Col>
                <h2>{this.props.title}</h2>
                <img onClick ={this.getHandleOpen} src={this.props.url} alt ='description' title ={this.props.title} width ='300' height ='250'/>
                <img  src={'https://icon-library.com/images/small-heart-icon/small-heart-icon-0.jpg'} alt ='heart' width ='150'/>
                <p>Likes: {this.state.likesCounter}</p>
                <p>{this.props.description}</p>
            </Col>     
            
        )
    }
}

export default HornedBeast;
