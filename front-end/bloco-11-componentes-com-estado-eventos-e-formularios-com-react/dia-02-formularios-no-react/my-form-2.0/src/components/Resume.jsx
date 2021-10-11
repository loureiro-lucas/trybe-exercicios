import React from 'react';
import './resume.css'

class Resume extends React.Component {
  render() {
    const { Fullname, Email, CPF, Adress, City, State, residenceType, Summary, Position, Description, display } = this.props;

    return (
      <fieldset style={{display: {display}}}>
        <h3>Personal Data</h3>
        <span>Fullname: {Fullname}</span>
        <span>Email: {Email}</span>
        <span>CPF: {CPF}</span>
        <span>Adress: {Adress}</span>
        <span>City: {City}</span>
        <span>State: {State}</span>
        <span>Residence Type: {residenceType}</span>
        <h3>Last job information</h3>
        <span>Summary: {Summary}</span>
        <span>Position: {Position}</span>
        <span>Description: {Description}</span>
      </fieldset>
    );
  }
}

export default Resume;
