/**
 * Created by ZOU on 2017/5/25.
 */

angular.module('starter.PostUtil', [])
  .factory('PostUtil',function($http,$q){
  return {
    post4j: function (service, method, postData) {
      var q = $q.defer();
      return $http({
        method: 'POST',
        url: 'http://10.25.27.46:8080/iPlat4j6/EiService',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
          service: service,
          method: method,
          eiinfo: postData
        }
      }).success(function (data) {
        q.resolve(data);
      }).error(function (data) {
        q.reject(data);
      });
      return q.promise;
    },
    post4M: function (postData) {
      var q = $q.defer();
      return $http({
        method: 'POST',
        url: 'http://202.101.47.84/iPlatMBS/AgentService',
        //此时传入ACCOUNT中获取到的用户信息参数在下面
        params: {
          parameter_postdata: postData,
          parameter_encryptdata: "false",
          parameter_usertokenid: "null",
          parameter_userid: "null",
          parameter_compressdata: "false"
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).success(function (data) {
        q.resolve(data);
      }).error(function (data) {
        q.reject(data);
      });

      return q.promise;
    }

  }//end return
});
