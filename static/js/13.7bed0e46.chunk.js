(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1382:function(e,t,a){"use strict";var n=a(9),i=a(11),o=a(67),c=a(65),d=a(66),r=a(4),l=a.n(r),s=a(125),u=a(1393),h=a.n(u),p=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.titleText,a=e.btnText,n=e.btnClick,i=e.routeText,o=e.routePath,c=e.className,d=e.style;return l.a.createElement("div",{className:c},l.a.createElement("h3",{className:h.a["title-component"],style:d},t,a&&l.a.createElement("a",{onClick:function(){return n()},className:h.a.more},a),i&&l.a.createElement(s.c,{to:o,className:h.a.more},i)))}}]),t}(r.PureComponent);t.a=p},1393:function(e,t,a){e.exports={"title-component":"title-component__1k-XM"}},1466:function(e,t,a){},1472:function(e,t,a){"use strict";a(70),a(608)},1473:function(e,t,a){"use strict";var n=a(596);t.a=n.a},1524:function(e,t,a){"use strict";a(70),a(608)},1525:function(e,t,a){"use strict";var n=a(404);t.a=n.a},1551:function(e,t,a){"use strict";a(1543);var n=a(1544),i=a(9),o=a(11),c=a(67),d=a(65),r=a(66),l=a(4),s=a.n(l),u=a(1552),h=a.n(u),p=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.style,a=e.current,i=e.total,o=e.onPageChange,c=e.pageSize,d=e.showQuickJumper,r=e.showSizeChanger,l=e.onShowSizeChange,u=e.showTotal,p=e.pageSizeOptions;return s.a.createElement("div",{className:h.a["pagination-box"],style:t},s.a.createElement(n.a,{defaultCurrent:1,current:a,total:i,onChange:o,pageSize:c||10,showQuickJumper:d,showSizeChanger:r,onShowSizeChange:l,showTotal:u,pageSizeOptions:p}))}}]),t}(l.PureComponent);t.a=p},1552:function(e,t,a){e.exports={"pagination-box":"pagination-box__28fVy"}},1713:function(e,t,a){"use strict";a.r(t);a(419);var n,i=a(206),o=(a(1472),a(1473)),c=(a(1411),a(180)),d=(a(1524),a(1525)),r=(a(622),a(312)),l=(a(309),a(61)),s=a(29),u=a(9),h=a(11),p=a(67),m=a(65),v=a(66),f=a(418),g=a(4),y=a.n(g),b=a(63),I=a(1382),j=a(1551),E=a(76),S=(a(1466),a(2515)),O=a.n(S),C=a(68),D=Object(b.b)("Root")(n=Object(b.b)("Community")(n=Object(b.c)(n=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).fetchVideoTreeData=function(){try{var e=a.props.Community.SecurityMonitor;e.fetchVideoTreeData({param:{data:{productCode:"ezviz"}}}).then((function(){a.setState({defaultSelectKey:["all"],treeData:e.computedVideoTreeData})})).catch((function(e){}))}catch(t){}},a.fetchVideoData=function(e,t){var n=a.props.Community.SecurityMonitor,i=a.state,o=i.pageSize,c=i.pageIndex,d={data:{productCode:"ezviz",type:e,data:t},pager:{pageRows:o,pageIndex:void 0===c?1:c,paged:!0},orderBy:{orderColumn:"createTime",orderType:"desc"}};n.fetchVideoData({param:d}).then((function(e){a.setState({videoDataList:e.record||[],totalRows:e.totalRows,isLoading:!1,accessTokenObj:n.computedAccessTokenObj})})).catch((function(){a.setState({isLoading:!1})}))},a.uninstallPlayerInstance=function(){var e=a.state.videoDataList;try{e.map((function(e){a["playWind".concat(e.deviceId)]&&a["playWind".concat(e.deviceId)].stop()}))}catch(t){}},a.handleVideoInit=Object(C.throttle)((function(e,t){try{var n=a.state,i=n.videoDataList,o=n.accessTokenObj,c=Object(f.a)(Object(f.a)(a));i[t].loading=!0,a.setState({videoDataList:Object(s.a)(i)}),a["playWind".concat(e.deviceId)]=new window.EZUIKit.EZUIPlayer({id:"playWind".concat(e.deviceId),autoplay:!0,url:"".concat(e.reservedField1).concat(e.accessDeviceId,"/1.hd.live"),accessToken:o[e.projectId],decoderPath:"/dlink/js/ezuikit",width:400,height:300,handleError:function(e){var a=c.state.videoDataList;a[t].loading=!1,c.setState({videoDataList:Object(s.a)(a)}),l.a.warning(e.msg)},handleSuccess:function(){var e=c.state.videoDataList;e[t].loading=!1,c.setState({videoDataList:Object(s.a)(e)})}})}catch(d){}}),500,{trailing:!1}),a.handleVideoStop=Object(C.throttle)((function(e,t){try{var n=a.state,i=n.accessTokenObj;!0===n.videoDataList[t].loading?l.a.warning("\u52a0\u8f7d\u4e2d,\u8bf7\u7a0d\u540e\u518d\u8bd5"):(a["playWind".concat(e.deviceId)].stop(),a["playWind".concat(e.deviceId)]=null,a.setState({accessTokenObj:i}))}catch(o){}}),500,{trailing:!1}),a.handleVideoMutedChange=Object(C.throttle)((function(e,t,n){try{var i=a.state.videoDataList;a["playWind".concat(e.deviceId)]?(!0===n?a["playWind".concat(e.deviceId)].closeSound():a["playWind".concat(e.deviceId)].openSound(),i[t].isMuted=n,a.setState({videoDataList:Object(s.a)(i)})):l.a.warning("\u8bf7\u5148\u64ad\u653e")}catch(o){}}),500,{trailing:!1}),a.handleCapturePicture=Object(C.throttle)((function(e){try{a["playWind".concat(e.deviceId)]?a["playWind".concat(e.deviceId)].capturePicture(0,e.installAddress?e.installAddress:"default"):l.a.warning("\u8bf7\u5148\u64ad\u653e")}catch(t){}}),500,{trailing:!1}),a.handleToVideoPlayback=Object(C.throttle)((function(){}),500,{trailing:!1}),a.handleControlChangeFullScreen=Object(C.throttle)((function(e){try{a["playWind".concat(e.deviceId)]?a["playWind".concat(e.deviceId)].fullScreen(1):l.a.warning("\u8bf7\u5148\u64ad\u653e")}catch(t){}}),500,{trailing:!1}),a.onPageChange=Object(C.throttle)((function(e){var t=a.state,n=t.projectId,i=t.buildingId,o=t.houseId,c=t.deviceId;a.uninstallPlayerInstance(),a.setState({pageIndex:e},(function(){E.a.notEmpty(n)?a.fetchVideoData(1,n):E.a.notEmpty(i)?a.fetchVideoData(2,i):E.a.notEmpty(o)?a.fetchVideoData(3,o):E.a.notEmpty(c)?a.fetchVideoData(4,c):a.fetchVideoData()}))}),500,{trailing:!1}),a.handleTreeSelect=Object(C.throttle)((function(e,t){try{var n=t.node.props,i=n.projectId,o=n.buildingId,c=n.houseId,d=n.deviceId;a.uninstallPlayerInstance(),E.a.notEmpty(i)?a.fetchVideoData(1,i):E.a.notEmpty(o)?a.fetchVideoData(2,o):E.a.notEmpty(c)?a.fetchVideoData(3,c):E.a.notEmpty(d)&&a.fetchVideoData(4,d),a.setState({projectId:i,buildingId:o,houseId:c,deviceId:d})}catch(r){}}),500,{trailing:!1}),a.state={pageIndex:1,totalRows:0,pageSize:6,isLoading:!0,videoDataList:[],defaultSelectKey:[],accessTokenObj:"",projectId:"",buildingId:"",houseId:"",deviceId:""},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.fetchVideoTreeData(),this.fetchVideoData()}},{key:"componentWillUnmount",value:function(){this.uninstallPlayerInstance(),this.setState=function(){}}},{key:"render",value:function(){var e=this,t=this.state,a=t.pageIndex,n=t.totalRows,l=t.pageSize,s=t.treeData,u=t.defaultSelectKey,h=t.videoDataList,p=t.isLoading;return y.a.createElement("div",{className:O.a.container},y.a.createElement(I.a,{titleText:"\u5206\u5c4f\u5c55\u793a"}),y.a.createElement(i.a,{style:{background:"#fff",height:"100%",padding:"30px"}},y.a.createElement(o.a,{gutter:24},y.a.createElement(d.a,{xxl:4,xl:6,sm:8},Array.isArray(s)&&s.length>0&&y.a.createElement(r.a,{className:O.a.tree,treeData:s,defaultSelectedKeys:u,onSelect:this.handleTreeSelect})),y.a.createElement(d.a,{xxl:20,xl:18,sm:16},!1===p&&Array.isArray(h)&&h.length<=0?y.a.createElement(c.a,{image:c.a.PRESENTED_IMAGE_SIMPLE}):y.a.createElement(o.a,{gutter:24,className:O.a["video-list"]},h.map((function(t,a){return y.a.createElement("div",{className:O.a["video-item"],key:t.deviceId},y.a.createElement("div",{id:"playWind".concat(t.deviceId),style:{width:"400px",height:"300px"}}),!e["playWind".concat(t.deviceId)]&&y.a.createElement("i",{onClick:function(){e.handleVideoInit(t,a)},className:"iconfont iconplay ".concat(O.a["video-switch"])}),y.a.createElement("div",{className:O.a["video-address"]},t.installAddress),y.a.createElement("div",{className:O.a["video-bottom"]},y.a.createElement("div",{className:O.a["video-bottom-left"]},e["playWind".concat(t.deviceId)]?y.a.createElement("i",{onClick:function(){e.handleVideoStop(t,a)},className:"iconfont iconzanting1",title:"\u505c\u6b62"}):y.a.createElement("i",{onClick:function(){e.handleVideoInit(t,a)},className:"iconfont iconplay1",title:"\u64ad\u653e"})),y.a.createElement("div",{className:O.a["video-bottom-right"]},t.isMuted?y.a.createElement("i",{onClick:function(){e.handleVideoMutedChange(t,a,!1)},className:"iconfont iconjingyin",title:"\u58f0\u97f3"}):y.a.createElement("i",{onClick:function(){e.handleVideoMutedChange(t,a,!0)},className:"iconfont iconshengyin",title:"\u9759\u97f3"}),y.a.createElement("i",{onClick:function(){e.handleCapturePicture(t)},className:"iconfont iconpaizhao",title:"\u622a\u5c4f"}),y.a.createElement("i",{onClick:function(){e.handleControlChangeFullScreen(t)},className:"iconfont iconziyuanldpi1",title:"\u5168\u5c4f"}))))}))),Array.isArray(h)&&h.length>0&&y.a.createElement(j.a,{current:a,total:n,pageSize:l,onPageChange:this.onPageChange})))))}}]),t}(g.Component))||n)||n)||n;t.default=D},2515:function(e,t,a){e.exports={tree:"tree__HBHYB","tab-wrap":"tab-wrap__2-DWD","video-list":"video-list__3ux-N","video-item":"video-item__2Vqpu","video-bottom":"video-bottom__IcQkw",video:"video__EQ_4a","video-switch":"video-switch__3RojF","video-time":"video-time__3KiW4","video-address":"video-address__1WZwi","video-bottom-right":"video-bottom-right__24bII","video-off-line":"video-off-line__2ykvy"}}}]);