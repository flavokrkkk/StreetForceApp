import { ComponentType, SyntheticEvent } from 'react'

/**
 * Domain
 */

type BooleanString = 'true' | 'false'
type Value = string
interface KeyValueObject {
  [key: string]: any | void;
}

export interface AvailableState<AdditionalData = KeyValueObject> {
  value: Value;
  label?: string;
  settable?: boolean;
  additionalData?: AdditionalData;
}
export interface State<AdditionalData = KeyValueObject> {
  key: string;
  value: Value;
  label?: string;
  settable?: boolean;
  notSettable: boolean;
  focused: boolean;
  hovered: boolean;
  selected: boolean;
  inputClassName: string;
  additionalData?: AdditionalData;
}

/**
 * Actions
 */

type Action<Type, Payload> = { type: Type, payload: Payload }
export type SetValueAction = Action<'react-choices/SET_VALUE', Value>
export type HoverValueAction = Action<'react-choices/HOVER_VALUE', Value>
export type PreviousValueAction = Action<
  'react-choices/PREVIOUS_VALUE',
  boolean
>
export type NextValueAction = Action<'react-choices/NEXT_VALUE', boolean>
export type ChoicesActions =
  | SetValueAction
  | HoverValueAction
  | PreviousValueAction
  | NextValueAction

export type SetValueFn = (value: Value) => SetValueAction
export type HoverValueFn = (value: Value) => HoverValueAction
export type PreviousValueFn = (shouldSelect: boolean) => PreviousValueAction
export type NextValueFn = (shouldSelect: boolean) => NextValueAction

/**
 * Reducer
 */

export interface ChoicesReducerState {
  name?: string;
  label?: string;
  blockName?: string;
  states: ReadonlyArray<AvailableState>;
  defaultValue?: Value;
  focusedValue?: Value;
  hoveredValue?: Value;
  selectedValue?: Value;
}
export type ChoicesReducer = (
  state: ChoicesReducerState,
  action: ChoicesActions
) => ChoicesReducerState

/**
 * Component
 */

export type GetContainerPropsFn = () => {
  className: string,
  role: 'radiogroup',
  'aria-labelledby': string,
  'aria-activedescendant': string,
  'aria-disabled': BooleanString,
  'aria-readonly': BooleanString
}

export type GetContainerLabelPropsFn = () => {
  id: string,
  className: string
}

export type GetItemPropsFn = (
  state: AvailableState
) => {
  key: string,
  id: string,
  className: string,
  role: 'radio',
  'aria-checked': BooleanString
}

export type GetItemInputPropsFn = (
  state: AvailableState
) => {
  tabIndex: 0 | -1,
  className: string,
  disabled: boolean,
  readOnly: boolean
}

export type ResetValueEventHandler<T = any> = (event: SyntheticEvent<T>) => void
export type SetValueEventHandler<T = any> = (
  value: Value,
  event: SyntheticEvent<T>
) => void
export type HoverValueEventHandler<T = any> = (
  value: Value,
  event: SyntheticEvent<T>
) => void
export type PreviousValueEventHandler<T = any> = (
  event: SyntheticEvent<T>
) => void
export type NextValueEventHandler<T = any> = (event: SyntheticEvent<T>) => void
export type CreateClassNameFn = (className: string) => string
export interface TemplateComponentProps {
  name: string;
  label: string;
  blockName: string;
  states: ReadonlyArray<State>;
  defaultValue?: Value;
  focusedValue?: Value;
  hoveredValue?: Value;
  selectedValue?: Value;
  disabled: boolean;
  readOnly: boolean;
  resetValue: ResetValueEventHandler;
  setValue: SetValueEventHandler;
  hoverValue: HoverValueEventHandler;
  previousValue: PreviousValueEventHandler;
  nextValue: NextValueFn;
  createClassName: CreateClassNameFn;
  getContainerProps: GetContainerPropsFn;
  getContainerLabelProps: GetContainerLabelPropsFn;
  getItemProps: GetItemPropsFn;
  getItemInputProps: GetItemInputPropsFn;
}
export type TemplateComponent = ComponentType<TemplateComponentProps>

export type GetKeyCodeHandlerFn = (keyCode: number) => Function
export type OnChangeFn = (value: string) => any
export interface ChoicesComponentProps {
  name: string;
  label: string;
  blockName?: string;
  availableStates: ReadonlyArray<AvailableState>;
  defaultValue?: Value;
  focusedValue?: Value;
  hoveredValue?: Value;
  selectedValue?: Value;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: OnChangeFn;
  getKeyCodeHandler?: GetKeyCodeHandlerFn;
  render?: TemplateComponent;
  children?: TemplateComponent;
}
export type ChoicesComponent = ComponentType<ChoicesComponentProps>

/**
 * WithLogicHoc
 */

export type WithLogicHoc = (Template?: TemplateComponent) => ChoicesComponent

/**
 * Exports
 */

declare var actions: {
  setValue: SetValueFn,
  hoverValue: HoverValueFn,
  previousValue: PreviousValueFn,
  nextValue: NextValueFn
}
declare var reducer: ChoicesReducer
declare var Template: TemplateComponent
declare var withLogic: WithLogicHoc
declare var Choices: ChoicesComponent
declare var REDUCER_NAME: string
declare var COMPONENT_NAME: string
declare var COMPONENT_KEY: string

export {
  actions,
  reducer,
  Template,
  withLogic,
  Choices,
  REDUCER_NAME,
  COMPONENT_NAME,
  COMPONENT_KEY
}
export default Choices
