/**
 * Created by ZOU on 2017/5/16.
 */
var app = angular.module('starter.alarm', []);
var myChartAlarm;
var tagAlarm;
//var eiInfo = window.EiInfo;
var allData = new Array();
var   einfoAlarm = new EiInfo("A08");
einfoAlarm.set("projectName", "A08");
einfoAlarm.set("methodName", "query");
var tagNames = [];
var legs = [ "锌锅及加热器_1号加热器功率" ];
var optionAlarm;
var selectDate;
var iVal=0;
var iLower=0;
var iUpper=0;
function getAlarmData(PostUtil,$scope,einfoAlarm) {

  einfoAlarm.set("serviceName", "AA01");
  var data = EiInfo2Json.EiInfo2JsonString(einfoAlarm);
  //PostUtil.post4j("AA03","query",data).then(function(result){
  //PostUtil.post4j("AA03","queryTags",data).then(function(result){
  PostUtil.post4M(data).then(function(result){

    einfoAlarm = EiInfo2Json.parseJsonObject(result.data);
    console.log(einfoAlarm) // => EiInfo
    if(typeof(einfoAlarm.getBlocks().result) =="undefined") {
      console.log("unfind data") // => EiInfo
      return;
    }
    $scope.rows = einfoAlarm.getBlocks().result.rows;
   });
}

function initAlarmData(PostUtil,$scope,einfoAlarm) {

  einfoAlarm.set("serviceName", "AA01");
  einfoAlarm.set("methodName", "queryByOffset");
  var data = EiInfo2Json.EiInfo2JsonString(einfoAlarm);
  PostUtil.post4M(data).then(function(result){
    einfoAlarm = EiInfo2Json.parseJsonObject(result.data);
    console.log(einfoAlarm) // => EiInfo
    if(typeof(einfoAlarm.getBlocks().result) =="undefined")
    {
      console.log($scope.isMoreData+" 没有更多内容");
    }else {
      $scope.rows= einfoAlarm.getBlocks().result.rows;
      $scope.isMoreData=true;
    }
    $scope.$broadcast('scroll.refreshComplete');
  });
}

function getMoreAlarmData(PostUtil,$scope,einfoAlarm) {

  einfoAlarm.set("serviceName", "AA01");
  einfoAlarm.set("methodName", "queryByOffset");
  var data = EiInfo2Json.EiInfo2JsonString(einfoAlarm);
  PostUtil.post4M(data).then(function(result){
    //$scope.data=$scope.data.concat(result);

    einfoAlarm = EiInfo2Json.parseJsonObject(result.data);
    //eiInfo = EiInfo2Json.parseJsonObject( $scope.data.data);
    console.log(einfoAlarm) // => EiInfo
    if(typeof(einfoAlarm.getBlocks().result) =="undefined")
    {
      $scope.isMoreData=false;
      console.log($scope.isMoreData+" 没有更多内容");
    }else {
      if( $scope.rows!=null) {
       // $scope.rows = $scope.rows.push(eiInfo.getBlocks().result.rows);
        for(var i=0;i<einfoAlarm.getBlocks().result.rows.length;i++)
        {
          $scope.rows.push(einfoAlarm.getBlocks().result.rows[i]);
        }
      } else {
        $scope.rows = einfoAlarm.getBlocks().result.rows;
      }
      //$scope.rows= $scope.rows.concat(eiInfo.getBlocks().result.rows);
      // $scope.data=$scope.data.concat(eiInfo.getBlocks().result);
     // $scope.rows=$scope.rows.concat(eiInfo.getBlocks().result.rows);

    }
    $scope.$broadcast('scroll.infiniteScrollComplete');//这里是告诉ionic更新数据完成，可以再次触发更新事件
  });
}

