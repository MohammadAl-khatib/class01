import React, { Component } from "react";
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";

class CreateForm extends Component {
  render() {
    let array = [];
    this.props.data.forEach((item) => {
      if (!array.includes(item)) {
        array.push(item);
      }
    });
    return (
      <div>
        <FloatingLabel controlId="floatingSelect">
          <Form.Select
            aria-label="Floating label select example"
            onChange={(e) => this.props.setNumberOfHorns(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Select Number of Horns
            </option>
            {array.map((item) => {
              return <option value={item}>{item}</option>;
            })}
            <option value='All'>All Animals</option>
          </Form.Select>
        </FloatingLabel>
      </div>
    );
  }
}
export default CreateForm;
