import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from 'antd/lib/layout'

import Stats from './pages/Stats'
import Planets from './pages/Planets'

import Header from './components/Header'
import Container from './components/Container'

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <Layout.Content className="content">
        <Container>
          <Switch>
            <Route exact path="/" component={Stats} />
            <Route path="/planets" component={Planets} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </Layout.Content>
    </Layout>
  )
}

export default App