function getAlarmPointEcharts(PostUtil,einfoAlarm) {

  var data = EiInfo2Json.EiInfo2JsonString(einfoAlarm);
  //PostUtil.post4j("AA03","query",data).then(function(result){
  //PostUtil.post4j("AA03","queryTags",data).then(function(result){
  PostUtil.post4M(data).then(function (result) {
    var eiinfo = window.EiInfo;
    eiinfo = EiInfo2Json.parseJsonObject(result.data);
    console.log(eiinfo) // => EiInfo
    // dataInitail();
    dataInitail(tagNames, eiinfo, allData);
    optionLoad(tagNames, legs, eiinfo, optionAlarm,false);
    // 使用刚指定的配置项和数据显示图表。
    myChartAlarm.setOption(optionAlarm, true);
    window.onresize = myChartAlarm.resize;
  });
}

app.controller('AlarmCtrl', function($scope,$ionicBackdrop,$state,PostUtil,Tagsmap,$ionicPopup) {
    $scope.action = function() {
      clearInterval(interval);
      $ionicBackdrop.release();
      //$ionicBackdrop.retain();
      //$timeout(function() {
      //  $ionicBackdrop.release();
      //}, 1000);
    };

    //rmbai 2017-06-27
    $scope.dataMode=true;
    $scope.setList = [
      { text: "实时数据", checked: true }
    ];

    $scope.fcheck=function(checkVal) {
      $scope.dataMode=checkVal;
    }
    //TAGS
    $scope.orderStates=Tagsmap.alarmtags();//Tagsmap.tags();

    //设置默认选择选项
    $scope.selectOrderState = $scope.orderStates[0];


    $scope.showSelectValue = function(selectOrderState) {
      $scope.selectOrderState = selectOrderState;
      //console.log(selectOrderState.id);
    }

    $scope.starttime = new Date();
    $scope.starttime.setMinutes(-60);
    $scope.endtime = new Date();

    $scope.fstarttime = function(val) {
      $scope.starttime = val;
    }

    $scope.fendtime = function(val) {
      $scope.endtime = val;
      //console.log( $scope.endtime);
    }

    $scope.Setting=function()
    {
      $state.go("tab.alarm-limit");
    }


    $scope.btnalarm = function() {
      console.log($scope.starttime.pattern("yyyy-MM-dd hh:mm:ss") + " : " + $scope.endtime.pattern("yyyy-MM-dd hh:mm:ss"));
      tagAlarm = $scope.selectOrderState;
      einfoAlarm.set("start", $scope.starttime.pattern("yyyy-MM-dd hh:mm:ss"));
      einfoAlarm.set("end", $scope.endtime.pattern("yyyy-MM-dd hh:mm:ss"));
      einfoAlarm.set("tagname", $scope.selectOrderState.name);
      einfoAlarm.set("methodName", "queryByOffset");
      //if($scope.selectOrderState.id == "ALL")
      //{
      //  einfoAlarm.set("methodName", "queryByOffset");
      //}else
      //{
      //  einfoAlarm.set("methodName", "queryByOffset");
      //}
      if ($scope.dataMode) {
        $state.go('tab.alarm-last', {id: $scope.selectOrderState.id});
      }
      else {
        if ($scope.starttime != "" && $scope.endtime != "" && $scope.starttime < $scope.endtime) {
          $state.go('tab.alarm-detail', {id: $scope.selectOrderState.id});
        }
        else
        {
          var alertPopup = $ionicPopup.alert({
            title: '日期选择错误!',
            template: '请选择开始时间和结束时间，并且开始时间不能大于结束时间'
          });
          alertPopup.then(function (res) {
            console.log('选择时间异常报警');
          });
          return;
        }
      }
    }

    //$scope.$broadcast('pickerUpdate', 'pickerToUpdate', {
    //  format: 'D MMM YYYY HH:mm',
    //  maxDate: maxSelectableDate, //A moment object, date object, or date/time string parsable by momentjs
    //  minView: 'hours',
    //  view: false //Use default
    //});
  })

  .controller('AlarmDetailCtrl', function($scope,$state,$stateParams,$ionicBackdrop,PostUtil, $timeout,Tagsmap) {
    $scope.name = tagAlarm.name;
   var isInitial=0;
    $scope.isMoreData=true;
    $scope.msgLoad="加载数据";
    var ongPageRowsCount=20;
    var pageNo=-1;
    var timer = null;
    $scope.action = function() {
      clearInterval(interval);
      $ionicBackdrop.release();
    };

    $scope.$on("$destroy", function () {
      //clearTimeout(timer.$$timeoutId);
      $timeout.cancel(timer);
      //清除配置,不然scroll会重复请求
    });

    $scope.$on('$ionicView.beforeLeave', function() {
      console.log("离开页面...");
    })

    $scope.floadMore=function() {
      //$scope.$broadcast('scroll.infiniteScrollComplete');//这里是告诉ionic更新数据完成，可以再次触发更新事件
      //$scope.$broadcast('scroll.refreshComplete');
      if ($scope.isMoreData) {
        if (pageNo > 0) {
          var ss=(pageNo * ongPageRowsCount);
          einfoAlarm.set("index",ss.toString());
          getMoreAlarmData(PostUtil, $scope, einfoAlarm);
          console.log($scope.isMoreData + "加载更多...");
          timer = $timeout(function () {
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, 3000);
        }
        else {
          $scope.$broadcast('scroll.infiniteScrollComplete');//这里是告诉ionic更新数据完成，可以再次触发更新事件
        }
      }
      else {
        console.log($scope.isMoreData + " 没有更多内容...");
      }
      pageNo++;
    }
   // getAlarmData(PostUtil,$scope,einfoAlarm);
    einfoAlarm.set("index","0");
    getMoreAlarmData(PostUtil, $scope, einfoAlarm);
    isInitial=1;


    $scope.fshowechart=function(row)
    {
      //console.log(" 没有更多内容..."+row[2]+":"+row[3]);
      //tagAlarm.name=row[2];
      einfoAlarm.set("serviceName", "AA03");
      selectDate= new Date(row[4]);
      var date = new Date(row[4]);
      var startd=new Date(date.setMinutes(date.getMinutes()-3));
      var endd= new Date(date.setMinutes(date.getMinutes()+6));
      einfoAlarm.set("start",startd.pattern("yyyy-MM-dd hh:mm:ss"));
      einfoAlarm.set("end", endd.pattern("yyyy-MM-dd hh:mm:ss"));
      //einfoAlarm.set("start",formatDate(startd));
      //einfoAlarm.set("end",formatDate(endd));
      einfoAlarm.set("methodName", "queryTagsByDate");//queryTagsByDate
      var vtag=Tagsmap.getByName(row[2]);
      einfoAlarm.set("tagname",vtag.id);
      tagNames[0] = vtag.id;
      legs[0]=vtag.name;
      iVal=row[3];
      iLower=row[0];
      iUpper=row[1];
      $state.go('tab.alarm-point',{id:vtag.id});
    }
  })

  .controller('AlarmLastCtrl', function($scope,$state,$stateParams,$ionicBackdrop,PostUtil, $timeout,Tagsmap) {
    $scope.name = tagAlarm.name;

    var isInitial=0;
    $scope.isMoreData=true;
    $scope.msgLoad="加载数据";
    var ongPageRowsCount=20;
    var pageNo=-1;
    var timer = null;

    $scope.action = function() {
      clearInterval(interval);
      $ionicBackdrop.release();
      //$ionicBackdrop.retain();
      //$timeout(function() {
      //  $ionicBackdrop.release();
      //}, 1000);
    };

    $scope.frefresh=function() {
      if (isInitial != 0) {
        einfoAlarm.set("start", "");
        einfoAlarm.set("end", "");
        einfoAlarm.set("index", "0");
        einfoAlarm.set("tagname", tagAlarm.name);
        initAlarmData(PostUtil, $scope, einfoAlarm);
        timer = $timeout(function () {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        }, 3000);
        pageNo = -1;
        $scope.isMoreData=true;
      }
    }

    $scope.$on("$destroy", function () {
      //clearTimeout(timer.$$timeoutId);
      $timeout.cancel(timer);
      //清除配置,不然scroll会重复请求
    });

    $scope.$on('$ionicView.beforeLeave', function() {

      console.log("离开页面...");
    })

    $scope.floadMore=function() {
      //$scope.$broadcast('scroll.infiniteScrollComplete');//这里是告诉ionic更新数据完成，可以再次触发更新事件
      //$scope.$broadcast('scroll.refreshComplete');
      if ($scope.isMoreData) {
        if (pageNo > 0) {
          var ss=(pageNo * ongPageRowsCount);
          einfoAlarm.set("start", "");
          einfoAlarm.set("end", "");
          einfoAlarm.set("index",ss.toString());
          einfoAlarm.set("tagname", tagAlarm.name);
          getMoreAlarmData(PostUtil, $scope, einfoAlarm);
          console.log($scope.isMoreData + "加载更多...");
          timer = $timeout(function () {
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, 3000);
        }
        else {
          $scope.$broadcast('scroll.infiniteScrollComplete');//这里是告诉ionic更新数据完成，可以再次触发更新事件
        }
      }
      else {
        console.log($scope.isMoreData + " 没有更多内容...");
      }
      pageNo++;
    }

    $scope.fshowechart=function(row)
    {
      //console.log(" 没有更多内容..."+row[2]+":"+row[3]);
      //tagAlarm.name=row[2];
      einfoAlarm.set("serviceName", "AA03");
      selectDate= new Date(row[4]);
      var date = new Date(row[4]);
      var startd=new Date(date.setMinutes(date.getMinutes()-3));
      var endd= new Date(date.setMinutes(date.getMinutes()+6));
      einfoAlarm.set("start",startd.pattern("yyyy-MM-dd hh:mm:ss"));
      einfoAlarm.set("end", endd.pattern("yyyy-MM-dd hh:mm:ss"));
      //einfoAlarm.set("start",formatDate(startd));
      //einfoAlarm.set("end",formatDate(endd));
      einfoAlarm.set("methodName", "queryTagsByDate");//queryTagsByDate
      var vtag=Tagsmap.getByName(row[2]);
      einfoAlarm.set("tagname",vtag.id);
      tagNames[0] = vtag.id;
      legs[0]=vtag.name;
      iVal=row[3];
      iLower=row[0];
      iUpper=row[1];
      $state.go('tab.alarm-point',{id:vtag.id});
    }

    einfoAlarm.set("start", "");
    einfoAlarm.set("end", "");
    einfoAlarm.set("index","0");
    getMoreAlarmData(PostUtil, $scope, einfoAlarm);
    isInitial=1;
  })

app.controller('AlarmLimitCtrl', function($scope, $ionicPopup,$timeout,limitEntity) {
    $scope.allselect=false;

    $scope.$on('$ionicView.enter', function() {
      $scope.items = limitEntity.limit();
    });

    $scope.onItemDelete = function(item) {
      $scope.items.splice($scope.items.indexOf(item), 1);
    };

    $scope.fsetAll=function()
    {
      $scope.allselect=!$scope.allselect;
      for(var ind=0;ind<$scope.items.length;ind++)
      {
        $scope.items[ind].checked=$scope.allselect;
      }
    }
    $scope.fchanged=function(item)
    {
      //for(var ind=0;ind<$scope.items.length;ind++)
      //{
      //  if($scope.items[ind].id==item.id)
      //  {
      //    //$scope.items[ind].checked=item.checked;
      //    //$scope.items[ind].low=1100;
      //    //$scope.items[ind].up=2100;
      //    //item.checked=item.checked;
      //    item.checked=false;
      //    limitEntity.set(item);
      //    break;
      //  }
      //}
      item.checked=!item.checked;
      limitEntity.set(item);
      $scope.items = limitEntity.limit();
    }

    $scope.fedit = function(item) {
      $scope.data={
        upVal:item.up,
        lowVal:item.low
      }
      //$scope.upVal=item.up;
      //$scope.lowVal=item.low;
      var myPopup = $ionicPopup.show({
        template:  '  <label class="item item-input" >上限：' +
        '<input type="text" class="lowVal"  ng-model="data.lowVal" ></label>'+
        '  <label class="item item-input" >下限：' +
        '<input type="text" class="upVal"  ng-model="data.upVal" ></label>',
        title: item.name,
        subTitle: '报警上下限',
        scope:$scope,
        buttons: [
          { text: '取消' },
          {
            text: '<b>确定</b>',
            type: 'button-positive',
            onTap: function(e) {
              item.low=  $scope.data.lowVal;
              item.up=  $scope.data.upVal;
              limitEntity.set(item);
              console.log(item.name+":["+item.low+","+item.up+"]");
              console.log(item.name+":["+ $scope.data.lowVal+","+ $scope.data.upVal+"]");
              console.log('确定修改');
            }
          },
        ]
      });
      myPopup.then(function(res) {
        //item.low= $scope.lowVal;
        //item.up= $scope.upVal;
        //limitEntity.set(item);
        //console.log(item.name+":["+item.low+","+item.up+"]");
        //console.log(item.name+":["+$scope.lowVal+","+$scope.upVal+"]");
      });
      $timeout(function() {
        myPopup.close();
      }, 10000);
    };
  })

  .controller('AlarmPointCtrl', function($scope,$stateParams,$ionicBackdrop,PostUtil, Tagsmap) {
    $scope.name =  legs[0];
    $scope.minuStates=[
      {minus:'3分钟',id:3},
      {minus:'5分钟',id:5},
      {minus:'10分钟',id:10}
    ];
    //if(optionAlarm!=null)
    //  optionAlarm.splice(0,optionAlarm.length);
    getAlarmPointEcharts(PostUtil, einfoAlarm);// ajax后台交互
    $scope.minuState= $scope.minuStates[0];
    $scope.val=iVal;
    $scope.lower=iLower;
    $scope.upper=iUpper;
    $scope.showSelectValue = function(minu) {
      $scope.minuState=minu;
      einfoAlarm.set("serviceName", "AA03");
      var date =new Date(selectDate);
      var startd=new Date(date.setMinutes(date.getMinutes()-minu.id));
      var endd= new Date(date.setMinutes(date.getMinutes()+minu.id*2));
      einfoAlarm.set("start",startd.pattern("yyyy-MM-dd hh:mm:ss"));
      einfoAlarm.set("end", endd.pattern("yyyy-MM-dd hh:mm:ss"));
      //einfoAlarm.set("start",formatDate(startd));
      //einfoAlarm.set("end",formatDate(endd));
      //einfoAlarm.set("methodName", "queryTagsByDate");//queryTagsByDate
      //var vtag=Tagsmap.getByName(row[2]);
     // einfoAlarm.set("tagname",vtag.id);
      //tagNames[0] = vtag.id;
      //legs[0]=vtag.name;
      getAlarmPointEcharts(PostUtil, einfoAlarm);// ajax后台交互
    }

  })
app.directive('liness', function() {
  return {
    scope: {
      id: "@",
      legend: "=",
      item: "=",
      data: "="
    },
    restrict: 'E',
    template: '<div style="height:400px;"></div>',
    replace: true,
    link: function ($scope, element, attrs, controller) {
      optionAlarm = {
        title: {
          text: '锌锅数据'
        },
        grid: {
          x: 35,
          y: 35,
          x2: 30,
          y2: 80
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 100
        },
          {
            show: true,
            type: 'slider',
            y: '90%',
            start: 0,
            end: 100
          }],
        animation: false,
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            var date = new Date(params[0].value[0]);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params[0].value[1];
          },
          axisPointer: {
            animation: false,
            type: 'cross'
          }
        },
        yAxis: {
          type: 'value',
          min: 0
          //boundaryGap: [0, '100%'],
          //splitLine: {
          //	show: false
          //}
        },
        xAxis: {
          type: 'time',
          splitNumber: 10
          //type: 'value',
          //splitLine: {
          //	show: false
          //}
        },

        series: [{
          name: 'a',
          type: 'scatter',
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: true,
          smooth: true,
          hoverAnimation: true,
          data: data
        }]
      };
      // var  echarts = require('echarts');
      myChartAlarm = echarts.init(document.getElementById($scope.id), 'macaronsa');
      // myChart = echarts.init(document.getElementById('main'));
      myChartAlarm.setOption(optionAlarm);
    }
  };
});
