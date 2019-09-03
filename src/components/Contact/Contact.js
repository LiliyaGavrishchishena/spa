import React, { Component } from 'react';

// styles
import styles from './Contact.module.css';

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    formError: false
  };

  getName = e => {
    let username = e.target.value;
    this.setState({
      name: username
    });
  };

  getEmail = e => {
    let userEmail = e.target.value;
    if (
      userEmail.match(
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      )
    ) {
      this.setState({
        email: userEmail
      });
    } else {
      this.setState({
        email: ''
      });
    }
  };

  getDescription = e => {
    let userMessage = e.target.value;
    this.setState({
      message: userMessage
    });
  };

  submitForm = e => {
    e.preventDefault();

    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.message === ''
    ) {
      this.setState({
        formError: true
      });
      return false;
    } else {
      this.setState({
        formError: false
      });
    }
  };
  render() {
    return (
      <form className={styles.form}>
        {/* I am just sending a basic error message */}
        {this.state.formError && (
          <p className={styles.error}>Fill all the input fields please.</p>
        )}
        <p className={styles.title}>
          Fill in the next form to send us a message
        </p>
        <div className={styles.block}>
          <label htmlFor="name">Name</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your name here please"
            onChange={this.getName}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="We will contact you after reviewing your message"
            onChange={this.getEmail}
          />
        </div>
        <div>
          <label htmlFor="name">Message</label>
          <textarea
            className={styles.textarea}
            onChange={this.getDescription}
            maxLength="450"
          ></textarea>
        </div>
        <div>
          <p>We will answer as soon as possible</p>
          <input
            className={styles.input}
            type="submit"
            name="submit"
            value="Send"
            onClick={this.submitForm}
          />
        </div>
      </form>
    );
  }
}
