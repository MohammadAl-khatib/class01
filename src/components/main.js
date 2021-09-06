import React, { Component } from 'react'
import HornedBeast from './HornedBeasts'
import data from './data'
class Main extends Component {
    render() {
        return (
            data.map(item => {
                return( 
                <>
                    <HornedBeast title={item.title} url={item.image_url}  description ={item.description}/>
                </>)
           })
            
        )
    }
}

export default Main