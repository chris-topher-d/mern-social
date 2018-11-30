import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class EditProfile extends Component {
  render() {
    return (
      <div>
       <h2>Edite Profile</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(EditProfile);
