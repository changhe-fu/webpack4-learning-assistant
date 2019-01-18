import style from "./style.css";
import Iconfont from "../../asset/font/iconfont.css";
import Icon from "./icon.jpg";
import Data from './data.xml';

console.log("Data",Data)
function component() {
  let element = document.createElement("div");

  element.innerHTML = "Asset management HMR in webpack-merge is ok!";
  element.classList.add(style.hello);

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
