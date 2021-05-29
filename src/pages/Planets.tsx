import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'

import Table from 'antd/lib/table'
import Column from 'antd/lib/table/Column'

import { setPlanets, fetchPlanets } from '../store/actions/planets'

import { RootState } from '../store/reducers'

const Planets: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [page, setPage] = useState(1)

  const { planets, count, isLoading } = useSelector((state: RootState) => state.planets)

  useEffect(() => {
    const parsed = queryString.parse(history.location.search)
    if(parsed.page) {
      const page = Number(parsed.page)
      dispatch(fetchPlanets(page))
      setPage(page)
      if(page === 1) {
        history.push('/planets')
      }
    } else {
      dispatch(fetchPlanets())
    }
    return () => {
      dispatch(setPlanets([]))
    }
  }, [dispatch, history])

  const onChange = (page: number) => {
    dispatch(fetchPlanets(page))
    setPage(page)
    page === 1
      ? history.push('/planets')
      : history.push(history.location.pathname + '?page=' + page)
  }

  return (
    <Table
      dataSource={planets}
      loading={isLoading}
      rowKey={record => record.name}
      pagination={{
        defaultCurrent: 1,
        current: page,
        total: Math.ceil(Math.ceil(count / 10) * 10),
        onChange,
        showSizeChanger: false
      }}
    >
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Rotation Period" dataIndex="rotation_period" key="rotation_period" />
      <Column title="Orbital Period" dataIndex="orbital_period" key="orbital_period" />
      <Column title="Diameter" dataIndex="diameter" key="diameter" />
      <Column title="Climate" dataIndex="climate" key="climate" />
      <Column title="Gravity" dataIndex="gravity" key="gravity" />
      <Column title="Terrain" dataIndex="terrain" key="terrain" />
      <Column title="Surface Water" dataIndex="surface_water" key="terrain" />
      <Column title="Population" dataIndex="population" key="terrain" />
    </Table>
  )
}

export default Planets