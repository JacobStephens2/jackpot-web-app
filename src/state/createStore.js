import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case 'ROLLDICE':
      return Object.assign({}, state, {
        roll: (Math.floor(Math.random() * (6 - 1 + 1)) + 1) + (Math.floor(Math.random() * (6 - 1 + 1)) + 1),
        count: state.count + 1,
    });
    case 'HANDLEROLL3':
      return Object.assign({}, state, {
        spaceThree: state.spaceThree + 1
      })
    default:
      return state;
  }
}

const initialState = { 
  count: 0,
  roll: 1,
  spaceThree: 0
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore