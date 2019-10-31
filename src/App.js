import React from 'react';
import styled from 'styled-components'
import {NavBar} from './components/NavBar';
import {MainContent} from './components/MainContent';
import './App.css';


const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
function App() {
  return (
    <AppContainer>
      <NavBar/>
      <MainContent/>
    </AppContainer>
  );
}

export default App;
