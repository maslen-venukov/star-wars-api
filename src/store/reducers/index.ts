import { combineReducers } from 'redux'

import planets from './planets'
import stats from './stats'

const rootReducer = combineReducers({
  planets,
  stats
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer