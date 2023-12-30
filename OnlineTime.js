var OnlineTime = {};


// 获取在线时间的函数
OnlineTime.getOnlineTime = function(callback) {
  // 设置在线时间的URL
  if (window.location.protocol === "https:") {
    // 如果当前页面使用 HTTPS 协议
    console.log("当前页面使用 HTTPS 协议");
    var timeApiUrl = "https://worldtimeapi.org/api/ip"; // 将请求在线时间的URL设为https协议，避免浏览器的安全警告
  } else {
    // 如果当前页面不使用 HTTPS 协议
    console.log("当前页面不使用 HTTPS 协议");
    var timeApiUrl = "http://worldtimeapi.org/api/ip";
  }
  // 发送 GET 请求到公共时间 API
  var xhr = new XMLHttpRequest();
  xhr.open('GET', timeApiUrl);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var onlineTime = response.datetime;
      callback(onlineTime);
    } else {
      callback(null);
    }
  };
  xhr.send();
};

// 调用 getOnlineTime 函数获取在线时间
OnlineTime.getOnlineTime(function(onlineTime) {
  if (onlineTime) {
    console.log('从api获取时间成功：' + onlineTime);
    var date = new Date(onlineTime);
    show(date);
  } else {
    console.error('获取在线时间失败');
  }
});

function show(date) { 
  //var date = new Date(); 
  console.log('推测当前时间：' + date);
  OutputTime(date);
  //setTimeout("show()",1000); 
  setTimeout(function() {
    show(new Date(date.getTime() + 1000));
  }, 1000);
}

function OutputTime(date) {
  let now = ""; 
  now = date.getFullYear()+"年";  
  now = now + (date.getMonth()+1)+"月"; 
  now = now + date.getDate()+"日"; 
  now = now + date.getHours()+"时"; 
  now = now + date.getMinutes()+"分"; 
  now = now + date.getSeconds()+"秒"; 
  document.getElementById("nowTimeDiv").innerHTML = now; 
}