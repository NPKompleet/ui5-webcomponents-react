'use client';

import '@ui5/webcomponents/dist/Card.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

interface CardAttributes {
  /**
   * Defines the accessible name of the component, which is used as the name of the card region and should be unique per card. **Note:** `accessibleName` should be always set, unless `accessibleNameRef` is set.
   */
  accessibleName?: string;
  /**
   * Defines the IDs of the elements that label the component.
   */
  accessibleNameRef?: string;
}

export interface CardDomRef extends CardAttributes, Ui5DomRef {}

export interface CardPropTypes extends CardAttributes, CommonProps {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the header of the component.
   *
   * **Note:** Use `CardHeader` for the intended design.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode | UI5WCSlotsNode[];
}

/**
 * The `Card` is a component that represents information in the form of a tile with separate header and content areas. The content area of a `Card` can be arbitrary HTML content. The header can be used through slot `header`. For which there is a `Card-header` component to achieve the card look and fill. Note: We recommend the usage of `Card-header` for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Card" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Card = withWebComponent<CardPropTypes, CardDomRef>(
  'ui5-card',
  ['accessibleName', 'accessibleNameRef'],
  [],
  ['header'],
  [],
  () => import('@ui5/webcomponents/dist/Card.js')
);

Card.displayName = 'Card';

export { Card };
