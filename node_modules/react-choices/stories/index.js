import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import cx from 'classnames-es'
import Choices from '..'

import './styles/basic.css'
import './styles/slider-like.css'

const choices = storiesOf('Choices', module)

choices.add('with default template', () => (
  <div className="choices-container">
    <input type="text" name="thing_1" defaultValue="unrelated" />
    <input type="text" name="thing_2" defaultValue="fields" />
    <hr />
    <Choices
      name="basic_speed"
      label="Speed"
      availableStates={[
        { value: '<S', settable: false },
        { value: 'S' },
        { value: 'S<M', settable: false },
        { value: 'M' },
        { value: 'M<F', settable: false },
        { value: 'F' },
        { value: '>F', settable: false }
      ]}
      defaultValue="M"
    />
  </div>
))

choices.add('with disabled state', () => (
  <div className="choices-container">
    <input type="text" name="thing_1" defaultValue="unrelated" />
    <input type="text" name="thing_2" defaultValue="fields" />
    <hr />
    <Choices
      name="basic_speed"
      label="Speed"
      availableStates={[
        { value: '<S', settable: false },
        { value: 'S' },
        { value: 'S<M', settable: false },
        { value: 'M' },
        { value: 'M<F', settable: false },
        { value: 'F' },
        { value: '>F', settable: false }
      ]}
      defaultValue="M"
      disabled
    />
  </div>
))

choices.add('with readonly state', () => (
  <div className="choices-container">
    <input type="text" name="thing_1" defaultValue="unrelated" />
    <input type="text" name="thing_2" defaultValue="fields" />
    <hr />
    <Choices
      name="basic_speed"
      label="Speed"
      availableStates={[
        { value: '<S', settable: false },
        { value: 'S' },
        { value: 'S<M', settable: false },
        { value: 'M' },
        { value: 'M<F', settable: false },
        { value: 'F' },
        { value: '>F', settable: false }
      ]}
      defaultValue="M"
      readOnly
    />
  </div>
))

choices.add('with slider-like template', () => {
  function ChoiceItem({
    state,
    onMouseOver,
    onClick,
    getItemProps,
    getItemInputProps
  }) {
    return (
      <div
        id={`SpeedChoices__item-${state.value}`}
        {...getItemProps(state)}
        className={cx('SpeedChoices__item', {
          'SpeedChoices__item--not-settable': state.notSettable,
          'SpeedChoices__item--focused': state.focused,
          'SpeedChoices__item--hovered': state.hovered,
          'SpeedChoices__item--selected': state.selected
        })}
        aria-labelledby={`SpeedChoices__item__label-${state.value}`}
        onMouseOver={onMouseOver}
        onClick={onClick}
      >
        <div className="SpeedChoices__item__input-container">
          <button
            {...getItemInputProps(state)}
            className={cx('SpeedChoices__item__input', state.inputClassName)}
          >
            <span
              id={`SpeedChoices__item__label-${state.value}`}
              className="SpeedChoices__item__label"
            >
              {state.label}
            </span>
          </button>
        </div>
      </div>
    )
  }

  function HorizontalBar() {
    return <div className="SpeedChoices__horizontal-bar" />
  }

  return (
    <div className="default-theme choices-container">
      <input type="text" name="thing_1" defaultValue="unrelated" />
      <input type="text" name="thing_2" defaultValue="fields" />
      <hr />
      <Choices
        name="slider_like_speed"
        blockName="SpeedChoices"
        label="Speed"
        availableStates={[
          { value: '<S', label: '', settable: false },
          { value: 'S' },
          { value: 'S<M', label: '', settable: false },
          { value: 'M' },
          { value: 'M<F', label: '', settable: false },
          { value: 'F' },
          { value: '>F', label: '', settable: false }
        ]}
        defaultValue="M"
      >
        {({
          label,
          states,
          setValue,
          hoverValue,
          getContainerProps,
          getContainerLabelProps,
          getItemProps,
          getItemInputProps
        }) => (
          <div className="SpeedChoices">
            <div {...getContainerProps()} className="SpeedChoices__container">
              <div
                {...getContainerLabelProps()}
                className="SpeedChoices__label"
              >
                {label}
              </div>
              <div className="SpeedChoices__items">
                {states.map(state => (
                  <ChoiceItem
                    key={state.key}
                    state={state}
                    getItemProps={getItemProps}
                    getItemInputProps={getItemInputProps}
                    onMouseOver={hoverValue.bind(null, state.value)}
                    onClick={setValue.bind(null, state.value)}
                  />
                ))}
              </div>
            </div>
            <div className="SpeedChoices__background">
              <HorizontalBar />
            </div>
          </div>
        )}
      </Choices>
    </div>
  )
})
