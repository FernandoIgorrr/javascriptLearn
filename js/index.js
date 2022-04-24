function exibirmsg(){
    let v1 = 'zzz';
    var v2 = 'xxx';
}


if(false){
    var v1 = 'xxx'
    let v2 = 'zzz'
}

console.log(v1);
//console.log(v2);


//var http    = require("http");
var express = require("express");
var app     = express();
/*
http.createServer(function(request,response){
    response.writeHead(200,{'Conten-Type':'text/plain'});
    response.end('Olá Mundo\n');

}).listen(8000,'127.0.0.1');

*/
//console.log('Servidor executando em http://127.0.0.1:8000');

var points = [
    {x:0,y:0},
    {x:1,y:1}
]

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

var p = new Point(1,1);
console.log(p);

Point.prototype.raiz = function(){
    return Math.sqrt(
        this.x*this.x +
        this.y*this.y
    );
}
console.log(p);

console.log(p.raiz());

points[1].x - points[0].x

points.dist = function(){
    var p1  = this[0];
    var p2  = this[1];
    var a   = p2.x-p1.x;
    var b   = p2.y-p1.y;
    return Math.sqrt(a*a+b*b);
}

console.log(points.dist());

function factorial(n){
    if(n <= 1){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(6));