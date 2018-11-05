import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  render() {
    if (this.props.auth.isAuthenticated) {
      return <Redirect to='/dashboard' />;
    }

    return (
      <div id='login-container'>
        <h2>Login Component</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type='text'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.onChange}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);
