(self.webpackChunk=self.webpackChunk||[]).push([[64],{2064:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>K});var o=a(5166),l=(0,o.withScopeId)("data-v-22de11f5");(0,o.pushScopeId)("data-v-22de11f5");var r={class:"container-fluid p-0"},c=(0,o.createVNode)("h1",{class:"h3 mb-3"},"My Contracts",-1),n={class:"row"},d={class:"col-12"},i={class:"card"},s=(0,o.createVNode)("div",{class:"card-header"}," My Contracts Data Table ",-1),u={class:"card-body"},m={class:"row"},v={class:"col-12"},b=(0,o.createVNode)("div",{class:"col-12 mt-3"},[(0,o.createVNode)("table",{id:"contracts-table",class:"table table-hover table-bordered",style:{width:"100%"}})],-1),p={id:"contract-add-modal",class:"modal fade",tabindex:"-1"},f={class:"modal-dialog modal-xl"},h={class:"modal-content"},y=(0,o.createVNode)("div",{class:"modal-header"},[(0,o.createVNode)("h5",{class:"modal-title"},"Contract Add Modal"),(0,o.createVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},N={class:"d-flex flex-column flex-md-fill"},w={class:"d-flex"},C={class:"flex-grow-1 mb-3"},k=(0,o.createTextVNode)(" Contract Type "),_=(0,o.createStaticVNode)('<option value="" data-v-22de11f5>-- Select Option --</option><option value="(Standard Contract) Household Service Worker Contract" data-v-22de11f5> (Standard Contract) Household Service Worker Contract </option><option value="(Standard Contract) Skilled Worker Contract" data-v-22de11f5> (Standard Contract) Skilled Worker Contract </option><option value="(BM Contract) Household Service Worker Contract" data-v-22de11f5> (BM Contract) Household Service Worker Contract </option><option value="(BM Contract) Skilled Worker Contract" data-v-22de11f5> (BM Contract) Skilled Worker Contract </option>',5),g={class:"row"},S={class:"col-6 text-center"},x={class:"flex-grow-1 mb-3"},B={class:"modal-footer"},M=(0,o.createVNode)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),A={id:"contract-overview-modal",class:"modal fade",tabindex:"-1"},D={class:"modal-dialog modal-xl"},E={class:"modal-content"},I={class:"modal-header"},O={class:"modal-title"},T=(0,o.createVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body"},P={class:"row justify-content-md-center"},R={class:"col-md-6 border p-3 d-flex flex-column"},L={id:"contract-image-modal",class:"modal fade",tabindex:"-1"},H={class:"modal-dialog modal-fullscreen"},j={class:"modal-content"},q={class:"modal-header"},F={class:"modal-title"},J=(0,o.createTextVNode)("Contract Overview Of "),U=(0,o.createVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Z={class:"modal-body"};(0,o.popScopeId)();var z=l((function(e,t,a,l,$,z){return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("div",r,[c,(0,o.createVNode)("div",n,[(0,o.createVNode)("div",d,[(0,o.createVNode)("div",i,[s,(0,o.createVNode)("div",u,[(0,o.createVNode)("div",m,[(0,o.createVNode)("div",v,[(0,o.createVNode)("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=function(){return z.showAddContract&&z.showAddContract.apply(z,arguments)})},"Add a Contract")]),b])])])])])]),(0,o.createVNode)("div",p,[(0,o.createVNode)("div",f,[(0,o.createVNode)("div",h,[y,(0,o.createVNode)("div",V,[(0,o.createVNode)("form",{onSubmit:t[4]||(t[4]=(0,o.withModifiers)((function(){return e.submit&&e.submit.apply(e,arguments)}),["prevent"]))},[(0,o.createVNode)("div",N,[(0,o.createVNode)("div",w,[(0,o.createVNode)("label",C,[k,(0,o.withDirectives)((0,o.createVNode)("select",{class:["form-select",{"is-invalid":""===$.overview.type}],"onUpdate:modelValue":t[2]||(t[2]=function(e){return $.overview.type=e})},[_],2),[[o.vModelSelect,$.overview.type]])])]),(0,o.createVNode)("div",g,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)($.overview.details,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("div",S,[(0,o.createVNode)("label",x,[(0,o.createTextVNode)((0,o.toDisplayString)(e.label)+" ",1),(0,o.createVNode)("input",{class:["form-control",{"is-invalid":""===e.value}],name:e.name,type:"file",onInput:function(t){return e.value=t.target.files[0]}},null,42,["name","onInput"])])])})),256))])]),(0,o.createVNode)("div",B,[M,(0,o.createVNode)("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(e){return z.save()})},"Save changes")])],32)])])])]),(0,o.createVNode)("div",A,[(0,o.createVNode)("div",D,[(0,o.createVNode)("div",E,[(0,o.createVNode)("div",I,[(0,o.createVNode)("h5",O,[(0,o.createTextVNode)("Contract Overview Of "+(0,o.toDisplayString)($.other_details.type)+" ",1),(0,o.createVNode)("u",null,(0,o.toDisplayString)($.other_details.custom_id),1)]),T]),(0,o.createVNode)("div",W,[(0,o.createVNode)("div",P,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)($.contents,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("div",R,[(0,o.createVNode)("button",{class:"btn btn-primary",onClick:function(t){return z.viewImage(e.value)}},(0,o.toDisplayString)(e.label),9,["onClick"])])})),256))])])])])]),(0,o.createVNode)("div",L,[(0,o.createVNode)("div",H,[(0,o.createVNode)("div",j,[(0,o.createVNode)("div",q,[(0,o.createVNode)("h5",F,[J,(0,o.createVNode)("u",null,(0,o.toDisplayString)($.other_details.custom_id),1)]),U]),(0,o.createVNode)("div",Z,[(0,o.createVNode)("img",{src:"/storage/"+$.image_path,style:{width:"100%"}},null,8,["src"])])])])])])}));const G={name:"My Contracts",props:["data","errors"],data:function(){return{dt:null,contract_add_modal:null,contract_overview_modal:null,overview:this.$inertia.form({type:"",details:[{label:"Contract",name:"contract",value:""},{label:"Request Letter",name:"request-letter",value:""},{label:"Job Order - CHAMBERED",name:"job-order",value:""},{label:"Visa Issued by ENJAZ with English Text",name:"visa",value:""},{label:"Special Power of Attorney - CHAMBERED",name:"spa",value:""},{label:"Recruitment Agreement",name:"rec-agreement",value:""},{label:"Master Employment Contract - CHAMBERED",name:"master-emp-contract",value:""},{label:"Commercial Registration",name:"comm-registration",value:""},{label:"Commercial Activity License / Business License",name:"business-license",value:""},{label:"POEA License of Philippine Agency",name:"poea-license",value:""},{label:"Contingency Plan",name:"contingency-plan",value:""},{label:"Affidavit of Undertaking",name:"affidavit",value:""},{label:"Copy of Employer's ID / Passport",name:"employer_id",value:""},{label:"List Of Current Filipino Workers",name:"current-filipino-workers",value:""},{label:"Location Sketch Of The Company",name:"location-sketch",value:""},{label:"Pictures of Workers' Accommodation",name:"workers-accomodation",value:""},{label:"Motor Vehicle Insurance Policy (for DRIVERS)",name:"vehicle-insurance",value:""},{label:"Other Required Documents",name:"other-documents",value:""}]}),contents:{},other_details:{},image_path:""}},methods:{save:function(){var e=this;this.overview.post(this.data.contract_store_link,{preserveScroll:!0,onSuccess:function(){e.overview.reset(),e.contract_add_modal.hide(),e.dt.draw()}})},showAddContract:function(){this.contract_add_modal.show()},showOverview:function(e){var t=this;axios.post(this.data.contract_overview_link,{id:e}).then((function(e){t.contents=e.data.contents,t.other_details=e.data.other,t.contract_overview_modal.show()}))},viewImage:function(e){this.image_path=e,this.contract_image_modal.show()}},watch:{errors:function(e){e.length>0&&alertify.error("Please fill all fields.")}},mounted:function(){var e=this;e.contract_add_modal=new bootstrap.Modal(document.getElementById("contract-add-modal"),{keyboard:!1}),e.contract_overview_modal=new bootstrap.Modal(document.getElementById("contract-overview-modal"),{keyboard:!1}),e.contract_image_modal=new bootstrap.Modal(document.getElementById("contract-image-modal"),{keyboard:!1}),e.dt=$("#contracts-table").DataTable({serverSide:!0,ajax:{url:e.data.contract_table_link,type:"POST"},order:[[0,"desc"]],columns:[{data:"created_at",name:"created_at",title:"Date Submitted"},{data:function(e){var t="";return $.each(e.audit,(function(e,a){t+='<span class="badge bg-primary">'+a.status+"</span>"})),t},name:"id",title:"Status",bSortable:!1},{data:function(e){return'<button type="button" class="btn-custom-id btn btn-sm btn-link">'+e.custom_id+"</button>"},name:"custom_id",title:"Contract No."},{data:"type",name:"type",title:"Type"}],drawCallback:function(t){$("body .btn-custom-id").on("click",(function(){e.showOverview(e.dt.row($(this).parent()).data().id)}))}})}};G.render=z,G.__scopeId="data-v-22de11f5";const K=G}}]);
//# sourceMappingURL=64.js.map?id=659455579619a9db9922