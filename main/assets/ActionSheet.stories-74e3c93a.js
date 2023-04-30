import{j as t}from"./jsx-runtime-5926aa06.js";import{a as de}from"./accept-9744f30a.js";import{d as ue}from"./decline-7cb41e3a.js";import{d as he}from"./delete-86ba691f.js";import{k as O}from"./UI5Element-e8adceda.js";import{h as g}from"./Icons-5b18f7d2.js";import{b as V}from"./i18n-defaults-80781f7e.js";import{r as b}from"./index-ebeaab24.js";import{c as s}from"./Device-208919c6.js";import{u as P,A as me,C as fe,X as be}from"./i18n-defaults-a98c4660.js";import{u as ge,h as ve}from"./withWebComponent-c710bf85.js";import{c as ye}from"./clsx.m-1229b3e0.js";import{r as we}from"./index-9c09ad76.js";import{c as Se}from"./react-jss.esm-022ab528.js";import{a as Ae}from"./addCustomCSSWithScoping-4e67d8dc.js";import{f as Ce}from"./utils-69f7a0e0.js";import{a as r}from"./CustomVariables-fd831c35.js";import{T as Te}from"./ThemingParameters-f4b4144e.js";import{b as qe}from"./CssSizeVariables-bd372cde.js";import{R as Be}from"./index-e725c808.js";import{B as n}from"./index-88383a3b.js";import{a as L}from"./Button-6eea99db.js";import{a as De,P as xe,b as Re}from"./Popover-34a43919.js";const ke={actionSheet:{"&::part(content)":{padding:"0.1875rem 0.375rem"},"& [ui5-button]":{margin:qe.sapWcrButtonTopBottomPadding,display:"block"},"& [ui5-button]:not([data-cancel-btn])::part(button)":{justifyContent:"start"},"&::part(header)":{background:"transparent",boxShadow:r.ActionSheetHeaderBoxShadow}},actionSheetMobile:{"&::part(content)":{padding:"0 !important"}},contentMobile:{backgroundColor:Te.sapGroup_ContentBackground,padding:"0.25rem 0.5rem",boxSizing:"border-box",overflow:"auto",maxHeight:"82vh",borderTopLeftRadius:r.ActionSheetTopBorderRadius,borderTopRightRadius:r.ActionSheetTopBorderRadius,boxShadow:r.ActionSheetBoxShadow,"& > *":{margin:"0.25rem 0"}}},Ne=ke,_e=Se(Ne,{name:"ActionSheet"});s()&&Ae("ui5-responsive-popover",`
  :host([data-actionsheet]) [ui5-button] {
    display: none;
  }
  :host([data-actionsheet]) [ui5-dialog] {
    top: auto !important;
    bottom: 0;
    height: auto;
    border-radius: ${r.ActionSheetMobileHeaderBorderRadius};
    background-color: ${r.ActionSheetMobileHeaderBackground};
    box-shadow: ${r.ActionSheetMobileHeaderBoxShadow};
    box-sizing: border-box;
    min-height: unset;
  }
  :host([data-actionsheet]) [ui5-title] {
    color: ${r.ActionSheetMobileHeaderTextColor} !important;
    text-shadow: none;
    text-align: start !important;
  }
  `);function Ie(i){const{index:l,totalLength:a,...h}=i,v=P("@ui5/webcomponents-react");return t.jsx(n,{accessibleName:`${h.children} ${v.getText(be,l+1,a)}`,...h,design:L.Transparent,"data-action-btn-index":l})}const u=b.forwardRef((i,l)=>{var k;const{a11yConfig:a,allowTargetOverlap:h,children:v,className:F,footer:z,header:H,headerText:U,hideArrow:W,horizontalAlign:X,initialFocus:G,modal:J,placementType:K,portalContainer:Y,showCancelButton:A=!0,slot:Q,style:Z,verticalAlign:ee,onAfterClose:te,onAfterOpen:C,onBeforeClose:oe,onBeforeOpen:ne,...ae}=i,T=P("@ui5/webcomponents-react"),y=_e(),[re,q]=ge(l),m=b.useRef(null),[w,B]=b.useReducer((e,o)=>parseInt(o.target.dataset.actionBtnIndex),0),D=Ce(v),x=D.length,S=s()&&A?x+1:x;if(!ve())return null;const ie=()=>{q.current.close()},se=(e,o,pe)=>t.jsx(Ie,{index:o,totalLength:pe.length,tabIndex:w===o?0:-1,...e.props,onClick:f=>{var c,p;q.current.close(),typeof((c=e.props)==null?void 0:c.onClick)=="function"&&((p=e.props)==null||p.onClick(f))},onFocus:f=>{var c,p;typeof((c=e.props)==null?void 0:c.onFocus)=="function"&&((p=e.props)==null||p.onFocus(f)),B(f)}},o),le=e=>{s()&&m.current.querySelector(`[data-action-btn-index="${w}"]`).focus(),typeof C=="function"&&C(e)},ce=e=>{const o=parseInt(e.target.dataset.actionBtnIndex);e.key==="ArrowDown"&&o+1<S&&(e.preventDefault(),m.current.querySelector(`[data-action-btn-index="${o+1}"]`).focus()),e.key==="ArrowUp"&&o>0&&(e.preventDefault(),m.current.querySelector(`[data-action-btn-index="${o-1}"]`).focus())},R=s();return we.createPortal(t.jsx(Be,{style:Z,slot:Q,allowTargetOverlap:h,headerText:R?U:void 0,horizontalAlign:X,initialFocus:G,modal:J,hideArrow:W,placementType:K,verticalAlign:ee,footer:z,header:R?H:void 0,onAfterClose:te,onBeforeClose:oe,onBeforeOpen:ne,accessibleName:T.getText(me),...ae,onAfterOpen:le,ref:re,className:ye(y.actionSheet,s()&&y.actionSheetMobile,F),"data-actionsheet":!0,children:t.jsxs("div",{className:s()?y.contentMobile:void 0,"data-component-name":"ActionSheetMobileContent",role:((k=a==null?void 0:a.actionSheetMobileContent)==null?void 0:k.role)??"application",onKeyDown:ce,ref:m,children:[D.map(se),s()&&A&&t.jsx(n,{design:L.Negative,onClick:ie,tabIndex:w===S-1?0:-1,"data-action-btn-index":S-1,"data-cancel-btn":!0,onFocus:B,children:T.getText(fe)})]})}),Y??document.body)});u.displayName="ActionSheet";try{u.displayName="ActionSheet",u.__docgenInfo={description:`The \`ActionSheet\` holds a list of buttons from which the user can select to complete an action.

The children of the action sheet should be \`Button\` components. Elements in the \`ActionSheet\` are left-aligned. Actions should be arranged in order of importance, from top to bottom.

### Guidelines
- Always display text or text and icons for the actions. Do not use icons only.
- Always provide a Cancel button on mobile phones.
- Avoid scrolling on action sheets.`,displayName:"ActionSheet",props:{headerText:{defaultValue:null,description:"Defines the header text. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:"headerText",required:!1,type:{name:"string"}},header:{defaultValue:null,description:`Defines the header HTML Element. Will be shown in the header area on phone devices. This prop will be ignored in tablets and desktop browsers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},children:{defaultValue:null,description:"Defines the actions of the `ActionSheet`.\n\n__Note:__ Although this slot accepts all HTML Elements, it is strongly recommended that you only use `Buttons` in order to preserve the intended design.",name:"children",required:!1,type:{name:"ReactElement<ButtonPropTypes, string | JSXElementConstructor<any>> | ReactElement<ButtonPropTypes, string | JSXElementConstructor<...>>[]"}},showCancelButton:{defaultValue:null,description:"Displays a cancel button below the action buttons on mobile devices. No cancel button will be shown on desktop and tablet devices.",name:"showCancelButton",required:!1,type:{name:"boolean"}},a11yConfig:{defaultValue:null,description:"Defines internally used a11y properties.",name:"a11yConfig",required:!1,type:{name:"{ actionSheetMobileContent?: { role?: string; }; }"}},portalContainer:{defaultValue:null,description:"Defines where modals are rendered into via `React.createPortal`.\n\nYou can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).\n\nDefaults to: `document.body`",name:"portalContainer",required:!1,type:{name:"Element"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:`Defines the footer HTML Element.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"footer",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onAfterClose:{defaultValue:null,description:"Fired after the component is closed. **This event does not bubble.**",name:"onAfterClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},onAfterOpen:{defaultValue:null,description:"Fired after the component is opened. **This event does not bubble.**",name:"onAfterOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},onBeforeClose:{defaultValue:null,description:"Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**",name:"onBeforeClose",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, { escPressed: boolean; }>) => void"}},onBeforeOpen:{defaultValue:null,description:"Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**",name:"onBeforeOpen",required:!1,type:{name:"(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Allows setting a custom role. Available options are:\n\n*   `Dialog`\n*   `None`\n*   `AlertDialog`",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Dialog"'},{value:'"AlertDialog"'},{value:'"Dialog"'},{value:'"AlertDialog"'}]}},initialFocus:{defaultValue:null,description:"Defines the ID of the HTML Element, which will get the initial focus.",name:"initialFocus",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Indicates if the element is open",name:"open",required:!1,type:{name:"boolean"}},preventFocusRestore:{defaultValue:null,description:"Defines if the focus should be returned to the previously focused element, when the popup closes.",name:"preventFocusRestore",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:null,description:"Determines the horizontal alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Left`\n*   `Right`\n*   `Stretch`",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Left"'},{value:'"Right"'},{value:'"Stretch"'},{value:'"Left"'},{value:'"Right"'}]}},opener:{defaultValue:null,description:"Defines the ID of the element that the popover is shown at",name:"opener",required:!1,type:{name:"string"}},placementType:{defaultValue:null,description:"Determines on which side the component is placed at.\n\nAvailable options are:\n\n*   `Left`\n*   `Right`\n*   `Top`\n*   `Bottom`",name:"placementType",required:!1,type:{name:"enum",value:[{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Left"'},{value:'"Right"'},{value:'"Top"'},{value:'"Bottom"'}]}},verticalAlign:{defaultValue:null,description:"Determines the vertical alignment of the component.\n\nAvailable options are:\n\n*   `Center`\n*   `Top`\n*   `Bottom`\n*   `Stretch`",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"Center"'},{value:'"Stretch"'},{value:'"Center"'},{value:'"Top"'},{value:'"Bottom"'},{value:'"Stretch"'},{value:'"Top"'},{value:'"Bottom"'}]}},allowTargetOverlap:{defaultValue:null,description:"Determines if there is no enough space, the component can be placed over the target.",name:"allowTargetOverlap",required:!1,type:{name:"boolean"}},hideArrow:{defaultValue:null,description:"Determines whether the component arrow is hidden.",name:"hideArrow",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:null,description:"Defines whether the block layer will be shown if modal property is set to true.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},modal:{defaultValue:null,description:"Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.",name:"modal",required:!1,type:{name:"boolean"}}}}}catch{}const Oe="email",$="M480 96q14 0 23 9t9 23v320q0 13-9 22.5t-23 9.5H32q-13 0-22.5-9.5T0 448V128q0-14 9.5-23T32 96h448zM64 128l192 160 192-160H64zm416 16L256 320 32 144v288l133-136 19 18L48 448h416L329 314l17-18 134 136V144z",Ve=!1,Pe="SAP-icons-v4",Le="@ui5/webcomponents-icons";g(Oe,{pathData:$,ltr:Ve,collection:Pe,packageName:Le});const $e="email",M="M435 64q33 0 55 22.5t22 54.5v230q0 33-22 55t-55 22H77q-33 0-55-22T0 371V141q0-32 22-54.5T77 64h358zM79 116q-10 0-12 2l176 110q7 4 15 4t13-4l177-110q-2-2-6-2H79zm356 281q26 0 26-26V172L297 274q-19 12-41 12-21 0-41-12L51 172v199q0 26 26 26h358z",Me=!1,Ee="SAP-icons-v5",je="@ui5/webcomponents-icons";g($e,{pathData:M,ltr:Me,collection:Ee,packageName:je});O();const Fe="email",ze="forward",E="M471.5 170q9 10 9 23t-9 22l-128 128q-10 10-23 10t-23-10q-9-9-9-22.5t9-22.5l74-73h-84q-40 0-75 15t-61 41-41 61-15 75v32q0 13-9 22.5t-23 9.5q-13 0-22.5-9.5T31.5 449v-32q0-53 20.5-99.5t55-81.5 81-55 99.5-20h84l-74-74q-10-10-10-23t10-22q9-10 22-10t23 10z",He=!1,Ue=V,We="SAP-icons-v4",Xe="@ui5/webcomponents-icons";g(ze,{pathData:E,ltr:He,accData:Ue,collection:We,packageName:Xe});const Ge="forward",j="M473 160q7 7 7 18t-7 18L332 337q-8 8-18 8t-18-8-8-18 8-18l97-97h-79q-48 0-90 18t-73.5 49.5T101 345t-18 90v51q0 11-7 18.5T58 512t-18.5-7.5T32 486v-51q0-58 22.5-109.5T115 236t89.5-60.5T314 153h79l-85-85q-7-7-7-18t7-18 19-7q11 0 18 7z",Je=!1,Ke=V,Ye="SAP-icons-v5",Qe="@ui5/webcomponents-icons";g(Ge,{pathData:j,ltr:Je,accData:Ke,collection:Ye,packageName:Qe});O();const Ze="forward",et={title:"Modals & Popovers / ActionSheet",component:u,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}},a11yConfig:{table:{category:"A11y props"}}},args:{horizontalAlign:De.Center,placementType:xe.Right,verticalAlign:Re.Center,open:!1},parameters:{chromatic:{delay:1e3}}},d={render(i){const[l,a]=b.useState(i.open);return t.jsxs("div",{children:[t.jsx(n,{onClick:()=>{a(!0)},id:"actionSheetOpener",children:"Open ActionSheet"}),t.jsxs(u,{...i,opener:"actionSheetOpener",open:l,onAfterClose:()=>{a(!1)},children:[t.jsx(n,{icon:de,children:"Accept"}),t.jsx(n,{icon:ue,children:"Reject"}),t.jsx(n,{icon:Fe,children:"Email"}),t.jsx(n,{icon:Ze,children:"Forward"}),t.jsx(n,{icon:he,children:"Delete"}),t.jsx(n,{children:"Other"})]})]})}};var N,_,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render(args) {
    const [actionSheetOpen, setActionSheetOpen] = useState(isChromatic || args.open);
    return <div>
        <Button onClick={() => {
        setActionSheetOpen(true);
      }} id={'actionSheetOpener'}>
          Open ActionSheet
        </Button>
        <ActionSheet {...args} opener="actionSheetOpener" open={actionSheetOpen} onAfterClose={() => {
        setActionSheetOpen(false);
      }}>
          <Button icon={acceptIcon}>Accept</Button>
          <Button icon={declineIcon}>Reject</Button>
          <Button icon={emailIcon}>Email</Button>
          <Button icon={forwardIcon}>Forward</Button>
          <Button icon={deleteIcon}>Delete</Button>
          <Button>Other</Button>
        </ActionSheet>
      </div>;
  }
}`,...(I=(_=d.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const tt=["Default"],Bt=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:tt,default:et},Symbol.toStringTag,{value:"Module"}));export{Bt as C,d as D};
//# sourceMappingURL=ActionSheet.stories-74e3c93a.js.map
