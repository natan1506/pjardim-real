import React from 'react';
import backgroundAbout from '../../images/bg-about.jpeg';
import Data from './Data';

import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
} from './ProjectsElements';

const Projects = () => {
  
  return (
    <div id="projects">
      <ProjectsContainer backgroundImageCustom={backgroundAbout}>
        <ProjectsH1>Projetos que encantam</ProjectsH1>
        <ProjectsWrapper>
          {Data.map((Item) => (
            <ProjectsCard key={Item.id}>
              <ProjectsIcon src={Item.img.default} />
            </ProjectsCard>
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </div>
  )
}

export default Projects
