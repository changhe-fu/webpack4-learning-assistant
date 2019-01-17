function component() {
    let element = document.createElement("div");
  
    element.innerHTML = "print entry";
    console.log("哈哈，狗蛋儿");
  
    return element;
  }

  document.body.appendChild(component());