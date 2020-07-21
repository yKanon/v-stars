# v-stars 一个基于vue的UI组件库

[![Build Status](https://travis-ci.org/EX-EA/v-stars.svg?branch=master)](https://travis-ci.org/EX-EA/v-stars)

[![NPM](https://nodei.co/npm/<package>.png)](https://npmjs.org/package/<package>)

## 介绍



## 开始使用
1. 添加 CSS 样式
    使用该仓库时，`请开启border-box模式`
    ```css
    *,*::before,*::after {box-sizing: border-box;} 
    ```
    你还需要设置默认颜色等变量（后续改为SCSS变量）
    ```css
    html {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: #ffffff;
      --button-active-bg: #eeeeee;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
      --border-radius: 4px
    }
    ```
    IE15 及以上浏览器支持此样式
     
2. 安装 v-stars-demo
    ```shell script
     npm install v-stars-demo --save
    ```
   
3. 引入 v-stars-demo
    ```js
    import {Button, Icon} from 'v-stars-demo'
    import 'v-stars-demo/dist/index.css'
    
    export default {
       name: "App",
       components: {
         HelloWorld,
         "s-icon": Icon, 
         "s-button": Button,
       }
    }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

