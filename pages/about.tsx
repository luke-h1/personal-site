import React from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import styled from "styled-components";
import { HighLight } from "../components/Intro/IntroStyles";

const Title = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media(max-width:632px){
    grid-template-columns: repeat(1, 1fr);
    
  }
`;

const SectionOne = styled.section`
  width: 100%;
  p {
    margin-top: 2.5rem;
    padding-left: 2rem;
    width: 90%;
    font-size: 20px;
  }
`;

const SectionTwo = styled.section`
  margin-bottom: 4rem;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

const Flex = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Intro = styled.h1`
  text-align: left;
  font-size: 38px;
`;

export default function Home() {
  return (
    <>
      <NextSeo
        title="About | lhowsam.com"
        canonical="https://lhowsam.com/about"
        openGraph={{
          url: "https://lhowsam.com/about",
          title: "About | lhowsam.com",
        }}
      />
      <ThemeProvider theme={theme}>
        <Title>About</Title>
        <Flex>
          <Grid>
            <SectionOne>
              <Intro>
                Hey, I'm <HighLight>Luke</HighLight>
              </Intro>
              <p>
                I'm passionate about solving technical problems and coming up
                with creative solutions.I enjoy working with the JAMstack,
                React, Node, testing technologies + practices & various dev-ops
                technologies
              </p>
              <p style={{ marginBottom: "4rem" }}>
                I am currently Learning Typescript, React, Next JS & various
                testing technologies.
              </p>
            </SectionOne>
            <SectionTwo>
              <StyledImage
                src="/static/images/luke.png"
                width={400}
                height={500}
              />
            </SectionTwo>
          </Grid>
        </Flex>
      </ThemeProvider>
    </>
  );
}