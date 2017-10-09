/**
 * Created by ZOU on 2017/6/6.
 */
angular.module('starter.tagsmap', [])
.factory('Tagsmap', function() {
  // Might use a resource here that returns a JSON array

  var tags=[
    {name:"锌锅及加热器_1号加热器功率",id:"ZnPot_ZnPotTemper_potandheater_1heater_P"},
    {name:"锌锅及加热器_1号加热器电压",id:"ZnPot_ZnPotTemper_potandheater_1heater_U"},
    {name:"锌锅及加热器_1号加热器电流",id:"ZnPot_ZnPotTemper_potandheater_1heater_I"},
    {name:"锌锅及加热器_2号加热器功率",id:"ZnPot_ZnPotTemper_potandheater_2heater_P"},
    {name:"锌锅及加热器_2号加热器电压",id:"ZnPot_ZnPotTemper_potandheater_2heater_U"},
    {name:"锌锅及加热器_2号加热器电流",id:"ZnPot_ZnPotTemper_potandheater_2heater_I"},
    {name:"锌锅及加热器_锌锅温度",id:"ZnPot_ZnPotTemper_potandheater_pot_T"},
    {name:"锌锅及加热器_入锌锅板温",id:"ZnPot_ZnPotTemper_potandheater_potb_T"},
    {name:"锌锅及加热器_机组速度",id:"ZnPot_ZnPotTemper_potandheater_motor_V"},
    {name:"1号铜套_铜套温度1",id:"ZnPot_ZnPotTemper_cucover1_cu1_T"},
    {name:"1号铜套_铜套温度2",id:"ZnPot_ZnPotTemper_cucover1_cu2_T"},
    {name:"1号铜套_铜套温度3",id:"ZnPot_ZnPotTemper_cucover1_cu3_T"},
    {name:"1号铜套_铜套温度4",id:"ZnPot_ZnPotTemper_cucover1_cu4_T"},
    {name:"1号铜套_铜套温度5",id:"ZnPot_ZnPotTemper_cucover1_cu5_T"},
    {name:"1号铜套_铜套温度6",id:"ZnPot_ZnPotTemper_cucover1_cu6_T"},
    {name:"1号铜套_铜套温度7",id:"ZnPot_ZnPotTemper_cucover1_cu7_T"},
    {name:"1号铜套_铜套温度8",id:"ZnPot_ZnPotTemper_cucover1_cu8_T"},
    {name:"1号法兰_法兰温度1",id:"ZnPot_ZnPotTemper_flan1_fa1_T"},
    {name:"1号法兰_法兰温度2",id:"ZnPot_ZnPotTemper_flan1_fa2_T"},
    {name:"1号法兰_法兰温度3",id:"ZnPot_ZnPotTemper_flan1_fa3_T"},
    {name:"1号法兰_法兰温度4",id:"ZnPot_ZnPotTemper_flan1_fa4_T"},
    {name:"1号法兰_法兰温度5",id:"ZnPot_ZnPotTemper_flan1_fa5_T"},
    {name:"1号法兰_法兰温度6",id:"ZnPot_ZnPotTemper_flan1_fa6_T"},
    {name:"1号法兰_法兰温度7",id:"ZnPot_ZnPotTemper_flan1_fa7_T"}
  ];

  var alarmtags =[
    {name:"所有数据",id:"ALL"}
  ];


  return {
    tags: function() {
      return tags;
    },
    alarmtags: function() {
      return alarmtags.concat(tags);
    },
    get: function(id) {
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].id == parseInt(id)) {
          return tags[i];
        }
      }
      return null;
    },
    getByName: function(name) {
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].name==name) {
          return tags[i];
        }
      }
      return null;
    }
  };
});

