import { IPlanetsState, PlanetAction, PlanetActionTypes } from '../../types/planets'

const initialState: IPlanetsState = {
  planets: [],
  count: 0,
  isLoading: false
}

const planets = (state = initialState, action: PlanetAction): IPlanetsState => {
  switch(action.type) {
    case PlanetActionTypes.SET_PLANETS:
      return {
        ...state,
        planets: action.payload
      }

    case PlanetActionTypes.SET_PLANETS_COUNT:
      return {
        ...state,
        count: action.payload
      }

    case PlanetActionTypes.SET_PLANETS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default planets