import { IAction } from './'

export interface IPlanet {
  name: string
  rotation_period: number
  orbital_period: number
  diameter: number
  climate: string
  gravity: string
  terrain: string
  surface_water: number | 'unknown'
  population: number | 'unknown'
}

export interface IPlanetsState {
  planets: IPlanet[]
  count: number
  isLoading: boolean
}

export enum PlanetActionTypes {
  SET_PLANETS = 'SET_PLANETS',
  SET_PLANETS_COUNT = 'SET_PLANETS_COUNT',
  SET_PLANETS_LOADING = 'SET_PLANETS_LOADING'
}

interface ISetPlanetsAction extends IAction {
  type: PlanetActionTypes.SET_PLANETS
  payload: IPlanet[]
}

interface ISetPlanetsCountAction extends IAction {
  type: PlanetActionTypes.SET_PLANETS_COUNT
  payload: number
}

interface ISetPlanetsLoadingAction extends IAction {
  type: PlanetActionTypes.SET_PLANETS_LOADING
  payload: boolean
}

export type PlanetAction = ISetPlanetsAction | ISetPlanetsCountAction | ISetPlanetsLoadingAction