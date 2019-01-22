import { component, imageComponent, iconComponent, dataComponent } from "./components/hello-world/index.js";
import { cube } from "./math.js";
import _ from "lodash";

function mathComponent() {
  var element = document.createElement("pre");

  // element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join("\n\n");
  element.innerHTML = _.join(["Hello", "loadsh", "loadsh", "loadsh", "loadsh", cube(5)], " ");
  return element;
}

function buttonComponent() {
  var element = document.createElement("div");
  var button = document.createElement("button");
  var br = document.createElement("br");
  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e =>
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      var print = module.default;

      print();
    });

  return element;
}

// document.body.appendChild(component());
document.body.appendChild(imageComponent());
document.body.appendChild(iconComponent());
document.body.appendChild(dataComponent());
document.body.appendChild(mathComponent());
document.body.appendChild(buttonComponent());

// 只有 component() 模块才是热更行
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
