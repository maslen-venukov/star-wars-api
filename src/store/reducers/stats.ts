import { IStatsState, StatAction, StatActionTypes } from '../../types/stats'

const initialState: IStatsState = {
  stats: [],
  isLoading: false
}

const stats = (state = initialState, action: StatAction): IStatsState => {
  switch(action.type) {
    case StatActionTypes.SET_STATS:
      return {
        ...state,
        stats: action.payload
      }

    case StatActionTypes.SET_STATS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default stats