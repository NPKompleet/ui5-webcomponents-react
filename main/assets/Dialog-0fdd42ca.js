import{c as C,f as N}from"./Device-208919c6.js";import{e as u,l as d,s as b,a as B,b as I,p as g,c as P}from"./withWebComponent-c710bf85.js";import{s as x}from"./slot-76e48863.js";import{b as q,P as v,c,s as F}from"./PopupsCommon.css-bfd93775.js";import{h as W,o as y,p as z,q as H,s as M,v as $,w as D,x as R,y as S}from"./Icons-5b18f7d2.js";import{V as _}from"./ValueState-2c5e5904.js";import{I as A}from"./Icon-16710c43.js";import{k as U,a as k}from"./UI5Element-e8adceda.js";import"./information-2c502181.js";import{s as L}from"./style-map-eb41b602.js";import{o as E}from"./class-map-eee65cb7.js";import{s as X}from"./BrowserScrollbar.css-72af48b2.js";import"./utils-69f7a0e0.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-ebeaab24.js";import"./jsx-runtime-5926aa06.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./i18n-defaults-80781f7e.js";const j="resize-corner",T="M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z",Y=!1,V="SAP-icons-v4",K="@ui5/webcomponents-icons";W(j,{pathData:T,ltr:Y,collection:V,packageName:K});const Z="resize-corner",O="M386.5 305q10-8 19-8 11 0 19 8 8 10 8 19t-8 19l-161 161q-10 8-19 8t-19-8q-8-8-8-18t8-20zm38-134q8 8 8 19 0 10-8 18l-296 296q-8 8-18 8-11 0-19-8-8-7-8-19 0-11 8-19l295-295q8-8 19-8 12 0 19 8z",G=!1,J="SAP-icons-v5",Q="@ui5/webcomponents-icons";W(Z,{pathData:O,ltr:G,collection:J,packageName:Q});U();const ee=(i,e,t)=>u`<section style="${L(i.styles.root)}" class="${E(i.classes.root)}" role="${d(i._role)}" aria-modal="${d(i._ariaModal)}" aria-label="${d(i._ariaLabel)}" aria-labelledby="${d(i._ariaLabelledBy)}" @keydown=${i._onkeydown} @focusout=${i._onfocusout} @mouseup=${i._onmouseup} @mousedown=${i._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${i.forwardToLast}></span>${i._displayHeader?te(i,e,t):void 0}<div style="${L(i.styles.content)}" class="${E(i.classes.content)}"  @scroll="${i._scroll}" part="content"><slot></slot></div>${i.footer.length?ae():void 0}${i._showResizeHandle?re(i,e,t):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${i.forwardToFirst}></span></section> `,te=(i,e,t)=>u`<header class="ui5-popup-header-root" id="ui5-popup-header" tabindex="${d(i._headerTabIndex)}" @keydown="${i._onDragOrResizeKeyDown}" @mousedown="${i._onDragMouseDown}" part="header" state="${d(i.state)}">${i.hasValueState?ie(i,e,t):void 0}${i.header.length?oe():se(i)}</header>`,ie=(i,e,t)=>t?u`<${b("ui5-icon",e,t)} class="ui5-dialog-value-state-icon" name="${d(i._dialogStateIcon)}"></${b("ui5-icon",e,t)}>`:u`<ui5-icon class="ui5-dialog-value-state-icon" name="${d(i._dialogStateIcon)}"></ui5-icon>`,oe=(i,e,t)=>u`<slot name="header"></slot>`,se=(i,e,t)=>u`<h1 id="ui5-popup-header-text" class="ui5-popup-header-text">${d(i.headerText)}</h1>`,ae=(i,e,t)=>u`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`,re=(i,e,t)=>t?u`<${b("ui5-icon",e,t)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${i._onResizeMouseDown}"></${b("ui5-icon",e,t)}>`:u`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${i._onResizeMouseDown}"></ui5-icon>`;k("@ui5/webcomponents-theming","sap_fiori_3",async()=>B);k("@ui5/webcomponents","sap_fiori_3",async()=>I);const ne={packageName:"@ui5/webcomponents",fileName:"themes/Dialog.css.ts",content:':host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3);border-radius:var(--sapElement_BorderCornerRadius)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%;border-radius:0}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot=header]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}:host([state=Error]) .ui5-popup-header-root{box-shadow:var(--_ui5_dialog_header_error_state_box_shadow)}:host([state=Information]) .ui5-popup-header-root{box-shadow:var(--_ui5_dialog_header_information_state_box_shadow)}:host([state=Success]) .ui5-popup-header-root{box-shadow:var(--_ui5_dialog_header_success_state_box_shadow)}:host([state=Warning]) .ui5-popup-header-root{box-shadow:var(--_ui5_dialog_header_warning_state_box_shadow)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem}:host([state=Error]) .ui5-dialog-value-state-icon{color:var(--_ui5_dialog_header_error_state_icon_color)}:host([state=Information]) .ui5-dialog-value-state-icon{color:var(--_ui5_dialog_header_information_state_icon_color)}:host([state=Success]) .ui5-dialog-value-state-icon{color:var(--_ui5_dialog_header_success_state_icon_color)}:host([state=Warning]) .ui5-dialog-value-state-icon{color:var(--_ui5_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}.ui5-popup-header-root:focus-visible:after{content:"";position:absolute;left:var(--_ui5_dialog_header_focus_left_offset);bottom:var(--_ui5_dialog_header_focus_bottom_offset);right:var(--_ui5_dialog_header_focus_right_offset);top:var(--_ui5_dialog_header_focus_top_offset);border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5_dialog_header_border_radius) var(--_ui5_dialog_header_border_radius) 0 0;pointer-events:none}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:var(--_ui5_dialog_resize_handle_bottom);inset-inline-end:var(--_ui5_dialog_resize_handle_right);cursor:var(--_ui5_dialog_resize_cursor);color:var(--_ui5_dialog_resize_handle_color)}:host ::slotted([slot=footer]){height:var(--_ui5_dialog_footer_height)}:host ::slotted([slot=footer][ui5-bar][design=Footer]){border-top:none}'};var l=globalThis&&globalThis.__decorate||function(i,e,t,o){var a=arguments.length,s=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,o);else for(var n=i.length-1;n>=0;n--)(r=i[n])&&(s=(a<3?r(s):a>3?r(e,t,s):r(e,t))||s);return a>3&&s&&Object.defineProperty(e,t,s),s},w;const p=16,he={[_.Error]:"error",[_.Warning]:"alert",[_.Success]:"sys-enter-2",[_.Information]:"information"};let h=w=class extends q{constructor(){super(),this._revertSize=()=>{Object.assign(this.style,{top:"",left:"",width:"",height:""})},this._screenResizeHandler=this._center.bind(this),this._dragMouseMoveHandler=this._onDragMouseMove.bind(this),this._dragMouseUpHandler=this._onDragMouseUp.bind(this),this._resizeMouseMoveHandler=this._onResizeMouseMove.bind(this),this._resizeMouseUpHandler=this._onResizeMouseUp.bind(this),this._dragStartHandler=this._handleDragStart.bind(this)}static _isHeader(e){return e.classList.contains("ui5-popup-header-root")||e.getAttribute("slot")==="header"}async show(e=!1){await super._open(e)}get isModal(){return!0}get shouldHideBackdrop(){return!1}get _ariaLabelledBy(){let e;return this.headerText!==""&&!this._ariaLabel&&(e="ui5-popup-header-text"),e}get _displayProp(){return"flex"}get _displayHeader(){return this.header.length||this.headerText||this.draggable||this.resizable}get _movable(){return!this.stretch&&this.onDesktop&&(this.draggable||this.resizable)}get _headerTabIndex(){return this._movable?"0":void 0}get _showResizeHandle(){return this.resizable&&this.onDesktop}get _minHeight(){let e=Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);const t=this._root.querySelector(".ui5-popup-header-root");t&&(e+=t.offsetHeight);const o=this._root.querySelector(".ui5-popup-footer-root");return o&&(e+=o.offsetHeight),e}get hasValueState(){return this.state!==_.None}get _dialogStateIcon(){return he[this.state]}get _role(){if(this.accessibleRole!==v.None)return this.state===_.Error||this.state===_.Warning?v.AlertDialog.toLowerCase():this.accessibleRole.toLowerCase()}_show(){super._show(),this._center()}onBeforeRendering(){super.onBeforeRendering(),this._isRTL=this.effectiveDir==="rtl",this.onPhone=C(),this.onDesktop=N()}onAfterRendering(){!this.isOpen()&&this.open?this.show():this.isOpen()&&!this.open&&this.close()}onEnterDOM(){super.onEnterDOM(),this._attachScreenResizeHandler(),this.addEventListener("dragstart",this._dragStartHandler)}onExitDOM(){super.onExitDOM(),this._detachScreenResizeHandler(),this.removeEventListener("dragstart",this._dragStartHandler)}_resize(){super._resize(),this._screenResizeHandlerAttached&&this._center()}_attachScreenResizeHandler(){this._screenResizeHandlerAttached||(window.addEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!0)}_detachScreenResizeHandler(){this._screenResizeHandlerAttached&&(window.removeEventListener("resize",this._screenResizeHandler),this._screenResizeHandlerAttached=!1)}_center(){const e=window.innerHeight-this.offsetHeight,t=window.innerWidth-this.offsetWidth;Object.assign(this.style,{top:`${Math.round(e/2)}px`,left:`${Math.round(t/2)}px`})}_onDragMouseDown(e){if(!this._movable||!this.draggable||!w._isHeader(e.target))return;e.preventDefault();const{top:t,left:o}=this.getBoundingClientRect(),{width:a,height:s}=window.getComputedStyle(this);Object.assign(this.style,{top:`${t}px`,left:`${o}px`,width:`${Math.round(Number.parseFloat(a)*100)/100}px`,height:`${Math.round(Number.parseFloat(s)*100)/100}px`}),this._x=e.clientX,this._y=e.clientY,this._attachMouseDragHandlers()}_onDragMouseMove(e){e.preventDefault();const{clientX:t,clientY:o}=e,a=this._x-t,s=this._y-o,{left:r,top:n}=this.getBoundingClientRect();Object.assign(this.style,{left:`${Math.floor(r-a)}px`,top:`${Math.floor(n-s)}px`}),this._x=t,this._y=o}_onDragMouseUp(){delete this._x,delete this._y,this._detachMouseDragHandlers()}_onDragOrResizeKeyDown(e){if(!(!this._movable||!w._isHeader(e.target))){if(this.draggable&&[y,z,H,M].some(t=>t(e))){this._dragWithEvent(e);return}this.resizable&&[$,D,R,S].some(t=>t(e))&&this._resizeWithEvent(e)}}_dragWithEvent(e){const{top:t,left:o,width:a,height:s}=this.getBoundingClientRect();let r=0,n="top";switch(!0){case y(e):r=t-p,n="top";break;case z(e):r=t+p,n="top";break;case H(e):r=o-p,n="left";break;case M(e):r=o+p,n="left";break}r=c(r,0,n==="left"?window.innerWidth-a:window.innerHeight-s),this.style[n]=`${r}px`}_resizeWithEvent(e){this._detachScreenResizeHandler(),this.addEventListener("ui5-before-close",this._revertSize,{once:!0});const{top:t,left:o}=this.getBoundingClientRect(),a=window.getComputedStyle(this),s=Number.parseFloat(a.minWidth),r=window.innerWidth-o,n=window.innerHeight-t;let m=Number.parseFloat(a.width),f=Number.parseFloat(a.height);switch(!0){case $(e):f-=p;break;case D(e):f+=p;break;case R(e):m-=p;break;case S(e):m+=p;break}m=c(m,s,r),f=c(f,this._minHeight,n),Object.assign(this.style,{width:`${m}px`,height:`${f}px`})}_attachMouseDragHandlers(){this._detachScreenResizeHandler(),window.addEventListener("mousemove",this._dragMouseMoveHandler),window.addEventListener("mouseup",this._dragMouseUpHandler)}_detachMouseDragHandlers(){window.removeEventListener("mousemove",this._dragMouseMoveHandler),window.removeEventListener("mouseup",this._dragMouseUpHandler)}_onResizeMouseDown(e){if(!this._movable||!this.resizable)return;e.preventDefault();const{top:t,left:o}=this.getBoundingClientRect(),{width:a,height:s,minWidth:r}=window.getComputedStyle(this);this._initialX=e.clientX,this._initialY=e.clientY,this._initialWidth=Number.parseFloat(a),this._initialHeight=Number.parseFloat(s),this._initialTop=t,this._initialLeft=o,this._minWidth=Number.parseFloat(r),this._cachedMinHeight=this._minHeight,Object.assign(this.style,{top:`${t}px`,left:`${o}px`}),this._attachMouseResizeHandlers()}_onResizeMouseMove(e){const{clientX:t,clientY:o}=e;let a,s;this._isRTL?(a=c(this._initialWidth-(t-this._initialX),this._minWidth,this._initialLeft+this._initialWidth),s=c(this._initialLeft+(t-this._initialX),0,this._initialX+this._initialWidth-this._minWidth)):a=c(this._initialWidth+(t-this._initialX),this._minWidth,window.innerWidth-this._initialLeft);const r=c(this._initialHeight+(o-this._initialY),this._cachedMinHeight,window.innerHeight-this._initialTop);Object.assign(this.style,{height:`${r}px`,width:`${a}px`,left:s?`${s}px`:void 0})}_onResizeMouseUp(){delete this._initialX,delete this._initialY,delete this._initialWidth,delete this._initialHeight,delete this._initialTop,delete this._initialLeft,delete this._minWidth,delete this._cachedMinHeight,this._detachMouseResizeHandlers()}_handleDragStart(e){this.draggable&&e.preventDefault()}_attachMouseResizeHandlers(){this._detachScreenResizeHandler(),window.addEventListener("mousemove",this._resizeMouseMoveHandler),window.addEventListener("mouseup",this._resizeMouseUpHandler),this.addEventListener("ui5-before-close",this._revertSize,{once:!0})}_detachMouseResizeHandlers(){window.removeEventListener("mousemove",this._resizeMouseMoveHandler),window.removeEventListener("mouseup",this._resizeMouseUpHandler)}};l([g()],h.prototype,"headerText",void 0);l([g({type:Boolean})],h.prototype,"stretch",void 0);l([g({type:Boolean})],h.prototype,"draggable",void 0);l([g({type:Boolean})],h.prototype,"resizable",void 0);l([g({type:_,defaultValue:_.None})],h.prototype,"state",void 0);l([g({type:Boolean})],h.prototype,"onPhone",void 0);l([g({type:Boolean})],h.prototype,"onDesktop",void 0);l([x()],h.prototype,"header",void 0);l([x()],h.prototype,"footer",void 0);h=w=l([P({tag:"ui5-dialog",template:ee,styles:[X,F,ne],dependencies:[A]})],h);h.define();const Oe=h;export{Oe as default};
//# sourceMappingURL=Dialog-0fdd42ca.js.map
