System.register("chunks:///_virtual/AudioMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,i,t,o,u,c,a;return{setters:[function(n){e=n.applyDecoratedDescriptor,i=n.inheritsLoose,t=n.initializerDefineProperty,o=n.assertThisInitialized},function(n){u=n.cclegacy,c=n._decorator,a=n.Component}],execute:function(){var r,s,l,f,p;u._RF.push({},"c694bIjmfVIOYX3wfpojN5A","AudioMgr",void 0);var d=c.ccclass,g=c.property;n("AudioMgr",d("AudioMgr")(((p=function(n){function e(){var e;return e=n.call(this)||this,t(e,"isBgmEnabled",l,o(e)),t(e,"isSoundEffectEnabled",f,o(e)),e}i(e,n),e.getInstance=function(){return e.instance||(e.instance=new e),e.instance};var u=e.prototype;return u.playBackgroundMusic=function(n){n&&!n.playing&&this.isBgmEnabled&&n.play()},u.stopBackgroundMusic=function(n){n&&n.playing&&n.stop()},u.pauseBackgroundMusic=function(n){n&&n.playing&&n.pause()},u.resumeBackgroundMusic=function(n){n&&!n.playing&&n.play()},u.setVolume=function(n,e){n&&(n.volume=e)},u.playSoundEffect=function(n){n&&this.isSoundEffectEnabled&&n.play()},u.stopSoundEffect=function(n){n&&n.playing&&n.stop()},u.setBackgroundMusicEnabled=function(n){this.isBgmEnabled=n},u.setSoundEffectEnabled=function(n){this.isSoundEffectEnabled=n},e}(a)).instance=null,l=e((s=p).prototype,"isBgmEnabled",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),f=e(s.prototype,"isSoundEffectEnabled",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),r=s))||r);u._RF.pop()}}}));

System.register("chunks:///_virtual/Cup.ts",["./rollupPluginModLoBabelHelpers.js","cc","./waternew.ts"],(function(t){var n,o,e,i,r,s,h,a,c,l,u;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,i=t.Button,r=t.Color,s=t.tween,h=t.v3,a=t.v2,c=t.UITransform,l=t.Component},function(t){u=t.waternew}],execute:function(){var f;o._RF.push({},"45e3aMBjF1OWa1bwcEkCWwc","Cup",void 0);var d=e.ccclass,g=(e.property,t("WaterColors",["#FF0000","#155DEF","#F2C90F","#004616","#E4584F","#00B38A","#DD2E44","#E5C69A","#65DC8E","#B068F0","#F010BF","#538849","#000080","#FF0000","#00ff00","#0000EF","#ffff00"])),w=.8;t("default",d(f=function(t){function o(){for(var n,o=arguments.length,e=new Array(o),i=0;i<o;i++)e[i]=arguments[i];return(n=t.call.apply(t,[this].concat(e))||this)._waternew=null,n.onClick=null,n.info=null,n.tween=null,n}n(o,t);var e=o.prototype;return e.onLoad=function(){this._waternew=this.node.getComponent(u)},e.start=function(){console.log("cups start"),this.node.getComponent(i).node.on(i.EventType.CLICK,this.onBtn_click,this)},e.onBtn_click=function(){this.isPouring()||this.onClick&&this.onClick(this)},e.isPouring=function(){return Math.abs(this.node.angle)>1},e.initWater=function(){for(var t=this.info,n=[],o=0,e=3;e>=0;e--){var i=t.colorIds[e];if(0!=i){var s=n[n.length-1];s&&s.colorId==i?s.height+=1/4:n.push({height:1/4,colorId:i}),o+=1/4}}n.forEach((function(t){var n=g[t.colorId]||"#538849";t.color=(new r).fromHEX(n),t.height*=w})),o*=w,console.log("initWater",n),this._waternew.initInfos(n,o)},e.setCupInfo=function(t,n){this.info=t,this.onClick=n,this.initWater(),this.reset()},e.update=function(){this._waternew.skewAngle!=this.node.angle&&(this._waternew.skewAngle=this.node.angle)},e.setPourOutCallback=function(t,n){this._waternew.setPourOutCallback(function(){t&&t(this)}.bind(this),function(){this.tween&&(this.tween.stop(),this.tween=null),n&&n(this)}.bind(this))},e.setPourInCallback=function(t){this._waternew.setPourInCallback(function(){var n=this.checkIsFinshed();t&&t(this,n)}.bind(this))},e.checkIsFinshed=function(){for(var t=!0,n=this.info.colorIds,o=null,e=0,i=0;i<4;i++){if(null==o&&(o=n[i]),o!=n[i]){t=!1;break}0==n[i]&&e++}return 4==e&&(t=!0),t},e.moveToPour=function(t,n,o,e){var i=this;this.setPourOutCallback(o,e);var r=this._waternew.getPourStartAngle(),a=this._waternew.getPourEndAngle();this._waternew.onStartPour(),n&&(r*=-1,a*=-1);this.tween=s(this.node).set({angle:0}).to(.5,{position:h(t.x,t.y),angle:r}).to(.8,{angle:a}).call((function(){i.tween=null})).start();for(var c=this.getTop(),l=this.info.colorIds,u=0;u<4;u++){var f=l[u];if(0!=f){if(c.topColorId!=f)break;l[u]=0}}},e.startAddWater=function(t,n,o){this.setPourInCallback(o);for(var e=0,i=3;i>=0&&(0!=this.info.colorIds[i]||(this.info.colorIds[i]=t,++e!=n));i--);var s=g[t]||"#538849";this._waternew.addInfo({colorId:t,height:n/4*w,color:(new r).fromHEX(s)})},e.addWaterImmediately=function(t,n){for(var o=0,e=3;e>=0&&(0!=this.info.colorIds[e]||(this.info.colorIds[e]=t,++o!=n));e--);this.initWater()},e.removeTopWaterImmediately=function(t){for(var n=0,o=this.getTop(),e=this.info.colorIds,i=0;i<4;i++){var r=e[i];if(0!=r){if(o.topColorId!=r)break;if(e[i]=0,++n>=t)break}}return this.initWater(),o},e.getTop=function(){for(var t=this.info.colorIds,n=0,o=0,e=0,i=0;i<4;i++)if(0!=t[i]){if(0!=o&&o!=t[i])break;o=t[i],e++}else n++;return{emptyNum:n,topColorId:o,topColorNum:e,colorHex:g[o]||"#538849"}},e.reset=function(){this.node.angle=0,this._waternew.skewAngle=0},e.setPourAnchor=function(t){var n=a(3,2);n.x=t?this.node.getComponent(c).width-n.x:n.x,n.y=this.node.getComponent(c).height-n.y,n.x=n.x/this.node.getComponent(c).width,n.y=n.y/this.node.getComponent(c).height,this.setAnchor(n)},e.setNormalAnchor=function(){this.setAnchor(a(.5,.5))},e.setAnchor=function(t){var n=this.node.getComponent(c),o=(n.contentSize,n.anchorPoint.clone()),e=this.node.getPosition();n.setAnchorPoint(t);var i,r,s,h,l=a(t.x-o.x,t.y-o.y),u=a(l.x*n.width,l.y*n.height);i=u,r=this.node.angle,s=function(t){for(;t>360;)t-=360;for(;t<-360;)t+=360;return t%360*Math.PI/180}(r),(h=a()).x=i.x*Math.cos(s)-i.y*Math.sin(s),h.y=i.x*Math.sin(s)+i.y*Math.cos(s),u=h,e.x+=u.x,e.y+=u.y,this.node.setPosition(e);var f=this.node.getChildByName("cupbk");p(this.node,f,t);var d=this.node.getChildByName("Mask").getChildByName("Graphics");p(this.node,d,t);var g=this.node.getChildByName("Mask");p(this.node,g,t),this._waternew.setAnchorType(t)},e.getWaterSurfacePosY=function(t){void 0===t&&(t=!1);var n=(4-this.getTop().emptyNum)/4;n<.02?n=.02:t&&(n-=.2),n*=w,n-=.5;var o=h(0,this._waternew.node.getComponent(c).height*n);return(o=this._waternew.node.getComponent(c).convertToWorldSpaceAR(o)).y},o}(l))||f);function p(t,n,o,e){n.getComponent(c).setAnchorPoint(o)}o._RF.pop()}}}));

