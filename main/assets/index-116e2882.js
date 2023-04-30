import{_ as n}from"./iframe-86586323.js";import"./CheckBox-3275c87a.js";import{w as t}from"./withWebComponent-c710bf85.js";import{V as a}from"./ValueState-ab6838cc.js";const e=t("ui5-checkbox",["accessibleName","accessibleNameRef","name","text","valueState","wrappingType"],["checked","disabled","indeterminate","readonly","required"],[],["change"],()=>n(()=>import("./CheckBox-3275c87a.js"),["./CheckBox-3275c87a.js","./Device-208919c6.js","./UI5Element-e8adceda.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-c710bf85.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-16710c43.js","./Icons-5b18f7d2.js","./ValueState-2c5e5904.js","./AriaLabelHelper-43a261ec.js","./accept-9744f30a.js","./Label-e22f23ee.js","./WrappingType-b81e595a.js","./class-map-eee65cb7.js","./i18n-defaults-254d6b69.js"],import.meta.url));e.displayName="CheckBox";e.defaultProps={valueState:a.None};try{e.displayName="CheckBox",e.__docgenInfo={description:`Allows the user to set a binary value, such as true/false or yes/no for an item.

The \`CheckBox\` component consists of a box and a label that describes its purpose. If it's checked, an indicator is displayed inside the box. To check/uncheck the \`CheckBox\`, the user has to click or tap the square box or its label.

The \`CheckBox\` component only has 2 states - checked and unchecked. Clicking or tapping toggles the \`CheckBox\` between checked and unchecked state.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/CheckBox" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"CheckBox",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<CheckBoxDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component",name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:`Defines if the component is checked.

**Note:** The property can be changed with user interaction, either by cliking/tapping on the component, or by pressing the Enter or Space key.`,name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:`Defines whether the component is displayed as partially checked.

**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user interaction and the resulting visual state depends on the values of the \`indeterminate\` and \`checked\` properties:

*   If the component is checked and indeterminate, it will be displayed as partially checked
*   If the component is checked and it is not indeterminate, it will be displayed as checked
*   If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute`,name:"indeterminate",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\n**Note:**\n\n*   `Warning`\n*   `Error`\n*   `None`(default)\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},wrappingType:{defaultValue:null,description:`Defines whether the component text wraps when there is not enough space.

Available options are:

*   \`None\` - The text will be truncated with an ellipsis.
*   \`Normal\` - The text will wrap. The words will not be broken based on hyphenation.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as C};
//# sourceMappingURL=index-116e2882.js.map
