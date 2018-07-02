import React, { Component } from "react";

const Form = ({
  onChange,
  onSubmit,
  name,
  title,
  add1,
  add2,
  phoneExt,
  mobile,
  error
}) => {
  const submitCTA =
    error === false
      ? "Signature copied and ready for paste!"
      : "Copy signature to clipboard!";
  const CTAstatus = error === false ? "copied" : "";
  return (
    <form onSubmit={onSubmit}>
      <div className="input-holder">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>

      <div className="input-holder">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={onChange}
        />
      </div>

      <div className="input-holder">
        <label htmlFor="add1">Address 1</label>
        <input
          id="add1"
          name="add1"
          type="text"
          value={add1}
          onChange={onChange}
        />
      </div>

      <div className="input-holder">
        <label htmlFor="add2">Address 2</label>
        <input
          id="add2"
          name="add2"
          type="text"
          value={add2}
          onChange={onChange}
        />
      </div>

      <div className="input-holder">
        <label htmlFor="phoneExt">Phone Extension</label>
        <input
          id="phoneExt"
          name="phoneExt"
          type="text"
          value={phoneExt}
          onChange={onChange}
        />
      </div>

      <div className="input-holder">
        <label htmlFor="mobile">Mobile</label>
        <input
          id="mobile"
          name="mobile"
          type="text"
          value={mobile}
          onChange={onChange}
        />
      </div>

      <div className="input-holder">
        <input
          className={CTAstatus}
          type="submit"
          value={submitCTA}
          style={{
            backgroundColor: "#1D7DE4",
            color: "white",
            border: "1px solid black"
          }}
        />
      </div>
    </form>
  );
};

const Visualizer = ({ name, title, add1, add2, phoneExt, mobile }) => {
  const extension = phoneExt !== "" ? `ext. ${phoneExt}` : "";
  const mobilePhone = mobile !== "" ? `  |  m: ${mobile}` : "";
  return (
    <table
      id="m8-email-signature"
      className="SigVisualizer"
      width="600"
      cellSpacing="0"
      cellPadding="0"
      border="0"
      align="left"
      style={{ border: "none", padding: "0px", margin: "0px", width: "600px" }}
    >
      <tbody
        style={{
          overflow: "hidden",
          wordBreak: "normal",
          verticalAlign: "top",
          margin: 0,
          padding: 0
        }}
      >
        <tr
          style={{
            overflow: "hidden",
            wordBreak: "normal",
            verticalAlign: "top",
            margin: 0,
            padding: 0
          }}
        >
          <td
            style={{
              overflow: "hidden",
              wordBreak: "normal",
              verticalAlign: "top",
              margin: 0,
              padding: 0
            }}
          >
            <strong
              style={{
                fontFamily: `"Century Gothic", CenturyGothic, AppleGothic, sans-serif`,
                color: "#000000",
                fontSize: "16px",
                wordBreak: "normal",
                margin: 0,
                padding: 0,
                textAlign: "left",
                letterSpacing: "1px"
              }}
            >
              {name}
            </strong>
          </td>
        </tr>

        <tr
          style={{
            overflow: "hidden",
            wordBreak: "normal",
            verticalAlign: "top",
            margin: 0,
            padding: 0
          }}
        >
          <td
            style={{
              overflow: "hidden",
              wordBreak: "normal",
              verticalAlign: "top",
              margin: 0,
              padding: 0
            }}
          >
            <span
              style={{
                fontFamily: `"Century Gothic", CenturyGothic, AppleGothic, sans-serif`,
                color: "#959595",
                fontSize: "12px",
                wordBreak: "normal",
                margin: 0,
                padding: 0,
                textAlign: "left",
                letterSpacing: "1px"
              }}
            >
              {title}
            </span>
          </td>
        </tr>

        <tr>
          <td
            style={{
              overflow: "hidden",
              wordBreak: "normal",
              verticalAlign: "top",
              margin: 0,
              padding: 0,
              height: "10px"
            }}
          >
            &nbsp;
          </td>
        </tr>

        <tr>
          <td
            style={{
              overflow: "hidden",
              wordBreak: "normal",
              verticalAlign: "top",
              margin: 0,
              padding: 0
            }}
          >
            <table
              id="m8-email-signature-mid-section"
              style={{
                border: "none",
                padding: 0,
                margin: 0,
                verticalAlign: "top"
              }}
              cellSpacing="0"
              cellPadding="0"
              border="0"
              align="left"
            >
              <tbody>
                <tr>
                  <td
                    valign="top"
                    style={{
                      overflow: "hidden",
                      wordBreak: "normal",
                      margin: 0,
                      padding: 0,
                      verticalAlign: "top"
                    }}
                  >
                    <a href="https://m8agency.com">
                      <img
                        alt="M8"
                        src="https://m8-gsa-vxhdb1nikcdy49t.stackpathdns.com/images/m8-iprospect-logo-email-signature.png"
                        width="91"
                        height="74"
                        style={{
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          left: "-1px"
                        }}
                      />
                    </a>
                  </td>

                  <td valign="top" style={{ width: "20px" }}>
                    &nbsp;
                  </td>

                  <td
                    valign="top"
                    style={{
                      overflow: "hidden",
                      wordBreak: "normal",
                      verticalAlign: "top",
                      margin: 0,
                      padding: 0
                    }}
                  >
                    <span
                      style={{
                        fontFamily: `"Century Gothic", CenturyGothic, AppleGothic, sans-serif`,
                        color: "#000000",
                        fontSize: "12px",
                        margin: 0,
                        padding: 0,
                        textAlign: "left",
                        letterSpacing: "1px"
                      }}
                    >
                      {add1}
                      {add2 !== "" && <br />}
                      {add2}
                    </span>

                    <br />

                    <span
                      style={{
                        fontFamily: `"Century Gothic", CenturyGothic, AppleGothic, sans-serif`,
                        color: "#000000",
                        fontSize: "12px",
                        letterSpacing: "1px"
                      }}
                    >
                      o: 786-623-5500 {extension}
                      {mobilePhone}
                    </span>

                    <br />

                    <a
                      style={{
                        fontFamily: `"Century Gothic", CenturyGothic, AppleGothic, sans-serif`,
                        color: "#000000",
                        fontSize: "12px",
                        textDecoration: "none",
                        margin: 0,
                        padding: 0,
                        letterSpacing: "1px"
                      }}
                      href="https://m8agency.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.M8agency.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td
            style={{
              overflow: "hidden",
              wordBreak: "normal",
              verticalAlign: "top",
              margin: 0,
              padding: 0,
              height: "10px"
            }}
          >
            &nbsp;
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: `"Century Gothic", CenturyGothic, AppleGothic, sans-serif`,
              color: "#cccccc",
              fontSize: "9px",
              margin: 0,
              padding: 0,
              textAlign: "left",
              verticalAlign: "top"
            }}
          >
            Privileged/Confidential Information may be contained in this
            message. If you are not the addressee indicated in this message (or
            responsible for delivery of the message to such person), you may not
            copy or deliver this message to anyone. In such case, you should
            destroy this message and kindly notify the sender by reply email.
            Please advise immediately if you or your employer does not consent
            to email for messages of this kind. Opinions, conclusions and other
            information in this message that do not relate to the official
            business of M8 shall be understood as neither given nor endorsed by
            it.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