System.register("chunks:///_virtual/CupMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Cup.ts","./waterFlow.ts","./env","./AudioMgr.ts"],(function(e){var t,n,o,i,s,l,r,a,u,c,h,p,d,g,f,m,y,v,C,b,S,_,I,P,L,N,x,w,A,T;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized,s=e.createForOfIteratorHelperLoose,l=e.createClass,r=e.asyncToGenerator,a=e.regeneratorRuntime},function(e){u=e.cclegacy,c=e._decorator,h=e.JsonAsset,p=e.Prefab,d=e.AudioSource,g=e.Node,f=e.Layers,m=e.UITransform,y=e.Button,v=e.Label,C=e.sys,b=e.v3,S=e.view,_=e.tween,I=e.Component,P=e.Color,L=e.instantiate,N=e.Layout},function(e){x=e.default},function(e){w=e.WaterFlow},function(e){A=e.DEV},function(e){T=e.AudioMgr}],execute:function(){var B,k,R,O,E,F,W,z,D,M,H,J,j,K,X;u._RF.push({},"53b1dfjE4NDFbenLkaXPSt6","CupMgr",void 0);var V=c.ccclass,Y=c.property,U=c.executeInEditMode,G="level",Z="last_cfg",q="action_history",Q="remaining_plays",$=((B={})[1]=[0,1],B[2]=[80,1],B[3]=[50,1],B[4]=[40,.9],B[5]=[30,.8],B[6]=[30,.65],B[7]=[20,.6,60],B[8]=[10,.55,80],B);e("CupMgr",(k=Y(h),R=Y(p),O=Y(d),E=Y(d),F=Y(d),W=Y({tooltip:A}),V(z=U((M=t((D=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return t=e.call.apply(e,[this].concat(s))||this,o(t,"levelCfg",M,i(t)),o(t,"pfb",H,i(t)),t.backOneStepbtn=null,t.resetBtn=null,t.nextLevelBtn=null,t.addCupBtn=null,o(t,"clickSound",J,i(t)),o(t,"pourWaterSound",j,i(t)),o(t,"completeSound",K,i(t)),t.levelnamelabel=null,t.remainingPlaysLabel=null,t._level=1,t.curCfg=[],t.remainingPlays=500,t._flow=null,o(t,"_debugLevel",X,i(t)),t._cups=[],t.layout_v=null,t.selected=null,t._actions=[],t}n(t,e);var u=t.prototype;return u.getFlow=function(){if(this._flow)return this._flow;var e=new g("water_flow");return e.layer=f.Enum.UI_2D,e.parent=this.node,e.addComponent(m),this._flow=e.addComponent(w),this._flow},u.onLoad=function(){this.backOneStepbtn=this.node.getChildByName("btns").getChildByName("backOneStepbtn").getComponent(y),this.backOneStepbtn.node.on(y.EventType.CLICK,this.backOneStep,this),this.resetBtn=this.node.getChildByName("btns").getChildByName("resetBtn").getComponent(y),this.resetBtn.node.on(y.EventType.CLICK,this.reset,this),this.nextLevelBtn=this.node.getChildByName("btns").getChildByName("nextLevelBtn").getComponent(y),this.nextLevelBtn.node.on(y.EventType.CLICK,this.nextLevel,this),this.addCupBtn=this.node.getChildByName("btns").getChildByName("addCupBtn").getComponent(y),this.addCupBtn.node.on(y.EventType.CLICK,this.addCup,this),this.levelnamelabel=this.node.getChildByName("level").getChildByName("levelname").getComponent(v),this.remainingPlaysLabel=this.node.getChildByName("level").getChildByName("remainingPlays").getComponent(v),this.remainingPlays=ee(C.localStorage.getItem(Q)||500),this.updateRemainingPlaysDisplay(),this._level=ee(C.localStorage.getItem(G)||1);var e=C.localStorage.getItem(Z);if(e)try{this.curCfg=JSON.parse(e)}catch(e){this.initCfg()}else this.initCfg();if(e=C.localStorage.getItem(q))try{this._actions=JSON.parse(e)}catch(e){}this.createCups()},u.initCfg=function(){console.log("initCfg"),this.curCfg=[];for(var e=this.levelCfg.json.levels[this._level-1],t=0;t<e.length;){var n={colorIds:[e[t],e[t+1]||0,e[t+2]||0,e[t+3]||0]};this.curCfg.push(n),t+=4}},u.createCups=function(){var e=r(a().mark((function e(){var t,n,o,i,l,r,u,c,h,p,d,f,y,v,C,S,_,I,P,w,A,T,B,k,R,O,E,F,W;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=function(e,t,n){var o=new g(n);o.parent=t,o.addComponent(m);var i=o.addComponent(N);return i.type=e,i.resizeMode=N.ResizeMode.CONTAINER,i},this.layout_v&&this.layout_v.node.destroyAllChildren(),this._cups=[],this.selected=null,this._actions=[],t=this.curCfg,0!=(n=this.curCfg.length)){e.next=9;break}return e.abrupt("return");case 9:for(o=0;o<n;o++)i=t[o],(l=L(this.pfb)).parent=this.node,l.name="cup_"+o,(r=l.getComponent(x)).setCupInfo(i,this.onClickCup.bind(this)),this._cups.push(r);if(null==this.layout_v&&(this.layout_v=u(N.Type.VERTICAL,this.node,"layout_v"),this.layout_v.node.setSiblingIndex(1)),c=this._cups[0].node.getComponent(m).contentSize,h=[],n<=4){for(p=[],d=0;d<this._cups.length;d++)p.push(d);h.push(p)}else if(n<=15){for(f=[],y=0,v=n/2;y<v;y++)f.push(y);for(h.push(f),f=[];y<n;y++)f.push(y);h.push(f),f=[]}for(C=[],S=1,_=0;_<h.length;_++){for((I=u(N.Type.HORIZONTAL,this.layout_v.node,"layout_h_"+_)).node.getComponent(m).height=c.height,P=h[_],w=0;w<P.length;w++)A=P[w],this._cups[A].node.parent=I.node;S=Math.max(S,I.node.children.length),(T=$[S][0])!=I.spacingX&&(I.spacingX=T),C.push(I)}for(this.layout_v.enabled=!0,B=$[S][1],this.layout_v.node.scale=b(B,B,B),this.layout_v.spacingY=$[S][2]||40,k=0,R=C;k<R.length;k++)(O=R[k]).updateLayout(),O.enabled=!1;for(this.layout_v.updateLayout(),this.layout_v.enabled=!1,E=s(this._cups);!(F=E()).done;)(W=F.value).orignPt=W.node.position.clone();this.levelnamelabel.string="第 "+this._level+" 关";case 26:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),u.onClickCup=function(e){this.selected?this.selected==e?(this.doSelect(e,!1),this.selected=null):this.checkPour(this.selected,e)?this.startPour(this.selected,e):(this.doSelect(this.selected,!1),this.selected=null):(this.selected=e,this.doSelect(e,!0))},u.checkPour=function(e,t){var n=e.getTop(),o=t.getTop();return 0!=n.topColorId&&(0==o.topColorId||0!=o.emptyNum&&(!(n.topColorNum>o.emptyNum)&&n.topColorId==o.topColorId))},u.startPour=function(e,t){var n=this;t.node.setSiblingIndex(0),t.node.parent.setSiblingIndex(0),e.node.setSiblingIndex(10),e.node.parent.setSiblingIndex(10);var o=e.getTop(),i=b(t.node.position),s=t.node.parent.getComponent(m).convertToWorldSpaceAR(i),l=S.getVisibleSize(),r=s.x>.5*l.width;Math.abs(s.x-.5*l.width)<2&&(r=e.node.parent.getComponent(m).convertToWorldSpaceAR(b(e.node.position)).x<.5*l.width);i.y+=60+.5*t.node.getComponent(m).height;i.x=i.x+(r?-0:0),i=t.node.parent.getComponent(m).convertToWorldSpaceAR(i),e.setPourAnchor(r),i=e.node.parent.getComponent(m).convertToNodeSpaceAR(i);var a=this.getFlow();a.setLineScale(this.layout_v.node.scale.x);this.selected=null,e.moveToPour(i,r,function(){T.getInstance().playSoundEffect(n.pourWaterSound);var i=e.node.getComponent(m).convertToWorldSpaceAR(b());i=a.node.parent.getComponent(m).convertToNodeSpaceAR(i);var s=b(i.x,t.getWaterSurfacePosY());(s=a.node.parent.getComponent(m).convertToNodeSpaceAR(s)).x=i.x,a.strokeColor=(new P).fromHEX(o.colorHex),a.playFlowAni(i,s,.2,!1,(function(){t.startAddWater(o.topColorId,o.topColorNum,(function(i,s){n.onPourOneFinished(e,t,o.topColorId,o.topColorNum)}))}))}.bind(this),function(){T.getInstance().stopSoundEffect(this.pourWaterSound),console.log("onPourFinish",e.name,t.name);var n=e.node.getComponent(m).convertToWorldSpaceAR(b());n=a.node.parent.getComponent(m).convertToNodeSpaceAR(n);var o=b(n.x,t.getWaterSurfacePosY(!0));(o=a.node.parent.getComponent(m).convertToNodeSpaceAR(o)).x=n.x,a.playFlowAni(n,o,.2,!0,(function(){a.clear()})),e.setNormalAnchor();var i=e.orignPt;_(e.node).delay(.7).to(.5,{position:i,angle:0},{easing:"sineOut"}).call((function(){e.node.setSiblingIndex(0),e.node.parent.setSiblingIndex(0)})).start()}.bind(this))},u.doSelect=function(e,t){var n=e.orignPt,o=n.y+(t?.2*e.node.getComponent(m).height:0);_(e.node).stop(),_(e.node).to(.2,{position:b(n.x,o)}).start()},u.onPourOneFinished=function(e,t,n,o){console.log("onPourOneFinished",e.name,t.name,n,o);var i=this._cups.indexOf(e),s=this._cups.indexOf(t);5==this._actions.length&&this._actions.shift(),this._actions.push({from:i,to:s,colorId:n,num:o}),this.checkIsAllFinished()?(this._level++,C.localStorage.setItem(G,this._level+""),this.node.emit("level_finish"),T.getInstance().playSoundEffect(this.completeSound)):this.node.emit("do_pour"),C.localStorage.setItem(Z,JSON.stringify(this.curCfg)),C.localStorage.setItem(q,JSON.stringify(this._actions))},u.getActionNum=function(){return this._actions.length},u.backOneStep=function(){T.getInstance().playSoundEffect(this.clickSound);var e=this._actions.pop();if(null==e)return!1;var t=e.from,n=e.to,o=e.num,i=e.colorId,s=this._cups[n],l=this._cups[t];return!s.isPouring()&&!l.isPouring()&&(s.removeTopWaterImmediately(o),l.addWaterImmediately(i,o),!0)},u.addCup=function(){T.getInstance().playSoundEffect(this.clickSound);this.curCfg.push({colorIds:[0,0,0,0]}),this.createCups()},u.decreaseRemainingPlays=function(){return this.remainingPlays>0&&(this.remainingPlays--,this.updateRemainingPlaysDisplay(),!0)},u.resetRemainingPlays=function(){this.remainingPlays=5,this.updateRemainingPlaysDisplay()},u.updateRemainingPlaysDisplay=function(){this.remainingPlaysLabel&&(this.remainingPlaysLabel.string="剩余次数: "+this.remainingPlays),C.localStorage.setItem(Q,this.remainingPlays.toString())},u.nextLevel=function(){T.getInstance().playSoundEffect(this.clickSound),this.decreaseRemainingPlays(),this.initCfg(),this.createCups()},u.reset=function(){T.getInstance().playSoundEffect(this.clickSound),C.localStorage.clear(),this.resetRemainingPlays(),this.initCfg(),this.createCups()},u.getLevel=function(){return this._level},u.checkIsAllFinished=function(){for(var e,t=s(this._cups);!(e=t()).done;){if(!e.value.checkIsFinshed())return!1}return!0},l(t,[{key:"debugLevel",get:function(){return this._debugLevel},set:function(e){this._debugLevel=e,this._level=e,this.nextLevel()}}]),t}(I)).prototype,"levelCfg",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=t(D.prototype,"pfb",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=t(D.prototype,"clickSound",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(D.prototype,"pourWaterSound",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(D.prototype,"completeSound",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(D.prototype,"_debugLevel",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),t(D.prototype,"debugLevel",[W],Object.getOwnPropertyDescriptor(D.prototype,"debugLevel"),D.prototype),z=D))||z)||z));function ee(e){if(null==e)return 0;var t=parseInt(e);return Number.isNaN(t)&&(t=0),t}u._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AudioMgr.ts","./Cup.ts","./CupMgr.ts","./main.ts","./waterFlow.ts","./waternew.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/main.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts"],(function(t){var e,n,i,a,l,o,r,u,c,s,p,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){l=t.cclegacy,o=t._decorator,r=t.Node,u=t.AudioSource,c=t.Slider,s=t.Button,p=t.Component},function(t){m=t.AudioMgr}],execute:function(){var b,h,g,d,f,y,v,M,_,k,C,B,S;l._RF.push({},"154b8bpiQdHlbxH2tUCigfl","main",void 0);var z=o.ccclass,w=o.property;t("main",(b=z("main"),h=w(r),g=w(r),d=w(u),f=w(u),y=w(c),b((_=e((M=function(t){function e(){for(var e,n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return e=t.call.apply(t,[this].concat(l))||this,i(e,"mainpanel",_,a(e)),i(e,"gamepanel",k,a(e)),i(e,"bgMusic",C,a(e)),i(e,"btnbackMusic",B,a(e)),i(e,"volumeSlider",S,a(e)),e.btn_start=null,e.btn_main=null,e.btn_theme=null,e.bg_sprite=null,e}n(e,t);var l=e.prototype;return l.onLoad=function(){this.mainpanel=this.node.getChildByName("HomePanel"),this.gamepanel=this.node.getChildByName("LevelPanel"),this.btn_start=this.mainpanel.getChildByName("btn_start").getComponent(s),this.btn_start.node.on("click",this.startGame,this),this.btn_main=this.gamepanel.getChildByName("home_btn").getComponent(s),this.btn_main.node.on("click",this.backToMain,this),this.btn_theme=this.mainpanel.getChildByName("btn_theme").getComponent(s),this.btn_theme.node.active=!1,this.initBackgroundMusic()},l.initBackgroundMusic=function(){m.getInstance().setVolume(this.bgMusic,.5),m.getInstance().playBackgroundMusic(this.bgMusic)},l.onVolumeSliderChange=function(t){this.bgMusic&&(this.bgMusic.volume=t.progress)},l.backToMain=function(){m.getInstance().playSoundEffect(this.btnbackMusic),this.gamepanel.active=!1,this.mainpanel.active=!0},l.startGame=function(){m.getInstance().playSoundEffect(this.btnbackMusic),this.mainpanel.active=!1,this.gamepanel.active=!0},l.start=function(){this.mainpanel.active=!0,this.gamepanel.active=!1},l.update=function(t){},e}(p)).prototype,"mainpanel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(M.prototype,"gamepanel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(M.prototype,"bgMusic",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(M.prototype,"btnbackMusic",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(M.prototype,"volumeSlider",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=M))||v));l._RF.pop()}}}));

System.register("chunks:///_virtual/waterFlow.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,i,e,n,s,r,c;return{setters:[function(t){o=t.inheritsLoose,i=t.createClass},function(t){e=t.cclegacy,n=t.Graphics,s=t.Vec3,r=t.tween,c=t.v3}],execute:function(){e._RF.push({},"51f02ckFltBi59Rd8GEhFsd","waterFlow",void 0);t("WaterFlow",function(t){function e(){for(var o,i=arguments.length,e=new Array(i),n=0;n<i;n++)e[n]=arguments[n];return(o=t.call.apply(t,[this].concat(e))||this)._toPt=c(),o.from=c(),o}o(e,t);var h=e.prototype;return h.onLoad=function(){t.prototype.onLoad.call(this),this.lineWidth=6,this.lineCap=n.LineCap.ROUND},h.playFlowAni=function(t,o,i,e,n){this.clear();e?s.copy(this.from,o):s.copy(this.from,t),this.moveTo(this.from.x,this.from.y);r(this).set({toPt:t}).to(i,{toPt:o}).call((function(){n&&n()})).start()},h.setLineScale=function(t){this.lineWidth=6*t},i(e,[{key:"toPt",get:function(){return this._toPt},set:function(t){s.copy(this._toPt,t),this.clear(),this.moveTo(this.from.x,this.from.y),this.lineTo(this._toPt.x,this._toPt.y),this.stroke()}}]),e}(n));e._RF.pop()}}}));

System.register("chunks:///_virtual/waternew.ts",["./rollupPluginModLoBabelHelpers.js","cc","./env"],(function(i){var t,h,s,e,n,o,r,a,c,p,u,g,l;return{setters:[function(i){t=i.applyDecoratedDescriptor,h=i.inheritsLoose,s=i.initializerDefineProperty,e=i.assertThisInitialized,n=i.createClass},function(i){o=i.cclegacy,r=i._decorator,a=i.Size,c=i.UITransform,p=i.Graphics,u=i.Node,g=i.Component},function(i){l=i.DEV}],execute:function(){var d,f,w,z,T;o._RF.push({},"9cadfC1xDlJWYDFUk3T7t/0","waternew",void 0);var I=r.ccclass,v=r.property,A=function(i){return i[i.none=0]="none",i[i.in=1]="in",i[i.out=2]="out",i}(A||{}),y=function(i){return i[i.center=0]="center",i[i.leftTop=1]="leftTop",i[i.rightTop=2]="rightTop",i}(y||{});i("waternew",(d=I("waternew"),f=v({tooltip:l}),d((T=t((z=function(i){function t(){for(var t,h=arguments.length,n=new Array(h),o=0;o<h;o++)n[o]=arguments[o];return(t=i.call.apply(i,[this].concat(n))||this)._action=A.none,t.cupsize=new a(100,160),t.graphics=null,t.infos=[],t.stopIdx=-1,t.curIdx=0,t.anchortype=y.center,t._ratio=1,s(t,"_skewAngle",T,e(t)),t.curdrawH=0,t.totaldrawH=0,t.waterheight=0,t.onOutStart=null,t.onOutFinish=null,t.onInFInish=null,t.addHeight=0,t}h(t,i);var o=t.prototype;return o.start=function(){},o.onLoad=function(){this.cupsize=this.node.getComponent(c).contentSize,this.waterheight=this.cupsize.height/5;var i=this.node.getChildByName("Mask").getChildByName("Graphics");this.graphics=i.getComponent(p),this.graphics.lineWidth=1,this.node.on(u.EventType.ANCHOR_CHANGED,(function(){}),this),this._ratio=this.node.getComponent(c).height/this.node.getComponent(c).width},o.update=function(i){this._action==A.out?this.pourStep():this._action==A.in&&this.addStep()},o.setPourOutCallback=function(i,t){this.onOutStart=i,this.onOutFinish=t},o.setPourInCallback=function(i){this.onInFInish=i},o.setAnchorType=function(i){.5==i.x?this.anchortype=y.center:i.x<.1?this.anchortype=y.leftTop:this.anchortype=y.rightTop,this.drawGraphicsAll()},o.addStep=function(){if(!(this.curIdx<0)){var i=this.infos[this.curIdx];i.height=Math.round(1e3*(i.height+.015))/1e3,i.height>=this.addHeight&&(i.height=this.addHeight,this._action=A.none,this.onInFInish&&(this.onInFInish(),this.onInFInish=null)),this.updateAngleHeight()}},o.pourStep=function(){if(this.curIdx<0)this._action=A.none;else{for(var i=0,t=0;t<=this.curIdx;t++)i+=this.infos[t].height;var h=!1,s=this.skewAngle%360*Math.PI/180,e=Math.abs(Math.tan(s));h=i<.5?e>this._ratio/(2*i):e>2*this._ratio*(1-i);var n=this.infos[this.curIdx];(h||n.height<.05)&&(this.onOutStart&&(this.onOutStart(),this.onOutStart=null),n.height=Math.round(1e3*(n.height-.015))/1e3,n.height<.01&&(n.height=0,this.infos.pop(),this.curIdx--,this.curIdx==this.stopIdx&&(this.onOutFinish&&(this.onOutFinish(),this.onOutFinish=null),this._action=A.none)),this.updateAngleHeight())}},o.updateAngleHeight=function(){this.drawGraphicsAll()},o.initInfos=function(i,t){this.infos=i,this.curIdx=this.infos.length-1,this.totaldrawH=t,console.log("waternew initInfos",this.infos),this.initSizeColor()},o.addInfo=function(i){this.addHeight=i.height,i.height=0,this.infos.push(i),this._action=A.in,this.curIdx=this.infos.length-1,this.initSizeColor()},o.initSizeColor=function(){this.drawGraphicsAll()},o.drawGraphicsAll=function(){this.graphics&&this.graphics.clear(),this.totaldrawH=0;for(var i=0;i<this.infos.length;i++)this.totaldrawH+=this.infos[i].height;this.curdrawH=this.totaldrawH;for(var t=this.infos.length-1;t>=0;t--)this.drawGraphics(t)},o.drawGraphics=function(i){if(this.graphics){var t=this.node.eulerAngles.z,h=this.infos[i].color,s=this.infos[i].height,e=this.curdrawH*this.cupsize.height;this.curdrawH-=s;var n=this.cupsize.width,o=n*e,r=function(i,t){var h=t*(Math.PI/180);return i*Math.tan(h)}(n,t);this.graphics.lineWidth=0,this.graphics.fillColor=h;var a=Math.abs(r);if(a>=2*e){var c=function(i,t){var h=t*(Math.PI/180),s=Math.sqrt(2*i/Math.tan(h));return{legA:s*Math.tan(h),legB:s}}(o,Math.abs(t));if(this.anchortype==y.center)if(t>0)this.graphics.moveTo(-this.cupsize.width/2,-this.cupsize.height/2),this.graphics.lineTo(-this.cupsize.width/2,c.legA-this.cupsize.height/2),this.graphics.lineTo(c.legB-this.cupsize.width/2,0-this.cupsize.height/2);else{if(!(t<0))return;this.graphics.moveTo(this.cupsize.width/2,-this.cupsize.height/2),this.graphics.lineTo(this.cupsize.width/2-c.legB,0-this.cupsize.height/2),this.graphics.lineTo(this.cupsize.width/2,c.legA-this.cupsize.height/2)}else this.anchortype==y.leftTop?(this.graphics.moveTo(0,-this.cupsize.height),this.graphics.lineTo(0,c.legA-this.cupsize.height),this.graphics.lineTo(c.legB,-this.cupsize.height)):this.anchortype==y.rightTop&&(this.graphics.moveTo(0,-this.cupsize.height),this.graphics.lineTo(-c.legB,-this.cupsize.height),this.graphics.lineTo(0,c.legA-this.cupsize.height))}else this.anchortype==y.center?(this.graphics.moveTo(-this.cupsize.width/2,-this.cupsize.height/2),this.graphics.lineTo(-this.cupsize.width/2,e+r/2-this.cupsize.height/2),this.graphics.lineTo(this.cupsize.width/2,e-r/2-this.cupsize.height/2),this.graphics.lineTo(this.cupsize.width/2,-this.cupsize.height/2),this.graphics.lineTo(-this.cupsize.width/2,-this.cupsize.height/2)):this.anchortype==y.leftTop?(this.graphics.moveTo(this.cupsize.width,-this.cupsize.height),this.graphics.lineTo(0,-this.cupsize.height),this.graphics.lineTo(0,e+a/2-this.cupsize.height),this.graphics.lineTo(this.cupsize.width,e-a/2-this.cupsize.height)):this.anchortype==y.rightTop&&(this.graphics.moveTo(0,-this.cupsize.height),this.graphics.lineTo(-this.cupsize.width,-this.cupsize.height),this.graphics.lineTo(-this.cupsize.width,e-a/2-this.cupsize.height),this.graphics.lineTo(0,e+a/2-this.cupsize.height));this.graphics.close(),this.graphics.stroke(),this.graphics.fill()}},o.onStartPour=function(){this._action=A.out,this.stopIdx=this.curIdx-this.getTopSameColorNum()},o.getCriticalAngleWithHeight=function(i){var t=0;if(0==i)return t=90;if(i<.5){var h=this._ratio/(2*i);t=Math.atan(h)}else{var s=2*this._ratio*(1-i);t=Math.atan(s)}return t=t/Math.PI*180},o.getTopSameColorNum=function(){for(var i=0,t=null,h=this.curIdx;h>=0;h--)if(null==t)i++,t=this.infos[h].colorId;else{if(this.infos[h].colorId!=t)break;i++}return i},o.getPourStartAngle=function(){for(var i=0,t=0;t<=this.curIdx;t++)i+=this.infos[t].height;return this.getCriticalAngleWithHeight(i)},o.getPourEndAngle=function(){this.stopIdx=this.curIdx-this.getTopSameColorNum();for(var i=0,t=0;t<=this.stopIdx;t++)i+=this.infos[t].height;return this.getCriticalAngleWithHeight(i)},n(t,[{key:"skewAngle",get:function(){return this._skewAngle},set:function(i){i=Math.round(100*i)/100,this._skewAngle=i,this.updateAngleHeight()}}]),t}(g)).prototype,"_skewAngle",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),t(z.prototype,"skewAngle",[f],Object.getOwnPropertyDescriptor(z.prototype,"skewAngle"),z.prototype),w=z))||w));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});