/**
 * Created by rmbai on 2017/7/18.
 */
var app = angular.module('starter.home', []);
var interval ="";
app.controller('HomeCtrl',function($scope,$state,$stateParams,homeEntity,cordovaPlugin) {

  $scope.backHome=function()
  {
    cordovaPlugin.navigator.pop();
  }

  $scope.$on('$ionicView.enter', function() {
    reload();
  });
  var reload=function()
  {
    var canvas = document.getElementById("myCanvas");
//简单地检测当前浏览器是否支持Canvas对象，以免在一些不支持html5的浏览器中提示语法错误
  if (canvas.getContext) {
    //获取对应的CanvasRenderingContext2D对象(画笔)
    var ctx = canvas.getContext("2d");

    //注意，Canvas的坐标系是：Canvas画布的左上角为原点(0,0)，向右为横坐标，向下为纵坐标，单位是像素(px)。
    ////开始一个新的绘制路径
    //ctx.beginPath();
    ////定义直线的起点坐标为(10,10)
    //ctx.moveTo(10, 10);
    ////定义直线的终点坐标为(50,10)
    //ctx.lineTo(50, 10);
    ////沿着坐标点顺序的路径绘制直线
    //ctx.stroke();
    //ctx.beginPath();
    //ctx.moveTo(80,30);
    ////ctx.lineWidth = 1;
    //ctx.strokeStyle ="#ff0000"
    //ctx.lineTo(200,30);
    //ctx.stroke();
    ////关闭当前的绘制路径
    //ctx.closePath();
    //for(var ind=0;ind<7;ind++)
    //{
    //  drawNoLines(ctx,homeEntity.getPostion(ind));
    //}
    var ctx2 = canvas.getContext("2d");
    var ctx3 = canvas.getContext("2d");
    var ctx4 = canvas.getContext("2d");
    var ctxEN1 = canvas.getContext("2d");
    var ctxEN2 = canvas.getContext("2d");
    var ctxEN3 = canvas.getContext("2d");
    var ctxEN4 = canvas.getContext("2d");
    setInterval(function(){
      runEN12(ctxEN1);
    }, 400);
    setInterval(function(){
      runEN34(ctxEN2);
    }, 400);
    setInterval(function(){
      runEN56(ctxEN3);
    }, 400);
    setInterval(function(){
      runEN7(ctxEN4);
    }, 400);
    setInterval(function(){
      runEX12(ctx);
    }, 400);
    setInterval(function(){
      runEX34(ctx2);
    }, 600);
    setInterval(function(){
      runEX56(ctx3);
    }, 600);
    setInterval(function(){
      runEX7(ctx4);
    }, 600);
  }
  }

  var drawNoLines=function(ctx,positions)
  {

    ctx.beginPath();
    ctx.moveTo(positions.sX,positions.sY);
    ctx.lineWidth = 3;
    ctx.strokeStyle ="#333333"
    ctx.lineTo(positions.eX,positions.eY);
    ctx.stroke();
    //关闭当前的绘制路径
    ctx.closePath();
  }

  var speed=4;
  var Fspeed=-4;
  var startPointEN7=homeEntity.getStartPointEN(6).startP;//7#
  var startPointEN5=homeEntity.getStartPointEN(4).startP;//5#
  var startPointEN1=homeEntity.getStartPointEN(0).startP;//1#
  var startPointEN2=homeEntity.getStartPointEN(1).startP;//2#
  var startPointEN6=homeEntity.getStartPointEN(5).startP;//6#
  var startPointEN4=homeEntity.getStartPointEN(3).startP;//4#
  var startPointEN3=homeEntity.getStartPointEN(2).startP;//3#
  var runEN12=function(ctx){
    //ctx.clearRect(140,startPoint3-5,140,180);
    //ctx.clearRect(210,startPoint4-5,210,190);
    if(startPointEN1<homeEntity.getStartPointEN(0).endP) {
      startPointEN1=homeEntity.getStartPointEN(0).startP;
    }
    if(startPointEN2<homeEntity.getStartPointEN(1).endP) {
      startPointEN2=homeEntity.getStartPointEN(1).startP;
    }
    //speed=4;
    //Fspeed=-4;
    drawNoLines(ctx,homeEntity.getPostionEN(0));
    drawNoLines(ctx,homeEntity.getPostionEN(1));
    ctx.save();
    startPointEN1+=Fspeed;
    startPointEN2+=Fspeed;
    ctx.fillStyle ="yellow"
    ctx.beginPath();

    //ctx.arc(210,startPointEN1,2,0,2*Math.PI,false);
    //ctx.arc(startPointEN2,110,2,0,2*Math.PI,false);
    ctx.arc(homeEntity.getPostionEN(0).sX,startPointEN1,2,0,2*Math.PI,false);
    ctx.arc(startPointEN2,homeEntity.getPostionEN(1).sY,2,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }
  var runEN34=function(ctx){
    if(startPointEN3<homeEntity.getStartPointEN(2).endP) {
      startPointEN3=homeEntity.getStartPointEN(2).startP;
    }
    if(startPointEN4<homeEntity.getStartPointEN(3).endP) {
      startPointEN4=homeEntity.getStartPointEN(3).startP;
    }
    //Fspeed=-4;
    drawNoLines(ctx,homeEntity.getPostionEN(2));
    drawNoLines(ctx,homeEntity.getPostionEN(3));
    ctx.save();
    startPointEN3+=Fspeed;
    startPointEN4+=Fspeed;
    ctx.fillStyle ="yellow"
    ctx.beginPath();
    ctx.arc(startPointEN3,homeEntity.getPostionEN(2).sY,2,0,2*Math.PI,false);
    ctx.arc(startPointEN4,homeEntity.getPostionEN(3).sY,2,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }
  var runEN56=function(ctx){
    if(startPointEN5>homeEntity.getStartPointEN(4).endP) {
      startPointEN5=homeEntity.getStartPointEN(4).startP;
    }
    if(startPointEN6<homeEntity.getStartPointEN(5).endP) {
      startPointEN6=homeEntity.getStartPointEN(5).startP;
    }
    //Fspeed=-4;
    drawNoLines(ctx,homeEntity.getPostionEN(4));
    drawNoLines(ctx,homeEntity.getPostionEN(5));
    ctx.save();
    startPointEN5+=speed;
    startPointEN6+=Fspeed;
    ctx.fillStyle ="yellow"
    ctx.beginPath();
    ctx.arc(startPointEN5,homeEntity.getPostionEN(4).sY,2,0,2*Math.PI,false);
    ctx.arc(startPointEN6,homeEntity.getPostionEN(5).sY,2,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }
  var runEN7=function(ctx){
    if(startPointEN7>homeEntity.getStartPointEN(6).endP) {
      startPointEN7=homeEntity.getStartPointEN(6).startP;
    }
    drawNoLines(ctx,homeEntity.getPostionEN(6));
    ctx.save();
    startPointEN7+=speed;
    ctx.fillStyle ="yellow"
    ctx.beginPath();
    ctx.arc(startPointEN7,homeEntity.getPostionEN(6).sY,2,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }

  var startPointEX1=homeEntity.getStartPointEX(0).startP;//7#
  var startPointEX2=homeEntity.getStartPointEX(1).startP;//5#
  var startPointEX3=homeEntity.getStartPointEX(2).startP;//1#
  var startPointEX4=homeEntity.getStartPointEX(3).startP;//2#
  var startPointEX5=homeEntity.getStartPointEX(4).startP;//6#
  var startPointEX6=homeEntity.getStartPointEX(5).startP;//4#
  var startPointEX7=homeEntity.getStartPointEX(6).startP;//3#
  var runEX12=function(ctx){
   //ctx.clearRect(232,272,startPoint1+10,275);
   // ctx.clearRect(187,357,startPoint2+10,360);
   // ctx.clearRect(140,startPoint3-5,140,180);
    //ctx.clearRect(210,startPoint4-5,210,190);
    //ctx.clearRect(0,0,510,590);
    //for(var ind=0;ind<7;ind++)
    //{
    //  drawNoLines(ctx,homeEntity.getPostion(ind));
    //}
    if(startPointEX1<homeEntity.getStartPointEX(0).endP) {
      // clearInterval(interval);
      //  interval="";
      startPointEX1=homeEntity.getStartPointEX(0).startP;
    }
    if(startPointEX2<homeEntity.getStartPointEX(1).endP) {
      startPointEX2=homeEntity.getStartPointEX(1).startP;
    }
    //if(startPoint3<90) {
    //  startPoint3=180;
    //}
    //if(startPoint4<100) {
    //  startPoint4=190;
    //}
    //speed=4;
    //Fspeed=-4;
    //cxt.clearRect(0,0,210,30);
    //cxt.top+=speed;
    //for(var ind=0;ind<7;ind++)
    //{
    //  drawNoLines(ctx,homeEntity.getPostion(ind));
    //}
    drawNoLines(ctx,homeEntity.getPostionEX(0));
    drawNoLines(ctx,homeEntity.getPostionEX(1));
    ctx.save();
    startPointEX1+=Fspeed;
    startPointEX2+=Fspeed;
    //startPoint3+=Fspeed;
    //startPoint4+=Fspeed;
    ctx.fillStyle ="yellow"
   ctx.beginPath();
    ctx.arc(homeEntity.getPostionEX(0).sX,startPointEX1,2,0,2*Math.PI,false);
    ctx.arc(homeEntity.getPostionEX(1).sX,startPointEX2,2,0,2*Math.PI,false);
    //ctx.arc(startPointEX1,495,2,0,2*Math.PI,false);
    //ctx.arc(startPointEX2,580,2,0,2*Math.PI,false);
    //ctx.arc(140,startPoint3,3,0,2*Math.PI,false);
    //ctx.arc(210,startPoint4,3,0,2*Math.PI,false);
    ctx.closePath();
   ctx.fill();
  }

  var runEX34=function(ctx){
    //ctx.clearRect(140,startPoint3-5,140,180);
    //ctx.clearRect(210,startPoint4-5,210,190);
    if(startPointEX3>homeEntity.getStartPointEX(2).endP) {
      startPointEX3=homeEntity.getStartPointEX(2).startP;
    }
    if(startPointEX4<homeEntity.getStartPointEX(3).endP) {
      startPointEX4=homeEntity.getStartPointEX(3).startP;
    }
    //speed=4;
    //Fspeed=-4;
    drawNoLines(ctx,homeEntity.getPostionEX(2));
    drawNoLines(ctx,homeEntity.getPostionEX(3));
    ctx.save();
    startPointEX3+=speed;
    startPointEX4+=Fspeed;
    ctx.fillStyle ="yellow"
    ctx.beginPath();
    //ctx.arc(140,startPointEX3,2,0,2*Math.PI,false);
    ctx.arc(homeEntity.getPostionEX(2).sX,startPointEX3,2,0,2*Math.PI,false);
    ctx.arc(startPointEX4,homeEntity.getPostionEX(3).sY,2,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }
  var runEX56=function(ctx){
    if(startPointEX5>homeEntity.getStartPointEX(4).endP) {
      startPointEX5=homeEntity.getStartPointEX(4).startP;
    }
    if(startPointEX6<homeEntity.getStartPointEX(5).endP) {
      startPointEX6=homeEntity.getStartPointEX(5).startP;
    }
    //Fspeed=-4;
    drawNoLines(ctx,homeEntity.getPostionEX(4));
    drawNoLines(ctx,homeEntity.getPostionEX(5));
    ctx.save();
    startPointEX5+=speed;
    startPointEX6+=Fspeed;
    ctx.fillStyle ="yellow"
    ctx.beginPath();
    ctx.arc(startPointEX5,homeEntity.getPostionEX(4).sY,2,0,2*Math.PI,false);
    ctx.arc(startPointEX6,homeEntity.getPostionEX(5).sY,2,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }

  var runEX7=function(ctx){
    if(startPointEX7>homeEntity.getStartPointEX(6).endP) {
      startPointEX7=homeEntity.getStartPointEX(6).startP;
    }
    drawNoLines(ctx,homeEntity.getPostionEX(6));
    ctx.save();
    startPointEX7+=speed;
    ctx.fillStyle ="yellow"
    ctx.beginPath();
    ctx.arc(startPointEX7,homeEntity.getPostionEX(6).sY,2,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }
});
//app.directive('canvas', function() {
//  var canvas = document.getElementById("myCanvas");
////简单地检测当前浏览器是否支持Canvas对象，以免在一些不支持html5的浏览器中提示语法错误
//  if (canvas.getContext) {
//    //获取对应的CanvasRenderingContext2D对象(画笔)
//    var ctx = canvas.getContext("2d");
//
//    //注意，Canvas的坐标系是：Canvas画布的左上角为原点(0,0)，向右为横坐标，向下为纵坐标，单位是像素(px)。
//
//    //开始一个新的绘制路径
//    ctx.beginPath();
//    //定义直线的起点坐标为(10,10)
//    ctx.moveTo(10, 10);
//    //定义直线的终点坐标为(50,10)
//    ctx.lineTo(50, 10);
//    //沿着坐标点顺序的路径绘制直线
//    ctx.stroke();
//    //关闭当前的绘制路径
//    ctx.closePath();
//  }
//});
