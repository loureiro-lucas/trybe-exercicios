import React from 'react';

class Option extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <option value={name}>{name}</option>
    )
  }
}

export default Option;
