# Weex

A framework for building Mobile cross-platform UI.

Android[![Download](https://api.bintray.com/packages/alibabaweex/maven/weex_sdk/images/download.svg)](https://bintray.com/alibabaweex/maven/weex_sdk/_latestVersion)
iOS[![Pod version](https://badge.fury.io/co/WeexSDK.svg)](https://cocoapods.org/pods/WeexSDK)
HTML5[![npm version](https://badge.fury.io/js/weex-html5.svg)](https://www.npmjs.com/package/weex-html5)

[![CircleCI](https://circleci.com/gh/alibaba/weex/tree/dev.svg?style=svg&circle-token=b83b047a3a01f6ec26458a455530a5ddc261925f)](https://circleci.com/gh/alibaba/weex/tree/dev)

Support Android 4.1 (API 16) and iOS 7.0+.

## 第0步：安装Node.js

    * `sudo npm install -g n`, 安装n模块
    * `n latest`, (如果要指定6.0+ `sudo n 6.*`)

## 第1步：安装weex-toolkit

* `npm install -g weex-toolkit`

## 第2步：下载Weex源码

* `git clone https://github.com/KalicyZhou/weex-example.git`

## 第3步：运行Weex源码

* Under project root
    * `npm install`, install project
    * `./start`
    
### Android

* Prerequisites
  * Install [Android Environment](http://developer.android.com/training/basics/firstapp/index.html)
* Run playground, In Android Studio
    * Open `android/playground`
    * In `app/java/com.alibaba.weex/IndexActivity`, modify `CURRENT_IP` to your local IP
    * Click <img src="http://gtms04.alicdn.com/tps/i4/TB1wCcqMpXXXXakXpXX3G7tGXXX-34-44.png" height="16" > (`Run` button)
* [Add an example](./examples/README.md#add-an-example)

#### Runtime

On Android Platform , Weex code is executed in [weex_v8core](https://github.com/alibaba/weex_v8core) which is based on Google V8 JavaScript engine.

### iOS

* Prerequisites
    * Install [iOS Environment](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/Setup/Setup.html)
    * Install [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
* Run playground
    * `cd ios/playground`
    * `pod install`
    * Open `WeexDemo.xcworkspace` in Xcode
    * Click <img src="http://img1.tbcdn.cn/L1/461/1/5470b677a2f2eaaecf412cc55eeae062dbc275f9" height="16" > (`Run` button) or use default shortcut `cmd + r` in Xcode
    * If you want to run the demo on your device, don't need to modify `CURRENT_IP` manually. ~~In `DemoDefine.h`(you can search this file by Xcode default shortcut `cmd + shift + o`), modify `CURRENT_IP` to your local IP~~
* [Add an example](./examples/README.md#add-an-example)


### HTML5

* Visit http://127.0.0.1:12580/ or http://[your local ip]:12580/ in Safari

## Scripts

See [SCRIPTS.md](./SCRIPTS.md) for more information.

## IDE Plugin & Syntax Highlight & DevTool

Weex team have developed a [DevTool](https://github.com/weexteam/weex-devtool) to help you to improve `we file` debug efficiency.

See more stuff on [this wiki page](https://github.com/alibaba/weex/wiki/Weex-Community)

### Weex Community

* [StackOverflow](http://stackoverflow.com/questions/tagged/weex): Ask questions about Weex.
* [SegmentFault (cn)](https://segmentfault.com/t/weex): 中文交流与讨论
* [FAQ](https://weex.apache.org/faq.html)
* [Articles (cn)](https://github.com/weexteam/article/issues): Weex 相关文章集合

