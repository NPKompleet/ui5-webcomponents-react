import{M as h,C as g,f,a as y}from"./chunk-PCJTTTQV-281f254d.js";import{_ as w}from"./iframe-86586323.js";import{C as n,a as v}from"./Carousel-8b909f2a.js";import{w as b}from"./withWebComponent-c710bf85.js";import{d as C}from"./DomRefTable.module-b97f74c3.js";import{D as P}from"./DocsHeader-b296026b.js";import{F as x}from"./Footer-a07a24e8.js";import{j as e}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{D as S}from"./DomRefTable-58457330.js";import{u as l}from"./index-bda0bad7.js";import"./react-18-e173c6df.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./Icon-16710c43.js";import"./Icons-5b18f7d2.js";import"./utils-69f7a0e0.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./ScrollEnablement-4353003c.js";import"./Device-208919c6.js";import"./animate-1a16ba20.js";import"./ResizeHandler-9d370fcd.js";import"./AnimationMode-9cec4b20.js";import"./i18n-defaults-254d6b69.js";import"./class-map-eee65cb7.js";import"./style-map-eb41b602.js";import"./slim-arrow-left-0e139baa.js";import"./slim-arrow-right-78d167a6.js";import"./Button-6eea99db.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Label-e22f23ee.js";import"./WrappingType-b81e595a.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-022ab528.js";import"./index-65ab45a3.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-2495a9e4.js";import"./ThemingParameters-f4b4144e.js";import"./Import-943360b0.js";import"./TableOfContent-d45a1467.js";import"./index-8d384dc2.js";import"./Link-a00cf029.js";import"./index-6c0d0844.js";import"./index-2f80ac1b.js";import"./Popover-34a43919.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-bfd93775.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-72af48b2.js";import"./MediaRange-25b98f31.js";const o=b("ui5-carousel",["arrowsPlacement","itemsPerPageL","itemsPerPageM","itemsPerPageS","pageIndicatorStyle"],["cyclic","hideNavigationArrows","hidePageIndicator"],[],["navigate"],()=>w(()=>import("./Carousel-8b909f2a.js").then(t=>t.c),["./Carousel-8b909f2a.js","./UI5Element-e8adceda.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-c710bf85.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./Icon-16710c43.js","./Icons-5b18f7d2.js","./slot-76e48863.js","./Integer-f7f172c9.js","./ScrollEnablement-4353003c.js","./Device-208919c6.js","./animate-1a16ba20.js","./ResizeHandler-9d370fcd.js","./AnimationMode-9cec4b20.js","./i18n-defaults-254d6b69.js","./class-map-eee65cb7.js","./style-map-eb41b602.js","./slim-arrow-left-0e139baa.js","./slim-arrow-right-78d167a6.js","./Button-6eea99db.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js","./Label-e22f23ee.js","./WrappingType-b81e595a.js"],import.meta.url));o.displayName="Carousel";o.defaultProps={arrowsPlacement:n.Content,itemsPerPageL:1,itemsPerPageM:1,itemsPerPageS:1,pageIndicatorStyle:v.Default};try{o.displayName="Carousel",o.__docgenInfo={description:`The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element.
There are several ways to perform navigation:

*   on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
*   on mobile - the user can use swipe gestures.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Carousel" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Carousel",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onNavigate:{defaultValue:null,description:"Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.",name:"onNavigate",required:!1,type:{name:"(event: Ui5CustomEvent<CarouselDomRef, { selectedIndex: number; }>) => void"}},arrowsPlacement:{defaultValue:{value:"CarouselArrowsPlacement.Content"},description:`Defines the position of arrows.

Available options are:

*   \`Content\`
*   \`Navigation\`


When set to "Content", the arrows are placed on the sides of the current page.
When set to "Navigation", the arrows are placed on the sides of the page indicator.`,name:"arrowsPlacement",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Content"'},{value:'"Navigation"'},{value:'"Content"'}]}},cyclic:{defaultValue:null,description:"Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.",name:"cyclic",required:!1,type:{name:"boolean"}},hideNavigationArrows:{defaultValue:null,description:`Defines the visibility of the navigation arrows. If set to true the navigation arrows will be hidden.

**Note:** The navigation arrows are never displayed on touch devices. In this case, the user can swipe to navigate through the items.`,name:"hideNavigationArrows",required:!1,type:{name:"boolean"}},hidePageIndicator:{defaultValue:null,description:"Defines the visibility of the page indicator. If set to true the page indicator will be hidden.",name:"hidePageIndicator",required:!1,type:{name:"boolean"}},itemsPerPageL:{defaultValue:{value:"1"},description:"Defines the number of items per page on large size (more than 1024px). One item per page shown by default.",name:"itemsPerPageL",required:!1,type:{name:"number"}},itemsPerPageM:{defaultValue:{value:"1"},description:"Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.",name:"itemsPerPageM",required:!1,type:{name:"number"}},itemsPerPageS:{defaultValue:{value:"1"},description:"Defines the number of items per page on small size (up to 640px). One item per page shown by default.",name:"itemsPerPageS",required:!1,type:{name:"number"}},pageIndicatorStyle:{defaultValue:{value:"CarouselPageIndicatorStyle.Default"},description:"Defines the style of the page indicator. Available options are:\n\n*   `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)\n*   `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)",name:"pageIndicatorStyle",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"Numeric"'},{value:'"Numeric"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const D=`## Usage

### When to use:

- The items you want to display are very different from each other.
- You want to display the items one after the other.

### When not to use:

- The items you want to display need to be visible at the same time.
- The items you want to display are uniform and very similar.

## Keyboard Handling

### Basic Navigation

When the \`Carousel\` is focused the user can navigate between the items with the following keyboard shortcuts:

- \\[UP/DOWN\\] - Navigates to previous and next item
- \\[LEFT/RIGHT\\] - Navigates to previous and next item

## Fast Navigation

This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \`Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up\`. In order to use this functionality, you need to import the following module: \`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Carousel\` exposes the following CSS Shadow Parts:

- content - Used to style the content of the component
`,N=[{name:"navigateTo",visibility:"public",since:"1.0.0-rc.15",parameters:[{name:"itemIndex",type:"Integer",optional:!1,description:"The index of the target page"}],description:"Changes the currently displayed page."}],m=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample1.jpg",alt:"img-sample 1"}),p=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample2.jpg",alt:"img-sample 2"}),u=e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sample3.jpg",alt:"img-sample 3"});function _(t={}){const{wrapper:r}=Object.assign({},l(),t.components);return r?e.jsx(r,{...t,children:e.jsx(i,{})}):i();function i(){const s=Object.assign({h2:"h2"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Layouts & Floorplans / Carousel",component:o,argTypes:{children:{control:{disable:!0}}},args:{arrowsPlacement:n.Content}}),`
`,e.jsx(P,{since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsx(g,{children:e.jsx(f,{name:"Default",children:c=>e.jsxs(o,{...c,children:[m,p,u]})})}),`
`,e.jsx(s.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(C,{story:"Default"}),`
`,e.jsx(y,{children:D}),`
`,e.jsx(S,{rows:N}),`
`,e.jsx(x,{})]})}}const d=t=>e.jsxs(o,{...t,children:[m,p,u]});d.storyName="Default";d.parameters={storySource:{source:`args => {
  return <Carousel {...args}>
          {Img1}
          {Img2}
          {Img3}
        </Carousel>;
}`}};const a={title:"Layouts & Floorplans / Carousel",component:o,args:{arrowsPlacement:n.Content},argTypes:{children:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:_};const ze=["defaultStory"];export{ze as __namedExportsOrder,a as default,d as defaultStory};
//# sourceMappingURL=Carousel.stories-55a6fe42.js.map
