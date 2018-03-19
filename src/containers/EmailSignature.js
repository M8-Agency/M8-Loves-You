import React, { Component } from "react";
import EmailSignatureGenerator from "../components/EmailSignatureGenerator";

class EmailSignature extends Component {
  render() {
    return (
      <main>
        <p>Below is a handy dandy tool to create your own</p>

        <h1>M8 Email Signature</h1>
        <EmailSignatureGenerator />
      </main>
    );
  }
}

export default EmailSignature;
