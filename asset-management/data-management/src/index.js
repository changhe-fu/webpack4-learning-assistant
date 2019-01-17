import style from "./style.css";
import Iconfont from "./asset/font/iconfont.css";
import Icon from "./icon.jpg";
import Data from './data.xml';

console.log("Data",Data)
function component() {
  var element = document.createElement("div");

  element.innerHTML = "Asset management";
  element.classList.add(style.hello);

  return element;
}

function imageComponent() {
  var element = document.createElement("div");

  // 将图像添加到我们现有的 div。
   var myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

  return element;
}

function iconComponent() {
  var element = document.createElement("div");

  // 将图像添加到我们现有的 div。
   var myIcon = document.createElement("span");;
   myIcon.classList.add(Iconfont.iconfont);
   myIcon.classList.add(Iconfont['wx-manage-shipin1']);

   element.appendChild(myIcon);

  return element;
}

function dataComponent() {
  var element = document.createElement("div");
  var str = '';
   
  for(let key in Data.note){
    str += `<p>${key}：${Data.note[key][0]}</p>`
  }
  element.innerHTML = str;
 
  return element;
}
document.body.appendChild(component());
document.body.appendChild(imageComponent());
document.body.appendChild(iconComponent());
document.body.appendChild(dataComponent());
