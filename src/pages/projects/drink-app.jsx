import React from 'react';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';
import Image2 from '../../../static/Image2.jpeg';

const DrinkApp = () => (
  <Layout>
    <ProjectPage
      title="Cocktail Recipe App"
      src={Image2}
      alt="lights"
      desc="In this app I made a Cocktail Recipe app using React hooks & SCSS that
   pulls data from the CocktailDB API. This was a really fun project to work on and was one of the first projects I converted to React JS (from vanilla JS)"
      label="React,SASS"
      github="https://github.com/luke-h1/cocktail-recipe-app "
      site="https://cocktail-recipe-app.vercel.app/"
    />
  </Layout>
);

export default DrinkApp;