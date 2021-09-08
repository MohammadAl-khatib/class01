import "./App.css";
import { React, Component } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./components/data.json";
import SelectedBeast from "./components/SelectedBeast";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      img: "",
      description: "",
      numberOfHorns: "All",
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
  setNumberOfHorns = (numberOfHorns) => {
    this.setState({
      numberOfHorns: numberOfHorns,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Form
          data={data.map((item) => item.horns)}
          setNumberOfHorns={this.setNumberOfHorns}
        />
        <Main
          data={data}
          handleOpen={this.handleOpen}
          numberOfHorns={this.state.numberOfHorns}
        />
        <Footer />
        <SelectedBeast
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          src={this.state.img}
          description={this.state.description}
        />
      </>
    );
  }
}

export default App;
