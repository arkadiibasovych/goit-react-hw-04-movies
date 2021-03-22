import Loader from 'react-loader-spinner';
import { Component } from 'react';
export default class App extends Component {
  //other logic
  render() {
    return <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />;
  }
}
