import { component,imageComponent,iconComponent,dataComponent} from "./components/hello-world/index.js";


// document.body.appendChild(component());
document.body.appendChild(imageComponent());
document.body.appendChild(iconComponent());
document.body.appendChild(dataComponent());

let element = component(); 
document.body.appendChild(element);

 if (module.hot) {
   module.hot.accept('./components/hello-world/index.js', function() {
     console.log('Accepting the updated printMe module!');

     document.body.removeChild(element);
     element = component(); 
     document.body.appendChild(element);
   })
 }