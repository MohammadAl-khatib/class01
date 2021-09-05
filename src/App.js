import './App.css';
import {React,Component} from "react";
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

class  App extends Component{
  render(){
    return(
    <>
      <Header/>
      <Main/>
      <Footer/>
      
    </>
    
    )
  }
}

export default App;
