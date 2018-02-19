import React, { Component } from "react";
import $ from 'jquery';
// import select2 from "../node_modules/select2/dist/js/select2.full.min.js";
// import select2styl from "../node_modules/select2/dist/css/select2.min.css";

require("../node_modules/select2/dist/js/select2.full.min.js")
require("../node_modules/select2/dist/css/select2.min.css")

class Stuff extends Component {

componentDidMount() {
   $("#singleSelectExample").select2();
}
  render() {    
    return (
      <div>
        <h2>STUFF</h2>
        <p>Using custom javascript(Select2) to initialize module with componentDidMount</p>
        <div className="form-group">
          <select id="singleSelectExample">
            <option> select choice </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
          </select>
        </div>
      </div>
    );
  }
}
 
export default Stuff;
 