import { component, imageComponent, iconComponent, dataComponent } from "./components/hello-world/index.js";
import { cube } from "./math.js";

function mathComponent() {
  var element = document.createElement("pre");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join("\n\n");

  return element;
}

// document.body.appendChild(component());
document.body.appendChild(imageComponent());
document.body.appendChild(iconComponent());
document.body.appendChild(dataComponent());
document.body.appendChild(mathComponent());

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./components/hello-world/index.js", function() {
    console.log("Accepting the updated printMe module!");

    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
