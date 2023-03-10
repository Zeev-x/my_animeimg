const x = new XMLHttpRequest();
const method = "GET";
const url = "link.json";

function anime(){
x.open(method,url,true);
x.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(x.responseText);
    var y = Math.floor(Math.random()*data.length);
    var res = data[y].img;
    var web = `<img src="${res}" height="400px">`;
    document.getElementById("anime").innerHTML = web;
    document.getElementById("btn").innerHTML = "Next";
  }
};
x.send();
}
/*function all(){
  x.open(method,url,true);
  x.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(x.responseText);
      data.forEach(function(hasil){
        var web = `<img src="${hasil.img}" height="400px"><br><br>`;
        document.getElementById("anime").innerHTML += web;
      });
    }
  };
  x.send();
}*/