/**
 * Created by ZOU on 2017/5/27.
 */
function dataInitail(tagNames,ei,allData)
{
  var datas=new Array();
  var times=new Array();
  for(var i=0;i<tagNames.length;i++)
  {
    datas[i]=new Array();
    times[i]=new Array();
    if(typeof(ei.get(tagNames[i]+"VALUE")) =="undefined") {
      return;
    }else {
      datas[i] = ei.get(tagNames[i] + "VALUE").split(',');
      times[i] = ei.get(tagNames[i] + "DATE").split(',');
    }
  }

  allData.splice(0,allData.length);
  for(var i=0;i<tagNames.length;i++)
  {
    allData[i]=new Array();
    for (var j = 0; j < datas[i].length; j++) {
      //allData[i].push([times[i][j],datas[i][j]]);
      var itm=times[i][j];
      itm=itm.replace(/-/g,'/');
      allData[i].push([new Date(itm),parseFloat(datas[i][j])]);
    }
  }
}

function dataReLoad(tagNames,ei,allData)
{
  var datas=new Array();
  var times=new Array();
  for(var i=0;i<tagNames.length;i++)
  {
    datas[i]=new Array();
    times[i]=new Array();
    if(typeof(ei.get(tagNames[i]+"VALUE")) =="undefined") {
      return;
    }else {
      datas[i] = ei.get(tagNames[i] + "VALUE").split(',');
      times[i] = ei.get(tagNames[i] + "DATE").split(',');
    }
  }

  for(var i=0;i<tagNames.length;i++)
  {
    //for(var si=times[i].length-SHIFT_COUNT*3;si<times[i].length;si++)
    for(var si= parseInt(times[i].length*0.8);si<times[i].length;si++)
    {
      var itm=times[i][si];
      itm=itm.replace(/-/g,'/');
      var idate1=new Date(itm);
      //var idate2=new Date(allData[i][allData[i].length-1][0]);
      var itm2=allData[i][allData[i].length-1][0];
      //itm2=itm2.replace(/-/g,'/');
      var idate2=new Date(itm2);
      if(idate1>=idate2)
      {
        if( allData[i].length>MAX_POINT)
        {
          allData[i].shift();
        }
        //allData[i].push([times[i][si],datas[i][si]]);
        allData[i].push([idate1,parseFloat(datas[i][si])]);
      }
    }
  }
}

function optionLoad(tagNames,legs,ei,option,isSetSection)
{
  //option.legend.data = legs;

  option.series.splice(0,option.series.length);
  for(var i=0;i<tagNames.length;i++)
  {
    var up = parseFloat(ei.get(tagNames[i]+"limit_up"));
    var low = parseFloat(ei.get(tagNames[i]+"limit_low"));
    if(isSetSection) {
      option.yAxis.max = up + 100;
      option.yAxis.min = low - 100;
    }
    var item = {
      name: legs[i],
      type: 'line',
      symbol: 'circle',
      showSymbol: true,
      //showAllSymbol: true,
      symbolSize: 4,
     // smooth:true,
      hoverAnimation: true,
			//		itemStyle: {
          //  normal: {
          //    color: 'blue',
          //    lineStyle: {        // 系列级个性化折线样式
          //      width:1,
          //    }
          //  },
          //},
      data: allData[i],
      //markPoint: {
      //  //symbol:'rectangle',
      //  //symbolSize : 20,
      //  //data : [
      //  //  {name: '标注1', value:up, xAxis: allData[i][allData[i].length-1][0], yAxis: up},
      //  //  {name: '标注2', value:low, xAxis: allData[i][allData[i].length-1][0], yAxis: low},
      //  //]
      //},
      markLine : {
        symbol: ['none', 'none'],
        //itemStyle:{
        //  normal:{
        //    //label:
        //    //{
        //    //  show:true,
        //    //  position:'right'
        //    //}
        //  }
        //},
        data : [
          // 纵轴，默认
            {name:'上限',xAxis:0,yAxis:up},
            {name: '上限',xAxis:allData[i][allData[i].length-1][0],yAxis:up},
            {name:'下限',xAxis:0,yAxis:low},
            {name:'下限',xAxis:allData[i][allData[i].length-1][0],yAxis:low}

          //{type : 'max', name: '最大值', itemStyle:{normal:{color:'#dc143c'}}},
          //{type : 'min', name: '最小值', itemStyle:{normal:{color:'#dc143c'}}},
          //{type : 'average', name : '平均值', itemStyle:{normal:{color:'#dc143c'}}},
          // 横轴
          //{type : 'max', name: '最大值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}},
          //{type : 'min', name: '最小值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}},
          //{type : 'average', name : '平均值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}}
        ]
      }
      //markLine:{
      //  data:[
      //    {name:'上极限区域',xAxis:0,yAxis:400},
      //    {name:'上极限区域',xAxis:allData[i][allData[i].length-1][0],yAxis:400},
      //
      //    {name:'下极限区域',xAxis:0,yAxis:200},
      //    {name:'下极限区域',xAxis:allData[i][allData[i].length-1][0],yAxis:200},
      //  ]
      //}
    }
    option.series.push(item);

  }
}
