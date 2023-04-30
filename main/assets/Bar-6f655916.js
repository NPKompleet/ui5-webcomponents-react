import{a as f,U as p}from"./UI5Element-e8adceda.js";import{e as m,l as g,a as _,p as v,c as y,d as w}from"./withWebComponent-c710bf85.js";import{s as h}from"./slot-76e48863.js";import{R as l}from"./ResizeHandler-9d370fcd.js";import{o as R}from"./class-map-eee65cb7.js";import{s as B}from"./parameters-bundle.css-6b4a2ffb.js";var u;(function(t){t.Header="Header",t.Subheader="Subheader",t.Footer="Footer",t.FloatingFooter="FloatingFooter"})(u||(u={}));const b=u,x=(t,e,o)=>m`<div class="${R(t.classes.root)}" aria-label="${g(t.accInfo.label)}" role="toolbar" part="bar"><div class="ui5-bar-content-container ui5-bar-startcontent-container"><slot name="startContent"></slot></div><div class="ui5-bar-content-container ui5-bar-midcontent-container"><slot></slot></div><div class="ui5-bar-content-container ui5-bar-endcontent-container"><slot name="endContent"></slot></div></div>`;f("@ui5/webcomponents-theming","sap_fiori_3",async()=>_);f("@ui5/webcomponents-fiori","sap_fiori_3",async()=>B);const C={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Bar.css.ts",content:":host{background-color:var(--sapPageHeader_Background);height:var(--_ui5_bar_base_height);width:100%;box-shadow:inset 0 -.0625rem var(--sapPageHeader_BorderColor);display:block}.ui5-bar-root{display:flex;align-items:center;justify-content:space-between;height:inherit;width:inherit;background-color:inherit;box-shadow:inherit;border-radius:inherit}.ui5-bar-root .ui5-bar-startcontent-container{padding-inline-start:.5rem;display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.ui5-bar-root .ui5-bar-content-container{min-width:30%}.ui5-bar-root.ui5-bar-root-shrinked .ui5-bar-content-container{min-width:0;overflow:hidden}.ui5-bar-root .ui5-bar-endcontent-container{padding-inline-end:.5rem;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.ui5-bar-root .ui5-bar-midcontent-container{padding-left:.5rem;padding-right:.5rem;display:flex;flex-direction:row;align-items:center;justify-content:center}:host([design=Footer]){background-color:var(--sapPageFooter_Background);border-top:.0625rem solid var(--sapPageFooter_BorderColor);box-shadow:none}:host([design=Subheader]){height:var(--_ui5_bar_subheader_height)}:host([design=FloatingFooter]){border-radius:var(--sapElement_BorderCornerRadius);background-color:var(--sapPageFooter_Background);box-shadow:var(--sapContent_Shadow1);border:none}::slotted(*){margin:0 .25rem}"};var s=globalThis&&globalThis.__decorate||function(t,e,o,i){var a=arguments.length,r=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,o):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(d=t[c])&&(r=(a<3?d(r):a>3?d(e,o,r):d(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r};let n=class extends p{get accInfo(){return{label:this.design}}constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}handleResize(){const e=this.getDomRef(),o=e.offsetWidth,i=Array.from(e.children).some(a=>a.offsetWidth>o/3);e.classList.toggle("ui5-bar-root-shrinked",i)}get classes(){return{root:{"ui5-bar-root":!0}}}onBeforeRendering(){[...this.startContent,...this.middleContent,...this.endContent].forEach(e=>e.classList.add("ui5-bar-content"))}onEnterDOM(){l.register(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{l.register(e,this._handleResizeBound)},this)}onExitDOM(){l.deregister(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{l.deregister(e,this._handleResizeBound)},this)}};s([v({type:b,defaultValue:b.Header})],n.prototype,"design",void 0);s([h({type:HTMLElement})],n.prototype,"startContent",void 0);s([h({type:HTMLElement,default:!0})],n.prototype,"middleContent",void 0);s([h({type:HTMLElement})],n.prototype,"endContent",void 0);n=s([y({tag:"ui5-bar",fastNavigation:!0,renderer:w,styles:C,template:x})],n);n.define();const F=n,D=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{b as B,F as a,D as b};
//# sourceMappingURL=Bar-6f655916.js.map
