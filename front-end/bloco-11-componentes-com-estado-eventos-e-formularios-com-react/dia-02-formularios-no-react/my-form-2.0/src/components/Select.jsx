import React from 'react';
import brasilStates from '../data/states'
import Option from './Option';
import './select.css'

class Select extends React.Component {
  render() {
    const { name, value, onChange } = this.props;

    return (
      <label>
        <span>{name}</span>
        <select name={name} value={value} onChange={onChange} required>
          <option value="" disabled ></option>
          {Object.keys(brasilStates).map((state) => <Option key={state} name={state}/>)}
        </select>
      </label>
    )
  }
}

export default Select;
