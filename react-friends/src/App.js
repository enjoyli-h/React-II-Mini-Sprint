import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import {PeopleList} from './PeopleList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    People : []  
    };
  }

  componentDidMount() {
    this.setState.People({People: people});
  }

  render() {
    return (
      <div className="App">
        <PeopleList people ={this.state.People}/>
      </div>
    );
  }
}

export default App;
