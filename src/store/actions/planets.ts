import { Dispatch } from 'redux'
import axios from 'axios'
import message from 'antd/lib/message'

import { PlanetActionTypes, IPlanet, CurrentPlanet, PlanetAction } from '../../types/planets'

export const setPlanets = (payload: IPlanet[]): PlanetAction => ({
  type: PlanetActionTypes.SET_PLANETS,
  payload
})

export const setCurrentPlanet = (payload: CurrentPlanet): PlanetAction => ({
  type: PlanetActionTypes.SET_CURRENT_PLANET,
  payload
})

const setPlanetsCount = (payload: number): PlanetAction => ({
  type: PlanetActionTypes.SET_PLANETS_COUNT,
  payload
})

const setPlanetsLoading = (payload: boolean): PlanetAction => ({
  type: PlanetActionTypes.SET_PLANETS_LOADING,
  payload
})

export const fetchPlanets = (page: number = 1) => (dispatch: Dispatch<PlanetAction>) => {
  dispatch(setPlanetsLoading(true))
  axios.get(`/api/planets/?page=${page}`)
    .then(({ data }) => {
      const { count, results } = data
      dispatch(setPlanetsCount(count))
      dispatch(setPlanets(results))
    })
    .catch(() => message.error('Error loading planets'))
    .finally(() => dispatch(setPlanetsLoading(false)))
}

export const fetchCurrentPage = (number: string) => (dispatch: Dispatch<PlanetAction>) => {
  dispatch(setPlanetsLoading(true))
  axios.get(`/api/planets/${number}`)
    .then(({ data }) => dispatch(setCurrentPlanet(data)))
    .catch(() => message.error('Error loading planet'))
    .finally(() => dispatch(setPlanetsLoading(false)))
}