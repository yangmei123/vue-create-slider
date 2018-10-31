### vue 自适应配置 简单的轮播图轮播图 

> 用vue制作简单的轮播图，使用computed，v:show，vuex state的方式分别实现效果

> 这里的轮播图切换，我觉得没有必要使用到vuex ，因为它的主要目的只是为了改变当前图片的状态值，不是真就是假，在这里使用vuex感觉有点多余了～是为了试着使用vuex；

> 这里将轮播图片列表的id当作state，修改对应id的isActive值

#### 使用方法

#### 效果

![Image text](https://github.com/yangmei123/vue-slider/blob/master/demo.gif)


1. 安装好node环境；

2. npm install (安装所需依赖)
 	
   > 使用yarn安装更快速 https://yarn.bootcss.com/docs/install/#mac-stable
   > 安装后直接使用 yarn add 或 yarn install

3. npm start (运行项目)

2. 页面中轮播组件配置;

    time: 2000, // 轮播切换时间

    prevBtnShow: false, // 是否显示上一张和下一张按钮， true:显示，false:不显示，默认显示

    navigatShow: false, // 是否显示导航条， true:显示，false:不显示，默认显示

    prevText: '<', // 上一张的按钮文案

    nextText: '>' // 下一张的按钮文案 });







