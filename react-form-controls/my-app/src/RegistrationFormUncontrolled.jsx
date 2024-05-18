import React from 'react';

class RegistrationFormUncontrolled extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationFormUncontrolled;
