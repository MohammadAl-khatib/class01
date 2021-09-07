import "./App.css";
import { React, Component } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./components/data.json";
import SelectedBeast from "./components/SelectedBeast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      img: "",
      description: "",
    };
  }
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };
  handleOpen = (url, description) => {
    this.setState({
      showModal: true,
      img: url,
      description: description,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main data={data} handleOpen={this.handleOpen}/>
        <Footer />

        <SelectedBeast 
        showModal ={this.state.showModal}
        handleClose={this.handleClose} 
        src ={this.state.img} 
        description = {this.state.description}
        />
      </>
    );
  }
}

export default App;
