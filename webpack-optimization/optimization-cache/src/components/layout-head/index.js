import style from "./style.css";
import Iconfont from "../../asset/font/iconfont.css";

function layout(text = '默认的文本内容') {
    let element = document.createElement("p");
    element.innerHTML = text;
    element.classList.add(style.head);

    element.addEventListener('click',(e)=>{
        console.log('clickEventclickEvent',text);
    })
  
    return element;
}
export {
    layout
}