(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37fed72f"],{3296:function(t,e,a){"use strict";a("6701")},6701:function(t,e,a){},bcf9:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{class:t.moveMarkerClassName,attrs:{id:"app"}},[a("div",{staticStyle:{width:"1415px",height:"100%"}},[a("v-tabs",{attrs:{dark:"","background-color":"teal darken-3","show-arrows":"",opaque:"0.8"},model:{value:t.mapUrlIndex,callback:function(e){t.mapUrlIndex=e},expression:"mapUrlIndex"}},[a("v-tabs-slider",{attrs:{color:"teal lighten-3"}}),t._l(t.mapControl.tile,(function(e,c){return a("v-tab",{key:c,attrs:{value:c}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))],2),a("l-map",{ref:"map",attrs:{zoom:t.mapControl.zoom,center:t.mapControl.center,"min-zoom":t.mapControl.minZoom,"max-zoom":t.mapControl.maxZoom,crs:t.mapControl.tile[t.mapUrlIndex].crs,options:t.options},on:{"update:zoom":function(e){return t.$set(t.mapControl,"zoom",e)},"update:center":function(e){return t.$set(t.mapControl,"center",e)},"update:options":function(e){t.options=e}}},[a("l-tile-layer",{ref:"tileLayer",attrs:{url:t.mapControl.tile[t.mapUrlIndex].url,options:{tms:t.mapControl.tile[t.mapUrlIndex].tms}}}),t._l(t.markers.filter((function(t){return"point"===t.type})),(function(e){return a("div",{key:e.id},t._l(e.children,(function(e){return a("l-marker",{key:"mark-"+e.id,ref:"points",refInFor:!0,attrs:{id:e.id,"lat-lng":e,draggable:!1,icon:e.icon},on:{mousedown:function(a){return t.cameraCursorShow(e)}}},[a("l-tooltip",{attrs:{options:{direction:"bottom",interactice:!0}}},[a("span",[t._v(t._s(e.videoItem?e.videoItem.src:e.status))])])],1)})),1)})),t._l(t.markerIconOptions,(function(e,c){return a("div",{key:c},t._l(e,(function(e,n){return a("l-marker-cluster",{key:n,attrs:{options:t.createClusterOptions(e.clusterOption)}},t._l(t.markers.filter((function(t){return"point"!==t.type&&t.type===c})),(function(e){return a("div",{key:"markGroup-"+e.groupId,attrs:{id:e.groupId}},t._l(e.children.filter((function(t){return t.status===n})),(function(e){return a("l-marker",{key:"mark-"+e.id,ref:"points",refInFor:!0,attrs:{id:e.id,"lat-lng":e,draggable:!1,icon:e.icon},on:{mousedown:function(a){return t.cameraCursorShow(e)}}},[a("l-tooltip",{attrs:{options:{direction:"bottom",interactice:!0}}},[a("span",[t._v(t._s(e.videoItem?e.videoItem.name:e.lng+":"+e.lat))])])],1)})),1)})),0)})),1)})),t._l(t.markers.filter((function(t){return"point"===t.type})),(function(t){return a("l-polyline",{key:t.id,attrs:{"lat-lngs":t.children,weight:3,color:"#fffb11"}})}))],2)],1),a("v-card",{staticStyle:{"z-index":"900",position:"absolute",top:"45px",right:"500px",background:"#2b3575a8"},attrs:{"max-width":"220"}},[a("v-card-title",[a("v-combobox",{attrs:{items:t.comboboxItems,label:"输入或选择",outlined:"",dense:""},model:{value:t.comboboxVal,callback:function(e){t.comboboxVal=e},expression:"comboboxVal"}}),a("v-icon",{attrs:{color:"#00c421"}},[t._v("mdi-home-group")]),a("v-icon",{attrs:{color:"#f44a00"}},[t._v("mdi-layers-triple")]),a("v-icon",{attrs:{color:"#eb9201"}},[t._v("mdi-traffic-light")]),a("v-icon",{attrs:{color:"#fe2954"}},[t._v("mdi-hydro-power")]),a("v-icon",{attrs:{color:"#44b900"}},[t._v("mdi-leaf")]),a("v-icon",{attrs:{color:"#00c5f5"}},[t._v("mdi-tractor")]),a("v-icon",{attrs:{color:"#00c5f5"}},[t._v("mdi-briefcase-variant")])],1),a("v-list",{directives:[{name:"scroll",rawName:"v-scroll.self",value:t.onScroll,expression:"onScroll",modifiers:{self:!0}}],staticClass:"overflow-y-auto",staticStyle:{background:"#ffffff00"},attrs:{dense:"",height:"965px"}},t._l(t.markers,(function(e){return a("v-list-group",{key:e.id,staticStyle:{margin:"0px 0px 0px -20px"},attrs:{"sub-group":"",value:!1},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.name))])],1)]},proxy:!0}],null,!0)},t._l(e.children,(function(c,n){return a("v-list-item",{key:n,on:{click:function(a){return t.listClick(e,c)},mousedown:function(e){return t.cameraCursorShow(c)}}},[a("v-list-item-icon",{staticStyle:{"margin-right":"2px"}},[a("v-icon",{style:"font-style: normal;",attrs:{color:t.markerIconOptions[e.type][c.status].markerOption.color},domProps:{textContent:t._s(t.markerIconOptions[e.type][c.status].markerOption.ftContentOrClass||t.markerIconOptions[e.type][c.status].markerOption.bgContentOrClass.replace("mdi ",""))}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text",domProps:{textContent:t._s(c.videoItem?c.videoItem.name:c.id)}})],1)],1)})),1)})),1)],1),a("video",{ref:"videoFlv",staticStyle:{"z-index":"900",position:"absolute",top:"10px",right:"10px",width:"480px",height:"270px"},attrs:{autoplay:"",loop:"",controls:"",controlsList:"nodownload",disablePictureInPicture:""},on:{mouseover:function(e){return t.mouseOverVideo(2)},mouseout:function(e){return t.mouseOutVideo()},mouseup:function(e){return t.videoPlay(2)}}}),a("div",{ref:"videoJs",staticStyle:{"z-index":"900",position:"absolute",top:"300px",right:"10px",width:"480px",height:"270px"}},[a("video",{staticClass:"video-js",staticStyle:{width:"100%",height:"100%"},attrs:{id:"videoJs",controls:""},on:{mouseover:function(e){return t.mouseOverVideo(1)},mouseout:function(e){return t.mouseOutVideo()},mouseup:function(e){return t.videoPlay(1)}}})]),a("canvas",{ref:"canvas",staticStyle:{position:"absolute",top:"0",left:"0","z-index":"901","pointer-events":"none"}})],1)},n=[],i=(a("6cc5"),a("e11e")),s=(a("20d6"),a("2699")),o=a("a40a"),m=a("635f"),l=a("4e2b"),r=a("31dc"),p=(a("a79f"),a("9b40"),a("ca9f")),d=a.n(p),g=(a("3ac1"),a("f0e2")),u=(a("fda2"),a("fc78")),y=a.n(u),h=(a("7d84"),a("8038"));const x=[{type:"application/x-mpegURL",name:"全国风景总览",src:"https://gcalic.v.myalicdn.com/gc/wgw05_1/index.m3u8"},{type:"application/x-mpegURL",name:"黟县宏村月沼",src:"https://gctxyc.liveplay.myqcloud.com/gc/yxhcyz_1/index.m3u8"},{type:"application/x-mpegURL",name:"黟县宏村南湖",src:"https://gcalic.v.myalicdn.com/gc/yxhcnh_1/index.m3u8"},{type:"application/x-mpegURL",name:"黟县西递牌坊",src:"https://gcalic.v.myalicdn.com/gc/yxxdpf_1/index.m3u8"},{type:"application/x-mpegURL",name:"黟县西递半山亭俯瞰",src:"https://gcalic.v.myalicdn.com/gc/yxxdbst_1/index.m3u8"},{type:"application/x-mpegURL",name:"黟县卢村远眺",src:"https://gccncc.v.wscdns.com/gc/yxlcyt_1/index.m3u8"},{type:"application/x-mpegURL",name:"婺源江岭1",src:"https://gctxyc.liveplay.myqcloud.com/gc/wygjt1_1/index.m3u8"},{type:"application/x-mpegURL",name:"婺源江岭2",src:"https://gccncc.v.wscdns.com/gc/wygjt2_1/index.m3u8"},{type:"application/x-mpegURL",name:"黄山始信峰",src:"https://gctxyc.liveplay.myqcloud.com/gc/hssxf_1/index.m3u8"},{type:"application/x-mpegURL",name:"黄山卧云峰",src:"https://gcalic.v.myalicdn.com/gc/hswlf_1/index.m3u8"},{type:"application/x-mpegURL",name:"黄山梦笔生花",src:"https://gccncc.v.wscdns.com/gc/hsmbsh_1/index.m3u8"},{type:"application/x-mpegURL",name:"黄山排云亭",src:"https://gcalic.v.myalicdn.com/gc/hspyt_1/index.m3u8"},{type:"application/x-mpegURL",name:"黄山西海大峡谷",src:"https://gcalic.v.myalicdn.com/gc/hsxhdxg_1/index.m3u8"},{type:"application/x-mpegURL",name:"黄山光明顶",src:"https://gccncc.v.wscdns.com/gc/hsgmd_1/index.m3u8"},{type:"application/x-mpegURL",name:"黄山信兴道",src:"https://gccncc.v.wscdns.com/gc/hsyg_1/index.m3u8"},{type:"application/x-mpegURL",name:"黄山平天矼",src:"https://gcalic.v.myalicdn.com/gc/hsptgz_1/index.m3u8"},{type:"application/x-mpegURL",name:"黄山飞来石",src:"https://gccncc.v.wscdns.com/gc/hsptgy_1/index.m3u8"},{type:"application/x-mpegURL",name:"云台山红石硖",src:"https://gcalic.v.myalicdn.com/gc/ytshsx_1/index.m3u8"},{type:"application/x-mpegURL",name:"泰山主峰",src:"https://gctxyc.liveplay.myqcloud.com/gc/taishan01_1/index.m3u8"},{type:"application/x-mpegURL",name:"泰山迎客松",src:"https://gcalic.v.myalicdn.com/gc/taishan02_1/index.m3u8"},{type:"application/x-mpegURL",name:"泰山大观峰",src:"https://gctxyc.liveplay.myqcloud.com/gc/taishan03_1/index.m3u8"},{type:"application/x-mpegURL",name:"泰山拱北石",src:"https://gcalic.v.myalicdn.com/gc/taishan04_1/index.m3u8"},{type:"application/x-mpegURL",name:"泰山十八盘",src:"https://gcalic.v.myalicdn.com/gc/taishan05_1/index.m3u8"},{type:"application/x-mpegURL",name:"泰山玉皇顶",src:"https://gcalic.v.myalicdn.com/gc/taishan06_1/index.m3u8"},{type:"application/x-mpegURL",name:"泰山天街",src:"https://gccncc.v.wscdns.com/gc/taishan07_1/index.m3u8"},{type:"application/x-mpegURL",name:"云台山小寨沟",src:"https://gccncc.v.wscdns.com/gc/ytsxzg_1/index.m3u8"},{type:"application/x-mpegURL",name:"云台山百家岩",src:"https://gccncc.v.wscdns.com/gc/ytsbjy_1/index.m3u8"},{type:"application/x-mpegURL",name:"云台山茱萸峰",src:"https://gccncc.v.wscdns.com/gc/ytszyf_1/index.m3u8"},{type:"application/x-mpegURL",name:"武夷山玉女峰",src:"https://gcalic.v.myalicdn.com/gc/wysynf_1/index.m3u8"},{type:"application/x-mpegURL",name:"印象大红袍",src:"https://gctxyc.liveplay.myqcloud.com/gc/wysyxdhp_1/index.m3u8"},{type:"application/x-mpegURL",name:"武夷山大红袍茶园",src:"https://gctxyc.liveplay.myqcloud.com/gc/wysdhpcy_1/index.m3u8"},{type:"application/x-mpegURL",name:"张家界迷魂台",src:"https://gccncc.v.wscdns.com/gc/zjjmht_1/index.m3u8"},{type:"application/x-mpegURL",name:"张家界水绕4门",src:"https://gccncc.v.wscdns.com/gc/zjjsrsm_1/index.m3u8"},{type:"application/x-mpegURL",name:"张家界将军列队",src:"https://gctxyc.liveplay.myqcloud.com/gc/zjjjjdl_1/index.m3u8"},{type:"application/x-mpegURL",name:"张家界阿凡达悬浮山",src:"https://gcalic.v.myalicdn.com/gc/zjjafdxfs_1/index.m3u8"},{type:"application/x-mpegURL",name:"凤凰古城",src:"https://gccncc.v.wscdns.com/gc/fhgcdgm_1/index.m3u8"},{type:"application/x-mpegURL",name:"凤凰古城南华山",src:"https://gccncc.v.wscdns.com/gc/fhgcdnhs_1/index.m3u8"},{type:"application/x-mpegURL",name:"卢村远眺",src:"https://gccncc.v.wscdns.com/gc/yxlcyt_1/index.m3u8"},{type:"application/x-mpegURL",name:"宠村月沼",src:"https://gccncc.v.wscdns.com/gc/yxhcyz_1/index.m3u8"},{type:"application/x-mpegURL",name:"少林寺广场",src:"https://gccncc.v.wscdns.com/gc/zsslsgc_1/index.m3u8"},{type:"application/x-mpegURL",name:"水长城镜头一",src:"https://gcalic.v.myalicdn.com/gc/wgw01_1/index.m3u8"},{type:"application/x-mpegURL",name:"水长城镜头二",src:"https://gcalic.v.myalicdn.com/gc/wgw02_1/index.m3u8"},{type:"application/x-mpegURL",name:"水长城镜头三",src:"https://gccncc.v.wscdns.com/gc/wgw03_1/index.m3u8"},{type:"application/x-mpegURL",name:"水长城镜头四",src:"https://gccncc.v.wscdns.com/gc/wgw04_1/index.m3u8"},{type:"application/x-mpegURL",name:"狮子山鸟瞰古城",src:"https://gccncc.v.wscdns.com/gc/ljgcszsnkgc_1/index.m3u8"},{type:"application/x-mpegURL",name:"远眺玉龙雪山",src:"https://gcalic.v.myalicdn.com/gc/ljgcwglytylxs_1/index.m3u8"},{type:"application/x-mpegURL",name:"大研花巷景观台",src:"https://gcalic.v.myalicdn.com/gc/ljgcdyhxgjt_1/index.m3u8"},{type:"application/x-mpegURL",name:"峨眉云海日出",src:"https://gctxyc.liveplay.myqcloud.com/gc/emsarm_1/index.m3u8"},{type:"application/x-mpegURL",name:"贡嘎雪山",src:"https://gctxyc.liveplay.myqcloud.com/gc/emsyh_1/index.m3u8"},{type:"application/x-mpegURL",name:"远眺万佛顶",src:"https://gcalic.v.myalicdn.com/gc/emswfs_1/index.m3u8"},{type:"application/x-mpegURL",name:"普贤菩萨像",src:"https://gcalic.v.myalicdn.com/gc/emspxps_1/index.m3u8"},{type:"application/x-mpegURL",name:"乐山大佛全景",src:"https://gccncc.v.wscdns.com/gc/lsdfgfl_1/index.m3u8"},{type:"application/x-mpegURL",name:"悬空寺全景",src:"https://gcalic.v.myalicdn.com/gc/hsxksqj_1/index.m3u8"},{type:"application/x-mpegURL",name:"恒宗",src:"https://gcalic.v.myalicdn.com/gc/hsxkssqdzrqj_1/index.m3u8"},{type:"application/x-mpegURL",name:"悬空寺侧景",src:"https://gcalic.v.myalicdn.com/gc/hsxkscj_1/index.m3u8"},{type:"application/x-mpegURL",name:"天涯鸟瞰",src:"https://gctxyc.liveplay.myqcloud.com/gc/tyhjtynl_1/index.m3u8"},{type:"application/x-mpegURL",name:"天涯石",src:"https://gctxyc.liveplay.myqcloud.com/gc/tyhjtys_1/index.m3u8"},{type:"application/x-mpegURL",name:"南天一柱",src:"https://gctxyc.liveplay.myqcloud.com/gc/tyhjntyz_1/index.m3u8"},{type:"application/x-mpegURL",name:"日月石",src:"https://gccncc.v.wscdns.com/gc/tyhjrys_1/index.m3u8"},{type:"application/x-mpegURL",name:"雪乡大石碑",src:"https://gcalic.v.myalicdn.com/gc/mdjxxdsb_1/index.m3u8"},{type:"application/x-mpegURL",name:"雪乡梦幻家园",src:"https://gctxyc.liveplay.myqcloud.com/gc/mdjxxmhjyxj_1/index.m3u8"},{type:"application/x-mpegURL",name:"观景台",src:"https://gccncc.v.wscdns.com/gc/mdjxxmhjygjt_1/index.m3u8"},{type:"application/x-mpegURL",name:"嘉峪关长城",src:"https://gctxyc.liveplay.myqcloud.com/gc/jyg04_1/index.m3u8"},{type:"application/x-mpegURL",name:"大水库",src:"https://gccncc.v.wscdns.com/gc/ljgcdsc_1/index.m3u8"},{type:"application/x-mpegURL",name:"中央电视台中塔西",src:"https://gccncc.v.wscdns.com/gc/ztx_1/index.m3u8"},{type:"application/x-mpegURL",name:"中央电视台中塔东",src:"https://gcalic.v.myalicdn.com/gc/ztd_1/index.m3u8"},{type:"application/x-mpegURL",name:"中央电视台中塔南",src:"https://gccncc.v.wscdns.com/gc/ztn_1/index.m3u8"},{type:"application/x-mpegURL",name:"中央电视台中塔北",src:"https://gcalic.v.myalicdn.com/gc/ztb_1/index.m3u8"},{type:"application/x-mpegURL",name:"小布达拉宫",src:"https://gcalic.v.myalicdn.com/gc/bsszxbdlg_1/index.m3u8"},{type:"application/x-mpegURL",name:"棒槌山",src:"https://gccncc.v.wscdns.com/gc/bsszbcs_1/index.m3u8"},{type:"application/x-mpegURL",name:"远眺山庄",src:"https://gcalic.v.myalicdn.com/gc/bssztt_1/index.m3u8"},{type:"application/x-mpegURL",name:"金山",src:"https://gcalic.v.myalicdn.com/gc/bsszjs_1/index.m3u8"}],f={point:{s_01:h["a"].getPresetOpt(0,"轨迹开始").BgBeforeColor("#12a336").FtContentOrClass("起"),s_02:h["a"].getPresetOpt(1,"轨迹过程").BgBeforeColor("#ff2a00"),s_03:h["a"].getPresetOpt(1,"轨迹进行").BgBeforeColor("#ffa400").BgContentOrClass("mdi mdi-human-male"),s_04:h["a"].getPresetOpt(0,"轨迹结束").BgBeforeColor("#952b00").FtContentOrClass("终")},building:{s_01:h["a"].getPresetOpt(2,"房屋楼宇").BgBeforeColor("#00c421").FtContentOrClass("mdi mdi-home-group")},public:{s_01:{name:"公用设施",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#f44a00;",ftContentOrClass:"mdi mdi-layers-triple",ftBeforeStyle:"background:#f44a00;font-size:25px;"}},traffic:{s_01:{name:"交通设施",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#eb9201;",ftContentOrClass:"mdi mdi-traffic-light",ftBeforeStyle:"background:#eb9201;font-size:25px;"}},environment:{s_01:{name:"环境设施",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#fe2954;",ftContentOrClass:"mdi mdi-hydro-power",ftBeforeStyle:"background:#fe2954;font-size:25px;"}},green:{s_01:h["a"].getPresetOpt(2,"绿化设施").BgBeforeColor("#44b900").FtContentOrClass("mdi mdi-leaf")},org:{s_01:{name:"农户资源",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#00c5f5;",ftContentOrClass:"mdi mdi-tractor",ftBeforeStyle:"background:#00c5f5;font-size:25px;"},s_02:{name:"组织机构",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#00c5f5;",ftContentOrClass:"mdi mdi-briefcase-variant",ftBeforeStyle:"background:#00c5f5;font-size:25px;"}},camera:{s_01:{name:"在线设备",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#00f0ff;",ftContentOrClass:"mdi mdi-webcam",ftBeforeStyle:"background:#00f0ff;font-size:25px;"},s_02:h["a"].getPresetOpt(3,"离线设备").BgBeforeColor("#808080").FtContentOrClass("mdi mdi-webcam")},environment2:{s_01:h["a"].getPresetOpt(4,"市容环境").BgBeforeColor("#00c421").FtContentOrClass("环")},advertisement:{s_01:{name:"宣传广告",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#b200e8;",ftContentOrClass:"宣",ftBeforeStyle:"background:#b200e8;font-size:17px;font-weight:bold;color:white;"}},construction:{s_01:{name:"施工管理",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#c77700;",ftContentOrClass:"施",ftBeforeStyle:"background:#c77700;font-size:17px;font-weight:bold;color:white;"}},street:{s_01:{name:"街面秩序",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#fe2954;",ftContentOrClass:"街",ftBeforeStyle:"background:#fe2954;font-size:17px;font-weight:bold;color:white;"}},event:{s_01:{name:"突发事件",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#e10006;",ftContentOrClass:"事",ftBeforeStyle:"background:#e10006;font-size:17px;font-weight:bold;color:white;"}},other:{s_01:{name:"其他事件",bgContentOrClass:"mdi mdi-map-marker",bgBeforeStyle:"font-size:50px;color:#00c5f5;",ftContentOrClass:"其",ftBeforeStyle:"background:#00c5f5;font-size:17px;font-weight:bold;color:white;"}}},v=new i["Proj"].CRS("EPSG:900913","+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",{resolutions:function(){const t=19;let e=[];e[0]=Math.pow(2,18);for(let a=1;a<t;a++)e[a]=Math.pow(2,18-a);return e}(),origin:[0,0],bounds:i["bounds"]([20037508.342789244,0],[0,20037508.342789244])});var b={name:"mapTest",components:{"l-map":s["a"],"l-tile-layer":o["a"],"l-polyline":m["a"],"l-marker":l["a"],"l-tooltip":r["a"],"l-marker-cluster":d.a},created(){this.init()},mounted(){this.videoInit();const t=this;document.onmouseup=function(e){t.cameraCursorHide(),t.ctx.clearRect(0,0,t.canvas.width,t.canvas.height)},this.canvas=t.$refs.canvas,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.ctx=this.canvas.getContext("2d"),document.onmousemove=function(e){t.moveMarker&&(t.ctx.clearRect(0,0,t.canvas.width,t.canvas.height),t.ctx.beginPath(),t.ctx.setLineDash([5,15]),t.ctx.moveTo(e.clientX,e.clientY),t.ctx.lineTo(t.tarVideo.offsetLeft+t.tarVideo.clientWidth/2,t.tarVideo.offsetTop+t.tarVideo.clientHeight/2),t.ctx.lineWidth=3,t.ctx.strokeStyle="yellow",t.ctx.stroke(),t.ctx.closePath())}},data(){return{comboboxItems:[1,2,3,4],comboboxVal:"",scrollInvoked:0,mapUrlIndex:0,tms:!1,crsObj:null,mapControl:{tile:[{name:"公司实景",crs:i["CRS"].EPSG3857,tms:!1,url:"http://tile.keepourfaith.com:8380/tile/satellite/{z}/{x}/{y}.png"},{name:"公司街景",crs:i["CRS"].EPSG3857,tms:!1,url:"http://tile.keepourfaith.com:8380/tile/street/{z}/{x}/{y}.png"},{name:"百度实景",crs:v,tms:!0,url:"https://maponline2.bdimg.com/starpic/?qt=satepc&u=x={x};y={y};z={z};v=009;type=sate&fm=46&app=webearth2&v=009&udt=20210803"},{name:"百度街景",crs:v,tms:!0,url:"http://online1.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=ph&udt=20210803"},{name:"百度街②",crs:v,tms:!0,url:"http://online1.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1"}],zoom:15,minZoom:2,maxZoom:18,center:i["latLng"](39.59930651,118.49209785)},options:{attributionControl:!1,zoomControl:!1,animate:!0},moveMarker:null,moveMarkerClassName:"",markerIconOptions:{},markers:[{name:"轨迹小",type:"point",children:[{id:"1",lng:118.4984922,lat:39.64711339,status:"s_01",videoItem:{name:"video/mp4",type:"video/mp4",src:"https://mp4.vjshi.com/2019-03-23/3b0aace78bc58d7f866cdbe494581e3f.mp4"}},{id:"2",lng:118.4972906,lat:39.647196,status:"s_02",videoItem:{name:"mp4",type:"mp4",src:"https://mp4.vjshi.com/2019-03-23/560ddf5b6b05d8b660937668dd8db1d9.mp4"}},{id:"3",lng:118.4975052,lat:39.65010384,status:"s_02",videoItem:{name:"mp4",type:"mp4",src:"https://view.2amok.com/20200621/4f91d925aa0739c37ae639a3917e76e3.mp4"}},{id:"4",lng:118.4956813,lat:39.65018645,status:"s_02",videoItem:{name:"CCTV5",type:"application/x-mpegURL",src:"http://223.110.245.165/ott.js.chinamobile.com/PLTV/3/224/3221226362/index.m3u8"}},{id:"5",lng:118.495338,lat:39.64625424,status:"s_02",videoItem:{name:"CCTV5+",type:"application/x-mpegURL",src:"http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8"}},{id:"6",lng:118.4938145,lat:39.64628728,status:"s_02",videoItem:{name:"嘉峪关长城",type:"application/x-mpegURL",src:"https://gctxyc.liveplay.myqcloud.com/gc/jyg04_1/index.m3u8"}},{id:"7",lng:118.4937501,lat:39.64557681,status:"s_04",videoItem:{name:"flv",type:"flv",src:"https://mister-ben.github.io/videojs-flvjs/bbb.flv"}}]},{name:"轨迹大",type:"point",children:[{id:"101",lng:118.5101223,lat:39.61312721,status:"s_01",videoItem:{name:"video/mp4",type:"video/mp4",src:"https://mp4.vjshi.com/2019-03-23/3b0aace78bc58d7f866cdbe494581e3f.mp4"}},{id:"102",lng:118.49827766,lat:39.61312721,status:"s_02",videoItem:{name:"mp4",type:"mp4",src:"https://mp4.vjshi.com/2019-03-23/560ddf5b6b05d8b660937668dd8db1d9.mp4"}},{id:"103",lng:118.49844933,lat:39.60902757,status:"s_02",videoItem:{name:"mp4",type:"mp4",src:"https://view.2amok.com/20200621/4f91d925aa0739c37ae639a3917e76e3.mp4"}},{id:"104",lng:118.49218369,lat:39.60942432,status:"s_02",videoItem:{name:"CCTV5",type:"application/vnd.apple.mpegurl",src:"https://cctv5txyh5c.liveplay.myqcloud.com/live/cdrmcctv5plus_1_td.m3u8"}},{id:"105",lng:118.48909378,lat:39.61418514,status:"s_02",videoItem:{name:"CCTV5+",type:"application/x-mpegURL",src:"http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8"}},{id:"106",lng:118.48823547,lat:39.61425126,status:"s_02",videoItem:{name:"嘉峪关长城",type:"application/x-mpegURL",src:"https://gctxyc.liveplay.myqcloud.com/gc/jyg04_1/index.m3u8"}},{id:"107",lng:118.48497391,lat:39.61934232,status:"s_02",videoItem:{name:"flv",type:"flv",src:"https://mister-ben.github.io/videojs-flvjs/bbb.flv"}},{id:"108",lng:118.48025322,lat:39.62403634,status:"s_02"},{id:"109",lng:118.47664833,lat:39.61735883,status:"s_02"},{id:"110",lng:118.47312927,lat:39.61425126,status:"s_02"},{id:"111",lng:118.4645462,lat:39.59831449,status:"s_02"},{id:"112",lng:118.46111298,lat:39.59474309,status:"s_02"},{id:"113",lng:118.47424507,lat:39.58898878,status:"s_02"},{id:"114",lng:118.47596169,lat:39.5952722,status:"s_02"},{id:"115",lng:118.48497391,lat:39.59533833,status:"s_02"},{id:"116",lng:118.49184036,lat:39.59666108,status:"s_02"},{id:"117",lng:118.49209785,lat:39.59930651,status:"s_02"},{id:"118",lng:118.49733353,lat:39.59904197,status:"s_02"},{id:"119",lng:118.49716187,lat:39.59758699,status:"s_02"},{id:"120",lng:118.50488663,lat:39.59646267,status:"s_02"},{id:"121",lng:118.51037979,lat:39.60299496,status:"s_03"}]},{name:"北京",type:"point",children:[{id:"a",lng:116.40014648,lat:39.88655771,status:"s_01"},{id:"b",lng:116.40014648,lat:39.99055771,status:"s_02"}]}],playerFlv:null,playerJs:null}},methods:{makeMarkerObj(t){let e=0,a=.5;for(let c in this.markerIconOptions)if("point"!==c)for(let n in this.markerIconOptions[c]){const i=c+n,s={groupId:i,name:this.markerIconOptions[c][n].name||i,type:c,children:[]};for(let o=0;o<t;o++){let t=null;"camera"===c&&"s_01"===n&&o<72&&(t=x[o]),s.children.push({id:i+o,lng:118+e+Math.random()/10,lat:39+a+Math.random()/10,status:n,videoItem:t})}this.markers.push(s),e+=.1,e>1&&(e=0,a-=.1)}},onScroll(){this.scrollInvoked++},init(){for(let t in f){this.markerIconOptions[t]={};for(let e in f[t]){const a=t+e,c={};c.name=f[t][e].name,c.markerOption=h["a"].createDivOption(a,f[t][e]),c.clusterOption=h["a"].createDivOption("cluster_".concat(a),{ftText:"##",ftBeforeStyle:f[t][e].ftBeforeStyle+"font-size:17px;",ftContentOrClass:f[t][e].ftContentOrClass,bgBeforeStyle:"font-size:45px;",bgStyle:"border-radius:50%;background:radial-gradient("+c.markerOption.color+" 55%, #FFFFFFff 60%, "+c.markerOption.color+" 70%)"}),this.markerIconOptions[t][e]=c}}this.makeMarkerObj(73),this.createMarkerIcon(this.markers)},createMarkerIcon(t){t.forEach(t=>{t.children.forEach(e=>{e.icon=new i["DivIcon"](this.markerIconOptions[t.type][e.status].markerOption)})})},createClusterOptions(t){return{iconCreateFunction:e=>new i["DivIcon"]({html:t.html.replace("##",e.getChildCount()),className:t.className,iconSize:t.iconSize})}},cameraCursorHide(){this.moveMarker&&(this.moveMarker=null,this.moveMarkerClassName="",this.$refs.map.mapObject.dragging.enable())},cameraCursorShow(t){this.markerActive(t),t.videoItem&&(this.moveMarker=t,this.moveMarkerClassName="camera_cursor",this.tarVideo=t.videoItem.type.indexOf("/")>0?this.$refs.videoJs:this.videoFlv,this.$refs.map.mapObject.dragging.disable())},markerActive(t){this.$refs.points.forEach(e=>{e.mapObject._icon&&(e.mapObject._icon.classList.remove("active"),t&&e.$attrs.id===t.id&&e.mapObject._icon.classList.add("active"))})},listClick(t,e){"point"===t.type?this.$refs.map.mapObject.flyToBounds(i["latLngBounds"](t.children)):this.$refs.map.mapObject.flyTo(i["latLng"](e.lat,e.lng))},videoInit(){this.videoFlv=this.$refs.videoFlv,this.playerJs=Object(g["a"])("videoJs",{bigPlayButton:!1,textTrackDisplay:!1,posterImage:!0,errorDisplay:!1,controlBar:!0,playbackRates:[.7,1,1.5,2],language:"zh-CN",notSupportedMessage:"此视频暂时无法播放,请稍后再试",techOrder:["html5","flvjs"],flvjs:{mediaDataSource:{isLive:!1,cors:!0,withCredentials:!1}}})},mouseOverVideo(t){if(this.moveMarker){const e=this.moveMarker.videoItem;e&&e.src&&(e.type.indexOf("/")>0?1===t&&(this.moveMarkerClassName=this.moveMarkerClassName+" yes"):2===t&&(this.moveMarkerClassName=this.moveMarkerClassName+" yes"))}},mouseOutVideo(){this.moveMarkerClassName&&(this.moveMarkerClassName=this.moveMarkerClassName.replace(" yes",""))},videoPlay(t){if(this.moveMarkerClassName.indexOf("yes")>0){const e=this.moveMarker.videoItem;if(!e||!e.src)return;1===t?this.jsPlay(e):this.flvPlay(e)}},flvPlay(t){null!=this.playerFlv&&(this.playerFlv.pause(),this.playerFlv.unload(),this.playerFlv.detachMediaElement(),this.playerFlv.destroy(),this.playerFlv=null),this.playerFlv=y.a.createPlayer({type:t.type,isLive:!0,url:t.src}),this.playerFlv.attachMediaElement(this.videoFlv),this.playerFlv.load()},jsPlay(t){this.playerJs.src([{type:t.type,src:t.src}]),this.playerJs.play()}}},_=b,C=(a("3296"),a("2877")),k=a("6544"),w=a.n(k),L=a("7496"),O=a("b0af"),U=a("99d9"),R=a("2b5d"),z=a("132d"),I=a("8860"),j=a("56b0"),S=a("da13"),B=a("5d23"),V=a("34c3"),M=a("71a3"),F=a("fe57"),P=a("9a96"),q=a("269a"),T=a.n(q),N=a("f977"),$=Object(C["a"])(_,c,n,!1,null,null,null);e["default"]=$.exports;w()($,{VApp:L["a"],VCard:O["a"],VCardTitle:U["a"],VCombobox:R["a"],VIcon:z["a"],VList:I["a"],VListGroup:j["a"],VListItem:S["a"],VListItemContent:B["a"],VListItemIcon:V["a"],VListItemTitle:B["b"],VTab:M["a"],VTabs:F["a"],VTabsSlider:P["a"]}),T()($,{Scroll:N["b"]})}}]);
//# sourceMappingURL=chunk-37fed72f.d8c237c3.js.map