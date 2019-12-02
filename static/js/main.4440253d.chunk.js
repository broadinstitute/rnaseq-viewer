(this.webpackJsonprnaseq_viewer_react_app=this.webpackJsonprnaseq_viewer_react_app||[]).push([[0],{182:function(e,t,n){e.exports=n(325)},187:function(e,t,n){},188:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n.n(o),l=(n(187),n(188),n(36)),i=n(12),u=n(13),s=n(331),p=n(33),d=n(34),m=n(37),f=n(35),h=n(38),g=n(171),b=n(330),O=n(329),v=n(332),E=n(97),y=n(14),j=n.n(y),w=n(40),k=function(){var e=Object(w.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance();case 2:if((t=e.sent).isSignedIn.get()){e.next=6;break}return e.next=6,t.signIn();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(w.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance();case 2:return t=e.sent,n=t.currentUser.get().getBasicProfile(),e.abrupt("return",n.getEmail());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(w.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance();case 2:return t=e.sent,n=t.currentUser.get(),t.isSignedIn.get()||n.reloadAuthResponse(),e.abrupt("return",n.getAuthResponse().access_token);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=["GT/AG","CT/AC","GC/AG","CT/GC","AT/AC","GT/AT","non-canonical"],T=function(e){return e.locus},x=function(e){return e.genome},U=function(e){return e.samplesInfo},I=function(e){return e.selectedSampleNames},P=function(e){return e.sjOptions},R=function(e){return e.bamOptions},M=Object(E.a)(U,I,(function(e,t){return e.map((function(e){return e.samples})).flat().filter((function(e){return t.includes(e.name)}))})),B=Object(E.a)(M,P,R,(function(e,t,n){var a=[];return e.forEach((function(e){var r,o;!e.junctions||t.hideAnnotated&&t.hideUnannotated||(r={type:"junctions",format:"bed",url:e.junctions,indexURL:"".concat(e.junctions,".tbi"),oauthToken:C,name:e.name,height:t.trackHeight,minUniquelyMappedReads:t.minUniquelyMappedReads,minTotalReads:t.minTotalReads,maxFractionMultiMappedReads:t.maxFractionMultiMappedReads,minSplicedAlignmentOverhang:t.minSplicedAlignmentOverhang,thicknessBasedOn:t.thicknessBasedOn,bounceHeightBasedOn:t.bounceHeightBasedOn,colorBy:t.colorBy,labelUniqueReadCount:t.labelUniqueReadCount,labelMultiMappedReadCount:t.labelMultiMappedReadCount,labelTotalReadCount:t.labelTotalReadCount,labelMotif:t.labelMotif,labelIsAnnotatedJunction:t.labelIsAnnotatedJunction&&t.labelIsAnnotatedJunctionValue,hideAnnotatedJunctions:t.hideAnnotated,hideUnannotatedJunctions:t.hideUnannotated,hideMotifs:A.filter((function(e){return t["hideMotif".concat(e)]}))}),e.coverage&&!t.hideCoverage&&(o={type:"wig",format:"bigwig",url:e.coverage,oauthToken:C,name:e.name,height:t.trackHeight}),o&&r?a.push({type:"merged",name:e.name,height:t.trackHeight,tracks:[o,r]}):o?a.push(o):r&&a.push({type:"merged",name:e.name,height:t.trackHeight,tracks:[r]}),n.showBams&&e.bam&&(console.log("Adding ".concat(e.bam," track")),a.push({type:"alignment",url:e.bam,name:"".concat(e.name," bam"),alignmentShading:n.alignmentShading,showSoftClips:n.showSoftClips,oauthToken:C}))})),a}));function N(){var e=Object(i.a)(["\n  opacity: 0.95;\n"]);return N=function(){return e},e}function D(){var e=Object(i.a)(["\n  display: inline-block;\n  margin: 0px 0px 0px 15px;\n  color: #999;\n  white-space: nowrap;\n"]);return D=function(){return e},e}function _(){var e=Object(i.a)([" \n  display: inline-block;\n  margin: 12px 0px 0px 0px !important;\n"]);return _=function(){return e},e}var J=u.a.h3(_()),q=u.a.div(D()),V=Object(u.a)(b.a)(N()),H=function(e){var t=e.category;return r.a.createElement("div",null,r.a.createElement(J,null,t.name.toUpperCase()),t.samples.length>=10&&r.a.createElement(q,null,"(N=".concat(t.samples.length,") ")))},L=function(e){var t=e.samplesInfo,n=e.selectedSampleNames,a=e.updateSelectedSampleNames;return t.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(H,{category:e}),e.samples.map((function(e){return r.a.createElement(G,{key:e.name,sample:e,selectedSampleNames:n,updateSelectedSampleNames:a})})))}))},G=function(e){var t=e.sample,n=e.selectedSampleNames,a=e.updateSelectedSampleNames;return r.a.createElement("div",null,r.a.createElement(O.a,{label:t.name,defaultChecked:n.includes(t.name),onChange:function(e,t){return a(t.checked?[].concat(Object(g.a)(n),[t.label]):n.filter((function(e){return e!==t.label})))}}),r.a.createElement(K,{sample:t}))},K=function(e){var t=e.sample;return t.description?r.a.createElement(V,{inverted:!0,content:t.description,position:"right center",on:"click",trigger:r.a.createElement(v.a,{style:{marginLeft:"10px"},name:"question circle outline"})}):null},F=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.a,{label:"show BAM tracks",defaultChecked:this.props.bamOptions.showBams,onChange:function(t,n){return e.props.updateBamOptions({showBams:n.checked})}}),r.a.createElement(L,{samplesInfo:this.props.samplesInfo,selectedSampleNames:this.props.selectedSampleNames,updateSelectedSampleNames:this.props.updateSelectedSampleNames}))}}]),t}(r.a.Component),z=Object(l.b)((function(e){return{selectedSampleNames:I(e),samplesInfo:U(e),sjOptions:P(e),bamOptions:R(e)}}),(function(e){return{updateSelectedSampleNames:function(t){e({type:"UPDATE_SELECTED_SAMPLES",newValue:t})},updateSjOptions:function(t){e({type:"UPDATE_SJ_OPTIONS",updates:t})},updateBamOptions:function(t){e({type:"UPDATE_BAM_OPTIONS",updates:t})}}}))(F),Q=n(20);function W(){var e=Object(i.a)(["\n  opacity: 0.95;\n"]);return W=function(){return e},e}function X(){var e=Object(i.a)(["\n  display: inline;\n  width: 50px;\n  margin-left: 5px;\n  padding-left: 5px;\n"]);return X=function(){return e},e}function Y(){var e=Object(i.a)(["\n  padding-top:3px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(i.a)([" \n  display: inline-block;\n  margin: 12px 0px 0px 0px !important;\n"]);return Z=function(){return e},e}var $=u.a.h3(Z()),ee=u.a.div(Y()),te=u.a.input(X()),ne=Object(u.a)(b.a)(W()),ae=function(e){var t=e.sjOptions,n=e.updateSjOptions,a=e.value,o=void 0===a?null:a,c=function(e,t){13===e.keyCode&&n(Object(Q.a)({},t,o||e.target.value))};return r.a.createElement("div",null,r.a.createElement($,null,"JUNCTION TRACK OPTIONS"),r.a.createElement("br",null),r.a.createElement(ee,null,"Track height: ",r.a.createElement(te,{type:"text",defaultValue:t.trackHeight,onKeyUp:function(e){return c(e,"trackHeight",o=parseInt(e.target.value))}})," px"),r.a.createElement(ee,null,r.a.createElement(O.a,{label:"Show coverage",defaultChecked:!t.hideCoverage,onChange:function(e,t){return n({hideCoverage:!t.checked})}})),r.a.createElement(ee,null,r.a.createElement(O.a,{label:"Show known junctions",defaultChecked:!t.hideAnnotated,onChange:function(e,t){return n({hideAnnotated:!t.checked})}})),r.a.createElement(ee,null,r.a.createElement(O.a,{label:"Show unknown junctions",defaultChecked:!t.hideUnannotated,onChange:function(e,t){return n({hideUnannotated:!t.checked})}})),r.a.createElement(ee,null,"Color by:"),r.a.createElement(ee,null,r.a.createElement("select",{defaultValue:t.colorBy,onChange:function(e){return n({colorBy:e.target.value})}},r.a.createElement("option",{value:"strand"},"strand"),r.a.createElement("option",{value:"motif"},"donor/acceptor motif"),r.a.createElement("option",{value:"numUniqueReads"},"# uniquely-mapped reads"),r.a.createElement("option",{value:"numReads"},"# total reads"),r.a.createElement("option",{value:"isAnnotatedJunction"},"is known junction"))),r.a.createElement(ee,null,"Junction thickness:"),r.a.createElement(ee,null,r.a.createElement("select",{defaultValue:t.thicknessBasedOn,onChange:function(e){return n({thicknessBasedOn:e.target.value})}},r.a.createElement("option",{value:"numUniqueReads"},"# uniquely-mapped reads"),r.a.createElement("option",{value:"numReads"},"# total reads"),r.a.createElement("option",{value:"isAnnotatedJunction"},"is known junction"))),r.a.createElement(ee,null,"Junction bounce height:"),r.a.createElement(ee,null,r.a.createElement("select",{defaultValue:t.bounceHeightBasedOn,onChange:function(e){return n({bounceHeightBasedOn:e.target.value})}},r.a.createElement("option",{value:"random"},"random"),r.a.createElement("option",{value:"distance"},"distance"),r.a.createElement("option",{value:"thickness"},"thickness"))),r.a.createElement(ee,null,"Junction label:"),r.a.createElement(ee,null,r.a.createElement(O.a,{label:"# uniquely-mapped",defaultChecked:t.labelUniqueReadCount,onChange:function(e,t){return n({labelUniqueReadCount:t.checked})}})),r.a.createElement(ee,null,r.a.createElement(O.a,{label:"# multi-mapped",defaultChecked:t.labelMultiMappedReadCount,onChange:function(e,t){return n({labelMultiMappedReadCount:t.checked})}})),r.a.createElement(ee,null,r.a.createElement(O.a,{label:"# total reads",defaultChecked:t.labelTotalReadCount,onChange:function(e,t){return n({labelTotalReadCount:t.checked})}})),r.a.createElement(ee,null,r.a.createElement(O.a,{label:"donor/acceptor motif",defaultChecked:t.labelMotif,onChange:function(e,t){return n({labelMotif:t.checked})}})),r.a.createElement(ee,null,r.a.createElement(O.a,{label:"known junction:",defaultChecked:t.labelIsAnnotatedJunction,onChange:function(e,t){return n({labelIsAnnotatedJunction:t.checked})}}),r.a.createElement(te,{type:"text",defaultValue:t.labelIsAnnotatedJunctionValue,onKeyUp:function(e){return c(e,"labelIsAnnotatedJunctionValue")},style:{width:"35px"}})),r.a.createElement($,null,"JUNCTION TRACK FILTERS"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(ee,null,"Uniquely-mapped reads:"),"at least ",r.a.createElement(te,{type:"text",defaultValue:t.minUniquelyMappedReads,onKeyUp:function(e){return c(e,"minUniquelyMappedReads",o=parseInt(e.target.value))}})),r.a.createElement("div",null,r.a.createElement(ee,null,"Total reads:"),"at least ",r.a.createElement(te,{type:"text",defaultValue:t.minTotalReads,onKeyUp:function(e){return c(e,"minTotalReads",o=parseInt(e.target.value))}})),r.a.createElement("div",null,r.a.createElement(ee,null,"Fraction multi-mapped:",r.a.createElement(ne,{inverted:!0,content:"Allows filtering of junctions where most reads that span the junction are multi-mapped reads. For example, setting this to 0.79 will hide junctions where 8 out of 10 (or more) reads that span the junction are not uniquely mapped reads.",position:"left center",on:"click",trigger:r.a.createElement(v.a,{style:{marginLeft:"8px"},name:"question circle outline"})})),"at most ",r.a.createElement(te,{type:"text",defaultValue:t.maxFractionMultiMappedReads,onKeyUp:function(e){return c(e,"maxFractionMultiMappedReads",o=parseInt(e.target.value))}})),r.a.createElement("div",null,r.a.createElement(ee,null,"Splice overhang base-pairs:"),"at least ",r.a.createElement(te,{type:"text",defaultValue:t.minSplicedAlignmentOverhang,onKeyUp:function(e){return c(e,"minSplicedAlignmentOverhang",o=parseInt(e.target.value))}})),r.a.createElement("div",null,r.a.createElement(ee,null,"Donor/Acceptor Motifs:"),A.map((function(e){return r.a.createElement(ee,{key:e},r.a.createElement(O.a,{label:"Show ".concat(e),defaultChecked:!t["hideMotif".concat(e)],onChange:function(t,a){return n(Object(Q.a)({},"hideMotif".concat(e),!a.checked))}}))}))))},re=function(e){e.bamOptions,e.updateBamOptions;return r.a.createElement("div",null)},oe=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ae,{sjOptions:this.props.sjOptions,updateSjOptions:this.props.updateSjOptions}),r.a.createElement(re,{bamOptions:this.props.bamOptions,updateBamOptions:this.props.updateBamOptions}))}}]),t}(r.a.Component),ce=Object(l.b)((function(e){return{sjOptions:P(e),bamOptions:R(e),selectedSampleNames:I(e),samplesInfo:U(e)}}),(function(e){return{updateSelectedSampleNames:function(t){e({type:"UPDATE_SELECTED_SAMPLES",newValue:t})},updateSjOptions:function(t){e({type:"UPDATE_SJ_OPTIONS",updates:t})},updateBamOptions:function(t){e({type:"UPDATE_BAM_OPTIONS",updates:t})}}}))(oe),le=n(169),ie=n.n(le);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(){var e=Object(i.a)([""]);return pe=function(){return e},e}var de={showKaryo:!1,showIdeogram:!1,showNavigation:!0,showRuler:!0,showCenterGuide:!0,showCursorTrackingGuide:!0,showCommandBar:!0},me=u.a.div(pe()),fe=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).setContainerElement=function(e){n.container=e},n.render=function(){return r.a.createElement(me,null,r.a.createElement("div",{ref:n.setContainerElement}))},n.shouldComponentUpdate=function(e){if(!n.container)return!1;var t=e.tracks.reduce((function(e,t){return se(Object(Q.a)({},t.name,t),e)}),{});console.log("IGV.nextProps:",e);var a=!0,r=!1,o=void 0;try{for(var c,l=n.props.tracks[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var i=c.value,u=t[i.name];if(u)(e.sjOptions!==n.props.sjOptions&&["merged","wig","junctions"].includes(i.type)||e.bamOptions!==n.props.bamOptions&&"bam"===i.type)&&(n.browser.removeTrackByName(i.name),n.browser.loadTrack(u)),delete t[i.name];else try{n.browser.removeTrackByName(i.name)}catch(m){console.warn("Unable to remove track",i.name,m)}}}catch(f){r=!0,o=f}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}for(var s=0,p=Object.values(t);s<p.length;s++){var d=p[s];try{n.browser.loadTrack(d)}catch(m){console.warn("Unable to add track",d.name,m)}}return!1},n.container=null,n.browser=null,n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.container){var t=se({},de,{locus:this.props.locus,genome:this.props.genome,tracks:this.props.tracks});ie.a.createBrowser(this.container,t).then((function(t){e.browser=t,e.props.locusChangedHandler&&e.browser.on("locuschange",function(e,t){var n;return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,r),n=null}),e)}}(300,e.props.locusChangedHandler)),e.props.trackRemovedHandler&&e.browser.on("trackremoved",e.props.trackRemovedHandler)}))}}}]),t}(r.a.Component),he=Object(l.b)((function(e){return{genome:x(e),locus:T(e),tracks:B(e),sjOptions:P(e),bamOptions:R(e)}}),(function(e){return{locusChangedHandler:function(t){var n=t.label.replace(/,/g,"");e({type:"UPDATE_LOCUS",newValue:n})}}}))(fe);function ge(){var e=Object(i.a)(["\n  text-align: right;\n  margin: 20px 70px 0px 0px;\n  color: #999;\n"]);return ge=function(){return e},e}var be=u.a.div(ge()),Oe=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){gapi.load("client:auth2",(function(){gapi.client.load("storage","v1",(function(){gapi.client.init({clientId:"61200892608-qphtf65o323setqdcfj4hnf601mmetvs.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/devstorage.read_only",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/storage/v1/rest"]}),e()}))}))}));case 2:return e.next=4,k();case 4:return e.next=6,S();case 6:this.googleUserEmail=e.sent,this.setState({googleUserEmail:this.googleUserEmail});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.googleUserEmail?r.a.createElement(be,null,"Signed in to Google Buckets as ",r.a.createElement("b",null,this.state.googleUserEmail)):r.a.createElement(be,null)}}]),t}(r.a.Component);function ve(){var e=Object(i.a)(["\n  padding: 10px 20px\n"]);return ve=function(){return e},e}var Ee=u.a.div(ve()),ye=function(){return r.a.createElement(Ee,null,r.a.createElement(s.a,null,r.a.createElement(s.a.Row,null,r.a.createElement(s.a.Column,{width:2},r.a.createElement(z,null)),r.a.createElement(s.a.Column,{width:12},r.a.createElement(he,null),r.a.createElement(Oe,null)),r.a.createElement(s.a.Column,{width:2},r.a.createElement(ce,null)))))},je=n(39);n(172);function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},Ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;if(!r)return a;switch(r.type){case e:return void 0===r.newValue?(console.error("Invalid ".concat(e," action: action.newValue is undefined: "),r),a):(n&&console.log("singleValueReducer: applying action: ",r,"State changing from ",a," to ",r.newValue),r.newValue);default:return a}};return a},Ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;if(!r)return a;switch(r.type){case e:if(void 0===r.updates)return console.error("Invalid ".concat(e," action: action.updates is undefined: "),r),a;var o=ke({},a,{},r.updates);return n&&console.log("singleObjectReducer: applying action: ",r,"State changing from ",a," to ",o),o;default:return a}};return a},Te=Object(je.c)(Object.assign({genome:Se,locus:Ce("UPDATE_LOCUS",""),samplesInfo:Se,selectedSampleNames:Ce("UPDATE_SELECTED_SAMPLES",[]),sjOptions:Ae("UPDATE_SJ_OPTIONS"),bamOptions:Ae("UPDATE_BAM_OPTIONS")})),xe=n(170),Ue=n(104),Ie=n.n(Ue),Pe=function(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(n){return}};function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(n),!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Be={genome:"hg38",locus:"chr15:92,835,700-93,031,800",sjOptions:Me({trackHeight:170,hideCoverage:!1,hideAnnotated:!1,hideUnannotated:!1,colorBy:"strand",minUniquelyMappedReads:1,minTotalReads:1,maxFractionMultiMappedReads:1,minSplicedAlignmentOverhang:0,thicknessBasedOn:"numUniqueReads",bounceHeightBasedOn:"random",labelUniqueReadCount:!0,labelMultiMappedReadCount:!0,labelTotalReadCount:!1,labelMotif:!0,labelIsAnnotatedJunction:!1,labelIsAnnotatedJunctionValue:" [A]"},A.reduce((function(e,t){return Me({},e,Object(Q.a)({},"hideMotif".concat(t),!1))}),{})),bamOptions:{trackHeight:100,showSoftClips:!0,alignmentShading:"strand"},samplesInfo:window.INITIAL_TRACKS||[]},Ne=["locus","selectedSampleNames","sjOptions","bamOptions"],De=[],_e=Object(je.d)(Object(je.a)(xe.a,(function(e){return function(t){return function(n){var a=t(n),r=e.getState();De.forEach((function(e){!function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(a){}}(e,r[e])}));var o=Object.keys(r).filter((function(e){return Ne.includes(e)})).reduce((function(e,t){return Me({},e,Object(Q.a)({},t,r[t]))}),{});return window.location.hash="#".concat(Ie.a.stringify(o)),a}}}))),Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Be;return De.forEach((function(e){var n=Pe(e);void 0!==n&&(t[e]=n)})),t=Me({},t,{},Ie.a.parse(window.location.hash.replace(/^#/,""))),console.log("Initializing store to:",t),Object(je.e)(e,t,_e)};var qe=function(){return r.a.createElement(l.a,{store:Je(Te)},r.a.createElement(ye,null))};c.a.render(r.a.createElement(qe,null),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.4440253d.chunk.js.map