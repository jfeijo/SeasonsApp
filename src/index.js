import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { SeasonDisplay } from './Components/SeasonDisplay';
import { Spinner } from './Components/Spinner';
import { getLCP } from 'web-vitals';
import { tSPropertySignature } from '@babel/types';
import { waitForDomChange } from '@testing-library/dom';


class App extends React.Component {

  state = {lat: null, errorMessage: ''};

  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
      
      position => this.setState({lat: position.coords.latitude}),
      
      err => this.setState({ errorMessage: err.message})
      
      );

  }
  
  conditionalContent() {
    if(this.state.errorMessage && !this.state.lat){
      return (<div>Error: { this.state.errorMessage }</div>)
     }

     if(!this.state.errorMessage && this.state.lat){
       return <SeasonDisplay lat={this.state.lat} />;
      }

      return <Spinner message="Please accept location request"/>
  };


  render() {
    return <div>{this.conditionalContent()}</div>;
}

};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
