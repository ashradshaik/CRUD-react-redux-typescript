import React from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from '../src/components/notes'
import Home from '../src/components/home'
import AddNotes from '../src/components/addNotes'
import { Switch, Route, Link } from 'react-router-dom'
//import {BrowserRouter, Link, Match} from 'react-router'


class App extends React.Component{
  render(){
    return(
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h3>Crud Operations</h3>
            </header> 
            <div>
            <div>
                <Switch>
                  <Route path='/' component={Home}/>
                  <Route path='/notes' component={Notes}/>
                  <Route path='/notes/addnew' component={AddNotes} />
                  <Route path="/notes/:_id" comonent={Notes}/>
                </Switch>
            </div>
            <Notes />
            </div>
            {/* <Notes /> */}
          </div>
    )
  }

}


export default App;

