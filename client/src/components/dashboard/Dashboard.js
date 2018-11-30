import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends Component {

  render() {
    let { user } = this.props.auth;

    // If user doesn't have a profile yet
    let dashboard = (
      <div class='dashboard'>
        <header>
          <h2>Welcome {user.name}</h2>
        </header>
        <p>Your profile has no information. Please provide some details about yourself.</p>
        <Link to='/edit-profile' className='link-btn'>
          Create Profile
        </Link>
      </div>
    );

    return (
      <div id='dashboard-container'>
        {dashboard}
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
