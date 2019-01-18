function runAsync(){
  var p = new Promise(function(resolve, reject){
      //做一些异步操作
      setTimeout(function(){
          console.log('执行完成');
          resolve('随便什么数据');
      }, 2000);
  });
  return p;            
}


var  component = ()  => {
    let element = document.createElement('div');
  
    element.innerHTML = " entry print hello";
  
    runAsync().then(data=>{
      console.log("data",data)
    })

    return element;
  }
  
  document.body.appendChild(component());