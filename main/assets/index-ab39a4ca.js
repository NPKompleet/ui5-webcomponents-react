import{_ as A}from"./iframe-86586323.js";import{U as C,a as g,d as M}from"./UI5Element-e8adceda.js";import{p as h,c as R,e as u,l as a,s as l,a as W,b as O,d as U,w as E}from"./withWebComponent-c710bf85.js";import{s as V}from"./slot-76e48863.js";import{c as f,I as K,e as H}from"./Icon-16710c43.js";import{I as T,N as L}from"./ItemNavigation-01761450.js";import{l as j,c as y,b as G}from"./Icons-5b18f7d2.js";import{I as x}from"./Integer-f7f172c9.js";import{R as N}from"./ResizeHandler-9d370fcd.js";import{$ as Y,a0 as J,a1 as Q,a2 as X}from"./i18n-defaults-254d6b69.js";import{a as Z}from"./Link-a00cf029.js";import ee from"./Label-e22f23ee.js";import te from"./ResponsivePopover-37029899.js";import{L as re}from"./ListItemBase-49bcf604.js";import ie from"./StandardListItem-1576ed3d.js";import{B as oe}from"./Button-6eea99db.js";import"./slim-arrow-down-09ec0732.js";var k;(function(t){t.Standard="Standard",t.NoCurrentPage="NoCurrentPage"})(k||(k={}));const v=k;var $;(function(t){t.Slash="Slash",t.BackSlash="BackSlash",t.DoubleBackSlash="DoubleBackSlash",t.DoubleGreaterThan="DoubleGreaterThan",t.DoubleSlash="DoubleSlash",t.GreaterThan="GreaterThan"})($||($={}));const I=$;var b=globalThis&&globalThis.__decorate||function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(n=(i<3?s(n):i>3?s(e,r,n):s(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n};let d=class extends C{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};b([h()],d.prototype,"href",void 0);b([h({defaultValue:void 0})],d.prototype,"target",void 0);b([h()],d.prototype,"accessibleName",void 0);b([V({type:Node,default:!0})],d.prototype,"text",void 0);d=b([R("ui5-breadcrumbs-item")],d);d.define();const F=d,ae=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),ne=(t,e,r)=>r?u`<nav class="ui5-breadcrumbs-root" aria-label="${a(t._accessibleNameText)}"><ol @focusin="${t._onfocusin}" @keydown="${t._onkeydown}" @keyup="${t._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${t._isOverflowEmpty}"><${l("ui5-link",e,r)} @ui5-click="${a(t._openRespPopover)}" accessible-role="button" aria-label="${a(t._dropdownArrowAccessibleNameText)}" aria-haspopup="${a(t._ariaHasPopup)}"><${l("ui5-icon",e,r)} name="slim-arrow-down" title="${a(t._dropdownArrowAccessibleNameText)}"></${l("ui5-icon",e,r)}></${l("ui5-link",e,r)}></li>${f(t._linksData,(o,i)=>o._id||i,(o,i)=>D(o,i,t,e,r))}${t._endsWithCurrentLocationLabel?B(t,e,r):void 0}</ol></nav>`:u`<nav class="ui5-breadcrumbs-root" aria-label="${a(t._accessibleNameText)}"><ol @focusin="${t._onfocusin}" @keydown="${t._onkeydown}" @keyup="${t._onkeyup}"><li class="ui5-breadcrumbs-dropdown-arrow-link-wrapper" ?hidden="${t._isOverflowEmpty}"><ui5-link @ui5-click="${a(t._openRespPopover)}" accessible-role="button" aria-label="${a(t._dropdownArrowAccessibleNameText)}" aria-haspopup="${a(t._ariaHasPopup)}"><ui5-icon name="slim-arrow-down" title="${a(t._dropdownArrowAccessibleNameText)}"></ui5-icon></ui5-link></li>${f(t._linksData,(o,i)=>o._id||i,(o,i)=>D(o,i,t,e,r))}${t._endsWithCurrentLocationLabel?B(t,e,r):void 0}</ol></nav>`,D=(t,e,r,o,i)=>i?u`<li class="ui5-breadcrumbs-link-wrapper" id="${a(t._id)}-link-wrapper"><${l("ui5-link",o,i)} @ui5-click="${a(r._onLinkPress)}" href="${a(t.href)}" target="${a(t.target)}" id="${a(t._id)}-link" accessible-name="${a(t._accessibleNameText)}" data-ui5-stable="${a(t.stableDomRef)}">${a(t.innerText)}</${l("ui5-link",o,i)}></li>`:u`<li class="ui5-breadcrumbs-link-wrapper" id="${a(t._id)}-link-wrapper"><ui5-link @ui5-click="${a(r._onLinkPress)}" href="${a(t.href)}" target="${a(t.target)}" id="${a(t._id)}-link" accessible-name="${a(t._accessibleNameText)}" data-ui5-stable="${a(t.stableDomRef)}">${a(t.innerText)}</ui5-link></li>`,B=(t,e,r)=>r?u`<li class="ui5-breadcrumbs-current-location" @click="${t._onLabelPress}"><span aria-current="page" aria-label="${a(t._currentLocationAccName)}" role="link" id="${a(t._id)}-labelWrapper"><${l("ui5-label",e,r)}>${a(t._currentLocationText)}</${l("ui5-label",e,r)}></span></li>`:u`<li class="ui5-breadcrumbs-current-location" @click="${t._onLabelPress}"><span aria-current="page" aria-label="${a(t._currentLocationAccName)}" role="link" id="${a(t._id)}-labelWrapper"><ui5-label>${a(t._currentLocationText)}</ui5-label></span></li>`,se=(t,e,r)=>r?u`<${l("ui5-responsive-popover",e,r)} class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement-type="Bottom" horizontal-align="Left" _hide-header @keydown="${t._onkeydown}"><${l("ui5-list",e,r)} mode="SingleSelect" separators="None" @ui5-selection-change="${a(t._onOverflowListItemSelect)}">${f(t._overflowItemsData,(o,i)=>o._id||i,(o,i)=>P(o,i,t,e,r))}</${l("ui5-list",e,r)}><div slot="footer" class="ui5-breadcrumbs-popover-footer"><${l("ui5-button",e,r)} design="Transparent" @click="${t._closeRespPopover}">${a(t._cancelButtonText)}</${l("ui5-button",e,r)}></div></${l("ui5-responsive-popover",e,r)}>`:u`<ui5-responsive-popover class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement-type="Bottom" horizontal-align="Left" _hide-header @keydown="${t._onkeydown}"><ui5-list mode="SingleSelect" separators="None" @ui5-selection-change="${a(t._onOverflowListItemSelect)}">${f(t._overflowItemsData,(o,i)=>o._id||i,(o,i)=>P(o,i,t,e,r))}</ui5-list><div slot="footer" class="ui5-breadcrumbs-popover-footer"><ui5-button design="Transparent" @click="${t._closeRespPopover}">${a(t._cancelButtonText)}</ui5-button></div></ui5-responsive-popover>`,P=(t,e,r,o,i)=>i?u`<${l("ui5-li",o,i)} id="${a(t._id)}-li" accessible-name="${a(t.accessibleName)}" data-ui5-stable="${a(t.stableDomRef)}">${a(t.textContent)}</${l("ui5-li",o,i)}>`:u`<ui5-li id="${a(t._id)}-li" accessible-name="${a(t.accessibleName)}" data-ui5-stable="${a(t.stableDomRef)}">${a(t.textContent)}</ui5-li>`;g("@ui5/webcomponents-theming","sap_fiori_3",async()=>W);g("@ui5/webcomponents","sap_fiori_3",async()=>O);const le={packageName:"@ui5/webcomponents",fileName:"themes/Breadcrumbs.css.ts",content:'.ui5-breadcrumbs-root{white-space:nowrap;outline:none;margin:0 0 .5rem 0}.ui5-breadcrumbs-root>ol{margin:0;padding:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:flex}.ui5-breadcrumbs-root>ol>li{display:inline}.ui5-breadcrumbs-current-location{min-width:1%;-webkit-flex:1;-webkit-box-flex:1;flex:1 1 auto;font-size:0;align-self:center}.ui5-breadcrumbs-current-location>span:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5_breadcrumbs_current_location_focus_border_radius)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper[hidden]{display:none}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]{width:var(--sapFontSize);height:var(--sapFontSize);padding-left:.675rem;vertical-align:text-top;color:var(--sapLinkColor)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]{color:var(--_ui5_link_focus_color)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]:before{content:"...";vertical-align:middle;position:absolute;left:0;bottom:0}.ui5-breadcrumbs-dropdown-arrow-link-wrapper:hover [ui5-icon]:after,.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]:after{content:"";position:absolute;border-bottom:.0625rem solid;top:0;left:0;bottom:1px;right:0}li:not(.ui5-breadcrumbs-current-location):after{content:"/";padding:0 .25rem;cursor:auto;color:var(--sapContent_LabelColor);display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-breadcrumbs-popover-footer{display:flex;justify-content:flex-end;width:100%}:host([separator-style=BackSlash]) li:not(.ui5-breadcrumbs-current-location):after{content:"\\\\"}:host([separator-style=DoubleBackSlash]) li:not(.ui5-breadcrumbs-current-location):after{content:"\\\\\\\\"}:host([separator-style=DoubleGreaterThan]) li:not(.ui5-breadcrumbs-current-location):after{content:">>"}:host([separator-style=DoubleSlash]) li:not(.ui5-breadcrumbs-current-location):after{content:"//"}:host([separator-style=GreaterThan]) li:not(.ui5-breadcrumbs-current-location):after{content:">"}'};g("@ui5/webcomponents-theming","sap_fiori_3",async()=>W);g("@ui5/webcomponents","sap_fiori_3",async()=>O);const ce={packageName:"@ui5/webcomponents",fileName:"themes/BreadcrumbsPopover.css.ts",content:".ui5-breadcrumbs-popover::part(content){padding:0}.ui5-breadcrumbs-popover-footer{display:flex;justify-content:flex-end;width:100%;padding-right:.5rem;align-items:center}"};var _=globalThis&&globalThis.__decorate||function(t,e,r,o){var i=arguments.length,n=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(n=(i<3?s(n):i>3?s(e,r,n):s(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n},m;let p=m=class extends C{constructor(){super(),this._breadcrumbItemWidths=new WeakMap,this._dropdownArrowLinkWidth=0,this._itemNavigation=new T(this,{navigationMode:L.Horizontal,getItemsCallback:()=>this._getFocusableItems()}),this._onResizeHandler=this._updateOverflow.bind(this),this._labelFocusAdaptor={id:`${this._id}-labelWrapper`,getlabelWrapper:this.getCurrentLocationLabelWrapper.bind(this),set _tabIndex(e){const r=this.getlabelWrapper();r&&r.setAttribute("tabindex",e)},get _tabIndex(){const e=this.getlabelWrapper();return(e==null?void 0:e.getAttribute("tabindex"))||""}}}onInvalidation(e){if(e.reason==="childchange"){const r=this._getItems().indexOf(e.child);r<this._overflowSize&&(this._overflowSize=r)}}_getItems(){return this.getSlottedNodes("items")}onBeforeRendering(){this._preprocessItems()}onAfterRendering(){this._cacheWidths(),this._updateOverflow()}onEnterDOM(){N.register(this,this._onResizeHandler)}onExitDOM(){N.deregister(this,this._onResizeHandler)}_initItemNavigation(){this._itemNavigation||(this._itemNavigation=new T(this,{navigationMode:L.Horizontal,getItemsCallback:()=>this._getFocusableItems()}))}_getFocusableItems(){const e=this._links;return this._isOverflowEmpty||e.unshift(this._dropdownArrowLink),this._endsWithCurrentLocationLabel&&e.push(this._labelFocusAdaptor),e}_onfocusin(e){const r=e.target,o=this.getCurrentLocationLabelWrapper(),i=r===o?this._labelFocusAdaptor:r;this._itemNavigation.setCurrentItem(i)}_onkeydown(e){const r=this._isDropdownArrowFocused;if(j(e)&&r&&!this._isOverflowEmpty){e.preventDefault(),this._toggleRespPopover();return}if(y(e)&&r&&!this._isOverflowEmpty&&!this._isPickerOpen){e.preventDefault();return}(G(e)||y(e))&&this._isCurrentLocationLabelFocused&&this._onLabelPress(e)}_onkeyup(e){this._isDropdownArrowFocused&&y(e)&&!this._isOverflowEmpty&&!this._isPickerOpen&&this._openRespPopover()}_cacheWidths(){const e=this._breadcrumbItemWidths,r=this._getItems(),o=this._currentLocationLabel;for(let i=this._overflowSize;i<r.length;i++){const n=r[i],s=this.shadowRoot.querySelector(`#${n._id}-link-wrapper`);e.set(n,this._getElementWidth(s))}if(r.length&&this._endsWithCurrentLocationLabel&&o){const i=r[r.length-1];e.set(i,this._getElementWidth(o))}if(!this._isOverflowEmpty){const i=this.shadowRoot.querySelector(".ui5-breadcrumbs-dropdown-arrow-link-wrapper");this._dropdownArrowLinkWidth=this._getElementWidth(i)}}_updateOverflow(){const e=this._getItems(),r=this.shadowRoot.querySelector(".ui5-breadcrumbs-root").offsetWidth;let o=this._getTotalContentWidth(),i=0;for(o>r&&(o+=this._dropdownArrowLinkWidth);o>r&&i<this._maxAllowedOverflowSize;){const s=e[i];let c=0;this._isItemVisible(s)&&(c=this._breadcrumbItemWidths.get(s)||0),o-=c,i++}this._overflowSize=i,this._isOverflowEmpty&&this._isPickerOpen&&this.responsivePopover.close();const n=this._getFocusableItems();n.some(s=>s._tabIndex==="0")||this._itemNavigation.setCurrentItem(n[0])}_getElementWidth(e){return e?Math.ceil(e.getBoundingClientRect().width):0}_getTotalContentWidth(){const e=this._getItems(),r=this._breadcrumbItemWidths;return e.reduce((i,n)=>i+r.get(n),0)}_onLinkPress(e){const r=e.target,o=this._getItems(),i=o.find(q=>`${q._id}-link`===r.id),{altKey:n,ctrlKey:s,metaKey:c,shiftKey:z}=e.detail;this.fireEvent("item-click",{item:i,altKey:n,ctrlKey:s,metaKey:c,shiftKey:z},!0)||e.preventDefault()}_onLabelPress(e){const r=this._getItems(),o=r[r.length-1],{altKey:i,ctrlKey:n,metaKey:s,shiftKey:c}=e;this.fireEvent("item-click",{item:o,altKey:i,ctrlKey:n,metaKey:s,shiftKey:c})}_onOverflowListItemSelect(e){const r=e.detail.selectedItems[0],o=this._getItems(),i=o.find(n=>`${n._id}-li`===r.id);this.fireEvent("item-click",{item:i},!0)&&(window.open(i.href,i.target||"_self","noopener,noreferrer"),this.responsivePopover.close())}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}async _toggleRespPopover(){this.responsivePopover=await this._respPopover(),this._isPickerOpen?this._closeRespPopover():this._openRespPopover()}_closeRespPopover(){this.responsivePopover&&this.responsivePopover.close()}async _openRespPopover(){this.responsivePopover=await this._respPopover(),this.responsivePopover.showAt(this._dropdownArrowLink)}_isItemVisible(e){return!e.hidden&&this._hasVisibleContent(e)}_hasVisibleContent(e){return e.innerText||Array.from(e.children).some(r=>!r.hidden)}_preprocessItems(){this.items.forEach(e=>{e._getRealDomRef=()=>this.getDomRef().querySelector(`[data-ui5-stable*=${e.stableDomRef}]`)})}_getItemPositionText(e,r){return m.i18nBundle.getText(Y,e,r)}_getItemAccessibleName(e,r,o){const i=this._getItemPositionText(r,o),n=e.textContent||"";let s="";return e.accessibleName?s=`${n.trim()} ${e.accessibleName} ${i}`:s=`${n.trim()} ${i}`,s}getCurrentLocationLabelWrapper(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-current-location > span")}get _visibleItems(){return this._getItems().slice(this._overflowSize).filter(e=>this._isItemVisible(e))}get _endsWithCurrentLocationLabel(){return this.design===v.Standard}get _currentLocationText(){const e=this._getItems();if(this._endsWithCurrentLocationLabel&&e.length){const r=e[e.length-1];if(this._isItemVisible(r))return r.innerText}return""}get _currentLocationLabel(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-current-location [ui5-label]")}get _isDropdownArrowFocused(){return this._dropdownArrowLink._tabIndex==="0"}get _isCurrentLocationLabelFocused(){const e=this.getCurrentLocationLabelWrapper();return e&&e.tabIndex===0}get _maxAllowedOverflowSize(){return this._getItems().filter(r=>this._isItemVisible(r)).length-1}get _dropdownArrowLink(){return this.shadowRoot.querySelector(".ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link]")}get _overflowItemsData(){return this._getItems().slice(0,this._overflowSize).filter(e=>this._isItemVisible(e)).reverse()}get _linksData(){const e=this._visibleItems,r=e.length;return this._endsWithCurrentLocationLabel&&e.pop(),e.map((o,i)=>(o._accessibleNameText=this._getItemAccessibleName(o,i+1,r),o))}get _currentLocationAccName(){const e=this._visibleItems,r=this._getItemPositionText(e.length,e.length),o=e[e.length-1];if(!o)return r;const i=o.textContent||"";return o.accessibleName?`${i.trim()} ${o.accessibleName} ${r}`:`${i.trim()} ${r}`}get _links(){return Array.from(this.shadowRoot.querySelectorAll(".ui5-breadcrumbs-link-wrapper [ui5-link]"))}get _isOverflowEmpty(){return this._overflowItemsData.length===0}get _ariaHasPopup(){if(!this._isOverflowEmpty)return"listbox"}get _isPickerOpen(){return!!this.responsivePopover&&this.responsivePopover.opened}get _accessibleNameText(){return m.i18nBundle.getText(J)}get _dropdownArrowAccessibleNameText(){return m.i18nBundle.getText(Q)}get _cancelButtonText(){return m.i18nBundle.getText(X)}static async onDefine(){m.i18nBundle=await M("@ui5/webcomponents")}};_([h({type:v,defaultValue:v.Standard})],p.prototype,"design",void 0);_([h({type:I,defaultValue:I.Slash})],p.prototype,"separatorStyle",void 0);_([h({validator:x,noAttribute:!0,defaultValue:0})],p.prototype,"_overflowSize",void 0);_([V({type:HTMLElement,invalidateOnChildChange:!0,default:!0})],p.prototype,"items",void 0);p=m=_([R({tag:"ui5-breadcrumbs",languageAware:!0,renderer:U,template:ne,staticAreaTemplate:se,styles:le,staticAreaStyles:ce,dependencies:[F,Z,ee,te,re,ie,K,oe]}),H("item-click",{detail:{item:{type:HTMLElement},altKey:{type:Boolean},ctrlKey:{type:Boolean},metaKey:{type:Boolean},shiftKey:{type:Boolean}}})],p);p.define();const ue=p,de=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),w=E("ui5-breadcrumbs",["design","separatorStyle"],[],[],["item-click"],()=>A(()=>Promise.resolve().then(()=>de),void 0,import.meta.url));w.displayName="Breadcrumbs";w.defaultProps={design:v.Standard,separatorStyle:I.Slash};try{w.displayName="Breadcrumbs",w.__docgenInfo={description:`Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path. It helps the user to be aware of their location within the application and allows faster navigation.

The last three steps can be accessed as links directly, while the remaining links prior to them are available in a drop-down menu.

You can choose the type of separator to be used from a number of predefined options.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Breadcrumbs" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"Defines the component items.\n\n**Note:** Use the `BreadcrumbsItem` component to define the desired items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fires when a `BreadcrumbsItem` is clicked. **Note:** You can prevent browser location change by calling `event.preventDefault()`.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<BreadcrumbsDomRef, { item: HTMLElement; altKey: boolean; ctrlKey: boolean; metaKey: boolean; shiftKey: boolean; }>) => void"}},design:{defaultValue:{value:"BreadcrumbsDesign.Standard"},description:"Defines the visual indication and behavior of the breadcrumbs. Available options are `Standard` (by default) and `NoCurrentPage`.\n\n**Note:** The `Standard` breadcrumbs show the current page as the last item in the trail. The last item contains only plain text and is not a link.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Standard"'},{value:'"Standard"'},{value:'"NoCurrentPage"'},{value:'"NoCurrentPage"'}]}},separatorStyle:{defaultValue:{value:"BreadcrumbsSeparatorStyle.Slash"},description:"Determines the visual style of the separator between the breadcrumb items.\n\nAvailable options are:\n\n*   `Slash`\n*   `BackSlash`\n*   `DoubleBackSlash`\n*   `DoubleGreaterThan`\n*   `DoubleSlash`\n*   `GreaterThan`",name:"separatorStyle",required:!1,type:{name:"enum",value:[{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'},{value:'"Slash"'},{value:'"BackSlash"'},{value:'"DoubleBackSlash"'},{value:'"DoubleGreaterThan"'},{value:'"DoubleSlash"'},{value:'"GreaterThan"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const S=E("ui5-breadcrumbs-item",["accessibleName","href","target"],[],[],[],()=>A(()=>Promise.resolve().then(()=>ae),void 0,import.meta.url));S.displayName="BreadcrumbsItem";try{S.displayName="BreadcrumbsItem",S.__docgenInfo={description:'The `BreadcrumbsItem` component defines the content of an item in `Breadcrumbs`\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Breadcrumbs" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"BreadcrumbsItem",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the item.",name:"accessibleName",required:!1,type:{name:"string"}},href:{defaultValue:null,description:`Defines the link href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines the link target.\n\nAvailable options are:\n\n*   `_self`\n*   `_top`\n*   `_blank`\n*   `_parent`\n*   `_search`\n\n\n\n**Note: **This property must only be used when the `href` property is set.****",name:"target",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{w as B,S as a,v as b,I as c};
//# sourceMappingURL=index-ab39a4ca.js.map
