import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'

import List from 'antd/lib/list'
import Typography from 'antd/lib/typography'

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

  const onItemClick = (url: string) => {
    const number = url.split('/').filter(el => el).pop()
    history.push(`/planets/${number}`)
  }

  return (
    <List
      header={<Typography.Text>List of Planets</Typography.Text>}
      loading={isLoading}
      rowKey={record => record.name}
      bordered
      dataSource={planets}
      renderItem={planet => (
        <List.Item onClick={() => onItemClick(planet.url)}>
          {planet.name}
        </List.Item>
      )}
      pagination={{
        defaultCurrent: 1,
        current: page,
        total: Math.ceil(Math.ceil(count / 10) * 10),
        onChange,
        showSizeChanger: false
      }}
      className="list"
    />
  )
}

export default Planets