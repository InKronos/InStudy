import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);

  return (
    <main className="App">
      
        
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/ms" component={Ms} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  );
}

export default App;
