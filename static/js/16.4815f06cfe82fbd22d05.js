webpackJsonp([16],{KH3r:function(e,t,a){"use strict";t.c=function(e){return Object(l.a)({url:"/health/food/list",method:"GET",params:e})},t.j=function(e,t){return Object(l.a)({url:"/health/foodUpdate/"+t,method:"POST",data:e})},t.a=function(e){return Object(l.a)({url:"/health/food/"+e,method:"DELETE"})},t.b=function(e){return Object(l.a)({url:"/health/food",method:"POST",data:e})},t.d=function(e){return Object(l.a)({url:"/health/food/"+e,method:"GET"})},t.h=function(e){return Object(l.a)({url:"/health/foodType/list",method:"GET",params:e})},t.e=function(e){return Object(l.a)({url:"/health/foodType",method:"POST",data:e})},t.f=function(e){return Object(l.a)({url:"/health/foodType/"+e,method:"GET"})},t.g=function(e){return Object(l.a)({url:"/health/foodType/"+e,method:"DELETE"})},t.i=function(e,t){return Object(l.a)({url:"/health/foodTypeUpdate/"+t,method:"POST",data:e})};var l=a("vLgD")},ROha:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,'\n.Cooking_steps[data-v-2de81818] {\n  width: 97%;\n  height: 100%;\n  margin-left: 1.5%;\n  padding: 0;\n}\n.Cooking_steps .contanier_top[data-v-2de81818] {\n    width: 100%;\n    min-height: 41px;\n    margin-bottom: 1%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.Cooking_steps .contanier_top .top-right[data-v-2de81818] {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      text-align: right;\n}\n.Cooking_steps ul[name="dialogbody"][data-v-2de81818] {\n    list-style: none;\n    padding-left: 0;\n}\n.Cooking_steps ul[name="dialogbody"] .li_label[data-v-2de81818] {\n      font-weight: normal;\n      width: 6em;\n      text-align: right;\n}\n.Cooking_steps ul[name="dialogbody"] li[data-v-2de81818] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding-bottom: 1em;\n}\n.Cooking_steps ul[name="dialogbody"] li[data-v-2de81818]:nth-of-type(1) {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.Cooking_steps ul[name="dialogbody"] li:nth-of-type(1) span[data-v-2de81818] {\n        width: 25em;\n}\n.Cooking_steps ul[name="dialogbody"] li:nth-of-type(2) > span[data-v-2de81818] {\n      width: 25em;\n      min-height: 80px;\n}\n.Cooking_steps ul[name="dialogbody"] li[data-v-2de81818]:nth-of-type(3) {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.Cooking_steps ul[name="dialogbody"] li:nth-of-type(3) span[data-v-2de81818] {\n        width: 25em;\n}\n.Cooking_steps ul[name="dialogbody"] li[data-v-2de81818]:nth-of-type(4) {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.Cooking_steps ul[name="dialogbody"] li:nth-of-type(4) > .el-select[data-v-2de81818] {\n        width: 25em;\n}\n.Cooking_steps ul[name="dialogbody"][data-v-2de81818] .avatar-uploader {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n}\n.Cooking_steps ul[name="dialogbody"][data-v-2de81818] .avatar-uploader .el-upload {\n        border: 1px dashed #d9d9d9;\n        border-radius: 50%;\n        background: #eeeeee;\n        cursor: pointer;\n        position: relative;\n        overflow: hidden;\n}\n.Cooking_steps ul[name="dialogbody"][data-v-2de81818] .avatar-uploader .el-upload:hover {\n        border-color: #409eff;\n}\n.Cooking_steps ul[name="dialogbody"][data-v-2de81818] .avatar-uploader .avatar-uploader-icon {\n        font-size: 28px;\n        color: #8c939d;\n        width: 70px;\n        height: 70px;\n        line-height: 70px;\n        text-align: center;\n}\n.Cooking_steps ul[name="dialogbody"][data-v-2de81818] .avatar-uploader .avatar {\n        width: 70px;\n        height: 70px;\n        display: block;\n}\n.el-table[data-v-2de81818] {\n  width: 100%;\n  border: 1px solid #ebeef5;\n}\n.el-table[data-v-2de81818] .cell {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.el-table[data-v-2de81818] .cell /deep/ .el-tag {\n      margin: 2px 4px;\n      border: none;\n}\n.el-table[data-v-2de81818] .cell /deep/ .el-button {\n      border: none;\n}\n.el-table[data-v-2de81818] th {\n    background-color: #ecf5ff;\n    color: #333333;\n    padding: 12px 0;\n    border: none;\n}\n.el-table[data-v-2de81818] .el-table__header-wrapper {\n    background-color: #ecf5ff;\n}\n.el-table[data-v-2de81818] td {\n    border: none;\n    border-bottom: 1px solid #ebeef5;\n    padding: 6px 0;\n}\n.el-dialog__wrapper[data-v-2de81818] .el-dialog {\n  overflow: hidden;\n  border-radius: 5px;\n  margin-bottom: 5vh;\n}\n.el-dialog__wrapper[data-v-2de81818] .el-dialog .el-dialog__footer {\n    padding: 10px 23px 20px;\n    text-align: right;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.el-dialog__wrapper[data-v-2de81818] .el-dialog .el-dialog__header {\n    padding: 12px 23px 8px;\n    background: #409eff;\n}\n.el-dialog__wrapper[data-v-2de81818] .el-dialog .el-dialog__header .el-dialog__title {\n      color: #fff;\n      font-size: 18px;\n      font-weight: 500;\n}\n.el-dialog__wrapper[data-v-2de81818] .el-dialog .el-dialog__header .el-dialog__headerbtn {\n      top: 15px;\n}\n.el-dialog__wrapper[data-v-2de81818] .el-dialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close {\n        color: #fff;\n}\n.el-dialog__wrapper[data-v-2de81818] .el-dialog .el-dialog__body {\n    padding: 30px 23px 0;\n    color: #606266;\n    line-height: 24px;\n    font-size: 16px;\n}\n',""])},UH9W:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("KH3r"),n={data:function(){return{value1:!0,value2:!1,symptomsData:{thumb:""},Thumbnailurl:"",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],status:!1,dialogVisiblesx:!1,dialogcreate:!1,dialogUpdate:!1,listQuery:{type:"",point:""},Choose:[{value:"",label:"所有类别"},{value:1,label:"测试"},{value:2,label:"基础"}],list:[]}},created:function(){this.getData()},methods:{getData:function(){var e=this;Object(l.h)().then(function(t){t.data.length?e.list=t.data:e.$message.error({message:"亲,资源不存在!"})})},beforeThumbnail:function(e){return this.symptomsData.thumb=e,this.base64obj(e),!1},base64obj:function(e){var t=new FileReader;t.readAsDataURL(e);var a=this;t.onloadend=function(){a.Thumbnailurl=t.result}},upData:function(e){var t=this;Object(l.f)(e).then(function(e){t.symptomsData=e.data,t.symptomsData.thumb&&(t.Thumbnailurl=t.symptomsData.thumb),t.dialogUpdate=!0})},upsave:function(){var e=this,t=new FormData;t.append("title",this.symptomsData.title),t.append("description",this.symptomsData.description),t.append("displayorder",this.symptomsData.displayorder),t.append("thumb",this.symptomsData.thumb),Object(l.i)(t,this.symptomsData.id).then(function(t){1===t.status_code&&(e.$message.success({message:"修改成功!",type:"success"}),e.dialogUpdate=!1,e.getData())})},addData:function(e){},savedel:function(){this.dialogVisiblesx=!1},delData:function(e){var t=this;Object(l.g)(e).then(function(e){1===e.status_code&&(t.getData(),t.$message({message:"删除成功！",type:"success"}))})},addsave:function(){var e=this,t=new FormData;t.append("title",this.symptomsData.title),t.append("description",this.symptomsData.description),t.append("displayorder",this.symptomsData.displayorder),t.append("thumb",this.symptomsData.thumb),Object(l.e)(t).then(function(t){1===t.status_code&&(e.$message.success({message:"新增成功!",type:"success"}),e.dialogcreate=!1,e.getData())})},removeClose:function(){this.symptomsData={thumb:""}}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Cooking_steps"},[a("div",{staticClass:"contanier_top"},[a("div",{staticClass:"top-right"},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus"},on:{click:function(t){e.dialogcreate=!0}}},[e._v("新增")])],1)]),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center",width:"80px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"类别名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",label:"简介",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"displayorder",label:"排序值",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"thumb",label:"缩略图",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:e.row.thumb,onerror:"this.src='../static/image/aaa.png'"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{directives:[{name:"show",rawName:"v-show",value:1===t.row.enabled,expression:"scope.row.enabled===1"}]},[a("el-switch",{attrs:{disabled:""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0===t.row.enabled,expression:"scope.row.enabled===0"}]},[a("el-switch",{attrs:{disabled:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",plain:!0},nativeOn:{click:function(a){a.preventDefault(),e.upData(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:!0},nativeOn:{click:function(a){a.preventDefault(),e.delData(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:"删除",visible:e.dialogVisiblesx,width:"35em"},on:{"update:visible":function(t){e.dialogVisiblesx=t}}},[a("span",[e._v("确定删除一个题目吗?")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisiblesx=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.savedel}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.dialogcreate,width:"45em",top:"5vh"},on:{"update:visible":function(t){e.dialogcreate=t},close:e.removeClose}},[a("ul",{attrs:{name:"dialogbody"}},[a("li",[a("label",{staticClass:"li_label",attrs:{for:""}},[e._v("类别名称：")]),e._v(" "),a("span",[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.symptomsData.title,callback:function(t){e.$set(e.symptomsData,"title",t)},expression:"symptomsData.title"}})],1)]),e._v(" "),a("li",[a("label",{staticClass:"li_label",attrs:{for:""}},[e._v("类别简介：")]),e._v(" "),a("span",[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:e.symptomsData.description,callback:function(t){e.$set(e.symptomsData,"description",t)},expression:"symptomsData.description"}})],1)]),e._v(" "),a("li",[a("label",{staticClass:"li_label",attrs:{for:""}},[e._v("排序字段：")]),e._v(" "),a("span",[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.symptomsData.displayorder,callback:function(t){e.$set(e.symptomsData,"displayorder",t)},expression:"symptomsData.displayorder"}})],1)]),e._v(" "),a("li",[a("label",{staticClass:"li_label",attrs:{for:""}},[e._v("食谱缩略图：")]),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"before-upload":e.beforeThumbnail}},[e.symptomsData.thumb?a("img",{staticClass:"avatar",attrs:{src:e.Thumbnailurl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogcreate=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addsave}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.dialogUpdate,width:"45em",top:"5vh"},on:{"update:visible":function(t){e.dialogUpdate=t},close:e.removeClose}},[a("ul",{attrs:{name:"dialogbody"}},[a("li",[a("label",{staticClass:"li_label",attrs:{for:""}},[e._v("类别名称：")]),e._v(" "),a("span",[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.symptomsData.title,callback:function(t){e.$set(e.symptomsData,"title",t)},expression:"symptomsData.title"}})],1)]),e._v(" "),a("li",[a("label",{staticClass:"li_label",attrs:{for:""}},[e._v("类别简介：")]),e._v(" "),a("span",[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:e.symptomsData.description,callback:function(t){e.$set(e.symptomsData,"description",t)},expression:"symptomsData.description"}})],1)]),e._v(" "),a("li",[a("label",{staticClass:"li_label",attrs:{for:""}},[e._v("排序字段：")]),e._v(" "),a("span",[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.symptomsData.displayorder,callback:function(t){e.$set(e.symptomsData,"displayorder",t)},expression:"symptomsData.displayorder"}})],1)]),e._v(" "),a("li",[a("label",{staticClass:"li_label",attrs:{for:""}},[e._v("食谱缩略图：")]),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"before-upload":e.beforeThumbnail}},[e.symptomsData.thumb?a("img",{staticClass:"avatar",attrs:{src:e.Thumbnailurl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogUpdate=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.upsave}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var i=a("VU/8")(n,o,!1,function(e){a("vhWS")},"data-v-2de81818",null);t.default=i.exports},vhWS:function(e,t,a){var l=a("ROha");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("1f1103de",l,!0)}});