"use strict";(globalThis["webpackChunkmenu_aggregator"]=globalThis["webpackChunkmenu_aggregator"]||[]).push([[130],{6130:(t,e,a)=>{a.r(e),a.d(e,{default:()=>k});var o=a(3673),n=a(2323);const s={class:"q-mr-xl text-weight-bold text-caption"};function r(t,e,a,r,l,i){const u=(0,o.up)("q-avatar"),d=(0,o.up)("q-toolbar-title"),h=(0,o.up)("q-space"),c=(0,o.up)("q-btn"),p=(0,o.up)("q-toolbar"),g=(0,o.up)("q-header"),m=(0,o.up)("router-view"),y=(0,o.up)("q-page-container"),v=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(v,{view:"lHh Lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{elevated:"",reveal:""},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{icon:"las la-utensils"}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(l.today),1)])),_:1}),(0,o.Wm)(h),(0,o._)("div",s,(0,n.zw)(l.version),1),(0,o.Wm)(c,{flat:"",round:"",dense:"",icon:t.$q.dark.isActive?"las la-sun":"las la-moon",onClick:i.toggleDark},null,8,["icon","onClick"]),(0,o.Wm)(c,{flat:"",round:"",dense:"",icon:"lab la-github",type:"a",href:"https://github.com/talavis/lunch-menu"})])),_:1})])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m)])),_:1})])),_:1})}var l=a(4398);const i={name:"MainLayout",computed:{showSolna:{get(){return this.$store.state.main.showSolna},set(t){this.$store.dispatch("main/setShowSolna",t)}},showUppsala:{get(){return this.$store.state.main.showUppsala},set(t){this.$store.dispatch("main/setShowUppsala",t)}},onlyFavourites:{get(){return this.$store.state.main.onlyFavourites},set(t){this.$store.dispatch("main/setOnlyFavourites",t)}}},data(){return{today:"",version:void 0}},methods:{toggleDark(){console.log("here"),this.$q.dark.toggle(),this.$q.dark.isActive?(0,l.Z)("info","#A7C947"):(0,l.Z)("info","#3F3F3F")}},created(){this.$q.dark.isActive&&(0,l.Z)("info","#A7C947");const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=["January","February","March","April","May","June","July","August","September","October","November","December"];let a=new Date;this.today=t[a.getDay()]+" "+a.getDate()+" "+e[a.getMonth()]}};var u=a(4260),d=a(2936),h=a(3812),c=a(9570),p=a(5096),g=a(3747),m=a(2025),y=a(6819),v=a(2652),w=a(7518),b=a.n(w);const f=(0,u.Z)(i,[["render",r]]),k=f;b()(i,"components",{QLayout:d.Z,QHeader:h.Z,QToolbar:c.Z,QAvatar:p.Z,QToolbarTitle:g.Z,QSpace:m.Z,QBtn:y.Z,QPageContainer:v.Z})}}]);