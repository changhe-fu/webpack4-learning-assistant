import style from "./style.css";
import Iconfont from "../../asset/font/iconfont.css";
import Icon from "./icon.jpg";
import Data from './data.xml';
import _ from 'lodash';
import {layout} from '../layout-head/index.js';

console.log("Data",Data)
console.log("layout",layout)
function component() {
  let element = document.createElement("div");

  // element.innerHTML = "Asset management HMR in webpack-merge is ok!";
  element.innerHTML = _.join(['split', 'management', '提取公共代码！'], ' ');
  element.classList.add(style.hello);

  element.appendChild(layout('天地无极，乾坤借法！妖孽，受死！！'))
  element.appendChild(layout('我是谁？我是你，你也是你~'))

  return element;
}

function imageComponent() {
  let element = document.createElement("div");

  // 将图像添加到我们现有的 div。
  let myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

  return element;
}

function iconComponent() {
  let element = document.createElement("div");

  // 将图像添加到我们现有的 div。
  let myIcon = document.createElement("span");;
   myIcon.classList.add(Iconfont.iconfont);
   myIcon.classList.add(Iconfont['wx-manage-shipin1']);

   element.appendChild(myIcon);

  return element;
}

function dataComponent() {
  let element = document.createElement("div");
  let str = '';
   
  for(let key in Data.note){
    str += `<p>${key}：${Data.note[key][0]}</p>`
  }
  element.innerHTML = str;
 
  return element;
}

export {
  component,
  imageComponent,
  iconComponent,
  dataComponent
}
