# Weex BXProject

A framework for building Mobile cross-platform UI.

Support Android 4.1 (API 16) and iOS 7.0+.

## 第0步：升级Node.js

* `sudo npm install -g n`, 安装n模块
* `n latest`, (如果要指定6.0+ `sudo n 6.*`)

## 第1步：安装weex-toolkit

* `npm install -g weex-toolkit`

## 第2步：下载Weex源码

* `git clone https://github.com/KalicyZhou/weex-example.git`

## 第3步：运行Weex源码

* Under project root
    * `npm install`, 安装此项目依赖，如果此项目已经安装过，package.json也没有更新过，可以不用再执行
    * `./startbx`，第一运行调用此命令进行打包js bundle。如果js已经打包过且没有更新，可直接运行`npm run serve`。
    
### HTML5

* Visit http://127.0.0.1:12580/bx_index.html or http://[your local ip]:12580/bx_index.html in Safari

### iOS

* Prerequisites
    * Install [iOS Environment](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/Setup/Setup.html)
    * Install [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
* Run playground
    * `cd ios/BXProject`
    * ~~`sudo gem install cocoapods-repo-svn`,里面有svn二方库，需要支持svn~~
    * ~~`svn info —username [your username] —password [your password] http://[your svn ip]/scm/svn/MobileRepository`~~
    * ~~`pod repo-svn add bricks http://[your svn ip]/scm/svn/MobileRepository`~~
    * `pod install`
    * Open `BXProject.xcworkspace` in Xcode
    * Click <img src="http://img1.tbcdn.cn/L1/461/1/5470b677a2f2eaaecf412cc55eeae062dbc275f9" height="16" > (`Run` button) or use default shortcut `cmd + r` in Xcode
    * If you want to run the demo on your device, don't need to modify `CURRENT_IP` manually. ~~In `DemoDefine.h`(you can search this file by Xcode default shortcut `cmd + shift + o`), modify `CURRENT_IP` to your local IP~~
* [Add an example](./examples/README.md#add-an-example)

### Android

* Prerequisites
  * Install [Android Environment](http://developer.android.com/training/basics/firstapp/index.html)
* Run playground, In Android Studio
    * Open `android/BXProject`
    * 在 `app/src/main/res/xml/app_config.xml`文件里, 修改"launch_url"的value里的IP地址为你本机的ip地址 `http://10.25.67.54:12580/official_doc/build/index.js`
    * Click <img src="http://gtms04.alicdn.com/tps/i4/TB1wCcqMpXXXXakXpXX3G7tGXXX-34-44.png" height="16" > (`Run` button)
* [Add an example](./examples/README.md#add-an-example)

 ### 自定义Component - `<bx-navbar>`
 * 概述：
   `<wxc-navpage>`的扩展，为了实现navigation bar上两个right items
   
 * 用法：
   在`script`标签中通过一个`require`语句引入，即：`require('../components/bx-navbar.we');`
   * `backitemsrc {string}`: navbar返回按钮的图标
   * `backitemtitle {string}`: navbar返回按钮的标题
   * `rightbuttons [array]`: navbar右侧按钮集合
 
 * 示例：
 ``` weex
 <template>
    <div class="wrapper">
        <bx-navbar height={{navBarHeight}} background-color="#1C6BC8" title={{title}} title-color="white" rightbuttons="{{rightBarButtons}}"></bx-navbar>
        <div class="wrapper" style="margin-top:{{navBarHeight}}">
            <text>{{text}}</text>
        </div>
    </div>
</template>

<style>
    .wrapper { 
  		position: absolute; 
  		top: 0; 
  		left: 0; 
  		right: 0; 
  		bottom: 0; 
  		width: 750;
    }
</style>

<script>
require('../components/bx-navbar.we');
    module.exports = {
        data: {
            text: 'hello',
            navBarHeight: 88,
            title:"首页",
            rightBarButtons:[
                {rightItemSrc:"local://bar_search.png"},
                {rightItemSrc:"local://bar_new.png"}
            ],
        },
        created: function() {
          this.$getConfig(function (config) {
            var env = config.env;
            if(env.platform == 'iOS'){
                var scale = env.scale;
                var deviceWidth = env.deviceWidth / scale;
                this.navBarHeight = 64.0 * 750.0 / deviceWidth;
            }
          }.bind(this));
        }
    }
</script>
```

 ### 自定义module - service
 * 概述：
    用于实现中间件网络请求。
   
 * API
   * `fetch(params, callback)` 发起网络请求

 * 参数
   * params {Object}：请求的一些参数
   * callback {Function}：响应结果回调，回调函数将收到如下的 response 对象：
     * `status {number}` 返回的状态码
     * `data {Object | string}` 返回的数据

 * 示例
 ``` weex
 <template>
  <wxc-navpage data-role="navbar" height={{navBarHeight}} background-color="#1C6BC8" title={{title}} title-color="white">
    <div class="wrapper">
        <text class="text" style="color:{{color}}">{{text}}</text>
    </div>
  </wxc-navpage>
</template>

<script>
    require('weex-components');
    var service = require('@weex-module/service') || {}
    module.exports = {
        data: {
            text: '待办公文',
            title: '待办公文',
            navBarHeight: 88,
        },

        created: function() {
            this.$getConfig(function (config) {
                var env = config.env;
                if(env.platform == 'iOS'){
                    var scale = env.scale;
                    var deviceWidth = env.deviceWidth / scale;
                    this.navBarHeight = 64.0 * 750.0 / deviceWidth;
                }
            }.bind(this));
            this.renderData()
        },
        methods: {
            getHQTaskList: function(userName,userId) {
                var json = {
                    attr: {
                        projectName: "BaogangIntlHQ",
                        serviceName: "todolist", //   getSendTask
                        methodName: "getHQTaskList"
                    },
                    data: {
                        userName: userName,
                        userId: userId,
                        page: "1"
                    }
                }
                return json;
            },
            renderData: function () {
                var self = this
                var json = self.getHQTaskList("徐志芳", "035330");
                service.fetch(json, function(res) {
                    try {
                        var results = res.data || {}
                        self.text = JSON.stringify(res);
                    } catch(e) {}
                })
            }
        }
    }
</script>
```
 ### 准备热更新包
 * 打zip包
   * `cd official_doc/build`
   * `zip -e wxhome.zip **/* *`，输入密码（必须和代码里的解码保持一致）
   * `md5 wxhome.zip`，记录下md5值，更新到之后创建的packet.json文件里。
   * 把wxhome.zip上传到服务器上，记录下URL值，更新到之后创建的packet.json文件里。
 * 创建packet.json
 ```
 {
    "minVersion":1,
    "url":"http://10.25.67.60:12580/official_doc/wxhome.zip",
    "md5":"87bb10864ae1e0f3444b91b1ab7904d7"
}
```
 * 把packet.json上传到服务器上

