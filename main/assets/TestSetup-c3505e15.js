import{j as e}from"./jsx-runtime-5926aa06.js";import{M as s}from"./chunk-PCJTTTQV-281f254d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./DomRefTable.module-b97f74c3.js";import"./index-ebeaab24.js";import"./Import-943360b0.js";import{T as a}from"./TableOfContent-d45a1467.js";import{F as m}from"./Footer-a07a24e8.js";import{u as i}from"./index-bda0bad7.js";import{M as p}from"./index-65ab45a3.js";import"./iframe-86586323.js";import"../sb-preview/runtime.mjs";import"./react-18-e173c6df.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-6c0d0844.js";import"./Label-e22f23ee.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-c710bf85.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-eee65cb7.js";import"./index-8d384dc2.js";import"./Link-a00cf029.js";import"./Icon-16710c43.js";import"./Icons-5b18f7d2.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./index-2f80ac1b.js";import"./Popover-34a43919.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-bfd93775.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-72af48b2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-eb41b602.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./Button-6eea99db.js";function fe(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?e.jsx(r,Object.assign({},o,{children:e.jsx(t,{})})):t();function t(){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
`,e.jsx(a,{headingSelector:"h2"}),`
`,e.jsx(n.h1,{id:"cypress-test-setup",children:"Cypress Test Setup"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React is using ",e.jsx(n.a,{href:"https://www.cypress.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cypress"})," as preferred testing framework. There you have the options of testing components only or create End-to-End tests for your application."]}),`
`,e.jsx(n.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.p,{children:["When launching Cypress the first time you're guided through the setup, which then will create a ",e.jsx(n.a,{href:"https://docs.cypress.io/guides/references/configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"configuration file"})," for you. You can use any configuration you like, but since we're heavily relying on web-components, we recommend traversing the shadow DOM per default:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`includeShadowDom: true;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.cypress.io/guides/component-testing/react/quickstart",target:"_blank",rel:"nofollow noopener noreferrer",children:"Here"})," you can find the Cypress Quickstart tutorial for React."]}),`
`,e.jsx(n.h2,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React components have to be wrapped inside a ",e.jsx(n.code,{children:"ThemeProvider"}),", depending on your test setup (especially for component-testing) it might prove beneficial creating a custom ",e.jsx(n.code,{children:"mount"})," command, that includes the ",e.jsx(n.code,{children:"ThemeProvider"}),"."]}),`
`,e.jsx(n.p,{children:"JavaScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})}),`
`,e.jsx(n.p,{children:"TypeScript declaration:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: typeof mount;
    }
  }
}
`})}),`
`,e.jsxs(n.p,{children:["You can define the command for example in the ",e.jsx(n.code,{children:"commands.ts/js"})," file:"]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Example file"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { mount } from 'cypress/react18';
import { ThemeProvider } from '@ui5/webcomponents-react';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: typeof mount;
    }
  }
}

/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})})]}),`
`,e.jsx(n.h2,{id:"cypress-commands-package-for-ui5-webcomponents",children:"Cypress Commands package for ui5-webcomponents"}),`
`,e.jsx(p,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,e.jsx(n.p,{children:"Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:"}),`
`,e.jsx(n.p,{children:"Install:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,e.jsxs(n.p,{children:["After the installation you can import it in your entry file (e.g. ",e.jsx(n.code,{children:"component.ts"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,e.jsx(n.p,{children:"Now you can use all commands and queries that are available in this package."}),`
`,e.jsx(m,{})]})}}export{fe as default};
//# sourceMappingURL=TestSetup-c3505e15.js.map
