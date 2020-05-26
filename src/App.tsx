import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import PoetryContainer from './components/Poetry/PoetryContainer';
import BackgroundContainer from './components/Background/Background';
import About from './components/About/About';
import StoryesContainer from './components/Storyes/StoryesContainer';
import PagePoetryContainer from'./components/PagePoetry/PagePoetryContainer';

function App() {
  return (<>
    <BackgroundContainer />
    <Header />
    <Route path='/about' render={() => <>
      <BackgroundContainer />
      <About />
    </>} />
    <Route path='/poetry' render={() => <>
      <BackgroundContainer />
      <PoetryContainer />
    </>} />
    <Route path='/storyes' render={() => <>
      <StoryesContainer />
    </>} />
    <Route path='/poetry-page/:id?' render={() => <>      
      <PagePoetryContainer />
    </>} />
    <Route path='/contacts' render={() => <PoetryContainer />} />
  </>);
}

export default App;