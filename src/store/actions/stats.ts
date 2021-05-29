import { Dispatch } from 'redux'
import axios, { AxiosResponse } from 'axios'
import message from 'antd/lib/message'

import upperCaseFirst from '../../utils/upperCaseFirst'

import { StatActionTypes, IStat, StatAction, IStatsResponse } from '../../types/stats'

export const setStats = (payload: IStat[]): StatAction => ({
  type: StatActionTypes.SET_STATS,
  payload
})

const setStatsLoading = (payload: boolean): StatAction => ({
  type: StatActionTypes.SET_STATS_LOADING,
  payload
})

export const fetchStats = () => (dispatch: Dispatch<StatAction>) => {
  dispatch(setStatsLoading(true))
  axios.get('https://swapi.dev/api/')
    .then(({ data }: AxiosResponse<IStatsResponse>) => {
      const requests = Object.values(data).map((url: string) => axios.get(url))
      const keys = Object.keys(data)
      axios.all(requests)
        .then(axios.spread((...res: AxiosResponse<{ count: number }>[]) => {
          const stats = res.reduce((acc: IStat[], el, index) => {
            const { count } = el.data
            const name = upperCaseFirst(keys[index])
            return [ ...acc, { name, count } ]
          }, [])
          dispatch(setStats(stats))
        }))
    })
    .catch(() => message.error('Error loading stats'))
    .finally(() => dispatch(setStatsLoading(false)))
}