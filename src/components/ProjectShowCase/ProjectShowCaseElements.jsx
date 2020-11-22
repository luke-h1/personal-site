import styled from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/Themes';

export const ShowCaseWrapper = styled.div`
  min-height: 70vh;
  min-width: 100vw;
  background-color: ${lightTheme.backgroundColor};
  color: ${lightTheme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShowCaseContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const ShowCaseTitle = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-weight: 600;
`;