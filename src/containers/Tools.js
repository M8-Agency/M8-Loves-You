import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tools extends Component {
  render() {
    return (
      <main>
        <h2>Collaboration</h2>

        <ul className="ToolList">
          <li>
            <a
              href="https://dentsuaegis.okta-emea.com/app/UserHome#"
              target="_blank"
              rel="noopener noreferrer"
            >
              MyApps
            </a>
            <span>Dentsu Aegis Network Single Sign-In</span>
          </li>

          <li>
            <a
              href="http://m8.companyworkflow.com/#/dashboard/activity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workflow
            </a>
            <span>Project Management</span>
          </li>

          <li>
            <a
              href="http://hq.m8agency.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workbook
            </a>
            <span>Time Tracking</span>
          </li>
        </ul>

        <h2>Internal Tools</h2>

        <ul className="ToolList">
          <li>
            <Link to="/tools/email-signature">M8 Styleguide</Link>
            <span>E-mail signatures</span>
          </li>

          <li>
            <a
              href="https://m8agency.freshdesk.com/support/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freshdesk
            </a>
            <span>Helpdesk (IT Help)</span>
          </li>

          <li>
            <a
              href="http://showcase.brandreviewhub.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              M8 Showcase
            </a>
            <span>Project Previews</span>
          </li>
        </ul>

        <div className="InfoBox">
          <h4>Need an URL added to this list?</h4>
          <a href="mailto:developers@m8agency.com?Subject=Quick-access URL addition">
            Let us know!
          </a>
        </div>
      </main>
    );
  }
}

export default Tools;
