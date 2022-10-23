import React                     from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './pages/landing'
import Pricing from './pages/pricing'

const generateClassName = createGenerateClassName({
  productionPrefix: 'appMarketing'
})

export default ({ history }) => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/pricing" component={Pricing} exact />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </>
  )
}