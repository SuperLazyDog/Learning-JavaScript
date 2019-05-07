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
    this.title =  this.props.title || "sample";
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
        <h1>title: {this.title}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock title="state"/>,
  document.getElementById('state')
);


//-----------------------------------------------------------------------------
// 事件处理
//-----------------------------------------------------------------------------
class Events extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandle = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <h1>title: events</h1>
        <p onClick={this.clickHandle}>click</p>
      </div>
    );
  }
}
ReactDOM.render(
  <Events />,
  document.getElementById('event')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
