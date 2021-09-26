import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case `INCREMENT`:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
      case 'ROLLDICE':
        return Object.assign({}, state, {
          roll: (Math.floor(Math.random() * (6 - 1 + 1)) + 1),
          count: state.count + 1,
      });
    default:
      return state;
  }
}

const initialState = { 
  count: 0,
  roll: 1
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore