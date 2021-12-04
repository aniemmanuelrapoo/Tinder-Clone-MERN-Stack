import './App.css';
import styled from 'styled-components'
import tw from 'twin.macro'
import Header from './component/Header';
import TinderCards from './component/TinderCards';
import SwipButtons from './component/SwipButtons';

const AppContainer = styled.div`
  ${tw``}
`

function App() {
  return (
    <div className="app">
      <AppContainer>
        <Header />
        <TinderCards />
        <SwipButtons />
      </AppContainer>
    </div>
  );
}

export default App;
