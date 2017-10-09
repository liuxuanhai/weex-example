/**
 * Created by rmbai on 2017/7/20.
 */
angular.module('starter.homeEntity', [])
  .factory('homeEntity', function() {
    var linePostionEN=[
      {sX:210,sY:10,eX:210,eY:90},//1#
      {sX:40,sY:110,eX:160,eY:110},//2#
      {sX:80,sY:265,eX:170,eY:265},//3#
      {sX:40,sY:240,eX:130,eY:240},//4#
      {sX:190,sY:280,eX:300,eY:280},//5#
      {sX:40,sY:170,eX:160,eY:170},//6#
      {sX:235,sY:195,eX:310,eY:195},//7#
    ]
    var startPointsEN=[
      {startP:90,endP:50},//1#
      {startP:160,endP:60},//2#
      {startP:170,endP:90},//3#
      {startP:130,endP:70},//4#
      {startP:190,endP:290},//5#
      {startP:160,endP:70},//6#
      {startP:235,endP:300},//7#
    ]

    var linePostionEX=[
      {sX:140,sY:330,eX:140,eY:405},//1#
      {sX:210,sY:330,eX:210,eY:405},//2#
      {sX:160,sY:570,eX:160,eY:620},//3#
      {sX:40,sY:545,eX:130,eY:545},//4#
      {sX:200,sY:595,eX:300,eY:595},//5#
      {sX:40,sY:470,eX:160,eY:470},//6#
      {sX:260,sY:510,eX:310,eY:510},//7#
    ]
    var startPointsEX=[
      {startP:405,endP:360},///1#
      {startP:405,endP:370},///2#
      {startP:570,endP:620},///3#
      {startP:130,endP:70},///4#
      {startP:200,endP:290 },//5#
      {startP:160,endP:70 },//6#
      {startP:260,endP:300},///7#

    ]


    return {
      linePostionEN: function() {
        return linePostionEN;
      },
      linePostionEX: function() {
        return linePostionEX;
      },
      getPostionEN: function(ind) {
        if (parseInt(ind)<7) {
          return linePostionEN[ind];
        }
        return null;
      },
      getStartPointEN: function(ind) {
        if (parseInt(ind)<7) {
          return startPointsEN[ind];
        }
        return null;
      },
      setStartPointEN: function(ind,val) {
        if (parseInt(ind)<7) {
           startPointsEN[ind].startP=val;
        }
      },

      getPostionEX: function(ind) {
        if (parseInt(ind)<7) {
          return linePostionEX[ind];
        }
        return null;
      },
      getStartPointEX: function(ind) {
        if (parseInt(ind)<7) {
          return startPointsEX[ind];
        }
        return null;
      },
      setStartPointEX: function(ind,val) {
        if (parseInt(ind)<7) {
          startPointsEX[ind].startP=val;
        }
      },
    };
  });
