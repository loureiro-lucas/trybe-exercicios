import React from 'react';
import './textArea.css'

class TextArea extends React.Component {
  render() {
    const { name, maxLength, placeholder, onChange, onMouseEnter } = this.props;

    return <label>
      <span>{name}: </span>
      <textarea name={name} placeholder={placeholder} maxLength={maxLength} onChange={onChange} onMouseEnter={onMouseEnter} required></textarea>
    </label>
  }
}

export default TextArea;
