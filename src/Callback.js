import React, { Component } from "react";

class Callback extends Component {
  componentDidMount = () => {
    //Handle authentication if the expected values are found in the callback url
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  };
  render() {
    return <h1>Loading...</h1>;
  }
}

export default Callback;
