import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      pwConfirm: ''
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    return (
      <div id='register'>
        <h2>Register Component</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Your name'
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type='email'
            name='email'
            placeholder='Your email'
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Enter a password'
            value={this.state.password}
            onChange={this.onChange}
          />
          <input
            type='password'
            name='pwConfirm'
            placeholder='Confirm your password'
            value={this.state.pwConfirm}
            onChange={this.onChange}
          />
          <button>Create Profile</button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(Register);
