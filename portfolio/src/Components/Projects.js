import React, { Component } from 'react';
import CircularUnderLoad from './loading';
// import uuid from 'uuid';
import { projects } from '../data/projects.js';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectArr: []
    };
  }

  componentDidMount() {
    if (this.state.projectArr.length === 0) {
      this.setState({ projectArr: projects });
    }
  }

  // refactor to incorporate the uuid

  render() {
    if (this.state.projectArr) {
    //   const uuid = uuid.v4();
      return (
        <div id='projects' className='project-tabs'>
          <h1>Projects</h1>
          {this.state.projectArr.map((project, i) => {
            return (
              <div key={i} className='role'>
                <title>
                  <a href={project.projectUrl}>{project.title}</a>
                </title>
                <img className='company'src={project.image}/>
                <div className='description'>{project.description}</div>
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
export default Projects;
