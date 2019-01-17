import style from "./style.css";

function component() {
  var element = document.createElement("div");

  element.innerHTML = "Asset management";
  element.classList.add(style.hello);

  return element;
}

document.body.appendChild(component());
