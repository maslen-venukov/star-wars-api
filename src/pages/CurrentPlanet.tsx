import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import Loader from '../components/Loader'

import Typography from 'antd/lib/typography'
import List from 'antd/lib/list'

import { fetchCurrentPage, setCurrentPlanet } from '../store/actions/planets'

import { RootState } from '../store/reducers'
import PageHeader from 'antd/lib/page-header'

interface ICurrentPageParams {
  number: string
}

const CurrentPlanet: React.FC = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const { number }: ICurrentPageParams = useParams()

  const { currenPlanet, isLoading } = useSelector((state: RootState) => state.planets)

  useEffect(() => {
    dispatch(fetchCurrentPage(number))
    return () => {
      dispatch(setCurrentPlanet(null))
    }
  }, [dispatch, number])

  return (
    <>
      {!isLoading ? (
        currenPlanet && <>
          <PageHeader
            onBack={() => history.push('/planets')}
            title={<Typography.Title>{currenPlanet.name}</Typography.Title>}
            className="planet-header"
          />
          <Typography.Paragraph>Rotation period: {currenPlanet.rotation_period}</Typography.Paragraph>
          <Typography.Paragraph>Orbital period: {currenPlanet.orbital_period}</Typography.Paragraph>
          <Typography.Paragraph>Diameter: {currenPlanet.diameter}</Typography.Paragraph>
          <Typography.Paragraph>Climate: {currenPlanet.climate}</Typography.Paragraph>
          <Typography.Paragraph>Gravity: {currenPlanet.gravity}</Typography.Paragraph>
          <Typography.Paragraph>Terrain: {currenPlanet.terrain}</Typography.Paragraph>
          <Typography.Paragraph>Surface water: {currenPlanet.surface_water}</Typography.Paragraph>
          <Typography.Paragraph>Population: {currenPlanet.population}</Typography.Paragraph>
          {currenPlanet.residents.length ? (
            <List
              header={<Typography.Text>Residents</Typography.Text>}
              bordered
              dataSource={currenPlanet.residents}
              renderItem={resident => (
                <List.Item>
                  <a href={resident} target="_blank" rel="noreferrer">{resident}</a>
                </List.Item>
              )}
              className="list"
              style={{ marginBottom: 15 }}
            />
          ) : null}
          {currenPlanet.films.length ? (
            <List
              header={<Typography.Text>Films</Typography.Text>}
              bordered
              dataSource={currenPlanet.films}
              renderItem={film => (
                <List.Item>
                  <a href={film} target="_blank" rel="noreferrer">{film}</a>
                </List.Item>
              )}
              className="list"
            />
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default CurrentPlanet