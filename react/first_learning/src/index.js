import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
//-----------------------------------------------------------------------------
// jsx
//-----------------------------------------------------------------------------
class JSX extends React.Component {
  constructor() {
    super();
    this.buildName = (people) => {
      return `${people.sex}的${people.name}`
    };
    this.people = {
      name: '妖怪',
      sex: '不男不女',
    }
    this.jsxElement = <p sampleProp={0}>{this.buildName(this.people)}</p>;
    this.blankElement = <p/>;
  }
  render() {
    return this.jsxElement;
  }
}
// ReactDOM.render(
//   <JSX test={12345}/>,
//   document.getElementById('root')
// );
//-----------------------------------------------------------------------------
// state&生命周期
//-----------------------------------------------------------------------------
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.setState({
          date: new Date()
        });
      },
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
