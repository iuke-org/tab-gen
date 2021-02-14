import './App.css';
import React from 'react';
import { TabRenderer } from './components/TabRenderer/TabRenderer'
import PPLogo from "./ressource/logo.svg"
class App extends React.Component {

  render() {
    return (
      <div>
        <div class="header"> <img src={PPLogo} class="logo" alt="Perfect Peach Logo" /> </div>
        <TabRenderer />
      </div>
    )

  };
}

export default App;
