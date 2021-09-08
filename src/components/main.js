import React, { Component } from "react";
import HornedBeast from "./HornedBeasts";

class Main extends Component {
  render() {
    if (this.props.numberOfHorns === "All") {
      return (
        <div className="row">
          {this.props.data.map((item) => {
            return (
              <HornedBeast
                title={item.title}
                url={item.image_url}
                description={item.description}
                handleOpen={this.props.handleOpen}
              />
            );
          })}
        </div>
      );
    } else {
      let filteredArray = this.props.data.filter((item) => {
        return item.horns === parseInt(this.props.numberOfHorns);
      });
      return (
        <div className="row">
          {filteredArray.map((item) => {
            return (
              <HornedBeast
                title={item.title}
                url={item.image_url}
                description={item.description}
                handleOpen={this.props.handleOpen}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default Main;
