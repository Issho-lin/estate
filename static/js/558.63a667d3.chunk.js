(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{2409:function(e,t,n){},2807:function(e,t,n){"use strict";n.r(t);var o,r=n(13),a=n(0),c=n.n(a),u=n(6),i=n(9),m=n(11),l=n(67),s=n(65),h=n(66),d=(n(419),n(206)),f=n(4),p=n.n(f),y=n(63),b=n(53),R=n(68),v=n.n(R),O=n(97),g=n(28),E=n(2409),j=n.n(E),C=n(1610),x=n(1624);function S(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw a}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var H=d.a.Content,w=(Object(O.a)((function(){return n.e(31).then(n.bind(null,1761))})),Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(4),n.e(28)]).then(n.bind(null,2189))}))),D=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(4),n.e(30)]).then(n.bind(null,2190))})),P=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(4),n.e(29)]).then(n.bind(null,2191))})),W=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(525)]).then(n.bind(null,2745))})),k=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(6),n.e(522)]).then(n.bind(null,2788))})),M=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(4),n.e(534)]).then(n.bind(null,2752))})),A=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(480)]).then(n.bind(null,2792))})),U=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(443)]).then(n.bind(null,2755))})),L=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(10)]).then(n.bind(null,1731))})),N=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(22)]).then(n.bind(null,1768))})),q=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(506)]).then(n.bind(null,2793))})),_=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(510)]).then(n.bind(null,2760))})),J=Object(O.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(503)]).then(n.bind(null,2761))})),T=Object(O.a)((function(){return n.e(551).then(n.bind(null,2763))})),B=Object(y.b)("Root")(o=Object(y.b)("Community")(o=Object(y.c)(o=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).setHomeNav=function(){var e=n.props.Root,t=n.state.homeRoute;e.routerArr.length||(e.createNavTab({name:"\u9996\u9875",id:t.id,path:t.actionUrl}),e.updateBreadCrumbs([t.id]))},n.getHomeRoute=function(e){var t,o=S(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;if(n.homeRoute)return;if(r.actionUrl)return void(n.homeRoute=r);Array.isArray(r.children)&&n.getHomeRoute(r.children)}}catch(a){o.e(a)}finally{o.f()}},n.queryChildResource=Object(u.a)(c.a.mark((function e(){var t,o,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=v.a.find(g.a.getItem("firstMenuList").firstMenuList.resourcesList,{resourceCode:"characteIndustry"}),o=v.a.find(t.children,{resourceCode:"community"}).resourceId,e.next=5,n.props.Root.queryChildResource({param:{data:{resources:{upper:o}}}});case 5:r=n.props.Root.routerData,n.setItemWithRoute(r),(a=(r||[])[0]||{}).actionUrl?n.setState({homeRoute:a},(function(){n.setHomeNav()})):n.setState({SHOW_WELCOME:!0}),n.setState({myRouteData:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),n.getSubRouterChildren=function(e,t,o,r){n.props.Root.querySubChild({param:{data:{resources:{upper:e},resourceLevel:o}}},r).then((function(e){if(e){var o=g.a.getItem("communityRoute");if(o){var r=o.communityRoute;n.props.Root.setRouterChild(e.currentRouter.id,r,e.childData),n.setItemWithRoute(r)}else n.setItemWithRoute(t);n.setState({myRouteData:o.communityRoute})}}))},n.setItemWithRoute=function(e){g.a.setItem("communityRoute",{communityRoute:e})},n.renderRoute=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e,t){return e.children?n.renderRoute(e.children):p.a.createElement(b.c,{exact:!0,key:t,path:e.actionUrl,component:x.a[e.actionUrl]})}))},n.state={myRouteData:(g.a.getItem("communityRoute")||{}).communityRoute,homeRoute:(g.a.getItem("communityHomeRoute")||{}).communityHomeRoute,SHOW_WELCOME:!1},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.state,t=e.myRouteData,n=e.homeRoute;if(t&&t.length){if(n)return void this.setHomeNav();this.setState({SHOW_WELCOME:!0})}else this.queryChildResource()}},{key:"componentWillUnmount",value:function(){this.getHomeRoute(this.state.myRouteData),g.a.setItem("communityHomeRoute",{communityHomeRoute:this.homeRoute}),this.setState=function(){}}},{key:"render",value:function(){var e=this.props.Root,t=this.state,n=t.myRouteData,o=t.homeRoute,a=t.SHOW_WELCOME,c="/community"===e.currentUrl?{}:{padding:"1.6rem .2rem .2rem"};return p.a.createElement("div",{className:j.a.community},p.a.createElement(d.a,null,p.a.createElement(C.a,{routerData:n||[],getChildren:this.getSubRouterChildren,localRoute:"communityRoute"}),p.a.createElement(d.a,{style:Object(r.a)({backgroundColor:e.bgColor,position:"relative"},c)},p.a.createElement(H,{style:{background:"#fff",height:"100%"}},p.a.createElement(b.e,null,this.renderRoute(n),p.a.createElement(b.c,{exact:!0,path:"/community/ImageRecord",component:N}),p.a.createElement(b.c,{exact:!0,path:"/community/securityDevice/details",component:w}),p.a.createElement(b.c,{exact:!0,path:"/community/securityWarning/details",component:D}),p.a.createElement(b.c,{exact:!0,path:"/community/bigScreen/videoPlayback/:deviceId",component:W}),p.a.createElement(b.c,{exact:!0,path:"/community/cameraManage/details",component:P}),p.a.createElement(b.c,{exact:!0,path:"/community/buildingDeviceDetail",component:k}),p.a.createElement(b.c,{exact:!0,path:"/community/energyStatistics/:id",component:M}),p.a.createElement(b.c,{exact:!0,path:"/community/patrolRecord/report",component:A}),p.a.createElement(b.c,{exact:!0,path:"/community/intelligentHome/meterHistory",component:U}),p.a.createElement(b.c,{exact:!0,path:"/community/deviceMonitors/alarmInfo",component:L}),p.a.createElement(b.c,{exact:!0,path:"/community/intelligentHome/workbench/houseDetail",component:q}),p.a.createElement(b.c,{exact:!0,path:"/community/household/edit",component:_}),p.a.createElement(b.c,{exact:!0,path:"/community/staff/edit",component:J}),p.a.createElement(b.c,{exact:!0,path:"/community/staff/add",component:J}),p.a.createElement(b.c,{exact:!0,path:"/community/",component:function(){return o?p.a.createElement(b.b,{to:o.actionUrl}):p.a.createElement(T,{show:a})}}))))))}}]),t}(f.Component))||o)||o)||o;t.default=B}}]);