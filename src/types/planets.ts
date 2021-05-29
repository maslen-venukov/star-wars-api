import { IAction } from './'

export interface IPlanet {
  name: string
  rotation_period: number | 'unknown'
  orbital_period: number | 'unknown'
  diameter: number | 'unknown'
  climate: string
  gravity: string
  terrain: string
  surface_water: number | 'unknown'
  population: number | 'unknown'
  residents: string[]
  films: string[]
  url: string
}

export type CurrentPlanet = IPlanet | null

export interface IPlanetsState {
  planets: IPlanet[]
  currenPlanet: CurrentPlanet
  count: number
  isLoading: boolean
}

export enum PlanetActionTypes {
  SET_PLANETS = 'SET_PLANETS',
  SET_CURRENT_PLANET = 'SET_CURRENT_PLANET',
  SET_PLANETS_COUNT = 'SET_PLANETS_COUNT',
  SET_PLANETS_LOADING = 'SET_PLANETS_LOADING'
}

interface ISetPlanetsAction extends IAction {
  type: PlanetActionTypes.SET_PLANETS
  payload: IPlanet[]
}

interface ISetCurrentPlanetAction extends IAction {
  type: PlanetActionTypes.SET_CURRENT_PLANET
  payload: CurrentPlanet
}

interface ISetPlanetsCountAction extends IAction {
  type: PlanetActionTypes.SET_PLANETS_COUNT
  payload: number
}

interface ISetPlanetsLoadingAction extends IAction {
  type: PlanetActionTypes.SET_PLANETS_LOADING
  payload: boolean
}

export type PlanetAction =
  ISetPlanetsAction
  | ISetCurrentPlanetAction
  | ISetPlanetsCountAction
  | ISetPlanetsLoadingAction