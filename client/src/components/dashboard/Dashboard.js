import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends Component {

  render() {
    let { user } = this.props.auth;

    return (
      <div id='dashboard'>
        <h2>Dashboard</h2>
        <div id='user-profile'>
          {user.name}
        </div>
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
