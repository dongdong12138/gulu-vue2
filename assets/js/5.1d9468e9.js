(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{237:function(t,n,o){},238:function(t,n,o){},239:function(t,n,o){"use strict";o(237)},240:function(t,n,o){"use strict";var i={name:"GIcon",props:{name:{type:String,required:!0}},mounted(){const t=document.querySelector("script[data-ref]");if(t&&"iconScript"===t.dataset.ref)return;const n=document.createElement("script");n.src="//at.alicdn.com/t/font_718972_a5614fly5or.js",n.dataset.ref="iconScript",document.body.append(n)}},c=(o(239),o(14)),e=Object(c.a)(i,(function(){var t=this._self._c;return t("svg",{class:["g-icon",{loading:"loading"===this.name}],attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#i-"+this.name}})])}),[],!1,null,"241b5f01",null);n.a=e.exports},242:function(t,n,o){"use strict";o(238)},243:function(t,n,o){"use strict";var i={name:"GButton",components:{"g-icon":o(240).a},props:{icon:{},iconPosition:{type:String,default:"left",validator:t=>["left","right"].includes(t)},loading:{type:Boolean,default:!1}}},c=(o(242),o(14)),e=Object(c.a)(i,(function(){var t=this,n=t._self._c;return n("button",{class:["g-button",{["icon-"+t.iconPosition]:t.icon}],on:{click:function(n){return t.$emit("click")}}},[t.icon&&!t.loading?n("g-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.loading?n("g-icon",{staticClass:"icon",attrs:{name:"loading"}}):t._e(),t._v(" "),n("span",{staticClass:"content"},[t._t("default")],2)],1)}),[],!1,null,"43022fc6",null);n.a=e.exports},258:function(t,n,o){},296:function(t,n,o){"use strict";o(258)},324:function(t,n,o){"use strict";o.r(n);var i=o(243),c={name:"GButtonGroup",mounted(){for(let t of this.$el.children){const n=t.nodeName.toLowerCase();"button"!==n&&console.warn("g-button-group 的子元素应该全是 g-button，但是你写了 "+n)}}},e=(o(296),o(14)),s=Object(e.a)(c,(function(){return(0,this._self._c)("div",{staticClass:"g-button-group"},[this._t("default")],2)}),[],!1,null,"416dabb4",null).exports,a={name:"Button-demos",components:{"g-button":i.a,"g-button-group":s},data:()=>({loading1:!1,loading2:!0,code1:"<g-button>默认按钮</g-button>",code2:'\n        <g-button :loading="loading1" @click="loading1=!loading1">按钮</g-button>\n        <g-button icon="settings" :loading="loading2" @click="loading2=!loading2">按钮</g-button>\n      '.replace(/^ {8}/gm,"").trim(),code3:'\n        <g-button icon="settings" icon-position="left">按钮</g-button>\n        <g-button icon="settings" icon-position="right">按钮</g-button>\n      '.replace(/^ {8}/gm,"").trim(),code4:'\n        <g-button-group>\n          <g-button icon="left">上一页</g-button>\n          <g-button>更多</g-button>\n          <g-button icon="right" icon-position="right">下一页</g-button>\n        </g-button-group>\n      '.replace(/^ {8}/gm,"").trim()})},u=Object(e.a)(a,(function(){var t=this,n=t._self._c;return n("div",[n("section",[n("p",[t._v("基本用法")]),t._v(" "),n("g-button",[t._v("默认按钮")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.code1))])])],1),t._v(" "),n("section",[n("p",[t._v("点击显示 loading")]),t._v(" "),n("g-button",{attrs:{loading:t.loading1},on:{click:function(n){t.loading1=!t.loading1}}},[t._v("按钮")]),t._v(" "),n("g-button",{attrs:{icon:"settings",loading:t.loading2},on:{click:function(n){t.loading2=!t.loading2}}},[t._v("按钮")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.code2))])])],1),t._v(" "),n("section",[n("p",[t._v("设置 icon 位置")]),t._v(" "),n("g-button",{attrs:{icon:"settings","icon-position":"left"}},[t._v("按钮")]),t._v(" "),n("g-button",{attrs:{icon:"settings","icon-position":"right"}},[t._v("按钮")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.code3))])])],1),t._v(" "),n("section",[n("p",[t._v("按钮组")]),t._v(" "),n("g-button-group",[n("g-button",{attrs:{icon:"left"}},[t._v("上一页")]),t._v(" "),n("g-button",[t._v("更多")]),t._v(" "),n("g-button",{attrs:{icon:"right","icon-position":"right"}},[t._v("下一页")])],1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.code4))])])],1)])}),[],!1,null,"19a4f3cb",null);n.default=u.exports}}]);