const x = new XMLHttpRequest();
const method = "GET";
const url = "link.json";

function image(){
x.open(method,url,true);
x.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(x.responseText);
    var y = Math.floor(Math.random()*data.length);
    var res = data[y].img;
    var web = `<img src="${res}" height="400px"><br><a href="https://waifu2x.booru.pics/Home/index?url=${res}#url">Jernihkan</button>`;
    document.getElementById("result").innerHTML = web;
    document.getElementById("btn").innerHTML = "Next";
  }
};
x.send();
}