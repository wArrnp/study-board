import React, { useState } from 'react'
import './App.scss';

import ScrollProgress from './components/ScrollProgress';

const buttonList = [
  {
    title: '스크롤 프로그래스',
    component: <ScrollProgress />
  }
]

function App() {
  const [currentComponent, setCurrentComponent] = useState(null);

  return (
    <div className="App">
      {
        !!currentComponent
          ? (
            <div>
              <header>
                <button onClick={() => setCurrentComponent(null)}>
                  back
                </button>
              </header>
              {currentComponent} 
            </div>
          )
          : (
            <div className="component-choice-wrapper">
              {
                buttonList.map(item => (
                  <button
                    className="component-choice-button"
                    onClick={() => setCurrentComponent(item.component)}>
                    {item.title}
                  </button>
                ))
              }
            </div>
          )
        }
    </div>
  );
}

export default App;
