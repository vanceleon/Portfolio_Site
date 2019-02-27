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
          <div className='project-snippets'>
            {this.state.projectArr.map((project, i) => {
              return (
                <div key={i}>
                  <a href={project.projectUrl}>
                    {/* {project.title} */}

                    <img className='project-snippet' src={project.image} />
                  </a>
                  <div className='description'>{project.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <CircularUnderLoad />;
    }
  }
}
export default Projects;
