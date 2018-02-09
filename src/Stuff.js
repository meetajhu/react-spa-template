import React from "react";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Stuff extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (      
      <Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'New South Wales' },
          { value: 'two', label: 'Victoria' },
          { value: 'three', label: 'Queensland' },
          { value: 'four', label: 'North Australia' },
          { value: 'five', label: 'Tasmania' },
        ]}
      />
    );
  }
}
 
// class Stuff extends Component {
//   render() {
//     return (
//       <div>
//         <h2>STUFF</h2>
//         <p>Mauris sem velit, vehicula eget sodales vitae,
//         rhoncus eget sapien:</p>
//         <select class="selctChoice">
//           <option>Nulla pulvinar diam</option>
//           <option>Facioptionsis bibendum</option>
//           <option>Vestibulum vulputate</option>
//           <option>Eget erat</option>
//           <option>Id porttitor</option>
//         </select>
//       </div>
//     );
//   }
// }
 
export default Stuff;
