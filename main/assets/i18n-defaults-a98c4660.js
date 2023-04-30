import{d as S,I as o}from"./UI5Element-e8adceda.js";import{r as n}from"./index-ebeaab24.js";import{u as _}from"./I18nContext-cdb50611.js";import{u as R}from"./useIsomorphicLayoutEffect-38a48652.js";const l=new o("defaultBundle"),f=e=>{const t=_();if(!t)throw new Error("'useI18nBundle()' may be used only in the context of a '<ThemeProvider>' component.");const E=n.useRef(t);return R(()=>{const{i18nBundles:s,setI18nBundle:T}=E.current;let a=!0;return s.hasOwnProperty(e)||S(e).then(A=>{a&&T(e,A)},()=>{}),()=>{a=!1}},[e]),t.i18nBundles[e]??l},O={key:"ABORT",defaultText:"Abort"},C={key:"CANCEL",defaultText:"Cancel"},y={key:"CLOSE",defaultText:"Close"},L={key:"DELETE",defaultText:"Delete"},N={key:"IGNORE",defaultText:"Ignore"},x={key:"NO",defaultText:"No"},r={key:"OK",defaultText:"OK"},k={key:"RETRY",defaultText:"Retry"},D={key:"YES",defaultText:"Yes"},i={key:"CLEAR_SORTING",defaultText:"Clear Sorting"},P={key:"SORT_ASCENDING",defaultText:"Sort Ascending"},V={key:"SORT_DESCENDING",defaultText:"Sort Descending"},M={key:"GROUP",defaultText:"Group"},U={key:"GROUPED",defaultText:"Grouped"},F={key:"UNGROUP",defaultText:"Ungroup"},B={key:"DRAG_TO_RESIZE",defaultText:"Drag to resize"},G={key:"PLEASE_WAIT",defaultText:"Please wait"},H={key:"CONFIRMATION",defaultText:"Confirmation"},W={key:"ERROR",defaultText:"Error"},p={key:"INFORMATION",defaultText:"Information"},w={key:"SUCCESS",defaultText:"Success"},h={key:"WARNING",defaultText:"Warning"},Y={key:"SHOW_MORE",defaultText:"Show more"},v={key:"SHOW_FILTER_BAR",defaultText:"Show Filter Bar"},m={key:"HIDE_FILTER_BAR",defaultText:"Hide Filter Bar"},g={key:"CLEAR",defaultText:"Clear"},b={key:"RESTORE",defaultText:"Restore"},K={key:"FILTERS",defaultText:"Filters"},X={key:"ADAPT_FILTERS",defaultText:"Adapt Filters"},z={key:"GO",defaultText:"Go"},Z={key:"SAVE",defaultText:"Save"},j={key:"BASIC",defaultText:"Basic"},q={key:"SEARCH_FOR_FILTERS",defaultText:"Search for filters"},J={key:"FIELDS_BY_ATTRIBUTE",defaultText:"Show Fields by Attribute"},Q={key:"VISIBLE",defaultText:"Visible"},$={key:"ACTIVE",defaultText:"Active"},ee={key:"VISIBLE_AND_ACTIVE",defaultText:"Visible and Active"},te={key:"MANDATORY",defaultText:"Mandatory"},ae={key:"LIST_VIEW",defaultText:"List View"},Ee={key:"GROUP_VIEW",defaultText:"Group View"},se={key:"SHOW_VALUES",defaultText:"Show Values"},Te={key:"HIDE_VALUES",defaultText:"Hide Values"},Ae={key:"FIELD",defaultText:"Field"},Se={key:"COLLAPSE_HEADER",defaultText:"Collapse Header"},oe={key:"EXPAND_HEADER",defaultText:"Expand Header"},ne={key:"PIN_HEADER",defaultText:"Pin Header"},_e={key:"UNPIN_HEADER",defaultText:"Unpin Header"},Re={key:"SEPARATOR",defaultText:"Separator"},le={key:"AVAILABLE_ACTIONS",defaultText:"Available Actions"},Ie={key:"X_OF_Y",defaultText:"Item {0} of {1}"},de={key:"MY_VIEWS",defaultText:"My Views"},ce={key:"SAVE_VIEW",defaultText:"Save View"},ue={key:"MANAGE_VIEWS",defaultText:"Manage Views"},fe={key:"VIEW",defaultText:"View"},Oe={key:"VARIANT_MANAGEMENT_ERROR_DUPLICATE",defaultText:"The view name already exists. Please enter a different name."},Ce={key:"SPECIFY_VIEW_NAME",defaultText:"Please specify a view name"},ye={key:"SET_AS_DEFAULT",defaultText:"Set as Default"},Le={key:"PUBLIC",defaultText:"Public"},Ne={key:"APPLY_AUTOMATICALLY",defaultText:"Apply Automatically"},xe={key:"SHARING",defaultText:"Sharing"},re={key:"DEFAULT",defaultText:"Default"},ke={key:"CREATED_BY",defaultText:"Created By"},De={key:"MANAGE",defaultText:"Manage"},ie={key:"PRIVATE",defaultText:"Private"},Pe={key:"MARK_AS_STANDARD",defaultText:"Use as standard view"},Ve={key:"MARK_AS_FAVORITE",defaultText:"Mark as favorite view"},Me={key:"DELETE_VIEW",defaultText:"Delete view"},Ue={key:"SELECT_VIEW",defaultText:"Select view"},Fe={key:"SEARCH_VARIANT",defaultText:"Search variant"},Be={key:"ALL",defaultText:"All"},Ge={key:"SEARCH",defaultText:"Search"},He={key:"SAVE_AS",defaultText:"Save As"},We={key:"RESET",defaultText:"Reset"},pe={key:"SELECTED_AS_FAVORITE",defaultText:"Selected as Favorite"},we={key:"UNSELECTED_AS_FAVORITE",defaultText:"Unselected as Favorite"},he={key:"SELECT",defaultText:"Select"},Ye={key:"SELECTED",defaultText:"Selected"},ve={key:"PRESS_ARROW_KEYS_TO_MOVE",defaultText:"Press ARROW keys to move"},me={key:"LIST_NO_DATA",defaultText:"No data"},ge={key:"EXPAND_NODE",defaultText:"Expand Node"},be={key:"COLLAPSE_NODE",defaultText:"Collapse Node"},Ke={key:"EXPAND_PRESS_SPACE",defaultText:"To expand the row, press the spacebar"},Xe={key:"COLLAPSE_PRESS_SPACE",defaultText:"To collapse the row, press the spacebar"},ze={key:"SELECT_PRESS_SPACE",defaultText:"To select the row, press the spacebar"},Ze={key:"UNSELECT_PRESS_SPACE",defaultText:"To unselect the row, press the spacebar"},je={key:"INVALID_TABLE",defaultText:"Invalid Table"},qe={key:"FILTERED",defaultText:"Filtered"},Je={key:"ARIA_DESC_CARD_HEADER",defaultText:"Card Header"},Qe={key:"SEMANTIC_COLOR_CRITICAL",defaultText:"Warning"},$e={key:"SEMANTIC_COLOR_GOOD",defaultText:"Good"},et={key:"SEMANTIC_COLOR_NEUTRAL",defaultText:"Neutral"},tt={key:"SEMANTIC_COLOR_ERROR",defaultText:"Critical"},at={key:"NUMERICCONTENT_DEVIATION_UP",defaultText:"Ascending"},Et={key:"NUMERICCONTENT_DEVIATION_DOWN",defaultText:"Descending"};export{He as $,le as A,Ne as B,C,B as D,Ke as E,qe as F,M as G,pe as H,je as I,we as J,fe as K,Z as L,Ve as M,at as N,xe as O,G as P,re as Q,ke as R,et as S,ue as T,F as U,Oe as V,Ge as W,Ie as X,ce as Y,ye as Z,de as _,$e as a,De as a0,Fe as a1,Ue as a2,j as a3,r as a4,q as a5,K as a6,We as a7,Be as a8,$ as a9,H as aA,me as aB,Ye as aC,he as aD,ve as aE,Q as aa,ee as ab,te as ac,ae as ad,Ee as ae,se as af,Te as ag,Ae as ah,J as ai,g as aj,b as ak,v as al,m as am,z as an,X as ao,O as ap,y as aq,L as ar,N as as,x as at,k as au,D as av,h as aw,w as ax,p as ay,W as az,Qe as b,tt as c,Et as d,Je as e,i as f,P as g,V as h,Xe as i,ze as j,Ze as k,ge as l,be as m,U as n,oe as o,Se as p,_e as q,ne as r,Y as s,Re as t,f as u,Ce as v,Le as w,ie as x,Pe as y,Me as z};
//# sourceMappingURL=i18n-defaults-a98c4660.js.map
