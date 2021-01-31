import React from 'react';
import { NextSeo } from 'next-seo';
import styled, { ThemeProvider } from 'styled-components';
import { NextPage } from 'next';
import Intro from '../components/Intro/Intro';
import { theme } from '../styles/Theme';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { getAllFilesFrontmatter } from '../lib/mdx';
import BlogPost from '../components/BlogPost/BlogPost';
import Project from '../types/Project';
import Blog from '../types/Blog';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
   margin: 1rem 0 1rem 0;
   text-align: center;
   font-weight: 700;
`;

interface Iprops {
  posts: Blog;
  projects: Project
}

const Home: NextPage<Iprops> = ({ posts, projects }) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );
  return (
    <>
      <NextSeo
        title="Home | lhowsam.com"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home | lhowsam.com',
        }}
      />
      <ThemeProvider theme={theme}>
        <Intro theme={theme} />
        <Title>Recent Projects</Title>
        <Flex>
          {projects.map((frontMatter) => (
            <ProjectCard key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
        <Title>Recent Blog Posts</Title>
        <Container>
          {filterPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Container>
      </ThemeProvider>
    </>
  );
};
export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');
  return { props: { posts, projects } };
}
export default Home;
