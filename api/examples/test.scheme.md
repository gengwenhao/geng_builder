# **value.title** 

# 背景

**value.background**

# 目标

新建应用采用最新技术栈webpack5、MF，支持最新语法、插件等辅助工具，原主应用作为不经常改动的qainkun子应用接入新基座，并且后续老应用里功能重构在对应的子应用里。

# 业务梳理

1.  灰度控制方案；
    
2.  梳理排查并删除无用代码；
    
3.  新应用搭建、页面迁移并对接各个qiankun子应用（可能修改微应用加载逻辑）；
    
4.  全局改造组件、mixin迁移（迁移到组件库或者新的基座应用）；
    
5.  各qiankun子应用改造（路由层处理、使用原主应用注入的方法兼容/验证）；
    

## 注意事项

1.  灰度控制时不能影响任何业务；
    
2.  挂载在原基座原型链上方法改造时不能影响原使用方；
    
3.  微应加载方式如需改变不能影响灰度；
    

# 灰度控制方案

按区域修改域名解析；

# 前期改造准备

## 梳理排查并删除无用代码

### 站内信

1.  /stationMail/systemMessage 
    
2.  /stationMail/orderAlert
    
3.  /stationMail/updateNotice
    

### 新手引导

4.  /noviceaddress
    
5.  /templateset
    
6.  /novicesheet
    
7.  /noviceprint
    

### 评价管理（找测试要账号后评估）

8.  /appraise/BatchAppraise
    
9.  /appraise/BuyerAppraise
    
10.  /appraise/AutoAppraise
    
11.  /appraise/MyAppraise
    

### 异常协同（找测试要账号后评估）

12.  /exceptionHandling/problemFeedback
    
13.  /exceptionHandling/problemList
    
14.  /exceptionHandling/aboutMe
    

### 打印配置引导

15.  /defaultMenu/guideSetting/printTemplate
    
16.  /defaultMenu/guideSetting/consignorInfo
    
17.  /defaultMenu/guideSetting/eFaceAccounts
    
18.  /defaultMenu/guideSetting/shopInfo
    
19.  /defaultMenu/previewTestPrint
    
20.  /printPreference
    

### 旧版电商页面

21.  /platform/afterService
    
22.  /platform/afterService/orderCenter
    
23.  /platform/afterService/afterRepairOrder
    
24.  /platform/afterService/abnormalWaybill
    
25.  /platform/afterService/afterRepairOrder/inputProblem
    
26.  /platform/kuaishou
    
27.  /platform/homePage
    
28.  /orderPrint
    

### 其他页面

29.  /vip/:id
    
30.  /problem/:id
    

### 组件

31.  /components/bind-sheet-dialog
    
32.  /compoents/business-festival-entry
    
33.  /compoents/form-items
    
34.  /compoents/expand-items
    
35.  /compoents/help
    
36.  /compoents/noviceboot
    
37.  /compoents/settings/sheetCainiao
    
38.  /compoents/stationMail
    
39.  /compoents/table-layout
    
40.  /compoents/appraiseDialog
    
41.  /compoents/contentContainer
    
42.  /compoents/customFields
    
43.  /compoents/dataSubTitle
    
44.  /compoents/exceptionDetailDialog
    
45.  /compoents/expiredDialog
    
46.  /compoents/foot
    
47.  /compoents/guide
    
48.  /compoents/handleDetails
    
49.  /compoents/icon
    
50.  /compoents/importantInformation
    
51.  /compoents/loading
    
52.  /compoents/mask
    
53.  /compoents/newBill
    
54.  /compoents/subTitle
    
55.  /compoents/userProtocol
    
56.  其他
    

## 需迁移页面/组件

57.  /sms/monthBill
    
58.  /sms/codReportSms
    
59.  /sms/codBillSms
    
60.  /sms/codSearchSms
    
61.  /sms/shippingDetails
    
62.  /sms/complaintRecord
    
63.  /sms/dayBill
    
64.  /sms/claimsBill
    
65.  /settings/subsidy
    
66.  ~~/compoents/copyText~~
    
67.  ~~/compoents/customFieldsDrag~~
    
68.  ~~/compoents/daliyGoods~~
    

## 页面改造

69.  使用到/compoents/dataSubTitle的页面
    

## Mixins（可后置）
- calIsChatFreelyVersion
- multipleVersionPath
- isMultipleVersion
- apolloConfig
- bindSheetShop
- showReturnOrderDecribe
- showTrackQuestionReply
- showZtoDiscountActivityApplyDialog

# 新应用

70.  创建应用并接入团队规范；
    
71.  登录、注册、授权登录、三方登录等基础页面/组件迁移至新基座应用，灰度期间新旧两个应用存在相同代码，灰度完成后删除就应用代码；
    
72.  统一微应用入口， ~~按url加载微应用；~~
    
73.  需要支持store获取用户信息、灰度信息等用户基础信息，改造微应用获取获取方式；
    
74.  旧应用页面对接新基座；
    

# 工时

|  事项  |  前端估时  |  前端开发  |  后端估时  |  测试估时（h）  |
| --- | --- | --- | --- | --- |
|  梳理排查并删除无用代码  |  5d (55个页面/组件, 每天10个)  |  耿文浩  |   |   |
|  需迁移页面/组件  |  4d（9个页面，每天2-3个）  |  董旭、李苑  |   |   |
|  使用到/compoents/dataSubTitle的页面  |  1d  |  董旭  |   |   |
|  现有mixins无用属性删除  |  0.5d  |  董旭  |   |   |
|  创建应用并接入团队规范  |  1.5d  |   |   |   |
|  登录、注册、授权登录、三方登录等基础页面/组件迁移至新基座应用  |  3d  |   |   |   |
|  统一微应用入口  |  3d  |   |   |   |
|  store层完善  |  3d  |   |   |   |
|  旧应用页面对接新基座  |  3d  |   |   |   |
|  各子应用功能兼容/改造/验证  |   |   |   |   |
|   |   |   |   |   |
