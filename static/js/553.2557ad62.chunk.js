(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{1620:function(e,t,a){"use strict";var n=a(9),r=a(11),o=a(67),c=a(65),i=a(66),l=(a(1629),a(1630)),s=a(4),u=a.n(s),p=a(1621),m=a.n(p),d=l.a.Step,h=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.steps,a=e.current,n=e.onChange;return u.a.createElement("div",{className:m.a["step-wrap"]},u.a.createElement(l.a,{current:a,onChange:n},t.map((function(e){return u.a.createElement(d,{key:e.title,title:e.title})}))))}}]),t}(s.Component);h.defaultProps={steps:[{title:"\u9009\u62e9\u5206\u7c7b",content:"First-content"},{title:"\u586b\u5199\u4ea7\u54c1\u4fe1\u606f",content:"Second-content"},{title:"\u529f\u80fd\u5b9a\u4e49",content:"Last-content"},{title:"\u8bbe\u5907\u8c03\u8bd5",content:"Last-content"}]},t.a=h},1621:function(e,t,a){e.exports={"step-wrap":"step-wrap__3PJoA"}},1622:function(e,t,a){e.exports={step1:"step1__UlPVK","sub-l":"sub-l__qod6L","sub-r":"sub-r__2aFGw",card:"card__1bOxV",vendorPic:"vendorPic__2Pgdi",catagoryPic:"catagoryPic__kvBFk",step2:"step2__heAJ7","img-container":"img-container__1Zei3","label-content":"label-content__CSZyK","half-width":"half-width__WFz0W","tips-msg":"tips-msg__1_AAp","button-box":"button-box__3GlFH",step3:"step3__juRY_","result-wrap":"result-wrap__2Efwb","text-ellipsis":"text-ellipsis__1_OUp","add-wrap":"add-wrap__19daB","data-range":"data-range__12yIF","item-wrap":"item-wrap__1Nsey","data-type-wrap":"data-type-wrap__2UTI8","func-wrap":"func-wrap__meSi9","checkbox-content":"checkbox-content__1SwKW","btn-group":"btn-group__1UuRP",active:"active__JhDd1",step4:"step4__1_hzV","link-wrap":"link-wrap__ME9FB","active-btn":"active-btn__1TqDK","log-table":"log-table__2YMQ1",addFunction:"addFunction__INU6F","new-func-wrap":"new-func-wrap__VqfIJ","attribute-list":"attribute-list__rdjvu","add-func-item":"add-func-item__2EXSx",red:"red__3s_jS","ellipsis-cell":"ellipsis-cell__3iFvg",deviceDebug:"deviceDebug__3Vh6C","debug-item":"debug-item__1EcxX",tabs:"tabs__25Pzp","text-wrap":"text-wrap__3qXSC","btn-wrap":"btn-wrap__202cl","button-wrap":"button-wrap__1ckyf","virtual-device":"virtual-device__3-5Us",btn:"btn__1jK7l"}},2769:function(e,t,a){"use strict";a.r(t);a(237);var n,r=a(75),o=(a(1475),a(1478)),c=(a(410),a(20)),i=a(29),l=(a(309),a(61)),s=a(9),u=a(11),p=a(67),m=a(65),d=a(66),h=(a(1541),a(1542)),_=(a(305),a(100)),f=a(4),b=a.n(f),E=a(53),v=a(63),g=a(1620),C=a(76),y=a(68),I=a.n(y),N=a(1622),w=a.n(N),P=_.a.TextArea,S=(_.a.Group,h.a.Option),k=Object(v.b)("Dispark")(n=Object(v.c)(n=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).queryAllCommunicationType=function(){a.props.Dispark.ProductCreate.queryAllCommunicationType({param:{}}).then((function(e){try{var t=e.data.map((function(e){return{communicationId:e.communicationId,communicationName:e.communicationName}}));a.setState({allCommunicationTypeList:t})}catch(n){}}))},a.queryMoldMerchant=function(){a.props.Dispark.ProductCreate.queryMoldMerchant({param:{}}).then((function(e){try{var t=e.data.map((function(e){return{moldMerchantId:e.moldMerchantId,moldMerchantName:e.moldMerchantName}}));a.setState({moduleVendorList:t})}catch(n){}}))},a.queryMold=function(e){var t=a.props.Dispark.ProductCreate,n={param:{data:{moldMerchant:{moldMerchantId:e}}}};t.queryMold(n).then((function(e){try{var a=e.data.map((function(e){return{modelName:e.modelName,moldId:e.moldId,moldMerchantId:e.moldMerchantId}}));t.setItem("moduleTypeList",a)}catch(n){}}))},a.onSelectChange=function(e,t){"moldMerchantId"===t&&a.queryMold(e),(0,a.props.Dispark.ProductCreate.setItem)(t,e),a.formChange()},a.addProduct=function(){var e=a.state,t=e.isFormChange,n=e.isProductNameExist,r=a.props.Dispark.ProductCreate,o=a.props.Dispark.ProductCreate,c=o.catagoryId,i=o.productId,s=o.productName,u=o.productCode,p=o.communicationId,m=o.moldId,d=o.remark,h=o.barCode,_=o.broadcastName,f=o.fileList;if(n)l.a.warning("\u4ea7\u54c1\u540d\u79f0\u91cd\u590d\uff0c\u8bf7\u4fee\u6539\uff01");else if(C.a.notEmpty(s)&&C.a.notEmpty(u)&&C.a.notEmpty(p)&&C.a.notEmpty(m)){var b=new FormData;b.append("data",JSON.stringify({catagoryId:c,productName:s,productCode:u,communicationId:p,moldId:m,remark:d,barCode:h,broadcastName:_,productId:i})),b.append("file",f[0]);var E={param:b};if(t)r.addProduct(E).then((function(e){e&&0===e.code&&(r.setItem("productId",e.data.productId),r.setItem("productName",e.data.productName),r.setItem("isExportCode",!1),r.setItem("currentStep",3),a.props.history.push("step3?productId=".concat(e.data.productId)))}));else{var v=a.props.Dispark.ProductCreate.productId;r.setItem("currentStep",3),a.props.history.push("step3?productId=".concat(v))}}else l.a.warning("\u5fc5\u586b\u4fe1\u606f\u4e0d\u53ef\u4e3a\u7a7a\uff01")},a.onInputChange=function(e,t){(0,a.props.Dispark.ProductCreate.setItem)(t,I.a.trimStart(e.target.value)),a.formChange()},a.onPreviousStep=function(){a.setState({isPrompt:!1},(function(){(0,a.props.Dispark.ProductCreate.setItem)("currentStep",1),a.props.history.push("step1")}))},a.onNextStep=I.a.throttle((function(){a.setState({isPrompt:!1},(function(){a.addProduct()}))}),1e3,{trailing:!1}),a.onStepChange=function(e){a.setState({isPrompt:!1},(function(){var t=a.props.Dispark.ProductCreate,n=t.setItem,r=t.historyEnteredStep,o=t.productId;if(r.includes(e)){if(n("currentStep",e+1),2===e)return void a.props.history.push("step3?productId=".concat(o));if(3===e)return void a.props.history.push("step4?productId=".concat(o));a.props.history.push("step"+(e+1))}else l.a.warning("\u672a\u5b8c\u6210\u6b65\u9aa4\u4e0d\u53ef\u8df3\u8f6c\uff01\uff01")}))},a.formChange=function(){a.setState({isFormChange:!0})},a.queryProductName=function(e){var t={param:{productName:e}};a.props.Dispark.ProductCreate.queryProductName(t).then((function(e){try{0===e.code&&e.data&&a.setState({isProductNameExist:!1}),0!==e.code||e.data||a.setState({isProductNameExist:!0})}catch(t){}}))},a.onInputBlur=function(){var e=a.props.Dispark.ProductCreate.productName;e?a.queryProductName(e):a.setState({isProductNameExist:!1})},a.state={allCommunicationTypeList:[],moduleVendorList:[],isFormChange:!1,isPrompt:!0,isProductNameExist:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.Dispark.ProductCreate,t=e.currentStep,a=e.historyEnteredStep;(0,e.setItem)("historyEnteredStep",I.a.uniq([].concat(Object(i.a)(a),[1]))),2!==t&&this.props.history.push("step"+t),this.queryAllCommunicationType(),this.queryMoldMerchant(),this.setState({isPrompt:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.allCommunicationTypeList,n=t.moduleVendorList,i=t.isPrompt,l=t.isProductNameExist,s=this.props.Dispark.ProductCreate,u=s.typeName,p=s.catagoryName,m=s.fileList,d=s.imgUrl,f=s.productName,v=s.productCode,C=s.communicationId,y=s.moldMerchantId,I=s.moduleTypeList,N=s.moldId,k=s.remark,x=s.barCode,M=s.broadcastName,D={name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,onRemove:function(t){e.setState((function(e){var a=e.fileList.indexOf(t),n=e.fileList.slice();return n.splice(a,1),{fileList:n}}))},beforeUpload:function(t){var a=new FileReader;a.readAsDataURL(t),a.onload=function(t){var a=t.target.result;e.props.Dispark.ProductCreate.setItem("imgUrl",a)};var n=[t];return e.props.Dispark.ProductCreate.setItem("fileList",n),e.formChange(),!1},multiple:!1,fileList:m};return b.a.createElement("div",null,b.a.createElement(g.a,{current:1,onChange:this.onStepChange}),b.a.createElement("div",{className:w.a.step2},b.a.createElement("div",null,b.a.createElement("div",{className:w.a["img-container"]},b.a.createElement(o.a,D,d?b.a.createElement("img",{src:d,alt:"avatar"}):b.a.createElement("div",null,b.a.createElement(c.a,{type:this.state.loading?"loading":"plus"}),b.a.createElement("div",{className:"ant-upload-text"},"\u4e0a\u4f20\u56fe\u7247")))),b.a.createElement("label",{className:w.a["label-content"]},b.a.createElement("span",{style:{verticalAlign:"top"}},"\u5206\u7c7b\uff1a"),b.a.createElement("p",{className:w.a["half-width"]},"".concat(u,"-").concat(p),b.a.createElement("i",{onClick:this.onPreviousStep},"\u91cd\u9009\u5206\u7c7b"))),b.a.createElement("label",{className:w.a["label-content"]},b.a.createElement("span",null,b.a.createElement("i",null,"*"),"\u4ea7\u54c1\u540d\u79f0\uff1a"),b.a.createElement(_.a,{value:f,onChange:function(t){return e.onInputChange(t,"productName")},onBlur:this.onInputBlur}),l&&b.a.createElement("i",{style:{color:"red",marginLeft:"10px"}},"\u4ea7\u54c1\u540d\u79f0\u5df2\u5b58\u5728\uff0c\u8bf7\u4fee\u6539")),b.a.createElement("label",{className:w.a["label-content"]},b.a.createElement("span",null,b.a.createElement("i",null,"*"),"\u4ea7\u54c1\u578b\u53f7\uff1a"),b.a.createElement(_.a,{value:v,onChange:function(t){return e.onInputChange(t,"productCode")}})),b.a.createElement("label",{className:w.a["label-content"]},b.a.createElement("span",null,b.a.createElement("i",null,"*"),"\u901a\u8baf\u65b9\u5f0f\uff1a"),b.a.createElement(h.a,{placeholder:"\u8bf7\u9009\u62e9",value:C,onChange:function(t){return e.onSelectChange(t,"communicationId")}},a.map((function(e){return b.a.createElement(S,{key:e.communicationId,value:e.communicationId},e.communicationName)})))),b.a.createElement("label",{className:w.a["label-content"]},b.a.createElement("span",null,b.a.createElement("i",null,"*"),"\u6a21\u7ec4\uff1a"),b.a.createElement("div",{className:w.a["half-width"]},b.a.createElement(h.a,{placeholder:"\u9009\u62e9\u6a21\u7ec4\u5382\u5bb6",value:y,onChange:function(t){return e.onSelectChange(t,"moldMerchantId")}},n.map((function(e){return b.a.createElement(S,{key:e.moldMerchantId,value:e.moldMerchantId},e.moldMerchantName)}))),b.a.createElement(h.a,{placeholder:"\u9009\u62e9\u6a21\u7ec4\u578b\u53f7",value:N,onChange:function(t){return e.onSelectChange(t,"moldId")}},I.map((function(e){return b.a.createElement(S,{key:e.moldId,value:e.moldId},e.modelName)}))))),b.a.createElement("label",{className:w.a["label-content"]},b.a.createElement("span",null,"\u4ea7\u54c1\u4ecb\u7ecd\uff1a"),b.a.createElement(P,{autoSize:{minRows:2,maxRows:6},value:k,onChange:function(t){return e.onInputChange(t,"remark")}})),b.a.createElement("label",{className:w.a["label-content"]},b.a.createElement("span",null,"\u6761\u5f62\u7801\uff1a"),b.a.createElement(_.a,{value:x,onChange:function(t){return e.onInputChange(t,"barCode")}}),b.a.createElement("i",{className:w.a["tips-msg"]},"\xa0\u9009\u586b\u9879 \u77ed\u78018\u4f4d\uff0c\u957f\u780113\u300114\u4f4d\u6570\u5b57")),b.a.createElement("label",{className:w.a["label-content"]},b.a.createElement("span",null,"\u5e7f\u64ad\u540d\uff1a"),b.a.createElement(_.a,{value:M,onChange:function(t){return e.onInputChange(t,"broadcastName")}}),b.a.createElement("i",{className:w.a["tips-msg"]},"\xa0\u9009\u586b\u9879 30\u4e2a\u5b57\u7b26\u4ee5\u5185\u7684\u82f1\u6587\u5b57\u6bcd\u3001\u6570\u5b57\u6216\u4e0b\u5212\u7ebf")))),b.a.createElement("div",{className:w.a["button-box"]},b.a.createElement(r.a,{onClick:this.onPreviousStep},"\u4e0a\u4e00\u6b65"),b.a.createElement(r.a,{type:"primary",onClick:this.onNextStep},"\u4e0b\u4e00\u6b65")),b.a.createElement(E.a,{when:i,message:function(){return"\u8868\u5355\u6570\u636e\u5c06\u4e22\u5931\uff0c\u786e\u5b9a\u79bb\u5f00\u5417\uff1f"}}))}}]),t}(f.Component))||n)||n;t.default=k}}]);