function component() {
    let element = document.createElement("div");
  
    element.innerHTML = "print entry hot";
    console.log("哈哈，狗蛋儿啊实打实");
  
    return element;
  }

  document.body.appendChild(component());