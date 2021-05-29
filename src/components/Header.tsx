import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'
import BarChartOutlined from '@ant-design/icons/BarChartOutlined'
import GlobalOutlined from '@ant-design/icons/GlobalOutlined'

import Container from './Container'
import Typography from 'antd/lib/typography'

const Header: React.FC = () => {
  const [current, setCurrent] = useState('')

  const history = useHistory()

  history.listen(location => {
    setCurrent(location.pathname)
  })

  useEffect(() => {
    const current = history.location.pathname.split('/')[1]
    if(!current) {
      return setCurrent('home')
    }
    setCurrent(current)
  }, [history.location.pathname])

  return (
    <Layout.Header className="header">
      <Container className="header__container">
        <Typography.Text className="header__title">
          <Link to="/">Star Wars API</Link>
        </Typography.Text>
        <Menu selectedKeys={[current]} mode="horizontal" theme="dark">
          <Menu.Item key="home" icon={<BarChartOutlined />}>
            <Link to="/">Statistics</Link>
          </Menu.Item>
          <Menu.Item key="planets" icon={<GlobalOutlined />}>
          <Link to="/planets">Planets</Link>
          </Menu.Item>
        </Menu>
      </Container>
    </Layout.Header>
  )
}

export default Header