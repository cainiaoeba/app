"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[160],{1160:function(t,o,e){e.r(o),e.d(o,{default:function(){return G}});var s=function(){var t=this,o=t._self._c;return o("div",[o("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.carousels,(function(t,e){return o("van-swipe-item",{key:e},[o("img",{attrs:{src:t.carouselUrl,alt:""}})])})),1),o("van-grid",{attrs:{"column-num":"5"}},t._l(t.icon,(function(t,e){return o("van-grid-item",{key:e,attrs:{icon:t.icon,text:t.text}})})),1),o("Goods",{attrs:{itemGoods:t.newGoodses},scopedSlots:t._u([{key:"title",fn:function(){return[o("div",[o("h2",[t._v("新品推荐")])])]},proxy:!0}])}),o("Goods",{attrs:{itemGoods:t.hotGoodses},scopedSlots:t._u([{key:"title",fn:function(){return[o("div",[o("h2",[t._v("热销商品")])])]},proxy:!0}])}),o("Goods",{attrs:{itemGoods:t.recommendGoodses},scopedSlots:t._u([{key:"title",fn:function(){return[o("div",[o("h2",[t._v("最新推荐")])])]},proxy:!0}])})],1)},n=[],i=function(){var t=this,o=t._self._c;return o("div",{staticClass:"goods-box"},[o("div",{staticClass:"title"},[t._t("title",(function(){return[t._v("默认标题")]}))],2),o("ul",t._l(t.itemGoods,(function(e){return o("router-link",{key:e.goodsId,staticClass:"goods-item",attrs:{to:"/info/"+e.goodsId}},[o("img",{attrs:{src:e.goodsCoverImg,alt:""}}),o("span",[t._v(t._s(e.goodsName))]),o("p",[t._v(t._s(e.sellingPrice))])])})),1)])},r=[],a={name:"Goods",props:{itemGoods:{type:Array}},data(){return{}}},c=a,d=e(1001),l=(0,d.Z)(c,i,r,!1,null,"77fd2b84",null),u=l.exports,p=e(9547),m={name:"view-home",components:{Goods:u},data(){return{carousels:[],hotGoodses:[],newGoodses:[],recommendGoodses:[],icon:[{icon:"shopping-cart",text:"码路超市"},{icon:"manager",text:"码路服饰"},{icon:"wechat-pay",text:"全球购"},{icon:"award",text:"码路生鲜"},{icon:"logistics",text:"直邮到家"},{icon:"after-sale",text:"充值缴费"},{icon:"bag-o",text:"9.9元拼"},{icon:"coupon-o",text:"领卷"},{icon:"bill-o",text:"省钱"},{icon:"goods-collect",text:"全部"}]}},created(){(0,p.m)().then((t=>{200===t.resultCode&&(this.carousels=t.data.carousels,this.hotGoodses=t.data.hotGoodses,this.newGoodses=t.data.newGoodses,this.recommendGoodses=t.data.recommendGoodses)})),localStorage.getItem("xftoken")&&this.$store.dispatch("shopCartAsync")}},h=m,f=(0,d.Z)(h,s,n,!1,null,"66e6135c",null),G=f.exports}}]);
//# sourceMappingURL=160.e5f9f452.js.map