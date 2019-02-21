import React, { Component } from 'react';
import CircularUnderLoad from './loading';
// import uuid from 'uuid';
import companyInfo from '../companyInfo';



class Experience extends Component {
  constructor() {
    super();
    this.state = {
      roles: []
    };
  }

  componentDidMount() {
    if (!this.state.roles) {
      this.setState({ roles: companyInfo });
    }
  }

// refactor to incorporate the uuid

  render() {
    if (this.state.roles) {
        const uuid = uuid.v4();
      return (
        <div className='experience-tabs'>
          {this.state.roles.map((role, i ) => {
            <div key={i} className='role'>
              <div className='company'>{role.image}</div>
              <title>
                <a href={role.companyUrl}>{role.company}</a>
              </title>
              <div className='role-title'>{role.title}</div>
              <div className='location'>{role.location}</div>
              <div className='description'>
                {role.description}
              </div>
            </div>;
          })}
        </div>
      );
    } else {
      return <CircularUnderLoad />;
    }
  }
}
export default Experience;
