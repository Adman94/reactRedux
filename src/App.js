import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

const styles = {
  fontSize: '40px'
}

class App extends Component {
  
  state = {lat: null, errorMsg: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude.toFixed(3)}),
      err => this.setState({errorMsg: err.message}))
  }
  
  render() {
    if(this.state.errorMsg && !this.state.lat) {
      return <div>
        <h1 style={styles}>Error: {this.state.errorMsg}</h1>
      </div>
    }
    if(!this.state.errorMsg && this.state.lat) {
      return <div>
        <SeasonDisplay lat={this.state.lat} />
      </div>
    }
    return (
    <div className="App">
      <div>
        <Spinner />
      </div>
    </div>
    );
  }  
}

export default App;