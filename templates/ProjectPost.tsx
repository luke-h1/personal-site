import React from "react";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import ShareButtons from "../components/ShareButtons";
import Github from "../Icons/Github";
import Site from "../Icons/Site";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  padding-left: 4rem;
  padding-right: 4rem;
  margin: 0 auto;
  max-width: 1000px;
  h1 {
    text-align: left;
    width: 80%;
  }

  pre {
    color: #fff;
    background: #000;
    padding: 1rem;
    max-width: 1200px;
    /* margin: 0 20px; */
    margin: 2.1rem 2.1rem;
    text-align: center;
  }
`;

const ContentWrap = styled.div`
  h1 {
    margin-bottom: 1rem;

    font-size: 30px;
  }
  p {
    font-size: 19px;
    color: #000;
    margin: 40px 0 40px 0;
    text-align: center;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostTitle = styled.h1`
  color: ${(props) => props.theme.darkTextColor};
  text-align: center !important;
`;

const Small = styled.p`
  color: #000 !important;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;
const url = typeof window !== "undefined" ? window.location.href : "";

const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const ProjectPost = ({ children, frontMatter }) => {
  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | lhowsam.com`}
        canonical={`https://lhowsam.com/projects/${frontMatter.slug}`}
        openGraph={{
          url: `https://lhowsam.com/projects/${frontMatter.slug}`,
          title: `${frontMatter.title} | lhowsam.com`,
        }}
      />
      <PostWrapper>
        <PostTitle>{frontMatter.title}</PostTitle>
        <Social>
          {frontMatter.github ? <Github url={frontMatter.github} /> : null}
          {frontMatter.site ? <Site url={frontMatter.site} /> : null}
        </Social>
        <Small>{frontMatter.slug}</Small>
        <ContentWrap>
          <p>{children}</p>
        </ContentWrap>
      </PostWrapper>

      <ShareWrapper>
        <ShareButtons location={url} />
      </ShareWrapper>
    </>
  );
};
export default ProjectPost;