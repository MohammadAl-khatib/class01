import React, { Component } from "react";
import HornedBeast from "./HornedBeasts";

class Main extends Component {
  render() {
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
  }
}

export default Main;
