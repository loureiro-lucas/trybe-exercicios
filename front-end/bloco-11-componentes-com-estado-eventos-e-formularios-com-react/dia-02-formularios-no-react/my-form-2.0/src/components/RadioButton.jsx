import React from 'react';
import './radioButton.css'

class RadioButton extends React.Component {
  render() {
    const { name, onChange } = this.props;

    return <label className="radio">

      <span>Residence Type:</span>

      <input type="radio" name={name} value="House" id="House" onChange={onChange} required/>
      <label htmlFor="House">House</label>

      <input type="radio" name={name} value="Appartment" id="Appartment" onChange={onChange} required/>
      <label htmlFor="Appartment">Appartment</label>

    </label>
  }
}

export default RadioButton;
