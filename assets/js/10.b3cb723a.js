(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{261:function(e,t,n){},262:function(e,t,n){},299:function(e,t,n){"use strict";n(261)},300:function(e,t,n){"use strict";n(262)},322:function(e,t,n){"use strict";n.r(t);var a={name:"GRow",props:{gutter:[String,Number],align:{type:String,validator:e=>["left","center","right"].includes(e)}}},i=(n(299),n(14)),r=Object(i.a)(a,(function(){return(0,this._self._c)("div",{class:["g-row",this.align&&"align-"+this.align],style:{marginLeft:`-${this.gutter/2}px`,marginRight:`-${this.gutter/2}px`}},[this._t("default")],2)}),[],!1,null,"0eedeffa",null).exports;n(90);const p=e=>{const t=Object.keys(e),n=["span","offset"];let a=!0;for(let e=0;e<t.length;e++)if(!n.includes(t[e])){a=!1;break}return a};var o={name:"GCol",props:{span:{type:[String,Number]},offset:{type:[String,Number]},pad:{type:Object,validator:p},narrowPc:{type:Object,validator:p},pc:{type:Object,validator:p},widePc:{type:Object,validator:p}},data:()=>({gutter:0}),computed:{colClass(){const{span:e,offset:t,pad:n,narrowPc:a,pc:i,widePc:r}=this,p=(e,t="")=>{const n=[];return e?(e.span&&n.push(`col-${t}${e.span}`),e.offset&&n.push(`offset-${t}${e.offset}`),n):n};return[...p({span:e,offset:t}),...p(n,"pad-"),...p(a,"narrowPc-"),...p(i,"pc-"),...p(r,"widePc-")]}},created(){this.$parent&&this.$parent.gutter&&(this.gutter=this.$parent.gutter/2)}},s=(n(300),{name:"Grid-demos",components:{"g-row":r,"g-col":Object(i.a)(o,(function(){return(0,this._self._c)("div",{staticClass:"g-col",class:this.colClass,style:{paddingLeft:this.gutter+"px",paddingRight:this.gutter+"px"}},[this._t("default")],2)}),[],!1,null,"4983edab",null).exports},data:()=>({code1:'\n        <g-row style="background-color: #eee">\n          <g-col\n            v-for="item in 6" :key="item"\n            span="24" :pad="{span: 12}" :narrow-pc="{span: 8}" :pc="{span: 6}" :wide-pc="{span: 4}"\n          >\n            <div style="border: 1px solid #ccc; height: 50px; text-align: center; line-height: 50px">{{ item }}</div>\n          </g-col>\n        </g-row>\n      '.replace(/^ {8}/gm,"").trim(),code2:'\n        <g-row style="background-color: #eee">\n          <g-col span="24" :pad="{span: 12}" :narrow-pc="{span: 4}">\n            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">1</div>\n          </g-col>\n          <g-col span="24" :pad="{span: 12}" :narrow-pc="{span: 8, offset: 4}">\n            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">2</div>\n          </g-col>\n          <g-col span="24" :pad="{span: 12}" :narrow-pc="{span: 4, offset: 4}">\n            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">3</div>\n          </g-col>\n        </g-row>\n      '.replace(/^ {8}/gm,"").trim(),code3:'\n        <g-row align="center" style="background-color: #eee">\n          <g-col style="width: 100px; border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">1</g-col>\n          <g-col style="width: 100px; border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">2</g-col>\n        </g-row>\n      '.replace(/^ {8}/gm,"").trim(),code4:'\n        <g-row :gutter="20" style="background-color: #eee">\n          <g-col :span="2" :pc="{span: 6}" :wide-pc="{span: 8}">\n            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">1</div>\n          </g-col>\n          <g-col :span="20" :pc="{span: 12}" :wide-pc="{span: 8}">\n            <div style="border: 1px solid #aaa; height: 50px; text-align: center; line-height: 50px">2</div>\n          </g-col>\n        </g-row>\n      '.replace(/^ {8}/gm,"").trim()})}),c=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",[t("section",[t("p",[e._v("响应式网格")]),e._v(" "),t("g-row",{staticStyle:{"background-color":"#eee"}},e._l(6,(function(n){return t("g-col",{key:n,attrs:{span:"24",pad:{span:12},"narrow-pc":{span:8},pc:{span:6},"wide-pc":{span:4}}},[t("div",{staticStyle:{border:"1px solid #aaa",height:"50px","text-align":"center","line-height":"50px"}},[e._v(e._s(n))])])})),1),e._v(" "),t("pre",[t("code",[e._v(e._s(e.code1))])])],1),e._v(" "),t("section",[t("p",[e._v("设置偏移（offset）")]),e._v(" "),t("g-row",{staticStyle:{"background-color":"#eee"}},[t("g-col",{attrs:{span:"24",pad:{span:12},"narrow-pc":{span:4}}},[t("div",{staticStyle:{border:"1px solid #aaa",height:"50px","text-align":"center","line-height":"50px"}},[e._v("1")])]),e._v(" "),t("g-col",{attrs:{span:"24",pad:{span:12},"narrow-pc":{span:8,offset:4}}},[t("div",{staticStyle:{border:"1px solid #aaa",height:"50px","text-align":"center","line-height":"50px"}},[e._v("2")])]),e._v(" "),t("g-col",{attrs:{span:"24",pad:{span:12},"narrow-pc":{span:4,offset:4}}},[t("div",{staticStyle:{border:"1px solid #aaa",height:"50px","text-align":"center","line-height":"50px"}},[e._v("3")])])],1),e._v(" "),t("pre",[t("code",[e._v(e._s(e.code2))])])],1),e._v(" "),t("section",[t("p",[e._v("设置居中（align）")]),e._v(" "),t("g-row",{staticStyle:{"background-color":"#eee"},attrs:{align:"center"}},[t("g-col",{staticStyle:{width:"100px",border:"1px solid #aaa",height:"50px","text-align":"center","line-height":"50px"}},[e._v("1")]),e._v(" "),t("g-col",{staticStyle:{width:"100px",border:"1px solid #aaa",height:"50px","text-align":"center","line-height":"50px"}},[e._v("2")])],1),e._v(" "),t("pre",[t("code",[e._v(e._s(e.code3))])])],1),e._v(" "),t("section",[t("p",[e._v("设置间隙（gutter）")]),e._v(" "),t("g-row",{staticStyle:{"background-color":"#eee"},attrs:{gutter:20}},[t("g-col",{attrs:{span:2,pc:{span:6},"wide-pc":{span:8}}},[t("div",{staticStyle:{border:"1px solid #aaa",height:"50px","text-align":"center","line-height":"50px"}},[e._v("1")])]),e._v(" "),t("g-col",{attrs:{span:20,pc:{span:12},"wide-pc":{span:8}}},[t("div",{staticStyle:{border:"1px solid #aaa",height:"50px","text-align":"center","line-height":"50px"}},[e._v("2")])])],1),e._v(" "),t("pre",[t("code",[e._v(e._s(e.code4))])])],1)])}),[],!1,null,"c92004b8",null);t.default=c.exports}}]);