'use client';

import '@ui5/webcomponents/dist/TimePicker.js';
import { ValueState } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

interface TimePickerAttributes {
  /**
   * Determines the format, displayed in the input field. Example: HH:mm:ss -> 11:42:35 hh:mm:ss a -> 2:23:15 PM mm:ss -> 12:04 (only minutes and seconds)
   */
  formatPattern?: string;
  /**
   * Defines a short hint, intended to aid the user with data entry when the component has no value.
   *
   * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
   */
  placeholder?: string;
  /**
   * Determines whether the `TimePicker` is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Determines whether the `TimePicker` is displayed as readonly.
   */
  readonly?: boolean;
  /**
   * Defines a formatted time value.
   */
  value?: string;
  /**
   * Defines the value state of the `TimePicker`.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState | keyof typeof ValueState;
}

export interface TimePickerDomRef extends TimePickerAttributes, Ui5DomRef {
  /**
   * Currently selected time represented as JavaScript Date instance
   */
  readonly dateValue: Date;
  /**
   * Closes the picker
   */
  closePicker: () => void;
  /**
   * Formats a Java Script date object into a string representing a locale date and time according to the `formatPattern` property of the TimePicker instance
   * @param {Date} date - A Java Script date object to be formatted as string
   * @returns {string}
   */
  formatValue: (date: Date) => string;
  /**
   * Checks if the picker is open
   * @returns {boolean}
   */
  isOpen: () => boolean;
  /**
   * Checks if a value is valid against the current `formatPattern` value.
   *
   * **Note:** an empty string is considered as valid value.
   * @param {string} value - The value to be tested against the current date format
   * @returns {boolean}
   */
  isValid: (value: string) => boolean;
  /**
   * Opens the picker.
   * @returns {Promise<void>} Resolves when the picker is open
   */
  openPicker: () => Promise<void>;
}

export interface TimePickerPropTypes extends TimePickerAttributes, Omit<CommonProps, 'onChange' | 'onInput'> {
  /**
   * Defines the value state message that will be displayed as pop up under the `TimePicker`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `TimePicker` is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.
   *
   *__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.
   */
  onChange?: (event: Ui5CustomEvent<TimePickerDomRef, { value: string; valid: boolean }>) => void;
  /**
   * Fired when the value of the `TimePicker` is changed at each key stroke.
   */
  onInput?: (event: Ui5CustomEvent<TimePickerDomRef, { value: string; valid: boolean }>) => void;
}

/**
 * The `TimePicker` component provides an input field with assigned sliders which are opened on user action. The `TimePicker` allows users to select a localized time using touch, mouse, or keyboard input. It consists of two parts: the time input field and the sliders.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TimePicker" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TimePicker = withWebComponent<TimePickerPropTypes, TimePickerDomRef>(
  'ui5-time-picker',
  ['formatPattern', 'placeholder', 'value', 'valueState'],
  ['disabled', 'readonly'],
  ['valueStateMessage'],
  ['change', 'input'],
  () => import('@ui5/webcomponents/dist/TimePicker.js')
);

TimePicker.displayName = 'TimePicker';

TimePicker.defaultProps = {
  valueState: ValueState.None
};

export { TimePicker };
