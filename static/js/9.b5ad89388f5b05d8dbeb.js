webpackJsonp([9],{"1XYd":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("tBk9"),i=e("24Xq"),r=e.n(i),l={data:function(){return{code:r.a,nursinglist:[],statusList:[{id:"1",name:"已审核"},{id:"2",name:"未审核"},{id:"3",name:"注销"}],ifExamine:[],ifNoExamine:[],ifCancellation:[],currentPage3:1,listQuery:{page:1,size:15},count:0,pagelist:""}},created:function(){this.fetchData()},methods:{handleSizeChange:function(t){this.listQuery.size=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.page=t,this.fetchData()},selectnursing:function(t){this.$router.push({path:"nursing/binduser",query:{uid:t.uid}})},updateworker:function(t,n){var e=this;t.status_id=n,Object(a.g)(t).then(function(t){e.fetchData()})},fetchData:function(){var t=this;Object(a.c)(this.listQuery).then(function(n){t.pagelist=n.meta,t.nursinglist=n.data,t.updateStatusName(),t.updatestatus()})},updatestatus:function(){for(var t in this.nursinglist)for(var n in this.statusList)this.nursinglist[t].status_id==this.statusList[n].id&&(this.nursinglist[t].status_id=this.statusList[n].name)},updateStatusName:function(){for(var t in this.ifCancellation=[],this.ifExamine=[],this.ifCancellation=[],this.nursinglist)this.ifCancellation[t]=!1,this.ifExamine[t]=!1,this.ifCancellation[t]=!1,"1"==this.nursinglist[t].status_id?this.ifCancellation[t]=!0:"2"==this.nursinglist[t].status_id&&(this.ifExamine[t]=!0)},addnursing:function(){this.$router.push("nursing/addnursing")},addImageArticeData:function(){this.$alert('<h2>请扫描二维码添加护工</h2><image src="'+this.code+'" style="height:360px;width:360px;">',{dangerouslyUseHTMLString:!0})}}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nursingindex"},[e("div",{staticClass:"nu_top"},[e("el-button",{attrs:{type:"primary",plain:""},on:{click:t.addnursing}},[t._v("添加")]),t._v(" "),e("el-button",{attrs:{type:"primary",plain:""},on:{click:t.addImageArticeData}},[t._v("二维码添加")])],1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.nursinglist,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{align:"center",label:"用户编号"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v(t._s(n.row.uid))]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"护理员姓名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v(t._s(n.row.realName))]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"照片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:t.row.headImg,onerror:"this.src='../static/image/aaa.png'"}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"联系方式",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v(t._s(n.row.phone))]}}])}),t._v(" "),e("el-table-column",{attrs:{"class-name":"",label:"身份证号码",align:"center",width:"300"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v(t._s(n.row.IDCard))]}}])}),t._v(" "),e("el-table-column",{attrs:{"class-name":"",label:"所属机构",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.organ))])]}}])}),t._v(" "),e("el-table-column",{attrs:{"class-name":"",label:"授权总数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.countService))])]}}])}),t._v(" "),e("el-table-column",{attrs:{"class-name":"",label:"服务中",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.countOlder))])]}}])}),t._v(" "),e("el-table-column",{attrs:{"class-name":"",label:"权限状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-tag",[t._v(t._s(n.row.status_id))])]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"260"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.selectnursing(n.row)}}},[t._v("查看授权用户")]),t._v(" "),t.ifExamine[n.$index]?e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.updateworker(n.row,1)}}},[t._v("审核")]):t._e(),t._v(" "),t.ifNoExamine[n.$index]?e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.updateworker(n.row,2)}}},[t._v("未审核")]):t._e(),t._v(" "),t.ifCancellation[n.$index]?e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.updateworker(n.row,3)}}},[t._v("注销")]):t._e()]}}])})],1),t._v(" "),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"current-page":t.currentPage3,"page-size":15,layout:"prev, pager, next, jumper",total:t.pagelist.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(n){t.currentPage3=n}}})],1)],1)},staticRenderFns:[]};var o=e("VU/8")(l,s,!1,function(t){e("Dzm1")},"data-v-a0dabfd6",null);n.default=o.exports},"24Xq":function(t,n,e){t.exports=e.p+"static/img/code.dbd6ed3.jpg"},Dzm1:function(t,n,e){var a=e("IF2O");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("7d246e9b",a,!0)},IF2O:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.nursingindex[data-v-a0dabfd6] {\n  width: 97%;\n  height: 100%;\n  margin-left: 1.5%;\n}\n.nursingindex .nu_top[data-v-a0dabfd6] {\n    width: 100%;\n    text-align: right;\n    margin-bottom: 1%;\n}\n.nursingindex .block[data-v-a0dabfd6] {\n    margin-top: 40px;\n    margin-bottom: 40px;\n    position: absolute;\n    right: 55px;\n}\n.el-table[data-v-a0dabfd6] {\n  width: 100%;\n  border: 1px solid #ebeef5;\n}\n.el-table[data-v-a0dabfd6] .cell {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.el-table[data-v-a0dabfd6] .cell /deep/ .el-tag {\n      margin: 2px 4px;\n      border: none;\n}\n.el-table[data-v-a0dabfd6] .cell /deep/ .el-button {\n      border: none;\n}\n.el-table[data-v-a0dabfd6] th {\n    background-color: #ecf5ff;\n    color: #333333;\n    padding: 12px 0;\n    border: none;\n}\n.el-table[data-v-a0dabfd6] .el-table__header-wrapper {\n    background-color: #ecf5ff;\n}\n.el-table[data-v-a0dabfd6] td {\n    border: none;\n    border-bottom: 1px solid #ebeef5;\n    padding: 6px 0;\n}\n",""])}});