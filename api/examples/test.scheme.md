# **value.docTitle**

# 一、**value.subTitle1**

[退货扫描一期需求](https://docs.zto.com/nodes/gNKMlbrq3WXAN1polEet4mv5p6Ad9nL1?)

[退货扫描二期需求](https://docs.zto.com/i/nodes/gNKMlbrq3WXANYW94orF4mv5p6Ad9nL1)

[商品信息存储梳理](https://docs.zto.com/i/nodes/gNKMlbrq3WXANYN8gE1u4mv5p6Ad9nL1)

# 二、**value.subTitle2**

|  序号  |  任务名称  |  描述  |  开发  |  工时  |
| --- | --- | --- | --- | --- |
|   |  补充售后单商品skuId  |  修改：视频号、快手售后单同步 售后拉单补充售后单商品skuId字段（快手、视频号） 说明：快手、视频号平台的售后单商品需要补充skuId字段 快手：com.zto.merchant.order.aftersale.order.convertor.KuaiShouAfterSaleListDataItemConvertor#to 视频号：com.zto.merchant.order.aftersale.order.convertor.ShiPinHaoRefundInformationGetResponseConvertor#to  |  邹林君  |  4H  |
|   |  补充店铺商品skuCode信息  |  修改：店铺商品同步接口 1、保存平台商品skuCode（视频号、小红书、1688） 2、视频号保存sku信息 接口：batchSynchronousCommodity 说明：见梳理文档[商品信息存储梳理](https://docs.zto.com/i/nodes/gNKMlbrq3WXANYN8gE1u4mv5p6Ad9nL1) 店铺：[https://docs.zto.com/i/nodes/5EbRqLWBnNjfz67Q?iframeQuery=](https://docs.zto.com/i/nodes/5EbRqLWBnNjfz67Q?iframeQuery=)  |  刘艳霞  |  1D  |
|   |  扫描运单接口  |  修改：退货扫描接口 \-- 入参： \-- 返参：增加验货状态、退货类型，商品列表信息增加商品编码、货品规格编码、货品规格条码、退货商品数量、次品数量 接口：rs/saveOrder 说明：如果属于非未知商品，那么首次扫描需要保存扫描单商品验货记录，并返回验货状态等信息。 注： 1、如果扫描的是订单运单，那么需要判断拆合单生成对应的扫描单以及商品验货记录。 \-- 合单要生成多条 \-- 拆单考虑新版拆单和老拆单 2、返回的如果是售后单扫描单列表根据售后申请时间排序倒序 3、返回的如果是订单扫描列表根据订单时间排序倒序 4、商品编码、货品规格编码、货品规格条码需要根据售后/订单商品的skuId对应查询店铺商品及货品表获取。 5、识别并保存退货类型（客退件、拦截件） \-- 客退件：退货运单号的扫描单 \-- 拦截件：查询运单状态表，或者是发货运单  |  刘艳霞  |  1D  |
|   |  完成验货接口  |  新增：完成验货接口 入参：退货扫描单id；列表：扫描单商品id、退货商品数量、次品数量 返参： 接口：rs/completeVerifyGoods 说明：参数校验 需要保存验货结果 \-- 收货商品数量必须大于0  |  刘艳霞  |  4H  |
|   |  分页查询扫描单列表  |  修改：分页查询扫描单列表 入参：增加验货结果、退货类型 返参：增加验货状态、退货类型，商品列表信息增加商品编码、货品规格编码、货品规格条码、商品规格、退货商品数量、次品数量 接口：rs/pageReturnScanOrder 说明：返参参考扫描运单接口  |  刘艳霞  |  1D  |
|   |  导出退货扫描订单列表接口  |  修改：导出退货扫描订单列表接口 入参：增加验货结果、退货类型 返参：增加验货结果、申请数量、退货商品数量、次品数量、退货类型 接口：rs/exportOrder  |  刘艳霞  |  4H  |
|   |  运单号正则表达式获取接口  |  新增：获取运单号正则表达式匹配接口 接口：getBillRuleConfig 说明：返参参考扫描运单接口  |  邹林君  |  4H  |
|   |  退货扫描统计接口  |  修改：退货扫描统计接口 入参： 返参：增加今日扫描已登记(客退件)数量、今日扫描已登记（拦截件）、今日签收未登记、今日签收未登记（客退件）、今日签收未登记（拦截件） 接口：  |  邹林君  |  1D  |
|   |  分页查询未登记售后单列表  |  修改： 入参：增加退货类型（今日签收未登记） 返参：增加签收时间、退货类型（今日签收已登记） 接口：rs/pageAftersale 说明：支持今日签收未登记的列表查询  |  邹林君  |  4H  |
|   |  保存退货/拦截运单  |  新增：保存退货/拦截运单状态 说明： 客退件：          非中通：退货运单拉单保存客退单，订阅非中通轨迹，收到轨迹后，保存运单状态及签收时间。4H          中通：退货运单拉单保存客退单，订阅中通轨迹，收到轨迹后，保存运单状态及签收时间。4H 拦截件：          非中通：发货订单非中通轨迹当推送了退件签收的轨迹，则保存拦截单。4H          中通：监听中通运单拦截消息，当拦截成功的时候且不是改地址类型，并且运单为管家这边的电商运单，记录保存中通拦截单。4H [https://docs.zto.com/nodes/5EbRqJXlQ3yFzp7Q?corpId=](https://docs.zto.com/nodes/5EbRqJXlQ3yFzp7Q?corpId=)  |  邹林君  |  2D  |
|   |  ~~保存用户核验商品开关~~  |  ~~新增：保存用户核验商品开关~~ ~~\-- 入参：是否开启核验商品~~ ~~\-- 返参：~~ ~~接口：rs/saveVerifyGoodsSwitch~~ ~~说明：用户默认不开启核验商品~~  |  邹林君  |  4H  |
|   |   |   |   |  9D+6D(联调2\*1D、冒烟2\*2D )=15D  |
|   |   |   |   |   |

预计联调时间：0731

预计冒烟时间：0801-0804

预计提测时间：0805

# 三、后端设计

## 1. 流程图

### 1.1、退货拦截运单记录保存流程

![image](https://docs-body.zto.com/res/rxM4lzraokgD9qw2/img/ad01cddf-7daa-4f3b-b11f-666bcf373481.png?Expires=1753927340&OSSAccessKeyId=file-s3-gateway-ak&Signature=D1LBXnKlwvhrbdAsBA%2Bppj4zvjQ%3D)

## 2.数据表结构

### 2.1.平台运单状态表

*   新增：平台运单状态表
    

|  **表名**  |  平台退运单状态表  |
| --- | --- |
|  **表名（英）**  |  kdgj\_platform\_bill\_status  |
|  **库**  |  new\_merchant\_service\_db  |
|  分片键  |  shop\_id  |
|  **操作**  |  **新增**  |
|  **索引**  |  主键：id 唯一索引：shop\_id,bill\_code  |

|  **字段**  |  **数据类型**  |  **不可为空**  |  **默认值**  |  **说明**  |  **备注**  |
| --- | --- | --- | --- | --- | --- |
|  id  |  bigint  |  是  |  auto\_increment  |  id  |   |
|  shop\_id  |  varchar  |  是  |   |  店铺 id  |   |
|  bill\_code  |  varchar  |  是  |   |  运单号(退货/拦截)  |   |
|  platform\_id  |  varchar  |  是  |   |  平台 id  |   |
|  bill\_status  |  Integer  |  否  |   |  运单状态  |   |
|  return\_type  |  Integer  |  是  |   |  退货类型（1：客退件、2：拦截件）  |   |
|  sign\_time  |  datetime  |  否  |   |  签收时间  |   |
|  ~~biz\_time~~  |  ~~datetime~~  |  ~~是~~  |   |  ~~业务发生时间(发起拦截时间/申请时间)~~  |   |
|  ext\_info  |  varchar  |  否  |   |  扩展信息  |   |
|  gmt\_create  |  datetime  |  是  |  CURRENT\_TIMESTAMP  |  创建时间  |   |
|  gmt\_modified  |  datetime  |  是  |  CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP  |  修改时间  |   |
|  creator  |  varchar(50)  |  是  |   |  创建人 \-- 存储用户 id  |   |
|  modifier  |  varchar(50)  |  是  |   |  修改人 \-- 存储用户 id  |   |

### 2.2.平台退货扫描核验商品表

*   新增：平台退货扫描核验商品表
    

|  **表名**  |  平台退货扫描核验商品表  |
| --- | --- |
|  **表名（英）**  |  kdgj\_platform\_return\_scan\_verify\_goods  |
|  **库**  |  tob\_merchant\_service  |
|  **操作**  |  **新增**  |
|  **索引**  |  主键：id 唯一索引：rs\_order\_id、sku\_id  |

|  **字段**  |  **数据类型**  |  **不可为空**  |  **默认值**  |  **说明**  |  **备注**  |
| --- | --- | --- | --- | --- | --- |
|  id  |  bigint  |  是  |  auto\_increment  |  id  |   |
|  rs\_order\_id  |  varchar  |  是  |   |  退货扫描id  |   |
|  sku\_id  |  varchar  |  是  |   |  商品规格id  |   |
|  apply\_num  |  Integer  |  是  |   |  申请数量  |   |
|  return\_goods\_num  |  Integer  |  是  |   |  退货商品数量  |   |
|  defective\_goods\_num  |  Integer  |  是  |   |  次品数量  |   |
|  verify\_goods\_result  |  Integer  |  是  |   |  验货结果（多退、退货无误..）  |   |
|  gmt\_create  |  datetime  |  是  |  CURRENT\_TIMESTAMP  |  创建时间  |   |
|  gmt\_modified  |  datetime  |  是  |  CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP  |  修改时间  |   |
|  creator  |  varchar(50)  |  是  |   |  创建人 \-- 存储用户 id  |   |
|  modifier  |  varchar(50)  |  是  |   |  修改人 \-- 存储用户 id  |   |

### 2.3.用户核验开关记录表

*   ~~新增：用户核验开关记录表~~
    

|  **表名**  |  用户核验开关记录表  |
| --- | --- |
|  **表名（英）**  |  kdgj\_user\_verify\_goods\_switch  |
|  **库**  |  tob\_merchant\_service  |
|  **操作**  |  **新增**  |
|  **索引**  |  主键：id 唯一索引：user\_id  |

|  **字段**  |  **数据类型**  |  **不可为空**  |  **默认值**  |  **说明**  |  **备注**  |
| --- | --- | --- | --- | --- | --- |
|  id  |  bigint  |  是  |  auto\_increment  |  id  |   |
|  user\_id  |  varchar  |  是  |   |  用户id  |   |
|  verify\_goods\_switch  |  Integer  |  是  |   |  核验商品开关  |   |
|  gmt\_create  |  datetime  |  是  |  CURRENT\_TIMESTAMP  |  创建时间  |   |
|  gmt\_modified  |  datetime  |  是  |  CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP  |  修改时间  |   |
|  creator  |  varchar(50)  |  是  |   |  创建人 \-- 存储用户 id  |   |
|  modifier  |  varchar(50)  |  是  |   |  修改人 \-- 存储用户 id  |   |

### 2.4. 数据表

|  **数据库**  |  **涉及表**  |  **名称**  |  |  |  描述  |
| --- | --- | --- | --- | --- | --- |
|  merchant\_service\_db  |  kdgj\_platform\_return\_bill\_status  |  平台退货拦截运单状态表  |  |  |  新增  |
|  ~~tob\_merchant\_service~~  |  ~~kdgj\_platform\_return\_scan\_verify\_goods~~  |  ~~平台退货扫描核验商品表~~  |  |  |  ~~新增~~  |
|  tob\_merchant\_service  |  kdgj\_user\_verify\_goods\_switch  |  用户核验开关记录表  |  |  |  新增  |
|  tob\_merchant\_service  |  kdgj\_return\_scan\_order\_info  |  平台扫描订单表  |  |  |  增加字段： verify\_goods\_status:验货状态(0-待验货;1-已验货)默认0 return\_type:退货类型(1：客退件、2：拦截件;3-其他)   |

：

#### 2.3、关系图

## 3. 契约

### 3.1.接口契约

|  序号  |  **接口**  |  **负责人**  |  **描述**  |  api地址  |  前端进度  |  联调进度  |  前端  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  1  |  扫描运单接口   |  刘艳霞  |  修改 入参： 出参：增加字段：verifyGoodsStatus、returnType、 orderAmount **aftersaleGoodsList:** verifyGoodsId、defectiveGoodsNum、returnGoodsNum、specBarcode、specCode  |  [rs/saveOrder](https://devops.dev.ztosys.com/document/interface?productCode=PRO_120&tabName=979989&tabType=http&version=feature-V3.1329.0)  |   |   |   |
|  2  |  完成验货接口  |  刘艳霞  |  新增  |  [rs/completeVerifyGoods](https://devops.dev.ztosys.com/document/interface?productCode=PRO_120&tabName=978895&tabType=http&version=GLOBAL)  |   |   |   |
|  3  |  分页查询扫描单列表  |  刘艳霞  |  修改 入参：verifyGoodsStatus、returnType 出参：verifyGoodsStatus、returnType、 orderAmount **aftersaleGoodsList:** verifyGoodsId、defectiveGoodsNum、returnGoodsNum、specBarcode、specCode  |  [rs/pageOrder](https://devops.dev.ztosys.com/document/interface?productCode=PRO_120&tabName=961507&tabType=http&version=default)  |   |   |   |
|  4  |  导出退货扫描订单列表接口  |  刘艳霞  |  修改 入参：verifyGoodsStatus、returnType 出参：  |  [rs/exportOrder](https://devops.dev.ztosys.com/document/interface?productCode=PRO_120&tabName=961509&tabType=http&version=default)  |   |   |   |
|  5  |  运单号正则表达式获取接口  |  邹林君  |  新增  |  [getBillRuleConfig](https://devops.dev.ztosys.com/document/interface?productCode=PRO_120&tabName=978902&tabType=http&version=GLOBAL)  |   |   |   |
|  6  |  退货扫描统计接口  |  邹林君  |  修改 入参： 出参：scannedReturnCount、scannedInterceptCount、signedCount、signedReturnCount、signedInterceptCount  |  [rs/getOrderStatistics](https://devops.dev.ztosys.com/document/interface?productCode=PRO_120&tabName=961511&tabType=http&version=default)  |   |   |   |
|  7  |  分页查询未登记售后单列表  |  邹林君  |  修改 入参：returnType 出参：returnType、signTime  |  [rs/pageAftersale](https://devops.dev.ztosys.com/document/interface?productCode=PRO_120&tabName=961517&tabType=http&version=default)  |   |   |   |
|  ~~8~~  |  ~~保存用户核验商品开关~~  |  ~~邹林君~~  |  ~~新增~~  |  [~~rs/saveVerifyGoodsSwitch~~](https://devops.dev.ztosys.com/document/interface?productCode=PRO_120&tabName=978897&tabType=http&version=default)  |   |   |   |
|   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |

### 3.2. Apollo

### 3.3. MQ

|  序号  |  Topic名称  |  消费组名称  |  申请域（appId）  |  申请集群类型  |  备注  |
| --- | --- | --- | --- | --- | --- |
|  1  |  kdgj\_platform\_bill\_status\_topic  |  kdgj\_platform\_bill\_status\_consumer  |   |   |  运单状态变更消费  |
|  2  |   |   |   |   |   |

### 3.4. 任务

|  序号  |  任务名称  |  执行器内容  |  所属应用（appId）  |  备注  |
| --- | --- | --- | --- | --- |
|  1  |   |   |   |   |

### 3.5. 协同合作

### 3.6.其他说明

## 4. 疑问点
