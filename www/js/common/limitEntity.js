/**
 * Created by rmbai on 2017/7/13.
 */
angular.module('starter.limitEntity', [])
  .factory('limitEntity', function() {
// Might use a resource here that returns a JSON array

    var limits = [
      { id: 0 ,name:'aa',low:100,up:400,checked:true},
      { id: 1,name:'bb',low:200,up:400,checked:false },
      { id: 2 ,name:'cc',low:100,up:500,checked:true},
      { id: 3 ,name:'dd',low:200,up:500,checked:true}
    ];

    return {
      limit: function() {
        return limits;
      },
      get: function(id) {
        for (var i = 0; i < limits.length; i++) {
          if (limits[i].id == parseInt(id)) {
            return limits[i];
          }
        }
        return null;
      },
      set: function(item) {
        for (var i = 0; i < limits.length; i++) {
          if (limits[i].id == parseInt(item.id)) {
            limits[i].checked=item.checked;
            limits[i].low=item.low;
            limits[i].up=item.up;
            break;
          }
        }
        return null;
      },
      getByName: function(name) {
        for (var i = 0; i < limits.length; i++) {
          if (limits[i].name==name) {
            return limits[i];
          }
        }
        return null;
      }
    };
  });