class EmailSignatureGenerator extends Component {
  constructor() {
    super();

    const initialState = {
      name: localStorage["name"] || "Jane Doe",
      title: localStorage["title"] || "Director of Fun",
      add1: localStorage["add1"] || "2200 Biscayne Blvd, 2nd Floor",
      add2: localStorage["add2"] || "Miami, FL 33137",
      phoneExt: localStorage["phoneExt"] || "",
      mobile: localStorage["mobile"] || "",
      error: null
    };

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    localStorage[name] = value;

    this.setState({
      [name]: value,
      error: null
    });
  }
  handleSubmit(e) {
    e.preventDefault();

    const signature = document.querySelector("#m8-email-signature");
    const range = document.createRange();
    range.selectNode(signature);
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      this.setState({
        error: false
      });
    } catch (err) {
      this.setState({
        error: err
      });
    }

    window.getSelection().removeAllRanges();
  }
  render() {
    return (
      <div className="EmailSignatureGenerator">
        <Form
          name={this.state.name}
          title={this.state.title}
          add1={this.state.add1}
          add2={this.state.add2}
          phoneExt={this.state.phoneExt}
          mobile={this.state.mobile}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          error={this.state.error}
        />

        <div
          style={{
            padding: "1rem",
            borderRadius: "13px",
            background: "white",
            border: "1px solid #959595"
          }}
        >
          <Visualizer
            name={this.state.name}
            title={this.state.title}
            add1={this.state.add1}
            add2={this.state.add2}
            phoneExt={this.state.phoneExt}
            mobile={this.state.mobile}
          />
        </div>
      </div>
    );
  }
}

export default EmailSignatureGenerator;
