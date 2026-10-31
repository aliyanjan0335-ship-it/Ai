var S=[["Speed","High Speed Connectivity","Connect Communications delivers the best, fastest and most reliable internet service at all time and you can choose from wide range of available speeds."],
["Infrastructure","Most Reliable Infrastructure","We have developed our infrastructure with state of the art hardware and equipment that results in highly efficient and reliable flow of our services."],
["Team","Hard Working Team","We are passionate people with precise domain knowledge, but most of all we are one unit, one team and one family who works together to listen, support and provide solutions."],
["Technology","Next Generation Technology","We utilize the latest technology and tools to gain more superiority and effectiveness, providing complete and reliable solutions."]];
var cur=0,timer,tabs=document.getElementById("tabs");
S.forEach(function(s,i){var b=document.createElement("button");b.textContent=s[0];b.onclick=function(){show(i);clearInterval(timer)};tabs.appendChild(b)});
function show(i){cur=i;document.getElementById("ht").textContent=S[i][1];document.getElementById("hp").textContent=S[i][2];
 [].forEach.call(tabs.children,function(b,j){b.className=j===i?"on":""})}
show(0);timer=setInterval(function(){show((cur+1)%S.length)},5000);
function tick(){document.getElementById("clock").textContent=new Date().toLocaleString("en-GB",{weekday:"short",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}
tick();setInterval(tick,30000);
document.getElementById("lang").onclick=function(){this.textContent=this.textContent.indexOf("EN")===0?"UR | EN":"EN | UR"};
