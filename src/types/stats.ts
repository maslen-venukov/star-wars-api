import { IAction } from './'

export interface IStatsResponse {
  people: string
  planets: string
  films: string
  species: string
  vehicles: string
  starships: string
}

export interface IStat {
  name: string
  count: number
}

export interface IStatsState {
  stats: IStat[]
  isLoading: boolean
}

export enum StatActionTypes {
  SET_STATS = 'SET_STATS',
  SET_STATS_LOADING = 'SET_STATS_LOADING'
}

interface ISetStatsAction extends IAction {
  type: StatActionTypes.SET_STATS
  payload: IStat[]
}

interface ISetStatsLoadingAction extends IAction {
  type: StatActionTypes.SET_STATS_LOADING
  payload: boolean
}

export type StatAction = ISetStatsAction | ISetStatsLoadingAction