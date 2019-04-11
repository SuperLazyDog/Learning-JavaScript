import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './sample.json'

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log(Data);
  return element;
}

document.body.appendChild(component());
