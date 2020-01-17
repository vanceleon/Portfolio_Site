import React, { Component } from 'react';
import CircularUnderLoad from './loading';
// import uuid from 'uuid';
import { companyInfo } from '../data/companyInfo.js';
import '../img/logos/ASAP_Program.png';
import DummyData from '../data/dummy';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      roles: []
    };
  }

  componentDidMount() {
    if (this.state.roles.length === 0) {
      this.setState({ roles: companyInfo });
    }
  }

  // refactor to incorporate the uuid

  render() {
    if (this.state.roles) {
      //   const uuid = uuid.v4();
      return (
        <div className='experience-tabs' id='myExperience'>
          <h1>My Journey</h1>
          {this.state.roles.map((role, i) => {
           
            return (
              <div key={i} className='role'>
                <a href={role.companyUrl}>
                  <img src={role.image} className='company-img' alt='company-logo'/>
                </a>
                <div className='company-info-desc'>
                  <a className='experienceLinks' href={role.companyUrl}>
                    <div className='role-title'> {role.title}</div>
                  </a>
                  <div className='location'>{role.location}</div>
                  <div className='exp-description'>{role.description}</div>
                  <div>{DummyData.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <CircularUnderLoad />;
    }
  }
}
export default Experience;
