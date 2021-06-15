import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Results from '../Results/Results';

const name = require('@rstacruz/startup-name-generator');


function App() {

  const [ headerExpanded, setExpand ] = useState(true);
  const [ suggestedNames, setsuggestedNames ] = useState([]);

  const handleChange = (inputText) => {
    setExpand(!(inputText.length > 0));
    setsuggestedNames(inputText ? name(inputText) : []);
  }

  return (
    <div>
      <Header
        headerExpanded={headerExpanded}
      />
      <SearchBox handleChange={handleChange} />
      <Results
        suggestedNames={suggestedNames}
      />
    </div>
  );
}

export default App;
