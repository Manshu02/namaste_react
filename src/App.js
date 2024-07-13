import React from 'react';
import logo from './logo.svg';
import './App.css';
const heading =React.createElement('h1',{id:'txt'},"Hello Mayank This Side")
function App() {
  return (
    <div className="App">
    {heading}
    
    </div>
    
    
  );
}
console.log(heading)



export default App;
