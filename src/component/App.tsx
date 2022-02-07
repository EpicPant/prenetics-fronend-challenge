import '../style/app.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { TestResultPage } from './TestResultPage';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
        <link href='https://fonts.googleapis.com/css2?family=Questrial&display=swap' rel="stylesheet"/>
      </header>

      <div id="content">
        <Sidebar />
        <TopNav />
        <div id="content-wrapper">
          <Provider store={store}>
            <TestResultPage />
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
