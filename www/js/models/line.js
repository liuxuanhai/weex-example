/**
 * Created by ZOU on 2017/5/16.
 */
var interval = "";
var app = angular.module('starter.echart', []);
var legs = [ "锌锅及加热器_1号加热器功率" ];
var initflag = true;
var refresh = true;
var MAX_POINT = 20;
var SHIFT_COUNT = 5;
var tagNames = [];
var allData = new Array();
var myChart;
var option;
var tag;

var data = [[new Date(),"123"]]

var    einfo = new EiInfo("A08");
einfo.set("projectName", "A08");
einfo.set("serviceName", "AA03");
//einfo.set("methodName", "queryTags");//queryTagsByDate
einfo.set("methodName", "SubscribeTags");//queryTagsByDate


function tagNameLoad($stateParams) {
  tagNames.splice(0, tagNames.length);
  legs.splice(0, legs.length);
  tagNames[0] = $stateParams.id;
  legs[0]=tag.name;

}

function fInterval(PostUtil,einfo) {
  interval = setInterval(function () {
    //einfo.set("methodName", "queryTags");
    //tagNameLoad($stateParams);
    getChartDataTags(PostUtil, einfo);// ajax后台交互
  }, SHIFT_COUNT * 1000);
}

function getChartDataTags(PostUtil,einfo) {
  // 创建EiInfo
  //var    einfo = new EiInfo("A08");
  einfo.set("projectName", "A08");
  einfo.set("serviceName", "AA03");

   einfo.set("tagname",tagNames.join(','));
   //einfo.set("tagname",iTagName);
  var data = EiInfo2Json.EiInfo2JsonString(einfo);
  //PostUtil.post4j("AA03","query",data).then(function(result){
  //PostUtil.post4j("AA03","queryTags",data).then(function(result){
  PostUtil.post4M(data).then(function(result){
    var eiinfo = window.EiInfo;
    eiinfo = EiInfo2Json.parseJsonObject(result.data);
    console.log(eiinfo) // => EiInfo
    if (initflag) {
      initflag = false;
      // dataInitail();
      dataInitail(tagNames, eiinfo, allData);
      optionLoad(tagNames, legs,eiinfo, option,true);
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option,true);
      window.onresize = myChart.resize;
    } else {
      dataReLoad(tagNames, eiinfo, allData);
      optionLoad(tagNames, legs,eiinfo, option,true);
      myChart.setOption(option);
      window.onresize = myChart.resize;
    }
  });
}
app.controller('EchartCtrl', function($scope,$state,Tagsmap,$ionicPopup) {
    //TAGS
    initflag = true;
    $scope.orderStates=Tagsmap.tags();
    //设置默认选择选项
    $scope.selectOrderState=$scope.orderStates[0];

    //rmbai 2017-06-27
    $scope.dataMode=true;
    $scope.setList = [
      { text: "实时数据", checked: true }
    ];

    $scope.fcheck=function(checkVal) {
      $scope.dataMode=checkVal;
    }

    $scope.showSelectValue = function(selectOrderState) {
      $scope.selectOrderState = selectOrderState;
      //console.log(selectOrderState.id);
    }


    $scope.starttime = new Date();
    $scope.starttime.setMinutes(-10);
    $scope.endtime = new Date();

    $scope.fstarttime = function(val) {
      $scope.starttime = val;
    }

    $scope.fendtime = function(val) {
      $scope.endtime = val;
    }



    $scope.btnechart = function(){
      console.log($scope.starttime.pattern("yyyy-MM-dd hh:mm:ss")+ " : " + $scope.endtime.pattern("yyyy-MM-dd hh:mm:ss"));
      einfo.set("start", $scope.starttime.pattern("yyyy-MM-dd hh:mm:ss"));
      einfo.set("end", $scope.endtime.pattern("yyyy-MM-dd hh:mm:ss"));
      tag = $scope.selectOrderState;
      //if( $scope.starttime != "" && $scope.endtime != "" && $scope.starttime < $scope.endtime )
      initflag = true;
      //if($scope.dataMode == true && $scope.starttime != "" && $scope.endtime != "" && $scope.starttime < $scope.endtime )
      if($scope.dataMode == false )
      {
        if($scope.starttime != "" && $scope.endtime != "" && $scope.starttime < $scope.endtime )
          einfo.set("methodName", "queryTagsByDate");//queryTagsByDate
        else
        {
          var alertPopup = $ionicPopup.alert({
            title: '日期选择错误!',
            template: '请选择开始时间和结束时间，并且开始时间不能大于结束时间'
          });
          alertPopup.then(function(res) {
            console.log('选择时间异常报警');
          });
          return;
        }
      }
      else
      {
        //einfo.set("methodName", "queryTags");//queryTagsByDate
        einfo.set("methodName", "SubscribeTags");//queryTagsByDate
      }
      if($scope.dataMode)
        $state.go('tab.echart-last',{id:$scope.selectOrderState.id});
      else
        $state.go('tab.echart-detail',{id:$scope.selectOrderState.id});

    }
  })

  .controller('EchartDetailCtrl', function($scope,$stateParams,PostUtil) {

    $scope.name = tag.name;
    //einfo.set("methodName", "queryTags");queryTagsByDate
    einfo.set("methodName", "queryTagsByDate");
    tagNameLoad($stateParams);
    getChartDataTags(PostUtil, einfo);// ajax后台交互

  })

  .controller('EchartLastCtrl', function($scope,$stateParams,PostUtil) {
    console.log("$stateParams.data:"+$stateParams.id);
    $scope.$on('$ionicView.beforeLeave', function() {
      console.log("$ionicView.beforeLeave");
      if(interval != "")
      {
        clearInterval(interval);
        interval = "";
      }
    });

    $scope.$on('$ionicView.beforeEnter', function() {
      console.log("$ionicView.beforeEnter");
      einfo.set("projectName", "A08");
      einfo.set("serviceName", "AA03");
      einfo.set("methodName", "SubscribeTags");//queryTagsByDate
      tagNames[0] = $stateParams.id;
      initflag = true;
      if(interval == "")
      {
        fInterval(PostUtil,einfo);
       // getChartDataTags(PostUtil, einfo);// ajax后台交互
      }
    });
    $scope.name = tag.name;
    tagNameLoad($stateParams);
    //getChartDataTags(PostUtil, einfo);
    getChartDataTags(PostUtil, einfo);// ajax后台交互
  })
    app.directive('line', function() {
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
    link: function($scope, element, attrs, controller) {
      option = {
        title: {
          text: '锌锅数据'
        },
        grid: {
          x: 35,
          y: 35,
          x2:30,
          y2:80
        },
        //legend: {
        //  data:['a'],
        //  x:'center'
        //},
        dataZoom: [  {
          type: 'inside',
          start: 50,
          end: 100
        },
          {
            show: true,
            type: 'slider',
            y: '90%',
            start: 50,
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
            type:'cross'
          }
        },
        yAxis: {
          type: 'value',
          min:0
          //boundaryGap: [0, '100%'],
          //splitLine: {
          //	show: false
          //}
        },
        xAxis: {
          type: 'time',
          splitNumber:10
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
          smooth:true,
          hoverAnimation: true,
          data: data
        }]
      };
    // var  echarts = require('echarts');
     myChart = echarts.init(document.getElementById($scope.id),'macarons');
     // myChart = echarts.init(document.getElementById('main'));
      myChart.setOption(option);
    }
  };
});
