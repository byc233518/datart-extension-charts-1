(function(){"use strict";var n='<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1642129750527" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2648" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M777.8 128.6H624l-112 177.2-96-177.2H64L512 896 960 128.6h-182.2z m-602.4 64h107.6L512 589 740.8 192.6h107.6L512 769 175.4 192.6z" p-id="2649"></path></svg>';function e({dHelper:e}){const t=()=>`\n  \`\`\`js\n  import Chart from 'app/pages/ChartWorkbenchPage/models/Chart';\n  import { getStyleValueByGroup } from 'app/utils/chart';\n  import Config from './config';\n\n  class VueJSChart extends Chart {\n    constructor() {\n      super('vue-chart', 'DEMO - VueJS Chart', 'star');\n    }\n  \n    isISOContainer = 'vue-chart-container';\n    config = Config;\n    dependency = [\n      'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js',\n      'https://cdn.jsdelivr.net/npm/vue-markdown@2.2.4/dist/vue-markdown.js',\n      'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css',\n    ];\n    chart: any = null;\n    nodeId = 'vue';\n  \n    onMount(options, context): void {\n      const node = context.document.createElement('div');\n      node.setAttribute('id', this.nodeId);\n      context.document.getElementById(options.containerId).appendChild(node);\n  \n      const Vue = context.window.Vue;\n      Vue.use(context.window.VueMarkdown);\n      this.chart = new Vue({\n        el: \`#\${this.nodeId}\`,\n        data: { vue: 'Hello', person: { name: 'Stephen' }, content: getCode() },\n        template: this.getTemplate(),\n        methods: {\n          greet: function (event) {\n            alert('Hello My Friends ~ this.me');\n          },\n        },\n      });\n    }\n  \n    onUpdated(options, context): void {\n      if (!this.isMatchRequirement(options.config)) {\n        return;\n      }\n\n      const name = this.getInfo(options?.config?.styles);\n      this.chart.$set(this.chart.person, 'name', name);\n    }\n  \n    onUnMount(): void {}\n  \n    private getInfo(styleConfigs) {\n      const name = getStyleValueByGroup(styleConfigs, 'label', 'name');\n      return name;\n    }\n    \n    private getTemplate() {\n      return \`\n      <div class="markdown-body">\n        <a-collapse :accordion="true" default-active-key="2" :bordered="false">\n          <a-collapse-panel key="1" name="Welcom~">\n          <p>{{ vue }} {{ person.name }} ,</p>\n            <p>Welcome to VueJS Chart Demo ~ <button v-on:click="greet">Greet</button></p>\n          </a-collapse-panel>\n          <a-collapse-panel key="3" name="code bloks">\n            <vue-markdown>\n            {{content}}\n            </vue-markdown>\n          </a-collapse-panel>\n        </a-collapse>\n      </div>\n      \`;\n    }\n  }\n  \`\`\`\n  `;return{config:{styles:[{label:"label",key:"label",comType:"group",rows:[{label:"name",key:"name",default:"Friends",comType:"input"},{label:"font",key:"font",comType:"font",default:{fontFamily:"PingFang SC",fontSize:"24",fontWeight:"normal",fontStyle:"normal",color:"yellow"}}]}],i18ns:[{lang:"zh-CN",translation:{label:"标签",name:"你的姓名"}},{lang:"en-US",translation:{label:"Label",name:"Your Name"}}]},isISOContainer:"experiment-vue-dynamic-chart",dependency:["https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js","https://cdn.jsdelivr.net/npm/vue-markdown@2.2.4/dist/vue-markdown.js","https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css"],meta:{id:"experiment-vue-dynamic-chart",name:"[Experiment] VUEJS Chart",icon:n,requirements:[{group:null,aggregate:null}]},onMount(n,e){const o=e.document.createElement("div");o.setAttribute("id",this.nodeId);e.document.getElementById(n.containerId).appendChild(o);const a=e.window.Vue;a.use(e.window.VueMarkdown);this.chart=new a({el:`#${this.nodeId}`,data:{vue:"Hello",person:{name:"Stephen"},content:t()},template:this.getTemplate(),methods:{greet:function(n){alert("Hello My Friends ~ this.me")}}})},onUpdated(n,e){if(!this.isMatchRequirement(n.config))return;const t=this.getInfo(n?.config?.styles);this.chart.$set(this.chart.person,"name",t)},onUnMount(){},onResize(n,e){},getInfo(n){const t=e.getValue(n,["label","name"]);return t},getTemplate(){return`\n      <div class="markdown-body">\n        <a-collapse :accordion="true" default-active-key="2" :bordered="false">\n          <a-collapse-panel key="1" name="Welcom~">\n            <p>{{ vue }} {{ person.name }} ,</p>\n            <p>Welcome to VueJS Chart Demo ~ <button v-on:click="greet">Greet</button></p>\n          </a-collapse-panel>\n          <a-collapse-panel key="3" name="code bloks">\n            <vue-markdown>\n            {{content}}\n            </vue-markdown>\n          </a-collapse-panel>\n        </a-collapse>\n      </div>\n      `}}}return e})();
