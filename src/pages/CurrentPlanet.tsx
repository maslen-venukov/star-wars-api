import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import List from '../components/List'
import Loader from '../components/Loader'

import Typography from 'antd/lib/typography'

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

  const onBack = useCallback(() => {
    history.push('/planets')
  }, [history])

  useEffect(() => {
    dispatch(fetchCurrentPage(number, onBack))
    return () => {
      dispatch(setCurrentPlanet(null))
    }
  }, [dispatch, number, onBack])

  return (
    <>
      {!isLoading ? (
        currenPlanet && <>
          <PageHeader
            onBack={onBack}
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
          <List array={currenPlanet.residents} title="Residents" />
          <List array={currenPlanet.films} title="Films" />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default CurrentPlanet