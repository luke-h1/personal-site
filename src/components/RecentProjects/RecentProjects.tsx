/* eslint-disable no-shadow */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import useRecentProjects from '../../hooks/useRecentProjects';
import { Button } from '../../helpers/Button/Button';
import {
  ProjectCard,
  ProjectContainer,
  ProjectWrap,
  ProjectFlex,
  ProjectTitle,
  Links,
  TechWrap,
  GithubLink,
  SiteLink,
  ButtonWrap,

} from './RecentProjectsElements';

interface ProjectItem {
  id: number;
  title: string;
  excerpt?: string
  slug: number;
  technology: number;
  githubLink: string;
  siteLink?: string; 
}

const RecentProjects: React.FC<{theme: String}> = (props) => {
  const theme = props;
  const project = useRecentProjects();

  return (
    <ThemeProvider theme={theme}>
      <>
        <ProjectWrap>
          <ProjectTitle>Recent Projects</ProjectTitle>
          <ProjectFlex>
            <ProjectContainer>
              {project.map((project: ProjectItem) => (
                <ProjectCard key={project.id}>
                  <h1>{project.title}</h1>
                  <p>{project.excerpt}</p>
                  <ButtonWrap>
                    <Button to={project.slug}>Go to project</Button>
                  </ButtonWrap>
                  <TechWrap>
                    <p>Technologies used: </p>
                    <span>
                      {' '}
                      {project.technology}
                    </span>
                  </TechWrap>
                  <Links>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.githubLink ? <GithubLink /> : ''}
                    </a>
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.siteLink ? <SiteLink /> : ''}
                    </a>
                  </Links>
                </ProjectCard>
              ))}
            </ProjectContainer>
          </ProjectFlex>
        </ProjectWrap>
      </>
    </ThemeProvider>
  );
};

export default RecentProjects;
