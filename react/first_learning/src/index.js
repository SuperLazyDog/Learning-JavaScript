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
ReactDOM.render(
  <JSX test={12345}/>,
  document.getElementById('jsx')
);
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
  clickHandle = e => {
    console.log(e);
  }
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
//-----------------------------------------------------------------------------
// 条件渲染
//-----------------------------------------------------------------------------
function Con1() {
  return (
    <p>Con1</p>
  );
}
function Con2() {
  return (
    <p>Con2</p>
  );
}
class Condition extends React.Component {
  render() {
    return (
      <div>
        <h1>title: condition</h1>
        {(Math.random()*100) > 50 ? <Con1 /> : <Con2 />}
      </div>
    );
  }
}
ReactDOM.render(
  <Condition />,
  document.getElementById('condition')
);
//-----------------------------------------------------------------------------
// 列表 & Key
//-----------------------------------------------------------------------------
class ListKey extends React.Component {
  constructor(props) {
    super(props);
    this.datas = new Array(10).fill(Math.random()*100).map((v, i) => {return v+i});
    this.listItems = this.datas.map((v, i) => {
      return (
        <li key={i} mykey={i}>data: {parseInt(v)}</li>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>title: list & key</h1>
        <ul>{this.listItems}</ul>
      </div>
    );
  }
}
ReactDOM.render(
  <ListKey />,
  document.getElementById('listkey')
);

//-----------------------------------------------------------------------------
// 表单
//-----------------------------------------------------------------------------
class Form extends React.Component {
  render() {
    return (
      <form>
        name:<input type="text" />
        <br />
        type: <input type="radio" name="type" value="0" /> <input type="radio" name="type" value="1" />
        <br />
        <fieldset>
          <legend>abc</legend>
          name: <input type="text" name="name" value="sample-name" />
          <br />
          sex: male<input type="radio" name="sex" value="0" /> : female<input type="radio" name="sex" value="1" />
        </fieldset>
        <br />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
ReactDOM.render(
  <Form />,
  document.getElementById('form')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
