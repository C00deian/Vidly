import React, { Component } from 'react';


class Logout extends Component {
  componentDidMount() {
    // Clear the token from localStorage
    localStorage.removeItem('token'); // or use localStorage.clear() to clear all items

    // Navigate to the home page
    window.location = '/';
  }

  render() {
    return null; // Render nothing while redirecting
  }
}

// Wrap the component with withRouter to access history prop
export default Logout;
