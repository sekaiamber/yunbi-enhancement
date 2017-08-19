# 云币界面增强

这个项目使用`Tampermonkey`注入脚本来增强云币交易页面的体验。

云币界面有个很恶心的地方是socket老断，所以刚开始这个是很简单的脚本，后来我想增加一些功能，所以有这个项目。

你可以在Chrome应用商店下到著名的`Tampermonkey`（油猴）插件。

*这个项目才刚起步，丑是丑了点，贵在实用，请提出各种意见 :)*

![overview](https://sekaiamber.github.io/yunbi-enhancement/images/overview.png)

## 功能点

* 每一分钟定时刷新页面
* 买卖10，5，3档数据实时对比
* 设置价格桌面提示，再也不用开着网页盯盘了

![overview](https://sekaiamber.github.io/yunbi-enhancement/images/notify.png)

## How to use

使用方式很简单，为`Tampermonkey`新增如下脚本（**一定要带上注释**），然后在相关页面开启即可：

```javascript
// ==UserScript==
// @name         Yunbi Enhancement
// @namespace    http://isekai.me/
// @version      1.0
// @description  Yunbi market enhancement
// @author       Sekai
// @match        https://yunbi.com/markets/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  $.getScript("https://sekaiamber.github.io/yunbi-enhancement/dist/vendors.js", function() {
    $.getScript("https://sekaiamber.github.io/yunbi-enhancement/dist/index.js");
  });
  var head = document.getElementsByTagName('HEAD').item(0);
  var style = document.createElement('link');
  style.href = 'https://sekaiamber.github.io/yunbi-enhancement/dist/index.css';
  style.rel = 'stylesheet';
  style.type = 'text/css';
  head.appendChild(style);
  // Your code here...
})();
```

## 未来

* 桌面提示当前比较扰民，将进一步探寻亲民的方式。
* 快速买卖通道，一键下单
* 美化UI。。实在是太丑了。
* 委托变动通知

## 请支持我

一入币市深似海，如果你觉得这个项目有用，请推荐给朋友们 :)

如果能直接资助这个项目，给我几顿饭钱，那就太好啦。

支付宝账号：**a3824036@126.com**

ETH钱包：**0x1ADa2542b25c2D85be422A7c4D961c398544F230**
