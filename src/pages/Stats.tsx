import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/Loader'

import Card from 'antd/lib/card'
import Statistic from 'antd/lib/statistic'

import { setStats, fetchStats } from '../store/actions/stats'

import { RootState } from '../store/reducers'

const Stats: React.FC = () => {
  const dispatch = useDispatch()

  const { stats, isLoading } = useSelector((state: RootState) => state.stats)

  useEffect(() => {
    dispatch(fetchStats())
    return () => {
      dispatch(setStats([]))
    }
  }, [dispatch])

  return (
    <>
      {!isLoading ? (
        stats.map(stat => (
          <Card key={stat.name}>
            <Statistic title={stat.name} value={stat.count} className="stats" />
          </Card>
        ))) : (
          <Loader />
        )
      }
    </>
  )
}

export default Stats