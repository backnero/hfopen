webpackJsonp([71],{"6kZF":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("viA7"),r={data:function(){return{catelist:{title:""}}},methods:{addcate:function(){var t=this;Object(e.c)(this.catelist).then(function(n){1==n.status_code&&t.$router.push("../content/indexcategory")})}}},i={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"app-container"},[a("h3",[t._v("添加类别")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"fonttype"},[t._v("类别名称")]),t._v(" "),a("el-input",{staticClass:"inputtext",attrs:{placeholder:"请输入名称"},model:{value:t.catelist.title,callback:function(n){t.$set(t.catelist,"title",n)},expression:"catelist.title"}})],1),t._v(" "),a("el-button",{staticClass:"btn-primary",attrs:{type:"primary",plain:""},on:{click:t.addcate}},[t._v("完成")])],1)},staticRenderFns:[]};var c=a("VU/8")(r,i,!1,function(t){a("vejo")},"data-v-48b87c1d",null);n.default=c.exports},Cnus:function(t,n,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.app-container[data-v-48b87c1d] {\r\n  margin-left: 40px;\n}\n.form-group[data-v-48b87c1d]{\r\n  margin-top: 20px;\n}\n.fonttype[data-v-48b87c1d] {\r\n  font: 16px Medium;\r\n  color: #303133;\r\n  margin-right: 16px;\n}\n.inputtext[data-v-48b87c1d] {\r\n  width: 360px;\n}\n.btn-primary[data-v-48b87c1d] {\r\n  margin-left: 180px;\r\n  margin-top: 20px;\r\n  width: 80px;\n}\r\n",""])},vejo:function(t,n,a){var e=a("Cnus");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("515ea662",e,!0)}});