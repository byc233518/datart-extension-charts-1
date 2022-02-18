(function(){"use strict";var e='<?xml version="1.0" encoding="UTF-8"?>\n<svg version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">\n <g transform="translate(8.964 4.2527)">\n  <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>\n  <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>\n  <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>\n  <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>\n  <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>\n  <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>\n </g>\n</svg>';function t({dHelper:t}){return{config:{datas:[{label:"dimension",key:"dimension",required:true,type:"group"},{label:"metrics",key:"metrics",required:true,type:"aggregate"},{label:"filter",key:"filter",type:"filter",allowSameField:true},{label:"colorize",key:"color",type:"color"}],styles:[{label:"label.title",key:"label",comType:"group",rows:[{label:"label.text",key:"text",default:"datart",comType:"input"},{label:"label.fontLeft",key:"fontL",comType:"font",default:{fontFamily:"Lato",fontSize:200,fontWeight:"bolder",fontStyle:"normal",color:"#0ff"}},{label:"label.fontRight",key:"fontR",comType:"font",default:{fontFamily:"Lato",fontSize:200,fontWeight:"bolder",fontStyle:"normal",color:"#f0f"}}]}],i18ns:[{lang:"zh-CN",translation:{label:{title:"标签",text:"文本",fontLeft:"主字体",fontRight:"副字体"}}}]},isISOContainer:"experiment-threejs-bingdundun",dependency:["https://unpkg.com/three@0.131.3/build/three.min.js","https://unpkg.com/three@0.131.3/examples/js/libs/stats.min.js","https://unpkg.com/three@0.131.3/examples/js/loaders/GLTFLoader.js","https://unpkg.com/three@0.131.3/examples/js/controls/OrbitControls.js"],meta:{id:"experiment-threejs-bingdundun",name:"[Experiment] 冰墩墩",icon:e,requirements:[{group:null,aggregate:null}]},container:null,stats:null,clock:null,controls:null,camera:null,scene:null,renderer:null,mixer:null,mesh:null,meshes:[],window:null,loadingProcessTimeout:null,onMount(e,t){if(void 0===e.containerId||!t.document)return;const{THREE:n}=t.window;if(!n)return;this.window=t.window;this.container=t.document.getElementById(e.containerId);this.camera=new n.PerspectiveCamera(25,t.window.innerWidth/t.window.innerHeight,1,1e3);this.camera.position.set(0,30,100);this.scene=new n.Scene;this.clock=new n.Clock;const i=new n.LoadingManager;const r=new n.GLTFLoader(i);const s=e=>{e.scene.traverse((e=>{if(e.isMesh){this.meshes.push(e);if("皮肤"===e.name){e.material.metalness=.3;e.material.roughness=.8}if("外壳"===e.name){e.material.transparent=true;e.material.opacity=.4;e.material.metalness=.4;e.material.roughness=0;e.material.refractionRatio=1.6;e.castShadow=true;e.material.envMapIntensity=1}if("围脖"===e.name){e.material.transparent=true;e.material.opacity=.6;e.material.metalness=.4;e.material.roughness=.6}}}));e.scene.rotation.y=Math.PI/24;e.scene.position.set(0,0,0);e.scene.scale.set(16,16,16);this.scene.fog=new n.Fog(16777215,10,100);this.scene.add(e.scene)};r.load("/bingdundun.glb",s)},onUpdated(e,t){if(!e.dataset||!e.dataset.columns||!e.config)return;if(!this.isMatchRequirement(e.config)){this.chart.clear();return}const{THREE:n,Stats:i}=t.window;const r=new n.GridHelper(10,20,8947848,4473924);this.scene.add(r);const s=new n.AmbientLight(16777215,.2);this.scene.add(s);const a=new n.PointLight(16777215,.8);this.scene.add(this.camera);this.camera.add(a);this.renderer=new n.WebGLRenderer({antialias:true});this.renderer.outputEncoding=n.sRGBEncoding;this.renderer.shadowMap.enabled=true;this.renderer.setPixelRatio(window.devicePixelRatio);this.renderer.setSize(t.window.innerWidth,t.window.innerHeight);this.container.appendChild(this.renderer.domElement);this.controls=new n.OrbitControls(this.camera,this.renderer.domElement);this.controls.screenSpacePanning=true;this.controls.minDistance=5;this.controls.maxDistance=40;this.controls.target.set(0,2,0);this.controls.update();this.stats=new i;this.container.appendChild(this.stats.dom);this.animate(t.window)},onUnMount(){},onResize(e,t){this.camera.aspect=t.window.innerWidth/t.window.innerHeight;this.camera.updateProjectionMatrix();this.renderer.setSize(t.window.innerWidth,t.window.innerHeight)},animate(){this.window.requestAnimationFrame(this.animate.bind(this));this.render();this.stats.update()},render(){const e=this.clock.getDelta();if(!!this.mixer)this.mixer.update(e);this.renderer.render(this.scene,this.camera)}}}return t})();
