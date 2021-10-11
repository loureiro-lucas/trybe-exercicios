import React from 'react';
import './input.css'

class Input extends React.Component {
  render() {
    const { type, name, value, maxlength, onChange, onBlur, placeholder } = this.props;

    let lengthError = undefined;
    value.length > maxlength ? lengthError = `< it must be ${maxlength} characters length` : lengthError = '';

    return (
      <label>
        <span>{name}: </span>
        <input
          type={type}
          name={name}
          value={value}
          maxLength={maxlength}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          required
        ></input>
        <span className="length-error">{lengthError}</span>
      </label>
    );
  }
}

export default Input;
