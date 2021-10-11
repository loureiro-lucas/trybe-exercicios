import React from 'react';
import Input from './Input';
import Select from './Select';
import RadioButton from './RadioButton';
import TextArea from './TextArea';
import Button from './Button';
import Resume from './Resume';
import './form.css';


class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Fullname: '',
      Email: '',
      CPF: '',
      Adress: '',
      City: '',
      State: '',
      residenceType: '',
      Summary: '',
      Position: '',
      placeholder: '',
      Description: '',
      display: 'none',
    }
  }

  handleChanges = ({ target }) => {
    switch (target.name) {
      case 'Fullname':
        this.setState({ [target.name]: target.value.toUpperCase()})
        break
      case 'Adress':
        this.setState({ [target.name]: target.value.replace(/[^\w\s]/gi, '')});
        break
      default:
        this.setState({ [target.name]: target.value});
    }
  }

  handleBlur = ({ target }) => {
    if (Number.isInteger(parseInt(target.value.charAt(0)))) {
      this.setState({ [target.name]: ''});
    };
  }

  onMouseHandler = () => {
    this.setState({ placeholder: 'Fill in this information carefully!' });
  }

  buildResume = (event) => {
    event.preventDefault();
    console.log('aqui')
    this.setState({display: "block"})
  }

  clearAll = (event) => {
    event.preventDefault();
    this.setState({
      Fullname: '',
      Email: '',
      CPF: '',
      Adress: '',
      City: '',
      State: '',
      residenceType: '',
      Summary: '',
      Position: '',
      placeholder: '',
      Description: '',
      display: "none",
    })
  }

  render() {
    const { Fullname, Email, CPF, Adress, City, residenceType, Summary, Position, Description, State, placeholder, display } = this.state;
    return (
      <div>
        <h1>My form, now coded with React!</h1>
        <form>
          <fieldset>
            <h3>Personal data:</h3>

            <Input type="text" name="Fullname" value={Fullname} onChange={this.handleChanges} maxlength="40" />

            <Input type="text" name="Email" value={Email} onChange={this.handleChanges} maxlength="50" />

            <Input type="number" name="CPF" value={CPF} onChange={this.handleChanges} placeholder='only numbers' maxlength="11" />

            <Input type="text" name="Adress" value={Adress} onChange={this.handleChanges} maxlength="200" />

            <Input type="text" name="City" value={City} onChange={this.handleChanges} onBlur={this.handleBlur} maxlength="28" />

            <Select name='State' value={State} onChange={this.handleChanges} />

            <RadioButton name="residenceType" onChange={this.handleChanges} />

          </fieldset>
          <fieldset>
            <h3>Last job info</h3>

            <TextArea name="Summary" maxLength="1000" onChange={this.handleChanges} />

            <TextArea name="Position" placeholder={placeholder} maxLength="40" onChange={this.handleChanges} onMouseEnter={this.onMouseHandler}/>

            <Input type="text" name="Description" value={Description} onChange={this.handleChanges} maxlength="500"/>

          </fieldset>

          <Button name="Submit" onClick={this.buildResume} />

          <Button name="Clear" onClick={this.clearAll} />

          <Resume Fullname={Fullname} Email={Email} CPF={CPF} Adress={Adress} City={City} State={State} residenceType={residenceType} Summary={Summary} Position={Position} Description={Description} display={display} />

        </form>
      </div>
    )
  }
}

export default Form;
