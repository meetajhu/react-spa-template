import React, { Component } from "react";
import $ from 'jquery';

class Stuff extends Component {
  render() {
    $(document).ready(function() { 
     $("#singleSelectExample").select2();
    });
    return (
      <div>
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <select id="singleSelectExample">
          <option> select choice </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>
      </div>
    );
  }
}
 
export default Stuff;
 