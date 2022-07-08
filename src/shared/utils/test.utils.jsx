import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import membersReducer from '../../store/members/members.slice'
import messagesReducer from '../../store/members/members.slice'

export function renderWithProviders(
  ui,
  {
    preloadedState = {
        messages: {
            messages: []
        },
        members: {
            members: []
        },
    },
    store = configureStore({
      reducer: { messages: messagesReducer, members: membersReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
