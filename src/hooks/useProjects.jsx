/* eslint-disable */
import { graphql, useStaticQuery } from 'gatsby';
const useProjects = () => {
  const data = useStaticQuery(graphql`
  query  {
    allMdx {
      nodes {
        frontmatter {
          title
          technology
          siteLink
          githubLink
          slug
        }
        id
      }
    }
  }
  `)
  return data.allMdx.nodes.map((project) => ({
    title: project.frontmatter.title,
    description: project.frontmatter.title,
    githubLink: project.frontmatter.githubLink,
    siteLink: project.frontmatter.siteLink,
    id: project.id,
    slug: project.frontmatter.slug,
    technology: project.frontmatter.technology,
  }))
}
export default useProjects;