# `react-choices`

> Component to build simple, flexible, and accessible choice components

## The problem

You want a radio component that's simple and gives you complete control over rendering and state.

## The solution

`Choices` is a [`conventional-component` compatible](https://github.com/sebinsua/conventional-component) React component, that follows the patterns of [`react-toggled`](https://github.com/kentcdodds/react-toggled#this-solution) to expose an API that renders nothing and simply encapsulates the logic of a radio component.

## Installation

```
npm install --save react-choices
```

## Usage

```jsx
import React from 'react'
import { render } from 'react-dom'
import Choices from 'react-choices'

render(
  <Choices
    name="speed"
    label="Speed"
    availableStates={[
      { value: 'S' },
      { value: 'M' },
      { value: 'F' }
    ]}
    defaultValue="M"
  >
    {({
      name,
      label,
      states,
      selectedValue,
      setValue,
      hoverValue
    }) => (
      <div
        className="choices"
        role="radiogroup"
        aria-labelledby={`choices__label-${name}`}
        aria-activedescendant={`choice-${selectedValue}`}
      >
        <div id={`choices__label-${name}`} className="choices__label">
          {label}
        </div>
        <div className="choices__items">
          {states.map((state, idx) => (
            <button
              key={`choice-${idx}`}
              id={`choice-${state.value}`}
              tabIndex={state.selected ? 0 : -1}
              className={cx('choice', state.inputClassName, {
                'choice--focused': state.focused,
                'choice--hovered': state.hovered,
                'choice--selected': state.selected
              })}
              onMouseOver={hoverValue.bind(null, state.value)}
              onClick={setValue.bind(null, state.value)}
              role="radio"
              aria-checked={state.selected ? 'true' : 'false'}
            >
              {state.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </Choices>,
  document.getElementById('root'),
)
```
