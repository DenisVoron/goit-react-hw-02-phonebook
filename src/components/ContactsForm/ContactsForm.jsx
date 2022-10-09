import React, { Component } from 'react'


export class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
    };


    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state);

        this.props.onDataSubmit(this.state);
        //this.props.onDataSubmit(this.state.number);

        this.reset();
    };


    reset = () => {
        this.setState({ name: '', number: '' });
    };

    handleNameChange = event => {
        const name = event.currentTarget.name;
        
        console.log(name);
        //console.log(number);

        /*console.log(event.currentTarget);
        console.log(event.currentTarget.name);
        console.log(event.currentTarget.value);*/

        this.setState({
            [name]: event.currentTarget.value,
        });
    };

  render() {
      return (
          <div>
              <form autoComplete='off' onSubmit={this.handleSubmit}>
                  <label htmlFor='name'>
                      Name
                      <input
                          type="text"
                          name="name"
                          value={this.state.name}
                          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                          required
                          onChange={this.handleNameChange}
                      />
                  </label>
                  <label htmlFor="">
                      Number
                      <input
                          type="tel"
                          name="number"
                          value={this.state.number}
                          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                          required
                          onChange={this.handleNameChange}
                      />
                  </label>
                  <button type='submit'>Add contact</button>
              </form>
          </div>
      );
  }
}

/*/export default contactsForm*/

//pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"